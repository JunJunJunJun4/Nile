import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// 選択肢をシャッフルする関数
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const fetchQuestions = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "questions", "geoPoliBasic", "geoPoliBasicOne")
    );

    const questions = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const correctAnswer = data.options[0]; // 正解は最初の要素
      const shuffledOptions = shuffleArray(data.options); // シャッフル

      return {
        id: doc.id,
        question: data.question,
        options: shuffledOptions,
        answer: correctAnswer, // 正解はシャッフル前のもの
        explanation: data.explanation,
      };
    });

    return questions;
  } catch (error) {
    console.error("クイズ取得エラー:", error);
    return [];
  }
};
