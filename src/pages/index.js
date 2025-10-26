import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  const btnStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#dceef9",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    color: "inherit",
  };

  return (
    <Layout>
      <h1>ようこそ！</h1>
      <p>今日のクイズに挑戦してみましょう！</p>
      <Link href="/question" style={btnStyle}>
        クイズを始める
      </Link>
    </Layout>
  );
}
