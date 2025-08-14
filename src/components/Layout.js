// Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1, padding: "20px", backgroundColor: "#f7f9fc" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
