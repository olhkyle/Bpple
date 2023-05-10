import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  getFirestore,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
import app from './app';

const db = getFirestore(app);

const getPosts = async () => {
  const postSnapshot = await getDocs(collection(db, 'posts'));

  return postSnapshot.docs.map(post => {
    const postData = post.data();
    const createAt = postData.createAt.toDate();
    const updateAt = postData?.updateAt?.toDate();

    return { ...postData, createAt: new Date(createAt), updateAt: new Date(updateAt), id: post.id };
  });
};

const getPost = async ({ postId }) => {
  const postSnapshot = await getDoc(doc(db, 'posts', postId));

  return { ...postSnapshot.data(), id: postSnapshot.id };
};

const createPost = async postInfo => {
  const postRef = await addDoc(collection(db, 'posts'), { ...postInfo, createAt: serverTimestamp() });

  return postRef.id;
};

const editPost = async ({ id, title, content }) => {
  await updateDoc(doc(db, 'posts', id), { title, content, updateAt: serverTimestamp() });
};

const removePost = async id => {
  await deleteDoc(doc(db, 'posts', id));
};

const togglePostLike = async ({ id, checked, userId }) => {
  await updateDoc(doc(db, 'posts', id), {
    like: checked ? arrayRemove(userId) : arrayUnion(userId),
  });
};

export { getPosts, getPost, createPost, editPost, removePost, togglePostLike };
