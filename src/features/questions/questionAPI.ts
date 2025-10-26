import { collection, getDocs } from "firebase/firestore";
import { db, initFirebase } from "../../firebase";

// 配列シャッフル用ユーティリティ
const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

// Question の型
export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

// クイズ取得関数
export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    console.log("fetchQuestions: 開始");

    // Firebase 初期化・匿名ログイン
    await initFirebase();
    console.log("Firebase 初期化完了");

    // サブコレクション「items」を取得
    const querySnapshot = await getDocs(
      collection(db, "questions", "geoPoliBasicOne", "items")
    );

    console.log("Firestore 取得件数:", querySnapshot.size);

    const questions: Question[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      console.log("取得データ:", data);

      // 型アサーションを使用
      const options = data.option as string[];
      const correctAnswer = options[0];
      const shuffledOptions = shuffleArray(options);

      return {
        id: doc.id,
        question: data.question as string,
        options: shuffledOptions,
        answer: correctAnswer,
        explanation: data.explanation as string,
      };
    });

    console.log("questions 配列完成:", questions.length);
    return questions;
  } catch (error: any) {
    console.error(
      "クイズ取得エラー詳細:",
      error?.code ?? "no-code",
      error?.message ?? error
    );
    return [];
  }
};
