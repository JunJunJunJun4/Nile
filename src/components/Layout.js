import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={styles.container}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={styles.main}>
        {/* isSidebarOpen を Header に渡す */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f8fafc',
    overflowX: 'hidden',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: '20px',
    overflowX: 'hidden',
  },
};

export default Layout;
