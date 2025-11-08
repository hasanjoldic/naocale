import { createTheme, MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MantineProvider>
  );
}
