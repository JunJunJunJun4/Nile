"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const styles = {
  sidebar: {
    width: "232px",
    height: "100vh",
    backgroundColor: "#dceef9",
    position: "fixed",
    top: 0,
    left: "-240px",
    boxShadow: "2px 0 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "12px 16px",
    transition: "left 0.3s ease, visibility 0.3s ease",
    zIndex: 1000,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    borderRadius: "12px",
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
    display: "inline-block",
  },
};

export default function Sidebar({ isOpen, toggleSidebar }) {
  const SIDEBAR_WIDTH = 232;
  const router = useRouter();

  const handleQuestionClick = () => {
    toggleSidebar();
    router.push("/question");
  };

  return (
    <div
      style={{
        ...styles.sidebar,
        left: isOpen ? 0 : -SIDEBAR_WIDTH,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div style={styles.header}>
        <Image
          src="/images/nile-icon.png"
          alt="Nile ロゴ"
          width={40}
          height={40}
          style={styles.logo}
        />
      </div>
      <nav style={styles.nav}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link href="/" style={styles.link} onClick={toggleSidebar}>
              🏠 ホーム
            </Link>
          </li>
          <li>
            <button
              onClick={handleQuestionClick}
              style={{
                ...styles.link,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              🎯 クイズ
            </button>
          </li>
          <li>
            <Link href="/result" style={styles.link} onClick={toggleSidebar}>
              📊 結果
            </Link>
          </li>
          <li>
            <Link href="/profile" style={styles.link} onClick={toggleSidebar}>
              👤 プロフィール
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
