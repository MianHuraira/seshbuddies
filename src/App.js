import "./App.css";
import "./assets/css/style.css";
import Router from "./Routes/Router";
import { useEffect } from "react";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import HeaderSecound from "../src/components/Header_secound";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  let getPath = location.pathname;

  let allPath = false;

  if (
    getPath === "/live_stream" ||
    getPath === "/sessions" ||
    getPath === "/reels"
  ) {
    allPath = true;
  }

  useEffect(() => {
    const bodyDiv = document.body;

    if (getPath === "/age_varifi") {
      bodyDiv.style.backgroundColor = "#023223";
    } else if (getPath === "/") {
      bodyDiv.style.backgroundColor = "#023223";
    } else if (allPath) {
      bodyDiv.style.backgroundColor = "#02150F";
    } else {
      bodyDiv.style.backgroundColor = "#eef5f2";
    }
  }, [getPath]);

  return (
    <div className="App">
      {getPath === "/" ||
      getPath === "/login" ||
      getPath === "/age_varifi" ||
      getPath === "/signUp" ? (
        <HeaderSecound />
      ) : (
        <Header />
      )}
      <Router />
    </div>
  );
}

export default App;
