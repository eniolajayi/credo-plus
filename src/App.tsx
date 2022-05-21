//@ts-ignore
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import HomePage from "./routes/HomePage";
import { ModalsProvider } from "@mantine/modals";

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Barlow" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ModalsProvider>
        <HomePage />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
