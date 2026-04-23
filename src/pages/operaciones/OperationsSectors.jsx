import { Link } from 'react-router-dom'
import { MapPin, ArrowLeft, AlertCircle } from 'lucide-react'
import Layout from '../../components/Layout'

const sectors = [
  {
    id: 'A1',
    name: 'Centro Urbano Norte',
    coverage: 'Plaza Central, Avenida Principal, Zona Comercial',
    hospitals: ['Hospital Central', 'Clínica Norte'],
    responseTime: '3-5 min',
    base: 'Estación Central'
  },
  {
    id: 'A2',
    name: 'Centro Urbano Sur',
    coverage: 'Zona Residencial Sur, Parque Central, Universidad',
    hospitals: ['Hospital Universitario'],
    responseTime: '4-6 min',
    base: 'Estación Sur'
  },
  {
    id: 'B1',
    name: 'Zona Industrial',
    coverage: 'Polígono Industrial, Fábricas, Almacenes',
    hospitals: ['Hospital Industrial'],
    responseTime: '5-8 min',
    base: 'Estación Industrial'
  },
  {
    id: 'B2',
    name: 'Barrios Periféricos',
    coverage: 'Barrio Este, Barrio Oeste, Urbanización Nueva',
    hospitals: ['Centro de Salud Periférico'],
    responseTime: '6-10 min',
    base: 'Estación Este'
  },
  {
    id: 'C1',
    name: 'Carretera Norte',
    coverage: 'Autopista Principal KM 0-30, Área de Servicio',
    hospitals: ['Hospital de Carretera'],
    responseTime: '8-12 min',
    base: 'Unidad Móvil'
  },
  {
    id: 'C2',
    name: 'Carretera Sur',
    coverage: 'Autopista Principal KM 30-60, Pueblo Montaña',
    hospitals: ['Hospital Comarcal'],
    responseTime: '10-15 min',
    base: 'Unidad Móvil'
  },
  {
    id: 'D1',
    name: 'Zona Rural',
    coverage: 'Pueblos del Valle, Aldeas, Fincas',
    hospitals: ['Centro de Salud Rural'],
    responseTime: '15-25 min',
    base: 'Ambulancia Rural'
  },
  {
    id: 'D2',
    name: 'Zona Montañosa',
    coverage: 'Sierra, Rastrillaje, Refugios',
    hospitals: ['HELICOPTERO si disponible'],
    responseTime: '20-30 min',
    base: 'Helicóptero / Unidad Montaña'
  }
]

export default function OperationsSectors() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/operaciones" className="back-link">
            <ArrowLeft size={18} /> Volver a Operaciones
          </Link>
        </div>

        <div className="section-header sectors">
          <MapPin size={40} />
          <div>
            <h1>Sectores de Cobertura</h1>
            <p>Zonas de responsabilidad y tiempos de respuesta</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Mapa de Sectores</h2>
          <p>Cada sector tiene asignado un equipo y tiempo de respuesta objetivo. La cobertura puede variar según el tráfico y condiciones.</p>
          
          <div className="sectors-list">
            {sectors.map((sector, index) => (
              <div key={index} className="sector-item">
                <div className="sector-id">{sector.id}</div>
                <div className="sector-details">
                  <h3>{sector.name}</h3>
                  <div className="sector-info-grid">
                    <div className="sector-info-item">
                      <strong>Cobertura:</strong>
                      <span>{sector.coverage}</span>
                    </div>
                    <div className="sector-info-item">
                      <strong>Hospitales cercanos:</strong>
                      <span>{sector.hospitals.join(', ')}</span>
                    </div>
                    <div className="sector-info-item">
                      <strong>Base asignada:</strong>
                      <span>{sector.base}</span>
                    </div>
                  </div>
                </div>
                <div className="sector-response">
                  <div className="response-time">
                    <span className="response-value">{sector.responseTime}</span>
                    <span className="response-label">Tiempo respuesta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h3><AlertCircle size={20} /> Protocolos de Transporte</h3>
          <ul>
            <li><strong>Distancia {'<5km'}:</strong> Transporte por tierra siempre que sea posible</li>
            <li><strong>Distancia 5-20km:</strong> Evaluar según estado del paciente y tráfico</li>
            <li><strong>Distancia {'>20km'} o zona rural:</strong> Considerar helicóptero si disponible</li>
            <li><strong>Trauma severo:</strong> Transportar al centro de trauma más cercano</li>
            <li><strong>SCA:</strong> Transportar al centro con hemodinamia si {'<90min'}</li>
          </ul>
        </div>

        <div className="warning-box">
          <h3><AlertCircle size={20} /> Zonas de Difícil Acceso</h3>
          <p>Las zonas D1 y D2 pueden requerir tiempos de respuesta superiores debido a:</p>
          <ul>
            <li>Vías en mal estado o inexistentes</li>
            <li>Distancia considerable a centros hospitalarios</li>
            <li>Condiciones meteorológicas adversas</li>
            <li>Horario de operatividad de helicopptero limitado</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}