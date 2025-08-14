import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "248px", width: "100%" }}>
        <main style={{ padding: "20px" }}>
          <h1>ようこそ！</h1>
          <p>今日のクイズに挑戦してみましょう！</p>
          <button
            onClick={() => navigate("/quiz")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "#dceef9",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f3e2b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#dceef9")}
          >
            クイズを始める
          </button>
        </main>
      </div>
    </div>
  );
}

export default Home;
