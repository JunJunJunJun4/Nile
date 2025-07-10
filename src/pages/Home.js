import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>ようこそ！</h2>
      <p>このアプリではクイズにチャレンジできます。</p>
      <Link to="/quiz">
        <button>クイズを始める</button>
      </Link>
    </div>
  );
}

export default Home;
