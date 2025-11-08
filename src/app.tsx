import { createTheme, MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import IndexPage from "./pages/page";
import NotFoundPage from "./pages/not-found/page";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MantineProvider>
  );
}
