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

function App() {
  return (
    <BrowserRouter>
      <SideMenu />

      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/premiumplan"
          element={
            <PrivateRoute>
              <PremiumPlan />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
