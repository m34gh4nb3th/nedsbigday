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
        console.log('querySnapshot',querySnapshot);
        return querySnapshot.docs.map(doc => {
            
            return addIdToRecord(doc)
        });
    })
    .catch(err => err);
};

export const getGuestById = (id) => {
    const db = firestore.firestore();
    console.log('id',typeof id);
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

