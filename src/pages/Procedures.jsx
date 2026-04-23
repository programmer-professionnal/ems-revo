import { Routes, Route } from 'react-router-dom'
import ProceduresMain from './procedimientos/ProceduresMain'
import ProceduresEvaluation from './procedimientos/ProceduresEvaluation'
import ProceduresTechniques from './procedimientos/ProceduresTechniques'
import ProceduresTriage from './procedimientos/ProceduresTriage'
import ProceduresECG from './procedimientos/ProceduresECG'

export default function Procedures() {
  return (
    <Routes>
      <Route path="/" element={<ProceduresMain />} />
      <Route path="/evaluacion" element={<ProceduresEvaluation />} />
      <Route path="/tecnicas" element={<ProceduresTechniques />} />
      <Route path="/triage" element={<ProceduresTriage />} />
      <Route path="/ecg" element={<ProceduresECG />} />
    </Routes>
  )
}