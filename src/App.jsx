import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pharmacology from './pages/Pharmacology'
import Procedures from './pages/Procedures'
import Staff from './pages/Staff'
import Operations from './pages/Operations'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmacologia" element={<Pharmacology />} />
        <Route path="/procedimientos" element={<Procedures />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/personal" element={<Staff />} />
        <Route path="/operaciones" element={<Operations />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
