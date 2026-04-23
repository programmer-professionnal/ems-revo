import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <MessageSquare size={48} />
          <h1>Contacto</h1>
          <p>Información de contacto y cómo comunicarse con EMS</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-section">
          <div className="contact-grid">
            <div className="contact-card">
              <Phone size={32} />
              <h3>Emergencias</h3>
              <p className="contact-main">911</p>
              <p className="contact-desc">Línea de emergencias disponible 24/7</p>
            </div>
            
            <div className="contact-card">
              <Clock size={32} />
              <h3>Horario</h3>
              <p className="contact-main">24 horas</p>
              <p className="contact-desc">7 días de la semana</p>
            </div>
            
            <div className="contact-card">
              <Mail size={32} />
              <h3>Discord</h3>
              <p className="contact-main">https://discord.gg/JDvmfszMmF</p>
              <p className="contact-desc">Para consultas administrativas</p>
            </div>
            
            <div className="contact-card">
              <MapPin size={32} />
              <h3>Base Principal</h3>
              <p className="contact-main">Central Medical Center</p>
              <p className="contact-desc">Dirección principal de EMS</p>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3>¿Necesitas unirte a EMS?</h3>
          <p>Si estás interesado en formar parte del departamento de EMS de RevoRP, contacta con nosotros a través de Discord o presenta tu solicitud en el formulario correspondiente.</p>
        </div>

        <div className="info-box">
          <h3>Información importante</h3>
          <ul>
            <li>Para emergencias reales, contacta a los servicios de emergencia de tu país</li>
            <li>Esta página es únicamente para propósitos de roleplay en el servidor de GTA V</li>
            <li>Los medicamentos y procedimientos listados son con fines educativos de roleplay</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
