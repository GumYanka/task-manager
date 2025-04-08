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

// export const useTasks = async () => {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   const tasks = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return tasks;
// };

// export const taskDetails = async (taskId) => {
//   console.log("Fetching task with ID:", taskId); // Лог ID
//   const taskRef = doc(db, "tasks", taskId);
//   const taskSnap = await getDoc(taskRef);

//   console.log("Task exists:", taskSnap.exists()); // Лог результату
//   console.log("Task data:", taskSnap.data()); // Лог даних

//   if (taskSnap.exists()) {
//     return { id: taskSnap.id, ...taskSnap.data() }; // Якщо таск є
//   } else {
//     return null; // Якщо таску немає
//   }
// };

// export const createTask = async (values) => {
//   const docRef = await addDoc(collection(db, "tasks"), {
//     date: values.date,
//     title: values.title,
//     status: values.status,
//     description: values.description,
//   });

//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return { id: docRef.id, ...docSnap.data() };
//   } else {
//     console.error("No such document!");
//     return null;
//   }
// };

// export const updateTask = async (values, status) => {
//   try {
//     await setDoc(
//       doc(db, "tasks", values.id),
//       { ...values, status },
//       { merge: true }
//     );
//     const updatedDoc = await getDoc(doc(db, "tasks", values.id));
//     return updatedDoc.exists() ? { id: values.id, ...updatedDoc.data() } : null;
//   } catch (error) {
//     console.error("Error updating task:", error);
//     return null;
//   }
// };
