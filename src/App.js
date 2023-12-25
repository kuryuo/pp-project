import Registration from './pages/Registration';
import Login from './pages/Login';
import HomeAll from './pages/HomeAll';
import Account from './pages/Account';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={<HomeAll/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
