import { Routes, Route } from "react-router-dom";

import "./app.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";
import ProcessStepsDemo from "./pages/ProcessStepsDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/demo" element={<ProcessStepsDemo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
