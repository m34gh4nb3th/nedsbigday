import firestore from './firestoreConfig';

export const addIdToRecord = (record) => {
    const id = record.id;
    let data = record.data();
    data = {id: id, ...data};
    return data;
}

export const getTriviaQuestions = () => {
    const db = firestore.firestore();
    return db.collection("trivias").get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => addIdToRecord(doc));
    }).catch(err => err);
};


