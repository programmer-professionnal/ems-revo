import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Heart, Menu, X, Home, Pill, Stethoscope, Users, MapPin, ChevronRight, Phone, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'

const mainNav = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/farmacologia', label: 'Farmacología', icon: Pill },
  { path: '/procedimientos', label: 'Procedimientos', icon: Stethoscope },
  { path: '/personal', label: 'Personal', icon: Users },
  { path: '/operaciones', label: 'Operaciones', icon: MapPin },
]

const pharmacologyNav = [
  { path: '/farmacologia', label: 'Principal', sub: false },
  { path: '/farmacologia/urgencia', label: 'Urgencia Vital', sub: true },
  { path: '/farmacologia/cardio', label: 'Cardiovascular', sub: true },
  { path: '/farmacologia/analgesia', label: 'Analgésicos', sub: true },
  { path: '/farmacologia/antidotos', label: 'Antidotos', sub: true },
]

const proceduresNav = [
  { path: '/procedimientos', label: 'Principal', sub: false },
  { path: '/procedimientos/evaluacion', label: 'Evaluación', sub: true },
  { path: '/procedimientos/tecnicas', label: 'Técnicas', sub: true },
  { path: '/procedimientos/triage', label: 'Triage', sub: true },
  { path: '/procedimientos/ecg', label: 'ECG', sub: true },
]

const operationsNav = [
  { path: '/operaciones', label: 'Principal', sub: false },
  { path: '/operaciones/llamadas', label: 'Llamadas', sub: true },
  { path: '/operaciones/radio', label: 'Radio', sub: true },
  { path: '/operaciones/sectores', label: 'Sectores', sub: true },
  { path: '/operaciones/coordinacion', label: 'Coordinación', sub: true },
]

const personalNav = [
  { path: '/personal', label: 'Principal', sub: false },
  { path: '/personal/jerarquia', label: 'Jerarquía', sub: true },
  { path: '/personal/staff', label: 'Staff', sub: true },
  { path: '/personal/ranks', label: 'Ranks', sub: true },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const getCurrentNav = () => {
    if (location.pathname.startsWith('/farmacologia')) return { main: pharmacologyNav, key: 'farmacologia' }
    if (location.pathname.startsWith('/procedimientos')) return { main: proceduresNav, key: 'procedimientos' }
    if (location.pathname.startsWith('/personal')) return { main: personalNav, key: 'personal' }
    if (location.pathname.startsWith('/operaciones')) return { main: operationsNav, key: 'operaciones' }
    return null
  }

  const currentNav = getCurrentNav()

  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Heart size={28} />
            </div>
            <span>EMS RevoRP</span>
          </Link>
          
          <div className="nav-desktop">
            {mainNav.map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'active' : ''}`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {mainNav.map(item => (
            <Link 
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      <div className="layout-body">
        {currentNav && location.pathname !== '/' && (
          <aside className="sidebar">
            <div className="sidebar-header">
              <h3>{currentNav.key.charAt(0).toUpperCase() + currentNav.key.slice(1)}</h3>
            </div>
            <ul className="sidebar-nav">
              {currentNav.main.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.sub && <ChevronRight size={14} />}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <main className={currentNav && location.pathname !== '/' ? 'main-with-sidebar' : ''}>
          {children}
        </main>
      </div>

      <footer className="footer">
        <p>© 2024 EMS RevoRP - Emergency Medical Services</p>
        <p>Servidor de roleplay GTA V - RevoRP</p>
      </footer>
    </div>
  )
}