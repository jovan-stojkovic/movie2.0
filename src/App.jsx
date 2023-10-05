// MAIN IMPORTS:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES:

// COMPONENTS:
import NavBar from "./components/NavBar";

//STYLES
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <div className="all">
        <BrowserRouter>
        <NavBar />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
