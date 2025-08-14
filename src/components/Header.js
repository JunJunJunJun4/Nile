import React from 'react';
import nileIcon from '../assets/images/nile-icon.png';

const Header = ({ toggleSidebar }) => {
  return (
    <header style={styles.header}>
      {/* 左側にハンバーガー */}
      <button onClick={toggleSidebar} style={styles.hamburgerBtn}>
        ☰
      </button>

      {/* 右端にロゴ */}
      <img src={nileIcon} alt="Nile ロゴ" style={styles.icon} />
    </header>
  );
};

const MARGIN = 48; // サイドバーとの間隔

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // 左:ハンバーガー / 右:ロゴ
    padding: '12px 16px',
    backgroundColor: '#dceef9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  hamburgerBtn: {
    position: 'relative',
    left: MARGIN, // 左端に配置
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1001,
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
  },
};

export default Header;
