import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Question from '../pages/Question'; // ← ファイル名確認

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Question />} /> {/* URL: /quiz */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
