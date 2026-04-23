import { Routes, Route } from 'react-router-dom'
import OperationsMain from './operaciones/OperationsMain'
import OperationsCalls from './operaciones/OperationsCalls'
import OperationsRadio from './operaciones/OperationsRadio'
import OperationsSectors from './operaciones/OperationsSectors'

export default function Operations() {
  return (
    <Routes>
      <Route path="/" element={<OperationsMain />} />
      <Route path="/llamadas" element={<OperationsCalls />} />
      <Route path="/radio" element={<OperationsRadio />} />
      <Route path="/sectores" element={<OperationsSectors />} />
    </Routes>
  )
}