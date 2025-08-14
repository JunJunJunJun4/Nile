import React from 'react';
import nileIcon from '../assets/images/nile-icon.png';

const SIDEBAR_WIDTH = 248; // Sidebar の幅
const OFFSET = 28; // サイドバーとハンバーガーの隙間

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header style={styles.header}>
      {/* ハンバーガーメニュー */}
      <button
        onClick={toggleSidebar}
        style={{
          ...styles.hamburgerBtn,
          left: isSidebarOpen ? SIDEBAR_WIDTH + OFFSET : OFFSET, // サイドバー開閉に応じて左位置変更
        }}
      >
        ☰
      </button>

      {/* 右端ロゴ */}
      <img src={nileIcon} alt="Nile ロゴ" style={styles.icon} />
    </header>
  );
};

const styles = {
  header: {
    position: 'relative', // ハンバーガーメニューを絶対配置できるように
    display: 'flex',
    justifyContent: 'flex-end', // ロゴは右端
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#dceef9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    width: '100%',
    boxSizing: 'border-box',
   },
   hamburgerBtn: {
    position: 'absolute',
    fontSize: '24px',
    width: '42px',    // ボタン幅
    height: '42px',   // ボタン高さ
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1001,
    transition: 'left 0.1Ss ease',
    display: 'flex',          // 文字を中央に
    alignItems: 'center',     // 文字を中央に
    justifyContent: 'center', // 文字を中央に
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
  },
};

export default Header;
