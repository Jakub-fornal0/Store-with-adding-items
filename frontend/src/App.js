import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
    </Routes>
  );
}

export default App;
