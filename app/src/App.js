import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./components/pages/landingPage/landingPage";
import SingIn from "./components/pages/login/singIn/signIn";
import SignUp from "./components/pages/login/singUp/singUp";
import { PropertyProvider } from "./contexts/propertyContext";
import { SearchPage } from "./components/pages/searchPage/searchPage";

function App() {
  return (
    <PropertyProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<SingIn />} />
            <Route path="/login/register" element={<SignUp />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PropertyProvider>
  );
}

export default App;
