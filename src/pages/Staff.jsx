import { useState } from 'react'
import { Users, Search, ChevronRight, Award } from 'lucide-react'
import Layout from '../components/Layout'

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
    rank: 'Captain',
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
    rank: 'Lieutenant (Supervisor)',
    name: 'Lucas Vargas',
    role: 'Supervisor de Turno',
    responsibilities: [
      'Supervisión de equipos de paramedics',
      'Control de calidad en llamadas',
      'Capacitación del personal',
      'Manejo de incidentes'
    ]
  }
]

const staffData = [
  { name: 'Lucas Vargas', position: 'Lieutenant - Supervisor', shift: '24/7', status: 'active' },
  { name: 'Dr. Sarah Mitchell', position: 'Medical Director', shift: '24/7', status: 'active' },
  { name: 'Cpt. James Rodriguez', position: 'Captain - Sector 1', shift: 'Mañana', status: 'active' },
  { name: 'Lt. Emily Chen', position: 'Lieutenant - Sector 2', shift: 'Tarde', status: 'active' },
  { name: 'Sgt. Michael Brown', position: 'Training Sergeant', shift: 'Mañana', status: 'active' },
  { name: 'Off. Jessica Taylor', position: 'Senior Paramedic', shift: 'Noche', status: 'active' },
  { name: 'Off. David Wilson', position: 'Paramedic', shift: 'Tarde', status: 'active' },
  { name: 'Off. Maria Garcia', position: 'Paramedic', shift: 'Mañana', status: 'active' }
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

export default function Staff() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('hierarchy')

  const filteredStaff = staffData.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <Users size={48} />
          <h1>Personal EMS</h1>
          <p>Jerarquía, ranks y miembros del departamento</p>
        </div>
      </div>

      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'hierarchy' ? 'active' : ''}`}
            onClick={() => setActiveTab('hierarchy')}
          >
            Jerarquía
          </button>
          <button
            className={`tab-btn ${activeTab === 'staff' ? 'active' : ''}`}
            onClick={() => setActiveTab('staff')}
          >
            Personal Activo
          </button>
          <button
            className={`tab-btn ${activeTab === 'ranks' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranks')}
          >
            Ranks
          </button>
        </div>

        {activeTab === 'hierarchy' && (
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
        )}

        {activeTab === 'staff' && (
          <div>
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
                <div key={index} className={`staff-card ${staff.name === 'Lucas Vargas' ? 'supervisor' : ''}`}>
                  <div className="staff-avatar">
                    {staff.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="name">{staff.name}</div>
                  <div className="position">{staff.position}</div>
                  <div className="shift">Turno: {staff.shift}</div>
                  {staff.name === 'Lucas Vargas' && (
                    <span className="supervisor-badge">SUPERVISOR</span>
                  )}
                </div>
              ))}
            </div>
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
      </div>
    </Layout>
  )
}
