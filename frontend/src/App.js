import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddAdvertisement from "./components/AddAdvertisement";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      {user && (
        <Route path="/addadvertisement" exact element={<AddAdvertisement />} />
      )}
    </Routes>
  );
}

export default App;
