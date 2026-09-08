import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";

const COLLECTION_NAME = "expenses";

export const addExpenseData = async (userId, expenseData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...expenseData,
      userId,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding expense: ", error);
  }
};

export const fetchUserExpenses = async (userId) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const expenses = [];
    querySnapshot.forEach((doc) => {
      expenses.push({ id: doc.id, ...doc.data() });
    });
    return expenses;
  } catch (error) {
    console.error("Error fetching expenses: ", error);
    return [];
  }
};

export const deleteExpenseData = async (expenseId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, expenseId));
  } catch (error) {
    console.error("Error deleting expense: ", error);
  }
};
