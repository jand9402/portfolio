import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Proyects from "./components/Proyects/Proyects"
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Personal from './components/Personal/Personal';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/proyects" exact element={<Proyects/>}/>
        <Route path="/skills" exact element={<Skills/>}/>
        <Route path="/work" exact element={<Work/>}/>
        <Route path="/personal" exact element={<Personal/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
