import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
} from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Plus Jakarta Sans', sans-serif` },
        body: { value: `'Plus Jakarta Sans', sans-serif` },
      },
    },
    textStyles: {
      fonts: {
        heading: { value: `'Plus Jakarta Sans', sans-serif` },
        body: { value: `'Plus Jakarta Sans', sans-serif` },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
