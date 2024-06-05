import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import CitizenHome from "./pages/Citizen/CitizenHome"
import GramaSewakaHome from "./pages/GramaSewaka/GramaSewakaHome"
import DivisionalSecretaryHome from "./pages/DivisionalSecretary/DivisionalSecretaryHome"
import TimberCuttingLicense from "./pages/Citizen/TimberCuttingLicense"
import TimberTransportLicense from "./pages/Citizen/TimberTransportLicense"
import './App.css';
import Login from "./pages/Common/Login";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      {/* citizen */} 
      <Route exact path="/citizen" element={<CitizenHome/>} />
      <Route exact path="/citizen/timbercutting" element={<TimberCuttingLicense/>} />
      <Route exact path="/citizen/timbertransport" element={<TimberTransportLicense/>} />
      {/* grama sewaka */}
      <Route path="/gramasewaka" element={<GramaSewakaHome/>} />
      {/* divisional secretary */}
      <Route path="/divisionalsecretary" element={<DivisionalSecretaryHome/>} />
    </Routes>
  </BrowserRouter>
        
  );
}

export default App;
