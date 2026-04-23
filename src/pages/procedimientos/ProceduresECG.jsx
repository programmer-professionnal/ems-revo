import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowLeft, AlertCircle, Activity } from 'lucide-react'
import Layout from '../../components/Layout'

const ecgRhythms = [
  {
    name: 'Ritmo Sinusal Normal',
    rate: '60-100',
    regularity: 'Regular',
    p_wave: 'Presente, normal',
    pr_interval: '0.12-0.20s',
    qrs: '<0.12s',
    treatment: 'Ninguno específico',
    img: '📈'
  },
  {
    name: 'Bradicardia Sinusal',
    rate: '<60',
    regularity: 'Regular',
    p_wave: 'Presente, normal',
    pr_interval: '0.12-0.20s',
    qrs: '<0.12s',
    treatment: 'Atropina 0.5mg IV si sintomático',
    img: '📉'
  },
  {
    name: 'Taquicardia Sinusal',
    rate: '>100',
    regularity: 'Regular',
    p_wave: 'Presente, normal',
    pr_interval: '0.12-0.20s',
    qrs: '<0.12s',
    treatment: 'Tratar causa subyacente',
    img: '📈'
  },
  {
    name: 'Fibrilación Auricular',
    rate: 'Irregular',
    regularity: 'Irregular',
    p_wave: 'Ausente (ondas f)',
    pr_interval: 'No medible',
    qrs: '<0.12s',
    treatment: 'Ritmo si inestable. Anticoagulación si >48h',
    img: '〰️'
  },
  {
    name: 'Flutter Auricular',
    rate: '150 (típico)',
    regularity: 'Regular',
    p_wave: 'Atypical (ondas "sawtooth")',
    pr_interval: 'Variable',
    qrs: '<0.12s',
    treatment: 'Control de ritmo/frecuencia',
    img: '〰️'
  },
  {
    name: 'TSV (Taquicardia Supraventricular)',
    rate: '150-250',
    regularity: 'Regular',
    p_wave: 'Puede estar oculto',
    pr_interval: 'Variable',
    qrs: '<0.12s',
    treatment: 'Maniobras vagales. Adenosina 6mg IV',
    img: '📈'
  },
  {
    name: 'Taquicardia Ventricular',
    rate: '100-250',
    regularity: 'Regular',
    p_wave: 'No relacionado',
    pr_interval: '-',
    qrs: '>0.12s',
    treatment: 'Amiodarona 300mg IV si sin pulso: RCP',
    img: '⚡'
  },
  {
    name: 'Fibrilación Ventricular',
    rate: '-',
    regularity: 'Irregular caótico',
    p_wave: 'Ausente',
    pr_interval: '-',
    qrs: 'Ausente',
    treatment: 'Desfibrilación 360J/200J. RCP. Amiodarona',
    img: '💓'
  },
  {
    name: 'Asistolia',
    rate: '0',
    regularity: '-',
    p_wave: 'Posible onda P sinusoidal',
    pr_interval: '-',
    qrs: 'Ausente/Agitado',
    treatment: 'RCP. Epinefrina 1mg. Considerar marcapasos',
    img: '—'
  },
  {
    name: 'Bloqueo AV Total',
    rate: '20-60',
    regularity: 'Regular',
    p_wave: 'Presente, no relacionado',
    pr_interval: 'Variable',
    qrs: '>0.12s si complejo ancho',
    treatment: 'Marcapasos temporal. Atropina temporal',
    img: '📉'
  }
]

export default function ProceduresECG() {
  const [selectedRhythm, setSelectedRhythm] = useState(ecgRhythms[0])

  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/procedimientos" className="back-link">
            <ArrowLeft size={18} /> Volver a Procedimientos
          </Link>
        </div>

        <div className="section-header ecg">
          <Heart size={40} />
          <div>
            <h1>Electrocardiograma (ECG)</h1>
            <p>Interpretación de ritmos cardíacos</p>
          </div>
        </div>

        <div className="ecg-container">
          <div className="rhythm-list">
            <h3>Ritmos Cardíacos</h3>
            {ecgRhythms.map((rhythm, index) => (
              <div 
                key={index}
                className={`rhythm-item ${selectedRhythm.name === rhythm.name ? 'active' : ''}`}
                onClick={() => setSelectedRhythm(rhythm)}
              >
                <span className="rhythm-icon">{rhythm.img}</span>
                <span>{rhythm.name}</span>
              </div>
            ))}
          </div>

          <div className="rhythm-detail">
            <h2>{selectedRhythm.name}</h2>
            
            <div className="rhythm-specs">
              <div className="spec-item">
                <strong>Frecuencia:</strong>
                <span>{selectedRhythm.rate}</span>
              </div>
              <div className="spec-item">
                <strong>Regularidad:</strong>
                <span>{selectedRhythm.regularidad}</span>
              </div>
              <div className="spec-item">
                <strong>Onda P:</strong>
                <span>{selectedRhythm.p_wave}</span>
              </div>
              <div className="spec-item">
                <strong>Intervalo PR:</strong>
                <span>{selectedRhythm.pr_interval}</span>
              </div>
              <div className="spec-item">
                <strong>QRS:</strong>
                <span>{selectedRhythm.qrs}</span>
              </div>
            </div>

            <div className={`rhythm-treatment ${selectedRhythm.name.includes('Ventricular') || selectedRhythm.name.includes('Asistolia') ? 'emergency' : ''}`}>
              <h3><Activity size={20} /> Tratamiento</h3>
              <p>{selectedRhythm.treatment}</p>
            </div>
          </div>
        </div>

        <div className="warning-box">
          <h3><AlertCircle size={20} /> Importante</h3>
          <p>Esta guía es para referencia rápida. Siempre consulta protocolos locales y actúa según tu formación y protocolos establecidos.</p>
        </div>
      </div>
    </Layout>
  )
}