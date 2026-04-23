import { useState } from 'react'
import { Heart, Shield, Users, Clock, Search, Phone, Mail, MapPin, AlertTriangle, FileText, Stethoscope, Activity, ChevronRight, ChevronDown, Pill, ClipboardList, Brain, HeartPulse, Award, Truck, AlertCircle, CheckCircle, Info } from 'lucide-react'

const hierarchyData = [
  {
    rank: 'Chief of EMS',
    name: 'Por Asignar',
    role: 'Director del Departamento',
    responsibilities: [
      'Gestión general del departamento',
      'Toma de decisiones estratégicas',
      'Coordinación con otros departamentos',
      'Supervisión de todos los sectores'
    ]
  },
  {
    rank: 'Assistant Chief',
    name: 'Por Asignar',
    role: 'Subdirector de EMS',
    responsibilities: [
      'Apoyo al Chief en funciones',
      'Gestión de operaciones diarias',
      'Supervisión de supervisores',
      'Reportes y documentación'
    ]
  },
  {
    rank: 'Sector Captain',
    name: 'Por Asignar',
    role: 'Capitán de Sector',
    responsibilities: [
      'Coordinación de equipos por zona',
      'Gestión de emergencias masivas',
      'Asignación de recursos',
      'Reporte al Assistant Chief'
    ]
  },
  {
    rank: 'Lieutenant',
    name: 'Por Asignar',
    role: 'Teniente',
    responsibilities: [
      'Supervisión de equipos de paramedics',
      'Control de calidad en llamadas',
      'Capacitación del personal',
      'Manejo de incidentes'
    ]
  }
]

const staffData = [
  { name: 'Dr. Sarah Mitchell', position: 'Medical Director', shift: '24/7' },
  { name: 'Cpt. James Rodriguez', position: 'Sector 1 Captain', shift: 'Mañana' },
  { name: 'Lt. Emily Chen', position: 'Sector 2 Lieutenant', shift: 'Tarde' },
  { name: 'Sgt. Michael Brown', position: 'Training Sergeant', shift: 'Mañana' },
  { name: 'Off. Jessica Taylor', position: 'Senior Paramedic', shift: 'Noche' },
  { name: 'Off. David Wilson', position: 'Paramedic', shift: 'Tarde' },
  { name: 'Off. Maria Garcia', position: 'Paramedic', shift: 'Mañana' },
  { name: 'Off. Robert Kim', position: 'EMT-A', shift: 'Noche' }
]

const ranksData = [
  { rank: 'EMT-Basic', description: 'Emergency Medical Technician - Básico. Primer respondiente en escenas de emergencia.' },
  { rank: 'EMT-Advanced', description: 'EMT con habilidades avanzadas incluyendo IV y algunas medicaciones.' },
  { rank: 'Paramedic', description: 'Nivel más alto de EMT. Realiza intervenciones avanzadas y decide destino del paciente.' },
  { rank: 'Sergeant', description: 'Supervisa equipos de campo y maneja incidentes menores.' },
  { rank: 'Lieutenant', description: 'Gestiona múltiples unidades y coordina operaciones.' },
  { rank: 'Captain', description: 'Comandante de incidente y supervisor de personal.' },
  { rank: 'Assistant Chief', description: 'Gestión operativa y administrativa del departamento.' },
  { rank: 'Chief', description: 'Director máximo del departamento de EMS.' }
]

