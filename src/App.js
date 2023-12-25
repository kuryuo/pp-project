import Header from './components/Header';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <div>
      <Routes>
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
