import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Heart, ChevronDown, Search, ArrowLeft, AlertCircle } from 'lucide-react'
import Layout from '../../components/Layout'

const cardioDrugs = [
  {
    name: 'Aspirina (AAS)',
    class: 'Antiplatquetario',
    dose: '300mg VO (masticable)',
    indication: 'Síndrome Coronario Agudo (SCA), Dolor torácico isquémico',
    contra: 'Alergia a AINE, sangrado activo, úlcera péptica activa',
    sideEffects: 'Dispepsia, sangrado GI, reacciones alérgicas',
    notes: 'Primera línea en todo SCA. Masticar antes de tragar. No administrar si sospecha disección aórtica'
  },
  {
    name: 'Nitroglicerina (NTG)',
    class: 'Vasodilatador',
    dose: '0.4mg SL cada 5min (máx 3 dosis)',
    indication: 'Angina de pecho, SCA, Edema pulmonar cardiogénico',
    contra: 'Hipotensión (PA sist <90), брадикардия <50, infarto de ventrículo derecho',
    sideEffects: 'Cefalea, hipotensión, rubor, mareo',
    notes: 'No mezclar con inhibidores PDE-5 (sildenafilo). Preferir en IAM inferior por su efecto sobre preload'
  },
  {
    name: 'Metoprolol',
    class: 'Betabloqueante',
    dose: '25-50mg VO o 5mg IV lento',
    indication: 'IAM con taquicardia, angina, ICC compensada',
    contra: 'Shock cardiogénico, EA grave, PR >0.24s',
    sideEffects: 'Bradicardia, hipotensión, broncoespasmo',
    notes: 'Controlar FC y PA. No suspender abruptamente. Contraindicado en insuficiencia cardíaca descompensada'
  },
  {
    name: 'Clopidogrel',
    class: 'Antiplatquetario',
    dose: '300-600mg VO carga',
    indication: 'SCA, intervención coronaria percutánea',
    contra: 'Sangrado activo, insuficiencia hepática severa',
    sideEffects: 'Sangrado, dispepsia, diarrhea',
    notes: 'Doble antiagregación: AAS + Clopidogrel/Ticagrelor en SCA. Efecto irreversible'
  },
  {
    name: 'Heparina',
    class: 'Anticoagulante',
    dose: '70-100 U/kg IV',
    indication: 'IAM con ST elevado, tromboembolismo',
    contra: 'Sangrado activo, HIT, trombocitopenia severa',
    sideEffects: 'Sangrado, trombocitopenia, osteoporosis (largo plazo)',
    notes: 'Monitorear TTPA cada 6h. Reversal con protamina si sangrado severo'
  },
  {
    name: 'Furosemida',
    class: 'Diurético de asa',
    dose: '20-40mg IV',
    indication: 'Edema pulmonar, insuficiencia cardíaca descompensada',
    contra: 'Anuria, hipovolemia, hipokalemia severa',
    sideEffects: 'Hipokalemia, hipomagnesemia, hipotensión',
    notes: 'Efecto rápido (5-15 min IV). Preferir bolos en vez de infusión continua para control'
  },
  {
    name: 'Digoxina',
    class: 'Glucósido cardíaco',
    dose: '0.5-1mg IV lento',
    indication: 'Fibrilación auricular con respuesta ventricular rápida',
    contra: 'Bloqueo AV, WPW, infarto reciente, insuficiencia renal',
    sideEffects: 'Toxicidad: arritmias, visión amarilla, nausea',
    notes: 'Narrow therapeutic index. Siempre verificar niveles en insuficiencia renal. No usar en WPW con fibrilación auricular'
  },
  {
    name: 'Isordil (Dinitrato de isosorbida)',
    class: 'Vasodilatador',
    dose: '5-10mg SL o spray',
    indication: 'Angina, post-IAM, insuficiencia cardíaca',
    contra: 'Hipotensión severa, uso reciente de sildenafilo',
    sideEffects: 'Cefalea, mareo, rubor',
    notes: 'Alternativa a NTG cuando hay tolerancia. Desarrollo de tolerancia con uso continuo'
  },
  {
    name: 'Dopamina',
    class: 'Inotrópico/vasopresor',
    dose: '2-20 mcg/kg/min IV',
    indication: 'Shock cardiogénico, bajo gasto cardíaco',
    contra: 'Feocromocitoma, taquicardia/FV',
    sideEffects: 'Taquicardia, arritmias, necrosis por extravasación',
    notes: 'Dosis baja: efecto dopaminérgico renal. Dosis media: beta1. Dosis alta: alfa1. Preferir noradrenalina en shock'
  },
  {
    name: 'Dobutamina',
    class: 'Inotrópico',
    dose: '2-20 mcg/kg/min IV',
    indication: 'ICC descompensada, shock cardiogénico',
    contra: 'Obstrucción outflow, FV, taquicardia',
    sideEffects: 'Taquicardia, arritmias, hipokalemia',
    notes: 'No usar en hipotensión severa. Puede causar hipokalemia. Taper al suspender'
  }
]

export default function PharmacologyCardio() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expanded, setExpanded] = useState(0)

  const filtered = cardioDrugs.filter(drug =>
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

        <div className="section-header cardio">
          <Activity size={40} className="section-icon" />
          <div>
            <h1>Medicamentos Cardiovasculares</h1>
            <p>Fármacos para el sistema cardíaco y vascular</p>
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

        <div className="info-box">
          <h3><AlertCircle size={20} /> Protocolos SCA</h3>
          <ul>
            <li><strong>AAS 300mg</strong> + <strong>Clopidogrel 300-600mg</strong> en todo SCA</li>
            <li><strong>NTG 0.4mg SL</strong> si PA sistólica {'>90'} y no contraindicado</li>
            <li><strong>Heparina</strong> según protocolo local</li>
            <li><strong>Metoprolol</strong> si HR {'>60'} y PA sistólica {'>100'}</li>
            <li><strong>Morfina</strong> 4-8mg IV si dolor persistente</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}