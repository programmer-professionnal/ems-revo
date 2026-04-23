import { Link } from 'react-router-dom'
import { ArrowLeft, Stethoscope, Heart, Wind, Droplet, Shield } from 'lucide-react'
import Layout from '../../components/Layout'

const techniques = [
  {
    title: 'Acceso Venoso Periférico',
    icon: Droplet,
    category: 'Vía Venosa',
    steps: [
      'Preparar equipo: catéter, SF 0.9%, equipo de venopunción, guantes',
      'Seleccionar vena: dorso de mano, antebrazo (evitar zonas de flexión)',
      'Colocar miembro por debajo del nivel del corazón',
      'Aplicar torniquete 10-15cm proximal',
      'Puncionar con bisel hacia arriba, 15-30°',
      'Verificar reflujo venoso, avanzar catéter, retirar fiador',
      'Conectar línea, soltar torniquete, fijar catéter',
      'Etiquetar con fecha, hora y nombre del operador'
    ],
    complications: ['Flebitis', 'Infección', 'Extravasación', 'Neumotórax (raro en periférico)'],
    tips: 'En shock hipovolémico severo, considerar vía intraósea si no se logra acceso periférico en 90 segundos'
  },
  {
    title: 'Acceso Intraóseo (IO)',
    icon: Droplet,
    category: 'Vía Venosa',
    steps: [
      'Indicaciones: Imposible acceso IV periférico, PCR, shock severo',
      'Sitio de elección: Extremidad proximal del húmero o tibia proximal',
      'Preparar piel con antiséptico',
      'Insertar aguja IO perpendicular a la piel',
      'Avanzar hasta pérdida de resistencia + sensación de "pop"',
      'Aspirar少量 de médula (opcional)',
      'Conectar línea y verificar flujo',
      'Administrar cualquier medicación IV por esta vía'
    ],
    complications: ['Dolor en la inserción', 'Infección', 'Fractura (raro)', 'Síndrome compartimental'],
    tips: 'Todo medicamento IV puede administrarse por IO. Primera línea en PCR si no hay acceso IV'
  },
  {
    title: 'Intubación Orotraqueal (IOT)',
    icon: Wind,
    category: 'Vía Aérea',
    steps: [
      'Preparar: laringoscopio (pala correcta), tubo endotraqueal (talla según edad), balín, guía',
      'Preoxigenar al paciente con O2 al 100% durante 3-5 min',
      'Posición: decúbito supina, alineación cabeza-cuello-tronco',
      'Abrir boca con técnica de mandíbula (evitar flexión cervical)',
      'Introducir laringoscopio por derecha hacia izquierda, traccionar',
      'Visualizar glotis: cuerdas vocales,棘間切痕',
      'Introducir TET con guía por lado derecho',
      'Inflar balín (5-10ml según tamaño), retirar guía',
      'Verificar: rise chest, bilateral air entry, no epigastric sounds',
      'Fijar tubo, conectar a ventilador/Ambu con O2'
    ],
    complications: ['Lesión dental', 'Laringoespasmo', 'Intubación esofágica', 'Neumotórax', 'HIPoxia'],
    tips: 'Siempre verificar posición con capnografía. La intubación esmeralda es la más difícil - tener siempre bougie'
  },
  {
    title: 'Desfibrilación Manual',
    icon: Heart,
    category: 'Reanimación',
    steps: [
      'Confirmar ritmo: FV o TV sin pulso - SOLO desfibrilar estos ritmos',
      'Activar sistema de alerta, iniciar RCP mientras se prepara',
      'Colocar parches autoadhesivos: apex y base (evitar área de marcapasos si已知)',
      'Conectar cables al desfibrilador',
      'Analizar ritmo (si modo semiautomático), cargar mientras se comprime',
      'Verificar que nadie toque al paciente',
      'Descargar: 360J bifásico o 200J monofásico',
      'Reanudar RCP inmediatamente por 2 minutos',
      'Reevaluar ritmo cada 2 minutos de RCP',
      'Si persiste: segunda descarga a misma o mayor energía'
    ],
    complications: ['Quemaduras cutáneas', 'Daño a operador (si no se aleja)', 'Fallo en desfibrilación'],
    tips: 'La desfibrilación PRECEDE a cualquier medicación. Minimizar pausas en compresiones'
  },
  {
    title: 'Inmovilización Cervical',
    icon: Shield,
    category: 'Trauma',
    steps: [
      'Indicación: Trauma craneoencefálico, facial, cervical, múltiple',
      'NO retirar casco excepto si obstruct vía aérea',
      'Manual: tracción axial mientras llega collarín',
      'Medir talla de collarín: ángulo mandibular a hombro',
      'Aplicar collarín cervical (rigido o multivac)',
      'Colocar manos a ambos lados de cabeza manteniendo neutral alignment',
      'Mover al paciente en bloque (log roll)',
      'Asegurar a tabla espinal con straps',
      'Inmovilización completa: head blocks, straps de pelvis y piernas'
    ],
    complications: ['Dificultad respiratoria si collar demasiado apretado', 'Lesión por movimiento si mal realizado'],
    tips: 'Si hay vía aérea difícil, no retirar collar hasta asegurar vía aérea definitiva'
  },
  {
    title: 'Sutura de Heridas',
    icon: Stethoscope,
    category: 'Técnicas Menores',
    steps: [
      'Indicaciones: Heridas limpias, bordes juntos, >2cm, zonas de tensión',
      'Contraindicaciones: Mordeduras, contaminación severa, >6h sin tratamiento',
      'Preparar: guantes, antiséptico, anestésico local, suturas, instrumental',
      'Limpiar herida con SF y antiséptico',
      'Anestesiar bordes con lidocaína 1-2%',
      'Explorar herida (cuerpo extraño, lesión tendinosa)',
      'Irrigar profusamente (500-1000ml SF)',
      'Suturar en capas si profunda: fascia, subcutis, piel',
      'Sutura simple discontinua o continúa',
      'Cubrir con apósito estéril'
    ],
    complications: ['Infección', 'Dehiscencia', 'Cicatriz queloide'],
    tips: 'En zonas de alta tensión (articulaciones), usar suturas de tensión o steristrips'
  }
]

export default function ProceduresTechniques() {
  return (
    <Layout>
      <div className="container">
        <div className="page-nav">
          <Link to="/procedimientos" className="back-link">
            <ArrowLeft size={18} /> Volver a Procedimientos
          </Link>
        </div>

        <div className="section-header techniques">
          <Stethoscope size={40} />
          <div>
            <h1>Técnicas de Procedimientos</h1>
            <p>Guías paso a paso de técnicas de emergencia</p>
          </div>
        </div>

        {techniques.map((tech, index) => (
          <div key={index} className="technique-card">
            <div className="technique-header">
              <tech.icon size={28} />
              <div>
                <h3>{tech.title}</h3>
                <span className="technique-category">{tech.category}</span>
              </div>
            </div>

            <div className="technique-content">
              <div className="technique-steps">
                <h4>Pasos</h4>
                <ol>
                  {tech.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="technique-info">
                <div className="complications">
                  <h4>Complicaciones</h4>
                  <ul>
                    {tech.complications.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </div>
                <div className="tips">
                  <h4>Tips</h4>
                  <p>{tech.tips}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}