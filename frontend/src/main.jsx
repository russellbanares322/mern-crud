import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WorkoutProvider>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </WorkoutProvider>
    </Router>
  </React.StrictMode>
);
