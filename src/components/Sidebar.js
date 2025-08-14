import React, { useState } from "react";
import { Link } from "react-router-dom";
import nileIcon from "../assets/images/nile-icon.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* ハンバーガーアイコン */}
      {!isOpen && (
        <button onClick={toggleSidebar} style={styles.hamburgerBtn}>
          ☰
        </button>
      )}

      {/* 展開時サイドバー */}
      {isOpen && (
        <div style={styles.sidebar}>
          <div style={styles.header}>
            <img src={nileIcon} alt="Nile ロゴ" style={styles.logo} />
            <button onClick={closeSidebar} style={styles.closeBtn}>
              ×
            </button>
          </div>

          <nav style={styles.nav}>
            <Link to="/" style={styles.link} onClick={closeSidebar}>
              🏠 ホーム
            </Link>
            <Link to="/quiz" style={styles.link} onClick={closeSidebar}>
              ❓ クイズ
            </Link>
            <Link to="/result" style={styles.link} onClick={closeSidebar}>
              📊 結果
            </Link>
            <Link to="/profile" style={styles.link} onClick={closeSidebar}>
              👤 プロフィール
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

const styles = {
  hamburgerBtn: {
    position: "fixed",
    top: "12px",
    left: "12px",
    fontSize: "24px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
  },
  sidebar: {
    width: "240px",
    height: "100vh",
    backgroundColor: "#dceef9",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "12px 16px",
    zIndex: 999,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
  },
  closeBtn: {
    fontSize: "24px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#333",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    padding: "8px",
    borderRadius: "8px",
    transition: "background-color 0.2s",
  },
};

export default Sidebar;
