import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Sidebar />
    <div style={styles.main}>
      <Header />
      <div style={styles.content}>{children}</div>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f8fafc',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default Layout;
