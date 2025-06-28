"use client";
import { useState } from "react";

const flashcards = [
  { question: "Reactの開発元は？", answer: "Facebook（Meta）" },
  { question: "JavaScriptの配列の長さを取得するプロパティは？", answer: ".length" },
  { question: "HTMLの見出しタグで一番大きいものは？", answer: "<h1>" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">学習フラッシュカード</h1>
      <div className="bg-white rounded shadow p-8 w-80 text-center">
        <div className="mb-4 text-lg font-semibold">
          {flashcards[index].question}
        </div>
        {showAnswer ? (
          <div className="mb-4 text-green-600">{flashcards[index].answer}</div>
        ) : (
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setShowAnswer(true)}
          >
            答えを見るね
          </button>
        )}
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={nextCard}
        >
          次のカード
        </button>
      </div>
    </div>
  );
}
