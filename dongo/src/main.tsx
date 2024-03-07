import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { theme } from "./theme";
import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
}
