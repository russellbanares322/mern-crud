import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WorkoutProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </WorkoutProvider>
    </Router>
  </React.StrictMode>
);
