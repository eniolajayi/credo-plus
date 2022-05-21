//@ts-ignore
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import HomePage from "./routes/HomePage";
import { ModalsProvider } from "@mantine/modals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Barlow" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ModalsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
