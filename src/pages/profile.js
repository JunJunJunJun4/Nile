import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { initFirebase, auth, fetchScores } from "../firebase";

export default function Profile() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    initFirebase().then(() => {
      if (auth.currentUser) {
        fetchScores(auth.currentUser.uid).then(setScores);
      }
    });
  }, []);

  return (
    <Layout>
      <h1>プロフィール</h1>
      <h2>スコア履歴</h2>
      {scores.length === 0 ? (
        <p>まだスコアがありません</p>
      ) : (
        <ul>
          {scores.map((s, i) => (
            <li key={i}>
              {s.score}/{s.total} 点 (
              {new Date(s.timestamp.seconds * 1000).toLocaleString()})
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
