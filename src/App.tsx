//@ts-ignore
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Barlow" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <HomePage />
    </MantineProvider>
  );
}

export default App;
