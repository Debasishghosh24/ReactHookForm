import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ReactHookForm from "./ReactHookForm";
import Benifit from "./Benifits";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benifit" element={<Benifit/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route path="/ReactHookForm" element={<ReactHookForm />} />
      </Routes>
    </>
  );
}

export default App;