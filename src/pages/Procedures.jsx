import { useState } from 'react'
import { Stethoscope, Search, ChevronDown, ChevronUp, Activity, HeartPulse, Brain, ClipboardList, AlertTriangle } from 'lucide-react'
import Layout from '../components/Layout'

const procedures = [
  {
    title: 'Signos Vitales',
    icon: HeartPulse,
    content: 'Los signos vitales básicos que deben evaluarse en todo paciente:',
    sections: [
      { name: 'Frecuencia Respiratoria (FR)', value: '12-20 rpm' },
      { name: 'Frecuencia Cardíaca (FC)', value: '60-100 lpm' },
      { name: 'Presión Arterial (PA)', value: 'Sistólica: 90-140 mmHg / Diastólica: 60-90 mmHg' },
      { name: 'Temperatura (T°)', value: '36.1°C - 37.2°C' },
      { name: 'Saturación de Oxígeno (SpO2)', value: '95-100%' },
      { name: 'Glucemia (Glu)', value: '70-110 mg/dL' }
    ]
  },
  {
    title: 'Primary Survey (ABCDE)',
    icon: ClipboardList,
    content: 'Evaluación inicial sistemática del paciente traumático:',
    sections: [
      { name: 'A - Airway (Vía Aérea)', value: 'Evaluar permeabilidad. Si está consciente, mantener conversación. Si está inconsciente, verificar obstrucción.' },
      { name: 'B - Breathing (Respiración)', value: 'Verificar expansión torácica, ruidos respiratorios y frecuencia.' },
      { name: 'C - Circulation (Circulación)', value: 'Evaluar pulso, relleno capilar (<2seg), hemorragias y piel.' },
      { name: 'D - Disability (Déficit Neurológico)', value: 'Escala AVPU: Alert, Voice, Pain, Unresponsive. Evaluar pupilas.' },
      { name: 'E - Exposure (Exposición)', value: 'Exponer al paciente para evaluar lesiones, prevenir hipotermia.' }
    ]
  },
  {
    title: 'Secondary Survey',
    icon: Search,
    content: 'Evaluación completa head-to-toe después de estabilizar:',
    sections: [
      { name: 'Historia Médica', value: 'AMPLE: Alergias, Medications, Past medical history, Last meal, Events leading to injury' },
      { name: 'Examen Físico', value: 'Inspección, palpación, percusión y auscultación de todas las regiones.' },
      { name: 'Signos Vitales', value: 'Tomar y registrar constantes cada 5-15 minutos.' },
      { name: 'Monitorización', value: 'Colocar monitor ECG, pulsioxímetro, tensión arterial.' }
    ]
  },
  {
    title: 'Semiología del Dolor Torácico',
    icon: AlertTriangle,
    content: 'Evaluación del dolor torácico usando OPQRST:',
    sections: [
      { name: 'O - Onset', value: '¿Qué estaba haciendo cuando comenzó?' },
      { name: 'P - Provocation', value: '¿Qué lo empeora o mejora?' },
      { name: 'Q - Quality', value: '¿Cómo se siente? (Opresivo, punzante, quemante)' },
      { name: 'R - Radiation', value: '¿Se irradia? (Brazo, mandíbula, espalda)' },
      { name: 'S - Severity', value: 'Escala del 1 al 10' },
      { name: 'T - Time', value: '¿Cuánto tiempo dura? ¿Cuándo comenzó?' }
    ]
  },
  {
    title: 'ECG - Interpretación',
    icon: Activity,
    content: 'Lectura sistemática del electrocardiograma:',
    sections: [
      { name: 'Ritmo', value: 'Regular/Irregular, Frecuencia' },
      { name: 'Onda P', value: 'Presente/Ausente, morfología' },
      { name: 'Intervalo PR', value: 'Normal: 0.12-0.20 seg' },
      { name: 'QRS', value: 'Normal: <0.12 seg. Ancho indica bloqueo de rama' },
      { name: 'Onda T', value: 'Inversión puede indicar isquemia' },
      { name: 'ST', value: 'Elevación = IAM. Depresión = isquemia' }
    ]
  },
  {
    title: 'Escala de Coma de Glasgow',
    icon: Brain,
    content: 'Evaluación del nivel de consciencia (máximo 15 puntos):',
    sections: [
      { name: 'Ocular (4)', value: 'Espontáneo: 4, Voz: 3, Dolor: 2, Ninguno: 1' },
      { name: 'Verbal (5)', value: 'Orientado: 5, Confuso: 4, Palabras: 3, Sonidos: 2, Ninguno: 1' },
      { name: 'Motor (6)', value: 'Obedece: 6, Localiza: 5, Retirada: 4, Flexión: 3, Extensión: 2, Ninguno: 1' },
      { name: 'Interpretación', value: 'Severo: ≤8, Moderado: 9-12, Leve: 13-15' }
    ]
  },
  {
    title: 'Triage START',
    icon: AlertTriangle,
    content: 'Simple Triage and Rapid Treatment para escenas con múltiples víctimas:',
    sections: [
      { name: 'VERDE - Expectante', value: 'Lesiones menores. Camina fuera del área.' },
      { name: 'AMARILLO - Diferido', value: 'Lesiones serias pero no inmediatas.' },
      { name: 'ROJO - Inmediato', value: 'Lesiones que amenazan la vida.' },
      { name: 'NEGRO - Expectante/Fallecido', value: 'Sin signos de vida o lesiones incompatibles.' }
    ]
  },
  {
    title: 'Trauma - Score de Trauma',
    icon: Activity,
    content: 'Evaluación rápida del paciente traumático:',
    sections: [
      { name: 'A - Airway', value: 'Normal: 2, Comprometida: 1, Obstruida: 0' },
      { name: 'B - Breathing', value: 'Normal: 2, Anormal: 1, Ausente: 0' },
      { name: 'C - Circulation', value: 'Pulso <100: 2, >100: 1, Ausente: 0' },
      { name: 'D - Disability', value: 'GCS 14-15: 2, 10-13: 1, <10: 0' },
      { name: 'Interpretación', value: 'TS 10-12: Moderado, <10: Severo, requiere trauma center' }
    ]
  }
]

export default function Procedures() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedProc, setExpandedProc] = useState(0)

  const filteredProcedures = procedures.filter(proc =>
    proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proc.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <Stethoscope size={48} />
          <h1>Procedimientos Técnicos</h1>
          <p>Protocolos, técnicas y evaluaciones médicas para emergencias</p>
        </div>
      </div>

      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar procedimiento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="procedures-grid">
          {filteredProcedures.map((proc, index) => (
            <div 
              key={index} 
              className={`procedure-card ${expandedProc === index ? 'expanded' : ''}`}
              onClick={() => setExpandedProc(expandedProc === index ? -1 : index)}
            >
              <div className="procedure-header">
                <proc.icon size={24} />
                <h4>{proc.title}</h4>
                {expandedProc === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expandedProc === index && (
                <>
                  <p className="procedure-content">{proc.content}</p>
                  <div className="procedure-sections">
                    {proc.sections.map((sec, i) => (
                      <div key={i} className="procedure-section">
                        <span className="section-name">{sec.name}</span>
                        <span className="section-value">{sec.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="info-box">
          <h3>Notas importantes</h3>
          <ul>
            <li>Siempre realiza el Primary Survey antes de cualquier otro procedimiento</li>
            <li>Documenta todos los hallazgos y tiempos</li>
            <li>Comunica cambios significativos al receptor</li>
            <li>Usa equipamiento de protección personal (EPP)</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
