import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, ChevronRight, Search, Activity, ClipboardList, Heart, AlertTriangle, UserCheck } from 'lucide-react'
import Layout from '../../components/Layout'

const proceduresList = [
  { title: 'Signos Vitales', icon: Activity, path: '/procedimientos/evaluacion', desc: 'PA, FC, FR, Tª, SpO2, Glasgow' },
  { title: 'Primary Survey (ABCDE)', icon: UserCheck, path: '/procedimientos/evaluacion', desc: 'Evaluación primaria del paciente crítico' },
  { title: 'Secondary Survey', icon: ClipboardList, path: '/procedimientos/evaluacion', desc: 'Evaluación secundaria completa' },
  { title: 'Escala de Glasgow', icon: Activity, path: '/procedimientos/evaluacion', desc: 'Valoración del nivel de consciencia' },
  { title: 'Acceso Venoso', icon: Stethoscope, path: '/procedimientos/tecnicas', desc: 'Canalización IV e IO' },
  { title: 'Via Aérea', icon: Stethoscope, path: '/procedimientos/tecnicas', desc: 'Manejo de vía aérea' },
  { title: 'Desfibrilación', icon: Heart, path: '/procedimientos/tecnicas', desc: 'DEA, cardioversión, marcapasos' },
  { title: 'Inmovilización', icon: Stethoscope, path: '/procedimientos/tecnicas', desc: 'Collarines, férulas, tablas' },
  { title: 'Triage START', icon: AlertTriangle, path: '/procedimientos/triage', desc: 'Triaje en incidentes con múltiples víctimas' },
  { title: 'Electrocardiograma (ECG)', icon: Heart, path: '/procedimientos/ecg', desc: 'Interpretación básica del ECG' },
]

export default function ProceduresMain() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = proceduresList.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="page-header procedures">
        <div className="container">
          <Stethoscope size={48} />
          <h1>Procedimientos Técnicos</h1>
          <p>Guías detalladas de procedimientos de emergencia</p>
        </div>
      </div>

      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar procedimiento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="procedures-grid">
          {(searchTerm ? filtered : proceduresList).map((proc, index) => (
            <Link to={proc.path} key={index} className="procedure-card">
              <div className="procedure-icon">
                <proc.icon size={32} />
              </div>
              <h3>{proc.title}</h3>
              <p>{proc.desc}</p>
              <span className="procedure-link">
                Ver guía <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="info-box">
          <h3>Protocolos de Evaluación</h3>
          <p>Recuerda siempre seguir el orden del <strong>ABCDE</strong> en la evaluación primaria:</p>
          <ul>
            <li><strong>A - Airway:</strong> Vía aérea con control cervical</li>
            <li><strong>B - Breathing:</strong> Respiración y ventilación</li>
            <li><strong>C - Circulation:</strong> Circulación con control de hemorragias</li>
            <li><strong>D - Disability:</strong> Déficit neurológico</li>
            <li><strong>E - Exposure:</strong> Exposición y control ambiental</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}