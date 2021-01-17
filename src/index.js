import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Component is the function that returns html

//React application can render only one component at a time
//and that component is <App />.
//So everything should be inside App.js.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("potato")
);
