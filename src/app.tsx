import { Routes, Route } from "react-router-dom";

import "./app.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";
import CatalogDemo from "./pages/CatalogDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/demo-catalog" element={<CatalogDemo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
