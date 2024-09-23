"use client";
import { useState } from "react";
import Loading from "./components/Loading";
import MainPage from "./pages/mainpage/MainPage";

export default function Home() {
  const [loadTime, setLoadTime] = useState(true);
  return (
    <main className="relative center flex-col">
      {loadTime ? <Loading setLoadTime={setLoadTime} /> : <MainPage />}
    </main>
  );
}
