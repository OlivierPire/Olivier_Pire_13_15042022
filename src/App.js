import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<SignIn />}/>
        <Route path='/profile' exact element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
