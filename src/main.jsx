import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "@/store/auth/auth-provider.jsx";
//css
import "@/assets/css/apple/app.min.css";

import "@/assets/plugins/ionicons/css/ionicons.min.css";

import "@/assets/css/spinner/spinner.css";
import "@/index.css";

//package css
import "react-quill-new/dist/quill.snow.css";
import "react-loading-skeleton/dist/skeleton.css";
import "sweetalert2/dist/sweetalert2.min.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
