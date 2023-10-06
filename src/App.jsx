// MAIN IMPORTS:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES:

// COMPONENTS:
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


//STYLES
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <div className="all">
        <BrowserRouter>
        <NavBar />
        <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
