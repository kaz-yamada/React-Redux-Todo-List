import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./reducers";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/index.scss";

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
