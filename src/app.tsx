import { Routes, Route } from "react-router-dom";

import "./app.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";
import HeroDemo from "./pages/HeroDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/demo-hero" element={<HeroDemo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
