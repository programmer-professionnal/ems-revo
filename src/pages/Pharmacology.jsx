import { useState } from 'react'
import { Pill, Search, ChevronDown, ChevronUp, AlertTriangle, Info, Heart, Brain, Activity, Shield, Droplets } from 'lucide-react'
import Layout from '../components/Layout'

const topDrugs = [
  { name: 'Adrenalina', dose: '1mg IV/IO (1:10000)', indication: 'Paro cardiorrespiratorio, Anafilaxia', notes: 'Repetir cada 3-5 min. Primera línea en PCR', category: 'Reanimación', priority: 'alta' },
  { name: 'Amiodarona', dose: '300mg IV', indication: 'FV/TV sin pulso', notes: 'Segunda dosis: 150mg. затем 100mg/h goteo', category: 'Reanimación', priority: 'alta' },
  { name: 'Atropina', dose: '0.5mg IV (máx 3mg)', indication: 'Bradicardia sintomática', notes: 'No útil en infarto agudo', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Aspirina (AAS)', dose: '300mg VO', indication: 'SCA - Síndrome Coronario Agudo', notes: 'Contraindicada en alergia, sangrado activo', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Nitroglicerina (NTG)', dose: '0.4mg SL', indication: 'Dolor torácico isquémico', notes: 'No usar si FC <50 o PA sistólica <90', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Morfina', dose: '4-8mg IV', indication: 'Dolor moderado-severo', notes: 'Contraindicada en hipotensión, IRA', category: 'Analgésicos', priority: 'alta' },
  { name: 'Midazolam', dose: '2-5mg IV', indication: 'Ansiedad, sedación, convulsiones', notes: 'Riesgo de depresión respiratoria', category: 'Ansiolíticos', priority: 'alta' },
  { name: 'Naloxona', dose: '0.4-2mg IV/IN', indication: 'Sobredosis de opioides', notes: 'Titular, efecto corta duración', category: 'Antidotos', priority: 'alta' },
  { name: 'Suero Fisiológico (SF 0.9%)', dose: '500-1000ml IV', indication: 'Hipovolemia, deshidratación', notes: 'Primera elección en trauma', category: 'Soluciones', priority: 'alta' },
  { name: 'Ringer Lactato (RL)', dose: '500-1000ml IV', indication: 'Reemplazo de volumen', notes: 'Preferido en quemaduras', category: 'Soluciones', priority: 'alta' },
]

const secondaryDrugs = [
  { name: 'Ketorolaco', dose: '30mg IV/IM', indication: 'Dolor traumático', notes: 'Evitar en sangrado activo, renal', category: 'Analgésicos' },
  { name: 'Paracetamol', dose: '1g IV', indication: 'Dolor y fiebre', notes: 'Máximo 4g/día', category: 'Analgésicos' },
  { name: 'Diazepam', dose: '5-10mg IV/RI', indication: 'Convulsiones, ansiedad', notes: 'Compatible solo con suero fisiológico', category: 'Ansiolíticos' },
  { name: 'Metoclopramida', dose: '10mg IV/IM', indication: 'Náuseas y vómitos', notes: 'No usar en obstrucción intestinal', category: 'Antieméticos' },
  { name: 'Ondansetrón', dose: '4-8mg IV/IM', indication: 'Náuseas y vómitos', notes: 'Compatible con todos los sueros', category: 'Antieméticos' },
  { name: 'Flumazenil', dose: '0.2mg IV', indication: 'Sobredosis de benzodiazepinas', notes: 'Cautela en epilepticos', category: 'Antidotos' },
  { name: 'N-Acetilcisteína (NAC)', dose: '150mg/kg IV', indication: 'Sobredosis de Paracetamol', notes: 'Protocolo específico', category: 'Antidotos' },
  { name: 'Adenosina', dose: '6mg IV bolo rápido', indication: 'TSV - Taquicardia supraventricular', notes: 'Seguir con 12mg si no responde', category: 'Cardiovascular' },
  { name: 'Epinefrina', dose: '1mg IV (1:10000)', indication: 'Anafilaxia, PCR', notes: 'Dosis repetibles cada 3-5 min', category: 'Reanimación' },
  { name: 'Dexametasona', dose: '8-10mg IV/IM', indication: 'Anafilaxia, edema laríngeo', notes: 'No sustituye a adrenalina', category: 'Corticoides' },
  { name: 'Glucosado 5% (SG5%)', dose: '500-1000ml IV', indication: 'Hipoglucemia, deshidratación', category: 'Soluciones' },
  { name: 'Gluconato de Calcio 10%', dose: '10-20ml IV', indication: 'Hiperkalemia, sobredosis bloqueadores canales Ca', notes: 'No mezclar con bicarbonatos', category: 'Electrolitos' },
  { name: 'Cloruro de Potasio (KCl)', dose: '10-20mEq IV', indication: 'Hipokalemia severa', notes: 'Máximo 10mEq/hora, monitorizar ECG', category: 'Electrolitos' },
  { name: 'Bicarbonato de Sodio 8.4%', dose: '1mEq/kg IV', indication: 'Hiperkalemia, acidosis severa', notes: 'No mezclar con catecholaminas', category: 'Electrolitos' },
  { name: 'Furosemida', dose: '20-40mg IV', indication: 'Edema agudo de pulmón', notes: 'Contraindicada en hipotensión', category: 'Diuréticos' },
  { name: 'Tramadol', dose: '50-100mg IV/IM', indication: 'Dolor moderado', notes: 'Máximo 400mg/día', category: 'Analgésicos' },
  { name: 'Heparina', dose: '60-80 U/kg IV', indication: 'TEP, SCA sin elev ST', notes: 'Contraindicada en sangrado activo', category: 'Anticoagulantes' },
  { name: 'Tiamina', dose: '100mg IV', indication: 'Encefalopatía de Wernicke', notes: 'Admininistrar antes de glucosa', category: 'Vitaminas' },
  { name: 'Glucosa 50% (D50)', dose: '25-50ml IV', indication: 'Hipoglucemia severa', notes: 'Diluir 1:1 con SF en accesos periféricos', category: 'Electrolitos' },
  { name: 'Adenosina', dose: '6mg IV bolo rápido', indication: 'TSV', notes: 'Incompatible con digitálicos', category: 'Cardiovascular' },
]

const drugCategories = [
  { name: 'Reanimación', icon: Heart, color: '#dc2626' },
  { name: 'Cardiovascular', icon: Activity, color: '#7c3aed' },
  { name: 'Analgésicos', icon: Brain, color: '#059669' },
  { name: 'Ansiolíticos', icon: Brain, color: '#0891b2' },
  { name: 'Antidotos', icon: Shield, color: '#dc2626' },
  { name: 'Soluciones', icon: Droplets, color: '#0284c7' },
  { name: 'Antieméticos', icon: Activity, color: '#7c3aed' },
  { name: 'Corticoides', icon: Shield, color: '#059669' },
  { name: 'Electrolitos', icon: Droplets, color: '#0891b2' },
]

export default function Pharmacology() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedDrug, setExpandedDrug] = useState(null)
  const [showTop30, setShowTop30] = useState(true)

  const filteredDrugs = [...topDrugs, ...secondaryDrugs].filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.indication.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleDrug = (index) => {
    setExpandedDrug(expandedDrug === index ? null : index)
  }

  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <Pill size={48} />
          <h1>Farmacología EMS</h1>
          <p>Guía completa de medicamentos utilizados en emergencias médicas</p>
        </div>
      </div>

      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar medicamento, indicación o categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="toggle-section">
          <button 
            className={`toggle-btn ${showTop30 ? 'active' : ''}`}
            onClick={() => setShowTop30(!showTop30)}
          >
            {showTop30 ? 'Ver todos los medicamentos' : 'Ver solo Top 30'}
          </button>
        </div>

        {showTop30 && (
          <div className="top-drugs-section">
            <h2 className="section-subtitle">
              <AlertTriangle size={20} />
              Los 10 medicamentos más utilizados en emergencias
            </h2>
            <div className="top-drugs-grid">
              {topDrugs.map((drug, index) => (
                <div key={index} className="top-drug-card">
                  <div className="top-drug-number">{index + 1}</div>
                  <div className="top-drug-info">
                    <h4>{drug.name}</h4>
                    <p className="drug-dose">{drug.dose}</p>
                    <p className="drug-indication">{drug.indication}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="drugs-list">
          <h2 className="section-subtitle">
            <Info size={20} />
            {showTop30 ? 'Todos los medicamentos' : 'Catálogo completo'}
          </h2>
          
          <div className="drugs-table">
            <div className="table-header">
              <span>Medicamento</span>
              <span>Dosis</span>
              <span>Indicación</span>
              <span>Notas</span>
            </div>
            {(showTop30 ? [...topDrugs, ...secondaryDrugs] : secondaryDrugs).map((drug, index) => (
              <div 
                key={index} 
                className={`table-row ${expandedDrug === index ? 'expanded' : ''}`}
                onClick={() => toggleDrug(index)}
              >
                <span className="drug-name">
                  {expandedDrug === index ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  {drug.name}
                </span>
                <span>{drug.dose}</span>
                <span>{drug.indication}</span>
                <span className="notes-cell">{drug.notes}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h3>Notas importantes</h3>
          <ul>
            <li>Siempre verifica alergias antes de administrar cualquier medicamento</li>
            <li>Monitorea signos vitales durante y después de la administración</li>
            <li>Consulta protocolos locales para dosis específicas</li>
            <li>Documenta toda administración de medicamentos</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
