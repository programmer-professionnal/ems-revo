import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/farmacologia', label: 'Farmacología' },
  { path: '/procedimientos', label: 'Procedimientos' },
  { path: '/operaciones', label: 'Operaciones' },
  { path: '/personal', label: 'Personal' },
  { path: '/contacto', label: 'Contacto' },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Heart size={28} />
            </div>
            <span>EMS RevoRP</span>
          </Link>
          
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <p>© 2024 EMS RevoRP - Emergency Medical Services</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Servidor de roleplay GTA V - RevoRP
        </p>
      </footer>
    </div>
  )
}
