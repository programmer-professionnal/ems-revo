import { Link } from 'react-router-dom'
import { Heart, Stethoscope, Pill, Users, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const features = [
  {
    icon: Pill,
    title: 'Farmacología',
    description: 'Guía completa de medicamentos, dosis e indicaciones para emergencias',
    link: '/farmacologia',
    color: '#dc2626'
  },
  {
    icon: Stethoscope,
    title: 'Procedimientos',
    description: 'Protocolos técnicos, evaluación de pacientes y triage',
    link: '/procedimientos',
    color: '#7c3aed'
  },
  {
    icon: Users,
    title: 'Personal',
    description: 'Jerarquía, ranks y estructura del departamento',
    link: '/personal',
    color: '#059669'
  },
  {
    icon: MapPin,
    title: 'Operaciones',
    description: 'Protocolos operativos y coordinación con otros departamentos',
    link: '/operaciones',
    color: '#0891b2'
  }
]

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Emergency Medical Services</h1>
        <p>Departamento de Servicios Médicos de Emergencia de RevoRP. Comprometidos con la excelencia en el roleplay médico y la atención de emergencias.</p>
        <Link to="/farmacologia" className="hero-btn">
          Ver Guías
        </Link>
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

      <section className="features-section">
        <div className="container">
          <div className="section-title">
            <h2>Secciones</h2>
            <p>Accede a todas las guías y recursos del departamento</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index} className="feature-card">
                <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-link">
                  Ver más <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
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
                <Heart size={20} />
                <span>Protocolos médicos actualizados</span>
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

      <section className="container">
        <div className="emergency-box">
          <Phone size={32} />
          <div>
            <h3>¿Necesitas ayuda?</h3>
            <p>Para emergencias en el servidor, llama al <strong>911</strong></p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
