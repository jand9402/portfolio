import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Proyects from './components/Proyects/Proyects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/skills" exact element={<Skills/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path='/proyects' exact element={<Proyects/>}/>
      </Routes>
    </div>
  );
}

export default App;
