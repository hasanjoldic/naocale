import { Routes, Route } from "react-router-dom";

import "./app.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";
import CatalogPage from "./pages/catalog/page";
import ProductPage from "./pages/product/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/katalog" element={<CatalogPage />} />
      <Route path="/proizvod/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
