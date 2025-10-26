// src/app/layout.js
import "./global.css";
import Layout from "../components/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
