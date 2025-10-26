"use client";
import { useEffect, useState } from "react";
import { fetchQuestions } from "../../features/questions/questionAPI";

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    load();
  }, []);

  if (!questions.length) return <p>読み込み中...</p>;

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (showAnswer) return;
    setSelectedOption(option);
    if (option === currentQuestion.answer) setScore((prev) => prev + 1);

    // 選択したらすぐ次の問題
    if (currentIndex + 1 < questions.length) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      }, 300);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      {isFinished ? (
        <>
          <h2>結果発表</h2>
          <p>
            {questions.length}問中 {score}問正解！
          </p>
          <div>
            <strong>解説まとめ:</strong>
            <ul>
              {questions.map((q, i) => (
                <li key={i}>
                  {q.question} → {q.answer} ({q.explanation})
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <h2>
            クイズ {currentIndex + 1} / {questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {currentQuestion.options.map((opt, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <button
                  onClick={() => handleOptionClick(opt)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    width: "100%",
                    background:
                      selectedOption === opt
                        ? opt === currentQuestion.answer
                          ? "lightgreen"
                          : "salmon"
                        : "#fff",
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
