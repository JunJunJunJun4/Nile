// src/pages/Question.js
import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../features/questions/questionAPI';

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
    if (option === currentQuestion.answer) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else setIsFinished(true);
  };

  return (
          <div style={{ marginLeft: "248px", width: "100%" }}>
    <main style={{ padding: '20px' }}>
      {isFinished ? (
        <>
          <h2>結果発表</h2>
          <p>{questions.length}問中 {score}問正解！</p>
        </>
      ) : (
        <>
          <h2>クイズ {currentIndex + 1} / {questions.length}</h2>
          <p>{currentQuestion.question}</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
  {currentQuestion.options.map((option, i) => {
    const isCorrect = showAnswer && option === currentQuestion.answer;
    const isWrong = showAnswer && option === selectedOption && option !== currentQuestion.answer;

    return (
      <li key={i}>
        <button
          onClick={() => handleOptionClick(option)}
          disabled={showAnswer}
          style={{
            backgroundColor: isCorrect ? 'lightgreen' : isWrong ? 'salmon' : '#fff',
            padding: '15px 20px',       // 高さと余白を少し大きく
            width: '100%',               // 幅を揃える
            boxSizing: 'border-box',     // パディング込みで幅を計算
            borderRadius: '8px',
            border: '1px solid #ccc',
            cursor: showAnswer ? 'default' : 'pointer',
            textAlign: 'left',           // 左寄せにしたい場合
            fontSize: '16px',
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
              <p><strong>解説:</strong> {currentQuestion.explanation}</p>
              <button onClick={handleNext}>次へ</button>
            </>
          )}
        </>
      )}
    </main>
    </div>
  );
}

export default Question;
