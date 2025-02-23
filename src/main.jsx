import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Toaster position="top-center" /> {/* Keep Toaster outside RouterProvider */}
      <RouterProvider router={Routes} />
    </>
  </StrictMode>
);
