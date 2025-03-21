import SideMenu from "./components/SideMenu";
import './assets/fonts.css';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import PremiumPlan from "./screens/PremiumPlan";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <SideMenu/>

      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/premiumplan" element={<PremiumPlan/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;