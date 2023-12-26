import Registration from './pages/Registration';
import Login from './pages/Login';
import HomeAll from './pages/HomeAll';
import AccUser from './pages/AccUser';
import AcCompany from './pages/AccCompany';
import Survlist from './pages/Survlist';
import SurvCreate from './pages/Survcreate';
import SurvPass from './pages/Survpass';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={<HomeAll/>} />
      <Route path="/accuser" element={<AccUser/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/accompany' element={<AcCompany/>} />
      <Route path='/survlist' element={<Survlist/>} />
      <Route path='/survcreate' element={<SurvCreate/>} />
      <Route path='/survpass' element={<SurvPass /> } />
      </Routes>
      </div>
    </>
  );
}

export default App;
