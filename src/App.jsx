import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Body} />
          <Route path="/Skills" Component={Skills} />
          <Route path="/Aboutus" Component={AboutUs} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
