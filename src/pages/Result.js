import Link from "next/link";

export default function Result() {
  const btnStyle = {
    marginTop: 20,
    padding: "10px 16px",
    borderRadius: 8,
    backgroundColor: "#dceef9",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    display: "inline-block",
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>結果発表</h1>
      <p>ここにあなたのクイズの結果を表示します。</p>

      {/* Link を使った戻るボタン */}
      <Link href="/" style={btnStyle}>
        ホームに戻る
      </Link>
    </main>
  );
}
