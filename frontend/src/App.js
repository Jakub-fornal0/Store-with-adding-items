import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/signup" exact element={<Signup />} />
    </Routes>
  );
}

export default App;
