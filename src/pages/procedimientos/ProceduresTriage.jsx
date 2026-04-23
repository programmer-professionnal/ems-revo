import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, ChevronRight } from 'lucide-react'
import Layout from '../../components/Layout'

const triageCategories = [
  {
    color: '#dc2626',
    tag: 'ROJO',
    name: 'Inmediato / Prioridad 1',
    desc: 'Vía aérea o respiración comprometidas. Shock. Hemorragia severa.',
    examples: ['Obstrucción vía aérea', 'Shock hipovolémico', 'Neumotórax a tensión', 'Quemaduras extensas'],
    time: 'Inmediato (< 1 hora)'
  },
  {
    color: '#f59e0b',
    tag: 'AMARILLO',
    name: 'Diferible / Prioridad 2',
    desc: 'Pacientes que pueden esperar tratamiento sin riesgo vital inmediato.',
    examples: ['Fracturas', 'Heridas menores', 'Quemaduras 2º grado <20%', 'Dolor moderado'],
    time: '2-4 horas'
  },
  {
    color: '#22c55e',
    tag: 'VERDE',
    name: 'Menor / Prioridad 3',
    desc: 'Pacientes caminando. Lesiones menores que pueden tratarse ambulatoriamente.',
    examples: ['Heridas leves', 'Contusiones', 'Esguinces', 'Cefalea leve'],
    time: '24 horas'
  },
  {
    color: '#1f2937',
    tag: 'NEGRO',
    name: 'Fallecido / Expectante',
    desc: 'Pacientes con lesiones incompatibles con la vida o en parada respiratoria sin posibilidad de respuesta.',
    examples: ['Traumatismo craneoencefálico severo', 'Amputación masiva', 'Quemaduras >90%', 'Asistolia prolongada'],
    time: 'No aplica'
  }
]

export default function ProceduresTriage() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/procedimientos" className="back-link">
            <ArrowLeft size={18} /> Volver a Procedimientos
          </Link>
        </div>

        <div className="section-header triage">
          <AlertTriangle size={40} />
          <div>
            <h1>Triage START</h1>
            <p>Sistema de Triaje para Incidentes con Múltiples Víctimas</p>
          </div>
        </div>

        <div className="content-section">
          <h2>¿Qué es el Triage START?</h2>
          <p>El método START (Simple Triage and Rapid Treatment) es un sistema de triaje rápido utilizado en incidentes con múltiples víctimas para clasificar a los pacientes según la urgencia de su tratamiento.</p>
          
          <div className="info-box">
            <h3>Principios Fundamentales</h3>
            <ul>
              <li>El mayor bien para el mayor número de víctimas</li>
              <li>Clasificar rápidamente sin proporcionar tratamiento detallado</li>
              <li>Marcar claramente cada paciente con su categoría de triage</li>
              <li>Reevaluar continuamente las categorías</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h2>Protocolo de Clasificación</h2>
          
          <div className="triage-protocol">
            <div className="protocol-flow">
              <div className="flow-step">
                <h4>1. ¿Camina?</h4>
                <p>Pregunta a la víctima: "¿Puedes caminar?"</p>
                <span className="flow-result green">VERDE → Menor</span>
              </div>
              
              <div className="flow-arrow">↓</div>
              
              <div className="flow-step">
                <h4>2. ¿Respira?</h4>
                <p>Verificar vía aérea y respiración</p>
                <ul>
                  <li>Si no respira: Abrir vía aérea (maniobra frente-mentón)</li>
                  <li>Si aún no respira: <span className="black">NEGRO</span></li>
                  <li>Si respira {'>30'}/min: <span className="red">ROJO</span></li>
                </ul>
              </div>
              
              <div className="flow-arrow">↓</div>
              
              <div className="flow-step">
                <h4>3. ¿Circula?</h4>
                <p>Verificar pulso radial y hemorragias</p>
                <ul>
                  <li>Pulso radial ausente: <span className="red">ROJO</span></li>
                  <li>Hemorragia severa controlable: <span className="red">ROJO</span></li>
                  <li>Pulso presente, sin hemorragia: Continuar</li>
                </ul>
              </div>
              
              <div className="flow-arrow">↓</div>
              
              <div className="flow-step">
                <h4>4. ¿Consciente?</h4>
                <p>Verificar respuesta verbal o seguimiento visual</p>
                <ul>
                  <li>No responde órdenes: <span className="red">ROJO</span></li>
                  <li>Obedece órdenes: <span className="yellow">AMARILLO</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Categorías de Triage</h2>
          
          <div className="triage-categories">
            {triageCategories.map((cat, index) => (
              <div key={index} className="triage-category-card" style={{ borderLeftColor: cat.color }}>
                <div className="category-header" style={{ backgroundColor: cat.color }}>
                  <h3>{cat.tag}</h3>
                </div>
                <div className="category-body">
                  <h4>{cat.name}</h4>
                  <p>{cat.desc}</p>
                  <div className="category-examples">
                    <strong>Ejemplos:</strong>
                    <ul>
                      {cat.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="category-time">
                    <strong>Tiempo máximo de atención:</strong> {cat.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="warning-box">
          <h3><AlertTriangle size={20} /> Importante en START</h3>
          <ul>
            <li><strong>NO</strong> proporcionar tratamiento detallado durante el triaje</li>
            <li><strong>NO</strong> quedarse con pacientes que no pueden moverse solos</li>
            <li><strong>SÍ</strong> marcar a cada paciente con su categoría (etiqueta, cinta, rotulador)</li>
            <li><strong>SÍ</strong> reevaluar pacientes marcados si su estado cambia</li>
            <li><strong>SÍ</strong> solicitar recursos adicionales si hay más rojos que capacidad de tratamiento</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}