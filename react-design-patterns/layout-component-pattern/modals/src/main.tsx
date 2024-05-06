import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import DeleteAccount from "./components/delete-account.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <DeleteAccount /> */}
  </React.StrictMode>
);
