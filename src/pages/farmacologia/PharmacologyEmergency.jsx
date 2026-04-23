import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, AlertTriangle, ChevronDown, Search, ArrowLeft } from 'lucide-react'
import Layout from '../../components/Layout'

const emergencyDrugs = [
  {
    name: 'Adrenalina (Epinefrina)',
    class: 'Agonista adrenérgico',
    dose: '1mg IV/IO (1:10000)',
    indication: 'Paro cardiorrespiratorio, Anafilaxia severa, Asma severa',
    contra: 'Ninguna en emergencia',
    sideEffects: 'Taquicardia, arritmias, hipertensión, extravasación',
    notes: 'Primera línea en PCR. Repetir cada 3-5 minutos. En anafilaxia: 0.3-0.5mg IM'
  },
  {
    name: 'Amiodarona',
    class: 'Antiarrítmico Clase III',
    dose: '300mg IV bolo, luego 150mg',
    indication: 'Fibrilación ventricular, Taquicardia ventricular sin pulso',
    contra: 'Bloqueo AV, Sick sinus syndrome, QT prolongado',
    sideEffects: 'Hipotensión, bradicardia, flebitis',
    notes: 'Segunda dosis: 150mg. Luego infusión 1mg/min'
  },
  {
    name: 'Atropina',
    class: 'Anticolinérgico',
    dose: '0.5mg IV (máx 3mg total)',
    indication: 'Bradicardia sintomática, Bloqueo AV',
    contra: 'Glaucoma, obstrucción intestinal, retención urinaria',
    sideEffects: 'Sequedad bucal, visión borrosa, retención urinaria',
    notes: 'No efectiva en infarto de miocardio inferior'
  },
  {
    name: 'Adenosina',
    class: 'Antiarrítmico',
    dose: '6mg IV bolo rápido, luego 12mg',
    indication: 'Taquicardia supraventricular paroxística',
    contra: 'Asma, EPOC severo, enfermedad coronaria',
    sideEffects: 'Opresión torácica, disnea, rubor facial',
    notes: 'Administrar en bolo rápido con SF flush'
  },
  {
    name: 'Naloxona',
    class: 'Antagonista de opioides',
    dose: '0.4-2mg IV/IN/IM',
    indication: 'Sobredosis de opioides, Depresión respiratoria',
    contra: 'Ninguna absoluta',
    sideEffects: 'Síndrome de abstinencia, agitación, nausea',
    notes: 'Titular cada 2-3 min. Efecto dura 30-90 min'
  },
  {
    name: 'Midazolam',
    class: 'Benzodiazepina',
    dose: '2-5mg IV/IM',
    indication: 'Sedación, Ansiedad, Convulsiones',
    contra: 'Insuficiencia respiratoria severa',
    sideEffects: 'Depresión respiratoria, sedación excesiva',
    notes: 'Reversal con Flumazenil si es necesario'
  },
  {
    name: 'Suero Fisiológico 0.9%',
    class: 'Solución cristaloides',
    dose: '500-2000ml IV según necesidad',
    indication: 'Hipovolemia, Shock, Deshidratación',
    contra: 'Insuficiencia cardíaca severa, Edema pulmonar',
    sideEffects: 'Edema, hipercloremia',
    notes: 'Primera elección en trauma hemorrhágico'
  },
  {
    name: 'Ringer Lactato',
    class: 'Solución cristaloides',
    dose: '500-2000ml IV según necesidad',
    indication: 'Reemplazo de volumen, Trauma, Quemaduras',
    contra: 'Insuficiencia renal, Hiperkalemia',
    sideEffects: 'Alcalosis metabólica',
    notes: 'Preferido en quemaduras y acidosis'
  }
]

export default function PharmacologyEmergency() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expanded, setExpanded] = useState(0)

  const filtered = emergencyDrugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/farmacologia" className="back-link">
            <ArrowLeft size={18} /> Volver a Farmacología
          </Link>
        </div>

        <div className="section-header">
          <Heart size={40} className="section-icon" />
          <div>
            <h1>Medicamentos de Urgencia Vital</h1>
            <p>Fármacos utilizados en situaciones que amenazan la vida</p>
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar medicamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="drugs-detailed-list">
          {filtered.map((drug, index) => (
            <div 
              key={index} 
              className={`drug-detailed-card ${expanded === index ? 'expanded' : ''}`}
              onClick={() => setExpanded(expanded === index ? -1 : index)}
            >
              <div className="drug-detailed-header">
                <div className="drug-title">
                  <h3>{drug.name}</h3>
                  <span className="drug-class">{drug.class}</span>
                </div>
                <ChevronDown size={24} className="expand-icon" />
              </div>
              
              {expanded === index && (
                <div className="drug-detailed-body">
                  <div className="drug-detail-row">
                    <strong>Dosis:</strong>
                    <span>{drug.dose}</span>
                  </div>
                  <div className="drug-detail-row">
                    <strong>Indicación:</strong>
                    <span>{drug.indication}</span>
                  </div>
                  <div className="drug-detail-row">
                    <strong>Contraindicaciones:</strong>
                    <span>{drug.contra}</span>
                  </div>
                  <div className="drug-detail-row">
                    <strong>Efeitos secundarios:</strong>
                    <span>{drug.sideEffects}</span>
                  </div>
                  <div className="drug-notes-box">
                    <strong>Notas clínicas:</strong>
                    <p>{drug.notes}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="warning-box">
          <h3><AlertTriangle size={20} /> Información de Emergencia</h3>
          <p>Estos medicamentos deben administrarse únicamente por personal capacitado. Siempre verifica alergias y estado del paciente antes de administrar cualquier fármaco.</p>
        </div>
      </div>
    </Layout>
  )
}