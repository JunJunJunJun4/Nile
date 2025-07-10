import React, { useEffect, useState } from "react";
import { fetchQuizzes } from "../features/quiz/quizAPI";

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchQuizzes();
      setQuizzes(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div>
      <h2>クイズ一覧</h2>
      {quizzes.map((quiz, index) => (
        <div key={quiz.id} style={{ marginBottom: "20px" }}>
          <p>{index + 1}. {quiz.question}</p>
          <ul>
            {quiz.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
