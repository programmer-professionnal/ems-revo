import { Link } from 'react-router-dom'
import { Radio, ArrowLeft } from 'lucide-react'
import Layout from '../../components/Layout'

const radioProtocols = [
  {
    code: 'MAYDAY',
    name: 'Emergencia del Operador',
    desc: 'Situación donde la vida del operador está en peligro inmediato',
    action: 'Todas las unidades disponibles responden de inmediato',
    example: 'Agresión en escena, amenaza con arma, vehículo sospecha'
  },
  {
    code: 'PRIORIDAD',
    name: 'Prioridad Alta',
    desc: 'Situación crítica que requiere respuesta inmediata',
    action: 'Despacho inmediato, supervisión alerta',
    example: 'PCR en curso, trauma severo, paciente entubado'
  },
  {
    code: 'URGENTE',
    name: 'Transmisión Urgente',
    desc: 'Información que requiere atención inmediata del receptor',
    action: 'Interrumpir otras transmisiones si necesario',
    example: 'Cambio de estado del paciente, solicitud de recursos'
  },
  {
    code: 'ROUTINE',
    name: 'Transmisión Normal',
    desc: 'Comunicación estándar no crítica',
    action: 'Respuesta en orden de llegada',
    example: 'Actualización de posición, solicitudes administrativas'
  }
]

export default function OperationsRadio() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/operaciones" className="back-link">
            <ArrowLeft size={18} /> Volver a Operaciones
          </Link>
        </div>

        <div className="section-header radio">
          <Radio size={40} />
          <div>
            <h1>Protocolos de Radio</h1>
            <p>Comunicación por radio y códigos de emergencia</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Palabras Clave de Radio</h2>
          <p>El sistema de comunicación por radio utiliza códigos específicos para identificar la urgencia de las transmisiones.</p>
          
          <div className="radio-grid">
            {radioProtocols.map((protocol, index) => (
              <div key={index} className={`radio-card ${protocol.code === 'MAYDAY' ? 'mayday' : ''}`}>
                <div className="radio-code">{protocol.code}</div>
                <h3>{protocol.name}</h3>
                <p className="radio-desc">{protocol.desc}</p>
                <div className="radio-action">
                  <strong>Acción:</strong> {protocol.action}
                </div>
                <div className="radio-example">
                  <strong>Ejemplo:</strong> {protocol.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Formato de Transmisión</h2>
          
          <div className="info-box">
            <h3>Estructura de Mensaje</h3>
            <ol>
              <li><strong>Identificación del emisor:</strong> "Unidad 7"</li>
              <li><strong>Identificación del receptor:</strong> "Base" o número de unidad</li>
              <li><strong>Palabra clave:</strong> PRIORIDAD / URGENTE / MAYDAY / ROUTINE</li>
              <li><strong>Contenido del mensaje:</strong> Información clara y concisa</li>
              <li><strong>Confirmación:</strong> "Over" para indicar fin del mensaje</li>
            </ol>
          </div>

          <div className="example-box">
            <h4>Ejemplo de Transmisión:</h4>
            <p>"Base, Unidad 7, PRIORIDAD. Solicito envío de unidad adicional a Calle Mayor 42. Paciente masculino, 60 años, dolor torácico intenso, signos vitales PA 90/60, FC 110, SpO2 94%. Posible SCA. Over."</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Fonética Alfabética</h2>
          <p>Utilizar el alfabeto fonético NATO para deletrear palabras cuando sea necesario:</p>
          
          <div className="phonetic-grid">
            <div><strong>A</strong> - Alfa</div>
            <div><strong>B</strong> - Bravo</div>
            <div><strong>C</strong> - Charlie</div>
            <div><strong>D</strong> - Delta</div>
            <div><strong>E</strong> - Echo</div>
            <div><strong>F</strong> - Foxtrot</div>
            <div><strong>G</strong> - Golf</div>
            <div><strong>H</strong> - Hotel</div>
            <div><strong>I</strong> - India</div>
            <div><strong>J</strong> - Juliett</div>
            <div><strong>K</strong> - Kilo</div>
            <div><strong>L</strong> - Lima</div>
            <div><strong>M</strong> - Mike</div>
            <div><strong>N</strong> - November</div>
            <div><strong>O</strong> - Oscar</div>
            <div><strong>P</strong> - Papa</div>
            <div><strong>Q</strong> - Quebec</div>
            <div><strong>R</strong> - Romeo</div>
            <div><strong>S</strong> - Sierra</div>
            <div><strong>T</strong> - Tango</div>
            <div><strong>U</strong> - Uniform</div>
            <div><strong>V</strong> - Victor</div>
            <div><strong>W</strong> - Whiskey</div>
            <div><strong>X</strong> - X-ray</div>
            <div><strong>Y</strong> - Yankee</div>
            <div><strong>Z</strong> - Zulu</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}