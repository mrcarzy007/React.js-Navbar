import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Notfound from "./pages/notFound/Notfound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
