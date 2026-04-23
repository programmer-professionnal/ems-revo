import { Link } from 'react-router-dom'
import { ArrowLeft, Activity, ClipboardList, Brain, UserCheck } from 'lucide-react'
import Layout from '../../components/Layout'

const vitals = [
  { name: 'Presión Arterial (PA)', normal: '120/80 mmHg', pediatric: 'según edad', method: 'Esfigmomanómetro / Automático' },
  { name: 'Frecuencia Cardíaca (FC)', normal: '60-100 lpm', pediatric: 'según edad', method: 'Palpación / Auscultación' },
  { name: 'Frecuencia Respiratoria (FR)', normal: '12-20 rpm', pediatric: 'según edad', method: 'Observación / Auscultación' },
  { name: 'Temperatura (Tª)', normal: '36.5-37.2°C', pediatric: 'igual', method: 'Oral / Timpánica / Axilar' },
  { name: 'Saturación de O₂ (SpO2)', normal: '95-100%', pediatric: '95-100%', method: 'Oximetría de pulso' },
  { name: 'Escala de Glasgow', normal: '15 (completa)', pediatric: 'variable', method: 'Exploración clínica' },
]

const glasgow = [
  { category: 'Apertura ocular', options: [
    { score: 4, desc: 'Espontánea' },
    { score: 3, desc: 'Al estímulo verbal' },
    { score: 2, desc: 'Al estímulo doloroso' },
    { score: 1, desc: 'Ninguna' },
  ]},
  { category: 'Respuesta verbal', options: [
    { score: 5, desc: 'Orientada' },
    { score: 4, desc: 'Confusa' },
    { score: 3, desc: 'Palabras inapropiadas' },
    { score: 2, desc: 'Sonidos incomprensibles' },
    { score: 1, desc: 'Ninguna' },
  ]},
  { category: 'Respuesta motora', options: [
    { score: 6, desc: 'Obedece órdenes' },
    { score: 5, desc: 'Localiza el dolor' },
    { score: 4, desc: 'Retirada al dolor' },
    { score: 3, desc: 'Flexión anormal (decorticación)' },
    { score: 2, desc: 'Extensión anormal (descerebración)' },
    { score: 1, desc: 'Ninguna' },
  ]},
]

export default function ProceduresEvaluation() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/procedimientos" className="back-link">
            <ArrowLeft size={18} /> Volver a Procedimientos
          </Link>
        </div>

        <div className="section-header evaluation">
          <Activity size={40} />
          <div>
            <h1>Evaluación del Paciente</h1>
            <p>Signos vitales y escalas de valoración</p>
          </div>
        </div>

        <div className="content-section">
          <h2><ClipboardList size={24} /> Signos Vitales</h2>
          <p>Los signos vitales son mediciones de las funciones básicas del cuerpo. Deben registrarse antes, durante y después del tratamiento.</p>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Parámetro</th>
                <th>Valor Normal Adulto</th>
                <th>Pediátrico</th>
                <th>Método</th>
              </tr>
            </thead>
            <tbody>
              {vitals.map((v, i) => (
                <tr key={i}>
                  <td><strong>{v.name}</strong></td>
                  <td>{v.normal}</td>
                  <td>{v.pediatric}</td>
                  <td>{v.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="content-section">
          <h2><Brain size={24} /> Escala de Coma de Glasgow (GCS)</h2>
          <p>Herramienta para evaluar el nivel de consciencia. Se puntúa de 3 (coma profundo) a 15 (consciencia normal).</p>
          
          <div className="glasgow-grid">
            {glasgow.map((cat, i) => (
              <div key={i} className="glasgow-category">
                <h3>{cat.category}</h3>
                <ul>
                  {cat.options.map((opt, j) => (
                    <li key={j} className={opt.score === 1 ? 'low-score' : ''}>
                      <span className="score">{opt.score}</span> - {opt.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="info-box">
            <h3>Interpretación GCS</h3>
            <ul>
              <li><strong>13-15:</strong> Leve (leve head trauma)</li>
              <li><strong>9-12:</strong> Moderado</li>
              <li><strong>≤8:</strong> Grave - requiere intubación para proteger vía aérea</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h2><UserCheck size={24} /> Primary Survey (ABCDE)</h2>
          <p>Evaluación sistemática del paciente crítico para identificar amenazas vitales.</p>
          
          <div className="protocol-steps">
            <div className="protocol-step">
              <div className="step-letter">A</div>
              <div className="step-content">
                <h3>Airway (Vía Aérea)</h3>
                <p>¿Está la vía aérea permeable? ¿Hay cuerpos extraños, sangre, vómito?</p>
                <ul>
                  <li>Maniobras básicas: frente-mentón, elevación mandibular</li>
                  <li>Si sospecha lesión cervical: control manual de cervicales</li>
                  <li>Si no protege vía aérea: intubación orotraqueal</li>
                </ul>
              </div>
            </div>
            
            <div className="protocol-step">
              <div className="step-letter">B</div>
              <div className="step-content">
                <h3>Breathing (Respiración)</h3>
                <p>¿Hay respiración efectiva? ¿Simetría del tórax?</p>
                <ul>
                  <li>Ver, oír, sentir durante 10 segundos</li>
                  <li>SpO2, frecuencia respiratoria</li>
                  <li>Buscar: neumotórax, hemotórax, tórax inestable</li>
                </ul>
              </div>
            </div>
            
            <div className="protocol-step">
              <div className="step-letter">C</div>
              <div className="step-content">
                <h3>Circulation (Circulación)</h3>
                <p>¿Hay pulso detectable? ¿Hemorragia activa?</p>
                <ul>
                  <li>Control de hemorragias (presión directa, torniquete si necesario)</li>
                  <li>Evaluar calidad del pulso (rápido, débil, filiforme)</li>
                  <li>Signos de shock: palidez, frialdad, sudoración</li>
                </ul>
              </div>
            </div>
            
            <div className="protocol-step">
              <div className="step-letter">D</div>
              <div className="step-content">
                <h3>Disability (Déficit Neurológico)</h3>
                <p>¿Cuál es el estado neurológico?</p>
                <ul>
                  <li>Glasgow (E, V, M)</li>
                  <li>Pupilas (tamaño, simetría, reacción)</li>
                  <li>Déficits focales</li>
                </ul>
              </div>
            </div>
            
            <div className="protocol-step">
              <div className="step-letter">E</div>
              <div className="step-content">
                <h3>Exposure (Exposición)</h3>
                <p>Exponer completamente al paciente para examen.</p>
                <ul>
                  <li>Desnudar al paciente (preservar dignidad)</li>
                  <li>Buscar lesiones ocultas, heridas penetrantes</li>
                  <li>Control de temperatura (hipotermia en trauma)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}