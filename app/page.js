"use client";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import MainPage from "./pages/mainpage/MainPage";
import Lenis from "lenis";

export default function Home() {
  const [loadTime, setLoadTime] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative center flex-col">
      {/* {loadTime ? <Loading setLoadTime={setLoadTime} /> : <MainPage />} */}
      <MainPage />
    </main>
  );
}
