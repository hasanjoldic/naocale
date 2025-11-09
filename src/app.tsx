import { Routes, Route } from "react-router-dom";

import "./app.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";
import TrustSectionDemo from "./pages/TrustSectionDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/demo-trust" element={<TrustSectionDemo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
