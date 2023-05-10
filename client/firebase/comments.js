import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
import app from './app';

const db = getFirestore(app);

const getComments = async ({ postId }) => {
  const commentRef = collection(db, 'comments');
  const q = query(commentRef, where('postId', '==', postId));

  const commentSnapshot = await getDocs(q);

  return commentSnapshot.docs.map(comment => {
    const commentData = comment.data();
    const createAt = commentData.createAt.toDate();
    const updateAt = commentData.updateAt.toDate();

    return { ...commentData, createAt: new Date(createAt), updateAt: new Date(updateAt), id: comment.id };
  });
};

const createComment = async commentInfo => {
  const commentRef = addDoc(collection(db, 'comments'), { commentInfo, createAt: serverTimestamp() });

  return commentRef.id;
};

const editComment = async ({ id, content }) => {
  await updateDoc(doc(db, 'comments', id), { content, updateAt: serverTimestamp() });
};

const toggleAdopted = async ({ id, adopted }) => {
  await updateDoc(doc(db, 'comments', id), { adopted });
};

const toggleCommentLike = async ({ id, checked, userId }) => {
  await updateDoc(doc(db, 'comments', id), {
    like: checked ? arrayRemove(userId) : arrayUnion(userId),
  });
};

const removeComment = async ({ id }) => {
  await deleteDoc(doc(db, 'comments', id));
};

export { getComments, createComment, editComment, removeComment, toggleAdopted, toggleCommentLike };
