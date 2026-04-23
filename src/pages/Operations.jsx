import { useState } from 'react'
import { Phone, Radio, Truck, AlertCircle, CheckCircle, MapPin, Clock } from 'lucide-react'
import Layout from '../components/Layout'

const operations = [
  {
    title: 'Protocolo de Llamadas',
    icon: Phone,
    content: 'Procedimiento al recibir una llamada de emergencia:',
    items: [
      'Confirmar ubicación exacta del incidente',
      'Identificar número de víctimas y estado general',
      'Evaluar mecanismo de lesión (Caídas >3m, eyección, atropello, etc.)',
      'Clasificar prioridad: Crítica (Roja), Urgente (Amarilla), Diferida (Verde)',
      'Notificar tiempo estimado de llegada al dispatch',
      'Activar luces y sirenas según corresponda'
    ]
  },
  {
    title: 'Comunicación por Radio',
    icon: Radio,
    content: 'Protocolo de comunicaciones:',
    items: [
      'Usar callsign al iniciar transmisión',
      'Hablar claro, pausado y profesional',
      'Usar lenguaje NATO (Alfa, Bravo, Charlie...) para letras',
      'Evitar información innecesaria',
      'Confirmar todas las órdenes recibidas',
      'Reportar llegada a escena y标志'
    ]
  },
  {
    title: 'Coordinación con Otros Departamentos',
    icon: Truck,
    content: 'Trabajo interdepartamental:',
    items: [
      'LSPD: Coordinar escena segura, extricación',
      'LSFD: Incendios, materiales peligrosos, extricación técnica',
      'DC: Investigaciones criminales, escenas complejas',
      'Mantener comunicación constante',
      'Respetar perímetros de seguridad'
    ]
  },
  {
    title: 'Prioridad de Llamadas',
    icon: AlertCircle,
    content: 'Clasificación de emergencias:',
    items: [
      'ROJO - Crítico: PCR, vía aérea comprometida, Shock, Trauma grave',
      'AMARILLO - Urgente: Dolor torácico, dificultad respiratoria, ACV',
      'VERDE - Diferido: Lesiones menores, controles, traslados programados'
    ]
  }
]

const sectors = [
  { name: 'Sector 1 - Centro', hospitals: 'Central Medical Center', coverage: 'Zona centro y negocios' },
  { name: 'Sector 2 - Norte', hospitals: 'North Valley Hospital', coverage: 'Zona residencial norte' },
  { name: 'Sector 3 - Sur', hospitals: 'South Beach Clinic', coverage: 'Zona costera sur' },
  { name: 'Sector 4 - Este', hospitals: 'Eastside Medical', coverage: 'Zona industrial este' },
]

export default function Operations() {
  const [activeTab, setActiveTab] = useState('protocols')

  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <MapPin size={48} />
          <h1>Operaciones</h1>
          <p>Protocolos operativos y procedimientos de campo</p>
        </div>
      </div>

      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'protocols' ? 'active' : ''}`}
            onClick={() => setActiveTab('protocols')}
          >
            Protocolos
          </button>
          <button
            className={`tab-btn ${activeTab === 'sectors' ? 'active' : ''}`}
            onClick={() => setActiveTab('sectors')}
          >
            Sectores
          </button>
        </div>

        {activeTab === 'protocols' && (
          <div className="operations-grid">
            {operations.map((op, index) => (
              <div key={index} className="guide-card">
                <div className="guide-header">
                  <op.icon size={24} />
                  <h4>{op.title}</h4>
                </div>
                <p>{op.content}</p>
                <ul>
                  {op.items.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="sectors-grid">
            {sectors.map((sector, index) => (
              <div key={index} className="sector-card">
                <div className="sector-header">
                  <MapPin size={20} />
                  <h4>{sector.name}</h4>
                </div>
                <div className="sector-info">
                  <p><strong>Hospital base:</strong> {sector.hospitals}</p>
                  <p><strong>Cobertura:</strong> {sector.coverage}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="info-box">
          <h3>Información operativa</h3>
          <div className="info-grid">
            <div className="info-item">
              <Clock size={24} />
              <div>
                <h4>Horario de operaciones</h4>
                <p>24 horas / 7 días de la semana</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={24} />
              <div>
                <h4>Emergencias</h4>
                <p>Llamar al 911</p>
              </div>
            </div>
            <div className="info-item">
              <Radio size={24} />
              <div>
                <h4>Frecuencia Radio</h4>
                <p>453.625 MHz (EMS Primary)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
