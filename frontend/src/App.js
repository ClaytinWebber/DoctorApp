import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Patient } from "./classes/Patient.js";
import * as Server from "./server";
import DoctorPage from './pages/DoctorPage';
import { VisitsPage } from './pages/VisitsPage';
function App() {


  Server.getReasonList();
  return (

    <div className='App-header '>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/info" element={< HomePage patientReport={new Patient(
          "Julien", "Goolsby", "Male", "04/16/2002", "Heart Attack"
        )} />} />
        <Route path="/info/doctor" element={<DoctorPage/>} />
        <Route path="/info/visits" element={<VisitsPage/>} />

      </Routes>
    </div>
  );
}

export default App;
