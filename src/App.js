import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<SignIn />}/>
        <Route path='/profile' exact element={<Profile />}/>
        <Route path='/*' exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
