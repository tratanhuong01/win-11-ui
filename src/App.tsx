import { useEffect } from "react";
import Home from "./pages/Home";
import "./sass/app.scss";

//
const App = () => {
  //
  useEffect(() => {
    window.oncontextmenu = () => {
      return false;
    }
  }, []);
  //
  return (
    <Home />
  )
}

export default App;
