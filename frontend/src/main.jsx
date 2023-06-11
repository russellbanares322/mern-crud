import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </Router>
  </React.StrictMode>
);
