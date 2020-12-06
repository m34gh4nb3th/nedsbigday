import firestore from './firestoreConfig';

export const addIdToRecord = (record) => {
    const id = record.id;
    let data = record.data();
    data = {id: id, ...data};
    return data;
}

export const getGuestByName = (name) => {
    const db = firestore.firestore();
    return db.collection("guests").where('full_name', '==', name.toLowerCase()).get().
    then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
            const record = addIdToRecord(doc)
            if (!record.new_list) throw Error();
            return record
        });
    })
    .catch(err => err);
};

export const getGuestById = (id) => {
    const db = firestore.firestore();
    return db.collection("guests").doc(id).get().then(doc => addIdToRecord(doc));
}

export const updateGuest = (id, guest) => {
    const db = firestore.firestore();
    return db.collection("guests").doc(id).set(guest)
    .then( () => true)
    .catch(err => err);
}

export const createGuest = (guest) => {
    const db = firestore.firestore();
    return db.collection("guests").add(guest)
    .then(resp => resp.id)
    .catch(err => err);
}

