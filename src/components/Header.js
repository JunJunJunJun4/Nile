import React from 'react';
import nileIcon from '../assets/images/nile-icon.png'; // 保存したアイコンのパスを確認

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={nileIcon} alt="Nile ロゴ" style={styles.icon} />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
  },
};

export default Header;
