import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase"; // ← パスが異なる場合は修正してください

export const fetchQuizzes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "quizzes"));
    const quizzes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return quizzes;
  } catch (error) {
    console.error("クイズ取得エラー:", error);
    return [];
  }
};
