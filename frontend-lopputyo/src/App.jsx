import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Training from './components/Training';
import Customer from './components/Customer';
import Calendar from './components/Calendar';

function App() {
  return (
    <>    
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/training" element={<Training />} /> 
        <Route path="/customer" element={<Customer />} /> 
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
}
export default App;
