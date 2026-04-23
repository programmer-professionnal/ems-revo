import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronDown, Search, ArrowLeft, AlertTriangle } from 'lucide-react'
import Layout from '../../components/Layout'

const antidoteDrugs = [
  {
    name: 'Naloxona',
    class: 'Antagonista de opioides',
    dose: '0.4-2mg IV/IN/IM (titular cada 2-3min)',
    indication: 'Sobredosis de opioides, depresión respiratoria inducida por opioides',
    contra: 'Ninguna absoluta',
    sideEffects: 'Síndrome de abstinencia agudo, agitación, nausea, vomito',
    notes: 'Titular dosis. Efecto dura 30-90 min. Paciente puede re-sobredosis. Algunos opioides requieren dosis más altas (Metadona)'
  },
  {
    name: 'Flumazenil',
    class: 'Antagonista de benzodiazepinas',
    dose: '0.2mg IV cada 1min (máx 1mg total)',
    indication: 'Sobredosis de benzodiazepinas, reversión de sedación',
    contra: 'Convulsiones, uso crónico de benzodiazepinas, sospecha de intoxicación mixtas',
    sideEffects: 'Convulsiones, agitación, síndrome de abstinencia',
    notes: 'Riesgo de convulsiones en abstinencia crónica. Titular cuidadosamente. No usar en epilépticos'
  },
  {
    name: 'N-acetilcisteína (NAC)',
    class: 'Antídoto hepatotrópico',
    dose: '150mg/kg IV en 1h, luego 50mg/kg/h por 4h, luego 100mg/kg/h',
    indication: 'Intoxicación por paracetamol, sobredosis de paracetamol',
    contra: 'Ninguna absoluta',
    sideEffects: 'Reacción anafilactoide, nausea, rubor',
    notes: 'Administrar antes de 8h post-ingestión para mejor efficacy. Efectivo hasta 24h pero con menor efficacy'
  },
  {
    name: 'Atropina',
    class: 'Anticolinérgico',
    dose: '0.5-1mg IV cada 5-10min hasta efecto (máx 3mg en niños, 5mg en adultos)',
    indication: 'Intoxicación por organofosforados/carbaramatos, bradicardia colinérgica',
    contra: 'Glaucoma, obstrucción intestinal, retención urinaria, taquiarritmias',
    sideEffects: 'Sequedad bucal, visión borrosa, taquicardia, retención urinaria',
    notes: 'Dosis tóxica= dosis terapéutica. Esperar efectos en 2-4 min. Puede requerirse infusión continua'
  },
  {
    name: 'Pralidoxima',
    class: 'Oxim',
    dose: '1-2g IV en 15-30min (repetir cada 6-8h si necesario)',
    indication: 'Intoxicación por organofosforados (no en carbamatos)',
    contra: 'Ninguna absoluta',
    sideEffects: 'Temblor, mareo, visión borrosa, taquicardia',
    notes: 'Administrar junto con atropina. Más efectivo en las primeras 24-48h. No repetir después de 48h'
  },
  {
    name: 'Hidroxocobalamina',
    class: 'Quelante de cianuro',
    dose: '5g IV en 15min (repetir según necesidad)',
    indication: 'Intoxicación por cianuro, humo de incendio',
    contra: 'Ninguna absoluta',
    sideEffects: 'Coloración roja de fluidos corporales, rash, anafilaxia (raro)',
    notes: 'No mezclar con otros medicamentos. Tratamiento de elección en inhalación de humo. Efecto en minutos'
  },
  {
    name: 'Carbón Activado',
    class: 'Adsorbente',
    dose: '1g/kg VO (máx 50-100g)',
    indication: 'Intoxicaciones recientes (<1-2h), ingestión de toxinas',
    contra: 'Ingestión de cáusticos, hidrocarburos, metales pesados, alteración de consciencia',
    sideEffects: 'Constipación, black stools, vomiting',
    notes: 'Más efectivo dentro de 1h de ingestión. No es efectivo para metales, alcohols, litio'
  },
  {
    name: 'Biperideno',
    class: 'Anticolinérgico',
    dose: '2-4mg IV/IM',
    indication: 'Reacciones distónicas, parkinsonismo inducido por fármacos',
    contra: 'Glaucoma, obstrucción intestinal, retención urinaria',
    sideEffects: 'Sequedad bucal, visión borrosa, taquicardia',
    notes: 'Efecto en 10-30 min. Útil en reacciones a antipsicóticos y antieméticos'
  },
  {
    name: 'Metoclopramida',
    class: 'Antiemético',
    dose: '10mg IV',
    indication: 'Nausea, vomito, gastroparesia',
    contra: 'Feocromocitoma, obstrucción mecánica, sangrado GI',
    sideEffects: 'Reacciones extrapiramidales, sedación, hipotensión',
    notes: 'No usar con neurolépticos (aumenta riesgo EPS). Efecto antiemético y procinético'
  },
  {
    name: 'Ondansetron',
    class: 'Antiemético 5-HT3',
    dose: '4-8mg IV/VO',
    indication: 'Nausea y vomito severo, postoperatorio',
    contra: 'Queda prolongación del QT',
    sideEffects: 'Cefalea, constipation, QT prolongation',
    notes: 'Antiemético de elección en la mayoría de casos. Más seguro que metoclopramida'
  }
]

export default function PharmacologyAntidotes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expanded, setExpanded] = useState(0)

  const filtered = antidoteDrugs.filter(drug =>
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

        <div className="section-header antidotes">
          <Shield size={40} className="section-icon" />
          <div>
            <h1>Antidotos y Agentes de Reversión</h1>
            <p>Tratamiento de intoxicaciones y sobredosis</p>
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
          <h3><AlertTriangle size={20} /> Intoxicaciones Comunes</h3>
          <ul>
            <li><strong>Opioides:</strong> Naloxona 0.4-2mg IV/IN, repetir según necesidad</li>
            <li><strong>Benzodiazepinas:</strong> Flumazenil 0.2mg IV (usar con precaución)</li>
            <li><strong>Paracetamol:</strong> NAC 150mg/kg IV en 1h</li>
            <li><strong>Organofosforados:</strong> Atropina + Pralidoxima</li>
            <li><strong>Cianuro:</strong> Hidroxicobalamina 5g IV</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}