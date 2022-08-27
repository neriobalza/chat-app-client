import React from "react";
import { createRoot } from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// App
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
