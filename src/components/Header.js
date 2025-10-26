"use client";
import Image from "next/image";

export default function Header({ toggleSidebar, isSidebarOpen }) {
  const SIDEBAR_WIDTH = 248;
  const OFFSET = 28;

  return (
    <header
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "12px 16px",
        backgroundColor: "#dceef9",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          left: isSidebarOpen ? SIDEBAR_WIDTH + OFFSET : OFFSET,
          fontSize: "24px",
          width: "42px",
          height: "42px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "left 0.1s ease",
        }}
      >
        ☰
      </button>
      <Image
        src="/images/nile-icon.png"
        alt="Nile ロゴ"
        width={40}
        height={40}
        style={{ borderRadius: "12px" }}
      />
    </header>
  );
}
