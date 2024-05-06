import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './components/Home';
import Training from './components/Training';
import Customer from './components/Customer';

function App() {
  return (
    <>    
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/training" element={<Training />} /> 
        <Route path="/customer" element={<Customer />} /> 
      </Routes>
    </>
  );
}
export default App;
