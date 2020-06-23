import firestore from './firestoreConfig';

export const getTriviaQuestions = () => {
    const db = firestore.firestore();
    return db.collection("trivias").get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data());
    }).catch(err => err);
};


