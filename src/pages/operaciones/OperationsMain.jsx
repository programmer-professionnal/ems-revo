import { Link } from 'react-router-dom'
import { Phone, Radio, MapPin, Users, ChevronRight, AlertTriangle, Activity } from 'lucide-react'
import Layout from '../../components/Layout'

const operationsNav = [
  { title: 'Protocolos de Llamadas', icon: Phone, path: '/operaciones/llamadas', desc: 'Clasificación de emergencias y respuesta' },
  { title: 'Comunicación por Radio', icon: Radio, path: '/operaciones/radio', desc: 'Códigos y protocolos de comunicación' },
  { title: 'Sectores de Cobertura', icon: MapPin, path: '/operaciones/sectores', desc: 'Zonas de responsabilidad y hospitales' },
  { title: 'Coordinación Interinstitucional', icon: Users, path: '/operaciones/sectores', desc: 'Trabajo con otros servicios' },
]

export default function OperationsMain() {
  return (
    <Layout>
      <div className="page-header operations">
        <div className="container">
          <Activity size={48} />
          <h1>Operaciones EMS</h1>
          <p>Protocolos operativos y procedimientos de coordinación</p>
        </div>
      </div>

      <div className="container">
        <div className="operations-intro">
          <h2>Centro de Operaciones</h2>
          <p>Esta sección contiene los protocolos y guías operativas para la gestión de emergencias. Selecciona una categoría para más detalles.</p>
        </div>

        <div className="operations-grid-full">
          {operationsNav.map((item, index) => (
            <Link to={item.path} key={index} className="operation-card">
              <div className="operation-icon">
                <item.icon size={32} />
              </div>
              <div className="operation-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="operation-link">
                Acceder <ChevronRight size={20} />
              </span>
            </Link>
          ))}
        </div>

        <div className="info-box">
          <h3><AlertTriangle size={20} /> Principios Operativos</h3>
          <ul>
            <li><strong>Rapidez:</strong> Tiempo de respuesta es crítico para la supervivencia</li>
            <li><strong>Eficacia:</strong> Dar la respuesta correcta a cada situación</li>
            <li><strong>Coordinación:</strong> Trabajar en equipo con otros servicios</li>
            <li><strong>Seguridad:</strong> Proteger tanto al paciente como al equipo</li>
            <li><strong>Documentación:</strong> Registrar todo para mejora continua</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}