import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainViewContainer } from "./components/templates/mainViewContainer/mainViewContainer";
import SingIn  from "./components/pages/login/singIn/signIn";
import SignUp from "./components/pages/login/singUp/singUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainViewContainer />} />
          <Route path="login" element={<SingIn />} />
          <Route path="/login/register" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
