import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../features/questions/questionAPI";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    load();
  }, []);

  if (questions.length === 0) return <p>読み込み中...</p>;

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (showAnswer) return;
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "240px", flex: 1, overflowX: "hidden" }}>
        <Header />

        <main style={{ padding: "20px", overflowX: "hidden" }}>
          {isFinished ? (
            <>
              <h2>結果発表</h2>
              <p>
                {questions.length}問中 {score}問正解！
              </p>
            </>
          ) : (
            <>
              <h2>
                クイズ {currentIndex + 1} / {questions.length}
              </h2>
              <p>{currentQuestion.question}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {currentQuestion.options.map((option, i) => {
                  const isCorrect =
                    showAnswer && option === currentQuestion.answer;
                  const isWrong =
                    showAnswer &&
                    option === selectedOption &&
                    option !== currentQuestion.answer;

                  return (
                    <li key={i}>
                      <button
                        onClick={() => handleOptionClick(option)}
                        disabled={showAnswer}
                        style={{
                          backgroundColor: isCorrect
                            ? "lightgreen"
                            : isWrong
                            ? "salmon"
                            : "",
                          margin: "5px",
                          padding: "10px",
                        }}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {showAnswer && (
                <>
                  <p>
                    <strong>解説:</strong> {currentQuestion.explanation}
                  </p>
                  <button onClick={handleNext}>次へ</button>
                </>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Question;
