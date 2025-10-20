import Link from "next/link";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "248px", width: "100%" }}>
        <main style={{ padding: "20px" }}>
          <h1>ようこそ！</h1>
          <p>今日のクイズに挑戦してみましょう！</p>
          <Link href="/quiz" legacyBehavior>
            <a style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#dceef9",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f3e2b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dceef9")
                }
              >
                クイズを始める
              </button>
            </a>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