const guidesData = {
  procedures: [
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
      content: 'Evaluación completahead-to-toe después de estabilizar:',
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
      icon: Brain,
      content: 'Lectura sistemática del electrocardiograma:',
      sections: [
        { name: 'Ritmo', value: 'Regular/Irregular, Frecuencia' },
        { name: 'Onda P', value: 'Presente/Ausente, morphology' },
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
      icon: AlertCircle,
      content: 'Simple Triage and Rapid Treatment para escenas con múltiples víctimas:',
      sections: [
        { name: 'VERDE - Expectante', value: 'Lesiones menores. Camina fuera del área.' },
        { name: 'AMARILLO - Diferido', value: 'Lesiones serias pero no inmediatas.' },
        { name: 'ROJO - Inmediato', value: 'Lesiones que amenazan la vida.' },
        { name: 'NEGRO - Expectante/ Fallecido', value: 'Sin signos de vida o lesiones incompatibles.' }
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
  ],
  pharmacology: [
    {
      category: 'Cardiovasculares',
      icon: Heart,
      drugs: [
        { name: 'Aspirina (AAS)', dose: '300mg VO', indication: 'Síndrome Coronario Agudo (SCA)', notes: 'Contraindicada en alergia, sangrado activo' },
        { name: 'Nitroglicerina (NTG)', dose: '0.4mg SL', indication: 'Dolor torácico isquémico', notes: 'No usar si FC <50 o hipotensión' },
        { name: 'Adrenalina', dose: '1mg IV/IO (1:10000)', indication: 'Paro cardiorrespiratorio', notes: 'Repetir cada 3-5 min' },
        { name: 'Atropina', dose: '0.5mg IV', indication: 'Bradicardia sintomática', notes: 'Dosis máxima 3mg' },
        { name: 'Amiodarona', dose: '300mg IV', indication: 'FV/TV sin pulso', notes: 'Segunda dosis: 150mg' }
      ]
    },
    {
      category: 'Analgésicos',
      icon: HeartPulse,
      drugs: [
        { name: 'Morfina', dose: '4-8mg IV', indication: 'Dolor moderado-severo', notes: 'Contraindicada en hipotensión, IRA' },
        { name: 'Ketorolaco', dose: '30mg IV/IM', indication: 'Dolor traumático', notes: 'Evitar en sangrado activo, renal' },
        { name: 'Paracetamol', dose: '1g IV', indication: 'Dolor y fiebre', notes: 'Máximo 4g/día' }
      ]
    },
    {
      category: 'Ansiolíticos',
      icon: Brain,
      drugs: [
        { name: 'Midazolam', dose: '2-5mg IV', indication: 'Ansiedad, sedación, convulsiones', notes: 'Riesgo de depresión respiratoria' },
        { name: 'Diazepam', dose: '5-10mg IV/RI', indication: 'Convulsiones, ansiedad', notes: 'Compatible solo con suero fisiológico' }
      ]
    },
    {
      category: 'Antieméticos',
      icon: Activity,
      drugs: [
        { name: 'Metoclopramida', dose: '10mg IV/IM', indication: 'Náuseas y vómitos', notes: 'No usar en obstrucción intestinal' },
        { name: 'Ondansetrón', dose: '4-8mg IV/IM', indication: 'Náuseas y vómitos', notes: 'Compatible con todos los sueros' }
      ]
    },
    {
      category: 'Antidotos',
      icon: Shield,
      drugs: [
        { name: 'Naloxona', dose: '0.4-2mg IV/IN', indication: 'Sobredosis de opioides', notes: 'Titular, efecto corta duración' },
        { name: 'Flumazenil', dose: '0.2mg IV', indication: 'Sobredosis de benzodiazepinas', notes: 'Cautela en epilepticos' },
        { name: 'N-Acetilcisteína (NAC)', dose: '150mg/kg IV', indication: 'Sobredosis de Paracetamol', notes: 'Protocolo específico' }
      ]
    },
    {
      category: 'Soluciones IV',
      icon: Pill,
      drugs: [
        { name: 'Suero Fisiológico (SF 0.9%)', dose: '500-1000ml IV', indication: 'Hipovolemia, deshidratación', notes: 'Primera elección en trauma' },
        { name: 'Ringer Lactato (RL)', dose: '500-1000ml IV', indication: 'Reemplazo de volumen', notes: 'Preferido en quemaduras' },
        { name: 'Glucosado 5% (SG5%)', dose: '500-1000ml IV', indication: 'Hipoglucemia, deshidratación', notes: 'No usar en diabéticos solos' }
      ]
    },
    {
      category: 'Misceláneos',
      icon: Info,
      drugs: [
        { name: 'Adenosina', dose: '6mg IV bolo rápido', indication: 'TSV (taquicardia supraventricular)', notes: 'Seguir con 12mg si no responde' },
        { name: 'Epinefrina', dose: '1mg IV (1:10000)', indication: 'Anafilaxia, PCR', notes: 'Dosis repetibles cada 3-5 min' },
        { name: 'Dexametasona', dose: '8-10mg IV/IM', indication: 'Anafilaxia, edema laríngeo', notes: 'No sustituye a adrenalina' }
      ]
    }
  ],
  operations: [
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
      icon: Users,
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
      title: 'Coordinación con Otros Departments',
      icon: Truck,
      content: 'Trabajo interdepartamental:',
      items: [
        'LSPD: Coordinar escena segura, extricación',
        'LSFD: Incendios, materiales peligrosos, extricación técnica',
        'DC: Investigaciones criminales, escenas complejas',
        'Mantener comunicación constante',
        'Respetar perímetros de seguridad'
      ]
    }
  ]
}

function App() {
  const [activeTab, setActiveTab] = useState('procedures')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedDrug, setExpandedDrug] = useState(null)

  const filteredStaff = staffData.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleDrug = (index) => {
    setExpandedDrug(expandedDrug === index ? null : index)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <div className="logo-icon">
              <Heart size={28} />
            </div>
            <span>EMS RevoRP</span>
          </div>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros') }}>Nosotros</a></li>
            <li><a href="#guias" onClick={(e) => { e.preventDefault(); scrollToSection('guias') }}>Guías RP</a></li>
            <li><a href="#farmacologia" onClick={(e) => { e.preventDefault(); scrollToSection('farmacologia') }}>Farmacología</a></li>
            <li><a href="#personal" onClick={(e) => { e.preventDefault(); scrollToSection('personal') }}>Personal</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <h1>Emergency Medical Services</h1>
        <p>Departamento de Servicios Médicos de Emergencia de RevoRP. Comprometidos con la excelencia en el roleplay médico y la atención de emergencias.</p>
        <button className="hero-btn" onClick={() => scrollToSection('guias')}>
          Ver Guías de Roleplay
        </button>
      </section>

      <section className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="number">24/7</div>
            <div className="label">Servicio Continuo</div>
          </div>
          <div className="stat-card">
            <div className="number">50+</div>
            <div className="label">Miembros Activos</div>
          </div>
          <div className="stat-card">
            <div className="number">1000+</div>
            <div className="label">Emergencias Atendidas</div>
          </div>
          <div className="stat-card">
            <div className="number">&lt;3min</div>
            <div className="label">Tiempo de Respuesta</div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h3>Sobre Nosotros</h3>
            <p>El Departamento de EMS de RevoRP es el principal proveedor de servicios médicos de emergencia en nuestra ciudad virtual. Nuestro equipo está dedicado a proporcionar atención médica de calidad y asistir en situaciones de emergencia.</p>
            <ul className="about-features">
              <li>
                <Stethoscope size={20} />
                <span>Personal capacitado y profesional</span>
              </li>
              <li>
                <Activity size={20} />
                <span>Protocolos médicos actualizados</span>
              </li>
              <li>
                <Shield size={20} />
                <span>Compromiso con la excelencia</span>
              </li>
              <li>
                <Users size={20} />
                <span>Trabajo en equipo multidisciplinario</span>
              </li>
            </ul>
          </div>
          <div className="about-image">
            <Heart size={120} />
          </div>
        </div>
      </section>

      <section id="guias" className="container">
        <div className="section-title">
          <h2>Guías de Roleplay</h2>
          <p>Protocolos, procedimientos diagnósticos y técnicas médicas</p>
        </div>

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'procedures' ? 'active' : ''}`}
            onClick={() => setActiveTab('procedures')}
          >
            Procedimientos
          </button>
          <button
            className={`tab-btn ${activeTab === 'pharmacology' ? 'active' : ''}`}
            onClick={() => setActiveTab('pharmacology')}
          >
            Farmacología
          </button>
          <button
            className={`tab-btn ${activeTab === 'operations' ? 'active' : ''}`}
            onClick={() => setActiveTab('operations')}
          >
            Operaciones
          </button>
          <button
            className={`tab-btn ${activeTab === 'ranks' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranks')}
          >
            Ranks
          </button>
        </div>

        {activeTab === 'procedures' && (
          <div className="procedures-grid">
            {guidesData.procedures.map((proc, index) => (
              <div key={index} className="procedure-card">
                <div className="procedure-header">
                  <proc.icon size={24} />
                  <h4>{proc.title}</h4>
                </div>
                <p className="procedure-content">{proc.content}</p>
                <div className="procedure-sections">
                  {proc.sections?.map((sec, i) => (
                    <div key={i} className="procedure-section">
                      <span className="section-name">{sec.name}</span>
                      <span className="section-value">{sec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pharmacology' && (
          <div className="pharmacology-section">
            {guidesData.pharmacology.map((cat, catIndex) => (
              <div key={catIndex} className="pharmacology-category">
                <div className="category-header">
                  <cat.icon size={20} />
                  <h4>{cat.category}</h4>
                </div>
                <div className="drugs-table">
                  <div className="table-header">
                    <span>Medicamento</span>
                    <span>Dosis</span>
                    <span>Indicación</span>
                    <span>Notas</span>
                  </div>
                  {cat.drugs.map((drug, drugIndex) => (
                    <div 
                      key={drugIndex} 
                      className={`table-row ${expandedDrug === `${catIndex}-${drugIndex}` ? 'expanded' : ''}`}
                      onClick={() => toggleDrug(`${catIndex}-${drugIndex}`)}
                    >
                      <span className="drug-name">
                        {expandedDrug === `${catIndex}-${drugIndex}` ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        {drug.name}
                      </span>
                      <span>{drug.dose}</span>
                      <span>{drug.indication}</span>
                      <span className="notes-cell">{drug.notes}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'operations' && (
          <div className="operations-grid">
            {guidesData.operations.map((op, index) => (
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

        {activeTab === 'ranks' && (
          <div className="ranks-grid">
            {ranksData.map((rank, index) => (
              <div key={index} className="rank-card">
                <div className="rank-badge">
                  <Award size={24} />
                </div>
                <div className="rank-info">
                  <h4>{rank.rank}</h4>
                  <p>{rank.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="personal" className="hierarchy-section">
        <div className="container">
          <div className="section-title">
            <h2>Jerarquía del Departamento</h2>
            <p>Estructura de mando y superiores directos</p>
          </div>

          <div className="hierarchy-grid">
            {hierarchyData.map((member, index) => (
              <div key={index} className="hierarchy-card">
                <div className="hierarchy-header">
                  <div className="rank">{member.rank}</div>
                  <div className="name">{member.name}</div>
                </div>
                <div className="hierarchy-body">
                  <div className="role">{member.role}</div>
                  <ul className="responsibilities">
                    {member.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <ChevronRight size={16} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="staff-section">
        <div className="container">
          <div className="section-title">
            <h2>Personal Activo</h2>
            <p>Miembros actuales del departamento</p>
          </div>

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nombre o posición..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="staff-grid">
            {filteredStaff.map((staff, index) => (
              <div key={index} className="staff-card">
                <div className="staff-avatar">
                  {staff.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="name">{staff.name}</div>
                <div className="position">{staff.position}</div>
                <div className="shift">Turno: {staff.shift}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-grid">
          <div className="contact-item">
            <Phone size={24} />
            <div>
              <div className="label">Emergencias</div>
              <div className="value">911</div>
            </div>
          </div>
          <div className="contact-item">
            <Clock size={24} />
            <div>
              <div className="label">Horario</div>
              <div className="value">24 horas / 7 días</div>
            </div>
          </div>
          <div className="contact-item">
            <Mail size={24} />
            <div>
              <div className="label">Email</div>
              <div className="value">ems@revorp.com</div>
            </div>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <div>
              <div className="label">Base Principal</div>
              <div className="value">Central Medical Center</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 EMS RevoRP - Emergency Medical Services. Todos los derechos reservados.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Servidor de roleplay GTA V - RevoRP
        </p>
      </footer>
    </div>
  )
}

export default App
