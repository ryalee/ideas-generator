import SideMenu from "./components/screens_components/SideMenu";
import "./assets/fonts.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/pages/Home";
import Gallery from "./screens/pages/Gallery";
import Profile from "./screens/pages/Profile";
import Settings from "./screens/pages/Settings";
import PremiumPlan from "./screens/pages/PremiumPlan";
import Header from "./components/screens_components/Header";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import LandingPage from "./screens/pages/LandingPage";
import PrivateRoute from "./components/utils_components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Rotas usuário autenticado  */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <SideMenu />
                <Header />
                <Home />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <SideMenu />
              <Header />
              <Gallery />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <SideMenu />
              <Header />
              <Profile />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <SideMenu />
              <Header />
              <Settings />
            </>
          }
        />
        <Route
          path="/premiumplan"
          element={
            <>
              <SideMenu />
              <Header />
              <PremiumPlan />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
