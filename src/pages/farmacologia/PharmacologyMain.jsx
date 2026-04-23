import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pill, Search, ChevronRight, AlertTriangle, Heart, Activity, Brain, Shield, Droplets } from 'lucide-react'
import Layout from '../../components/Layout'

const topDrugs = [
  { name: 'Adrenalina', dose: '1mg IV/IO (1:10000)', indication: 'Paro cardiorrespiratorio, Anafilaxia', notes: 'Repetir cada 3-5 min. Primera línea en PCR', category: 'Reanimación', priority: 'alta' },
  { name: 'Amiodarona', dose: '300mg IV', indication: 'FV/TV sin pulso', notes: 'Segunda dosis: 150mg. Luego 100mg/h goteo', category: 'Reanimación', priority: 'alta' },
  { name: 'Atropina', dose: '0.5mg IV (máx 3mg)', indication: 'Bradicardia sintomática', notes: 'No útil en infarto agudo', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Aspirina (AAS)', dose: '300mg VO', indication: 'SCA - Síndrome Coronario Agudo', notes: 'Contraindicada en alergia, sangrado activo', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Nitroglicerina (NTG)', dose: '0.4mg SL', indication: 'Dolor torácico isquémico', notes: 'No usar si FC <50 o PA sistólica <90', category: 'Cardiovascular', priority: 'alta' },
  { name: 'Morfina', dose: '4-8mg IV', indication: 'Dolor moderado-severo', notes: 'Contraindicada en hipotensión, IRA', category: 'Analgésicos', priority: 'alta' },
  { name: 'Midazolam', dose: '2-5mg IV', indication: 'Ansiedad, sedación, convulsiones', notes: 'Riesgo de depresión respiratoria', category: 'Ansiolíticos', priority: 'alta' },
  { name: 'Naloxona', dose: '0.4-2mg IV/IN', indication: 'Sobredosis de opioides', notes: 'Titular, efecto corta duración', category: 'Antidotos', priority: 'alta' },
  { name: 'Suero Fisiológico (SF 0.9%)', dose: '500-1000ml IV', indication: 'Hipovolemia, deshidratación', notes: 'Primera elección en trauma', category: 'Soluciones', priority: 'alta' },
  { name: 'Ringer Lactato (RL)', dose: '500-1000ml IV', indication: 'Reemplazo de volumen', notes: 'Preferido en quemaduras', category: 'Soluciones', priority: 'alta' },
]

const categories = [
  { name: 'Urgencia Vital', icon: Heart, color: '#dc2626', path: '/farmacologia/urgencia', desc: 'Medicamentos para situaciones que amenazan la vida' },
  { name: 'Cardiovascular', icon: Activity, color: '#7c3aed', path: '/farmacologia/cardio', desc: 'Fármacos cardíacos y vasculares' },
  { name: 'Analgésicos', icon: Brain, color: '#059669', path: '/farmacologia/analgesia', desc: 'Control del dolor y sedation' },
  { name: 'Antidotos', icon: Shield, color: '#dc2626', path: '/farmacologia/antidotos', desc: 'Antídotos y reversal agents' },
]

export default function PharmacologyMain() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDrugs = topDrugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.indication.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <Pill size={48} />
          <h1>Farmacología EMS</h1>
          <p>Guía completa de medicamentos para emergencias médicas</p>
        </div>
      </div>

      <div className="container">
        <div className="pharmacology-intro">
          <h2>Bienvenido a la Guía de Farmacología</h2>
          <p>Esta sección contiene información detallada sobre los medicamentos utilizados en emergencias médicas. Selecciona una categoría o busca directamente.</p>
        </div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <Link to={cat.path} key={index} className="category-card">
              <div className="category-icon" style={{ backgroundColor: cat.color }}>
                <cat.icon size={32} />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <span className="category-link">
                Ver más <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="top-drugs-section">
          <h2 className="section-title">
            <AlertTriangle size={24} />
            Los 10 Medicamentos Más Utilizados
          </h2>
          
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar medicamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="drugs-list-compact">
            {(searchTerm ? filteredDrugs : topDrugs).map((drug, index) => (
              <div key={index} className="drug-compact-card">
                <div className="drug-number">{index + 1}</div>
                <div className="drug-info">
                  <h4>{drug.name}</h4>
                  <p className="drug-dose">{drug.dose}</p>
                  <p className="drug-indication">{drug.indication}</p>
                  {drug.notes && <p className="drug-notes">{drug.notes}</p>}
                </div>
                <span className="drug-category">{drug.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h3>Notas Importantes</h3>
          <ul>
            <li><strong>Verifica siempre alergias</strong> antes de administrar cualquier medicamento</li>
            <li><strong>Monitorea signos vitales</strong> durante y después de la administración</li>
            <li><strong>Consulta protocolos locales</strong> para dosis específicas</li>
            <li><strong>Documenta toda administración</strong> de medicamentos</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}