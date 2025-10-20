import Link from "next/link";

function Home() {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#dceef9",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    textDecoration: "none",
    display: "inline-block",
    color: "inherit",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "248px", width: "100%" }}>
        <main style={{ padding: "20px" }}>
          <h1>ようこそ！</h1>
          <p>今日のクイズに挑戦してみましょう！</p>
          <Link
            href="/question"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f3e2b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#dceef9")
            }
          >
            クイズを始める
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
