// src/app/page.tsx
import QuestionPage from "./question/QuestionPage";

export default function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>クイズアプリへようこそ</h1>
      <QuestionPage /> {/* クライアントコンポーネント呼び出し */}
    </main>
  );
}
