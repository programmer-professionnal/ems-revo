import { Link } from 'react-router-dom'
import { Phone, ArrowLeft, AlertTriangle, Radio, MapPin } from 'lucide-react'
import Layout from '../../components/Layout'

const emergencyTypes = [
  {
    code: 'ME1',
    name: 'Emergencia Médica',
    desc: 'Paciente crítico con compromiso vital inmediato',
    response: 'Prioridad máxima, máximo recurso disponible',
    examples: ['PCR', 'Shock', 'Dificultad respiratoria severa', 'IAM']
  },
  {
    code: 'ME2',
    name: 'Emergencia Urgente',
    desc: 'Situación que requiere atención inmediata pero no inmediata amenaza vital',
    response: 'Prioridad alta, ambulancia con paramédico',
    examples: ['Dolor torácico', 'Trauma moderado', 'ACV', 'Hemorragia controlada']
  },
  {
    code: 'MU1',
    name: 'Urgencia Médica',
    desc: 'Situación que requiere atención médica pero puede esperar',
    response: 'Prioridad media, transporte cuando disponible',
    examples: ['Fracturas simples', 'Heridas menores', 'Dolor abdominal leve']
  },
  {
    code: 'MU2',
    name: 'Urgencia Menor',
    desc: 'Situaciones que no representan urgencia vital',
    response: 'Prioridad baja, puede derivarse a centro de salud',
    examples: ['Contusiones', 'Cefalea leve', 'Esguinces leves']
  },
  {
    code: 'TM1',
    name: 'Trauma Mayor',
    desc: 'Trauma con múltiples víctimas o lesiones severas',
    response: 'Activación de protocolo de trauma, múltiples unidades',
    examples: ['Accidente de tráfico múltiple', 'Caídas desde altura', 'Heridas por arma']
  },
  {
    code: 'TM2',
    name: 'Trauma Moderado',
    desc: 'Trauma con lesiones aisladas',
    response: 'Una unidad especializada',
    examples: ['Fractura de extremidad', 'Trauma craneoencefálico leve']
  }
]

export default function OperationsCalls() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/operaciones" className="back-link">
            <ArrowLeft size={18} /> Volver a Operaciones
          </Link>
        </div>

        <div className="section-header calls">
          <Phone size={40} />
          <div>
            <h1>Protocolos de Llamadas</h1>
            <p>Clasificación y respuesta ante emergencias</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Tipos de Llamadas de Emergencia</h2>
          <p>La clasificación de llamadas permite priorizar recursos y dar la respuesta adecuada a cada situación.</p>
          
          <div className="calls-grid">
            {emergencyTypes.map((type, index) => (
              <div key={index} className="call-type-card">
                <div className="call-code">{type.code}</div>
                <div className="call-info">
                  <h3>{type.name}</h3>
                  <p className="call-desc">{type.desc}</p>
                  <div className="call-response">
                    <strong>Respuesta:</strong> {type.response}
                  </div>
                  <div className="call-examples">
                    <strong>Ejemplos:</strong>
                    <ul>
                      {type.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Protocolo de Recepción de Llamadas</h2>
          
          <div className="protocol-steps">
            <div className="protocol-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Identificación</h3>
                <p>Obtener nombre del chiamante, número de teléfono, ubicación exacta</p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Clasificación</h3>
                <p>Determinar tipo de emergencia según códigos establecidos</p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Ubicación</h3>
                <p>Confirmar dirección exacta, puntos de referencia, acceso</p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Información del Paciente</h3>
                <p>Número de pacientes, edad aproximada, estado actual</p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Dispatch</h3>
                <p>Despachar unidad adecuada según protocolo</p>
              </div>
            </div>
            <div className="protocol-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Seguimiento</h3>
                <p>Monitoreo continuo, actualización de estado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="warning-box">
          <h3><AlertTriangle size={20} /> Importante</h3>
          <p>En toda llamada, el objetivo es obtener la mayor cantidad de información en el menor tiempo posible. Nunca colgar hasta que la unidad esté en camino y se haya confirmado la información crítica.</p>
        </div>
      </div>
    </Layout>
  )
}