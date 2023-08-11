import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { actStoryArchive } from "./actions/archive";
import { getReadableStories } from "./selectors/story";

const root = ReactDOM.createRoot(document.getElementById("root"));
function render() {
  root.render(
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={(id) => store.dispatch(actStoryArchive(id))}
      />
    </React.StrictMode>
  );
}

store.subscribe(() => render());

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
