import Registration from './pages/Registration';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
      <Routes>
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
