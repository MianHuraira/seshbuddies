import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import   store  from "./components/Redux/Store";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="lazy_spiner">
          <Spinner animation="grow" variant="success" />
        </div>
      }
    >
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </Provider>
);
reportWebVitals();
