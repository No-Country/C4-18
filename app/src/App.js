import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./components/pages/landingPage/landingPage";
import SingIn from "./components/pages/login/singIn/signIn";
import SignUp from "./components/pages/login/singUp/singUp";
import { PropertyProvider } from "./contexts/propertyContext";
import { SearchPage } from "./components/pages/searchPage/searchPage";
import { DetailPage } from "./components/pages/detailPage/detailPage";
import { UserProvider } from "./contexts/userContext";
import { UserProfilePage } from "./components/pages/userProfilePage/userProfilePage";



function App() {
  return (
    <UserProvider>
      <PropertyProvider>
        <BrowserRouter>
          <div className="App">
            <div className="page">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<SingIn />} />
                <Route path="/login/register" element={<SignUp />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/producto/:Id" element={<DetailPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </PropertyProvider>
    </UserProvider>
  );
}

export default App;
