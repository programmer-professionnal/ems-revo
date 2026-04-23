import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PharmacologyMain from './pages/farmacologia/PharmacologyMain'
import PharmacologyEmergency from './pages/farmacologia/PharmacologyEmergency'
import PharmacologyCardio from './pages/farmacologia/PharmacologyCardio'
import PharmacologyAnalgesia from './pages/farmacologia/PharmacologyAnalgesia'
import PharmacologyAntidotes from './pages/farmacologia/PharmacologyAntidotes'
import ProceduresMain from './pages/procedimientos/ProceduresMain'
import ProceduresEvaluation from './pages/procedimientos/ProceduresEvaluation'
import ProceduresTechniques from './pages/procedimientos/ProceduresTechniques'
import ProceduresTriage from './pages/procedimientos/ProceduresTriage'
import ProceduresECG from './pages/procedimientos/ProceduresECG'
import Staff from './pages/Staff'
import Operations from './pages/Operations'
import Contact from './pages/Contact'

function App() {
  console.log('APP LOADED - Current date:', new Date().toISOString());
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Farmacología */}
        <Route path="/farmacologia" element={<PharmacologyMain />} />
        <Route path="/farmacologia/urgencia" element={<PharmacologyEmergency />} />
        <Route path="/farmacologia/cardio" element={<PharmacologyCardio />} />
        <Route path="/farmacologia/analgesia" element={<PharmacologyAnalgesia />} />
        <Route path="/farmacologia/antidotos" element={<PharmacologyAntidotes />} />
        
        {/* Procedimientos */}
        <Route path="/procedimientos" element={<ProceduresMain />} />
        <Route path="/procedimientos/evaluacion" element={<ProceduresEvaluation />} />
        <Route path="/procedimientos/tecnicas" element={<ProceduresTechniques />} />
        <Route path="/procedimientos/triage" element={<ProceduresTriage />} />
        <Route path="/procedimientos/ecg" element={<ProceduresECG />} />
        
        {/* Personal */}
        <Route path="/personal" element={<Staff />} />
        
        {/* Operaciones */}
        <Route path="/operaciones" element={<Operations />} />
        
        {/* Contacto */}
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App