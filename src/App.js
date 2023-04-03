import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {PatientReport}  from "./classes/PatientReport.js";
function App() {
  return (

    <div className='App-header '>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/info" element={< HomePage patientReport={new PatientReport(
          "Julien", "Goolsby", "Male", "04/16/2002", "Heart Attack"
        )} />} />

      </Routes>
    </div>
  );
}

export default App;
