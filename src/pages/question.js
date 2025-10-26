import { useEffect, useState } from "react";
import { fetchQuestions } from "../features/questions/questionAPI";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // 各問題の回答履歴
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  if (questions.length === 0) return <Layout>読み込み中...</Layout>;

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) setScore((prev) => prev + 1);

    // 回答履歴を追加
    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: option,
        correct: currentQuestion.answer,
        explanation: currentQuestion.explanation,
      },
    ]);

    // 次の問題へ
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsFinished(true); // 最後の問題なら終了
    }
  };

  // 結果ページ表示
  if (isFinished) {
    return (
      <Layout>
        <h2>結果発表</h2>
        <p>
          {questions.length}問中 {score}問正解！
        </p>

        <h3>解説</h3>
        <ul>
          {answers.map((a, i) => (
            <li key={i} style={{ marginBottom: "16px" }}>
              <p>
                <strong>Q{i + 1}:</strong> {a.question}
              </p>
              <p>
                あなたの回答: {a.selected} / 正解: {a.correct}
              </p>
              <p>解説: {a.explanation}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 16px",
            borderRadius: "8px",
            backgroundColor: "#dceef9",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          ホームに戻る
        </Link>
      </Layout>
    );
  }

  // 現在の問題表示
  return (
    <Layout>
      <h2>
        クイズ {currentIndex + 1} / {questions.length}
      </h2>
      <p>{currentQuestion.question}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentQuestion.options.map((option, i) => (
          <li key={i}>
            <button
              onClick={() => handleOptionClick(option)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
