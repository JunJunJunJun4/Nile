"use client";
import React from "react";
import Layout from "./components/Layout";

// Next.js 側でページをレンダリングする場合は children を受け取るラッパーにします
export default function App({ children }) {
  return <Layout>{children}</Layout>;
}
