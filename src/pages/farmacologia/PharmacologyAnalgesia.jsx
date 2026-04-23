import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Brain, ChevronDown, Search, ArrowLeft, AlertCircle } from 'lucide-react'
import Layout from '../../components/Layout'

const analgesiaDrugs = [
  {
    name: 'Morfina',
    class: 'Opioide',
    dose: '4-8mg IV lento (titular 1-2mg cada 5min)',
    indication: 'Dolor moderado-severo, IAM, trauma, cólico renal',
    contra: 'Hipotensión severa, depresión respiratoria, IRA, cabeza traumatizada',
    sideEffects: 'Depresión respiratoria, hipotensión, nauseas, prurito',
    notes: 'Titular hasta control del dolor. Naloxona como reversal. Contraindicada en shock hipovolémico'
  },
  {
    name: 'Fentanilo',
    class: 'Opioide sintético',
    dose: '25-100mcg IV',
    indication: 'Dolor severo, sedación, analgesia prehospitalaria',
    contra: 'Depresión respiratoria, hipotensión severa',
    sideEffects: 'Depresión respiratoria, rigidez muscular torácica en dosis altas',
    notes: '100x más potente que morfina. Efecto rápido (2-3 min). Preferido en trauma por estabilidad hemodinámica relativa'
  },
  {
    name: 'Ketamina',
    class: 'Anestésico disociativo',
    dose: '0.1-0.3mg/kg IV o 1-2mg/kg IM',
    indication: 'Sedación, analgesia, estado de shock, broncoespasmo',
    contra: 'Hipertensión severa, trauma craneoencefálico, psicosis',
    sideEffects: 'Laryngospasmo, hipertensión,emergencia dissociativa (midazolam si ocurre)',
    notes: 'Útil en trauma con hipotensión. Broncodilatador. Prevenir emergencia dissociativa con benzodiacepinas'
  },
  {
    name: 'Midazolam',
    class: 'Benzodiazepina',
    dose: '2-5mg IV/IM',
    indication: 'Ansiedad, sedación, convulsiones, relajación muscular',
    contra: 'Depresión respiratoria severa, miastenia gravis',
    sideEffects: 'Depresión respiratoria, sedación excesiva, amnesia',
    notes: 'Reversal con Flumazenil. Sinonsimpatectomía - puede causar hipotensión'
  },
  {
    name: 'Tramadol',
    class: 'Analgésico opioide menor',
    dose: '50-100mg IV/VO',
    indication: 'Dolor leve-moderado, migraña',
    contra: 'Uso de MAO, эпилепсия, sobredosis de opioides',
    sideEffects: 'Nausea, mareo, convulsiones, síndrome serotoninérgico',
    notes: 'Doble mecanismo: opioide + inhibidor de recaptación de serotonina. Riesgo de convulsiones'
  },
  {
    name: 'Ketorolaco',
    class: 'AINE',
    dose: '15-30mg IV/IM',
    indication: 'Dolor leve-moderado, cólico, cefalea, trauma musculoesquelético',
    contra: 'IRA, sangrado activo, úlcera, perioperatorio de bypass',
    sideEffects: 'Sangrado GI, IRA, reacciones alérgicas',
    notes: 'No afecta la aggregación plaquetaria tanto como otros AINE. Excelente para dolor musculoesquelético'
  },
  {
    name: 'Metamizol (Dipirona)',
    class: 'AINE - Pirazolona',
    dose: '1-2g IV/VO',
    indication: 'Dolor, fiebre alta, cólico, espasmos',
    contra: 'Alergia a pirazolonas, discrasia sanguínea',
    sideEffects: 'Hipotensión (IV), agranulocitosis (raro)',
    notes: 'Potente antiespasmódico. Riesgo de agranulocitosis con uso prolongado. Administrar IV lento'
  },
  {
    name: 'Paracetamol',
    class: 'Analgésico-antipirético',
    dose: '1g IV/VO (máx 4g/día)',
    indication: 'Dolor leve, fiebre, cefalea',
    contra: 'Insuficiencia hepática severa',
    sideEffects: 'Hepatotoxicidad en sobredosis',
    notes: 'Seguro en la mayoría de pacientes. Primera línea para fiebre. No tiene efecto antiinflamatorio'
  }
]

export default function PharmacologyAnalgesia() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expanded, setExpanded] = useState(0)

  const filtered = analgesiaDrugs.filter(drug =>
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

        <div className="section-header analgesia">
          <Brain size={40} className="section-icon" />
          <div>
            <h1>Analgésicos y Sedantes</h1>
            <p>Fármacos para el control del dolor y sedación</p>
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
          <h3><AlertCircle size={20} /> Escalera Analgésica OMS</h3>
          <ul>
            <li><strong>Escalón 1:</strong> Paracetamol, AINEs (Ketorolaco, Metamizol)</li>
            <li><strong>Escalón 2:</strong> Tramadol, Codeína + Paracetamol</li>
            <li><strong>Escalón 3:</strong> Morfina, Fentanilo (opioides mayores)</li>
            <li><strong>Coadyudantes:</strong> Midazolam, Ketamina</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}