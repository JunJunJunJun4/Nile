import { collection, getDocs } from "firebase/firestore";
import { db, initFirebase } from "../../firebase";

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const fetchQuestions = async () => {
  try {
    // 🔹 ここで匿名ログイン完了を待つ
    await initFirebase();

    // サブコレクション「items」を指定
    const querySnapshot = await getDocs(
      collection(db, "questions", "geoPoliBasicOne", "items")
    );

    const questions = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const correctAnswer = data.option[0]; // 正解は最初の要素
      const shuffledOptions = shuffleArray(data.option);

      return {
        id: doc.id,
        question: data.question,
        options: shuffledOptions,
        answer: correctAnswer,
        explanation: data.explanation,
      };
    });

    return questions;
  } catch (error) {
    console.error("クイズ取得エラー詳細:", error.code, error.message);
    return [];
  }
};
