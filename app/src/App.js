import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainViewContainer } from "./components/templates/mainViewContainer/mainViewContainer";
import  SingIn  from "./components/pages/login/singIn/singIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainViewContainer />} />
          <Route path="login" element={<SingIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
