"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>ようこそ Nile へ！</h1>
      <p>今日のクイズに挑戦してみましょう！</p>
      <Link
        href="/question"
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#dceef9",
          textDecoration: "none",
        }}
      >
        クイズを始める
      </Link>
    </main>
  );
}
