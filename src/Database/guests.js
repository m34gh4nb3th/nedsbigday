import firestore from './firestoreConfig';

export const getGuestByName = (name) => {
    const db = firestore.firestore();
    return db.collection("guests").where('full_name', '==', name.toLowerCase()).get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data());
    }).catch(err => err);
};

export const getGuestById = (id) => {
    const db = firestore.firestore();
    return db.collection("guests").doc(id).get().then(doc => {
        const data = doc.data();
        return data;
    });
    
}

