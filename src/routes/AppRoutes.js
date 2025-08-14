import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Question from '../pages/Question';
import Result from '../pages/Result';
import Profile from '../pages/Profile';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
