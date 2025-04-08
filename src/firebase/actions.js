import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./init";

export const addTodo = async (todo) => {
  const docRef = await addDoc(collection(db, "tasks"), {
    isCompleted: false,
    name: todo.name,
    description: todo.description,
  });
  const docSnap = await getDoc(doc(db, "tasks", docRef.id));

  if (docSnap.exists()) {
    return { id: docRef.id, ...docSnap.data() };
  } else {
    throw new Error("Task not found after creation");
  }
};

export const getTodos = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return tasks;
};

export const updateCompleted = async (todo) => {
  const todoRef = await doc(db, "tasks", todo.id);
  await updateDoc(todoRef, { isCompleted: todo.isCompleted });
};
