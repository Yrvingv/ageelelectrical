import React from 'react'

/** =========================
 *  DATA (editá lo que necesites)
 *  ========================= */
const siteData = {
  empresa: "ageelprojects",
  producto: "Reparaciones e instalaciones eléctricas para escuelas y edificios",
  nicho:
    "Reparaciones e instalaciones eléctricas para escuelas y edificios (Tucumán y alrededores), con foco en continuidad operativa, adecuación normativa (PAT, pararrayos, selectividad), iluminación LED, respaldo (UPS/ATS) y mantenimiento preventivo.",
  clienteIdeal:
    "Decisor: Director/a, apoderado legal o administrador de edificios con poder de compra. Dolor: instalaciones antiguas/obsoletas, microcortes, tableros que disparan, falta de PAT/pararrayos, luminarias ineficientes. Urgencia: clases interrumpidas, quejas de padres/usuarios, inspecciones/regulaciones. Valoran ejecución fuera del horario escolar, garantía y documentación/certificados.",
  dolores: [
    {
      titulo: "microcortes en plena clase",
      keyword: "microcortes",
      desc:
        "Aula a oscuras → técnico ajusta tablero y protecciones → prueba final con luz estable.",
      cta: "Programar inspección",
    },
    {
      titulo: "La bomba de agua no arranca",
      keyword: "Era nueva y ya se quemó",
      desc:
        "Click del diferencial → detección de falla de arranque → Ajuste de fases → test botón “T”.",
      cta: "Diagnóstico en 24 h",
    },
    {
      titulo: "tablero sin rotulado",
      keyword: "tableros desordenados",
      desc:
        "Antes: caos de cables → Después: rotulado claro, selectividad y orden.",
      cta: "Tablero seguro en 72 h",
    },
    {
      titulo: "diferenciales que saltan",
      keyword: "disparos de diferenciales",
      desc: "Click en el RCD → localización de fuga (línea/equipo) → reparación/reemplazo → prueba botón “T”.",
      cta: "Diagnóstico en 24 h",
    },
    {
      titulo: "iluminación deficiente en aulas",
      keyword: "aulas oscuras",
      desc: "Medición con luxómetro → recambio a LED y redistribución → luz uniforme sin parpadeos.",
      cta: "Plan de iluminación",
    },
    {
      titulo: "sin puesta a tierra (PAT) o pararrayos",
      keyword: "falta de PAT/pararrayos",
      desc: "Ensayo de tierra → instalación de jabalinas y bajantes → medición final y certificado.",
      cta: "Adecuar a normativa",
    }
  ],
  urls: {
    instagram: "https://www.instagram.com/ageel.projects/",
    facebook: "https://www.facebook.com/ageelprojects",
    tiktok: "https://www.tiktok.com/@ageel.projects",
    sitio: "https://yrvingv.github.io/ageelprojects/",
    // Si tenés WhatsApp, dejalo así: +5493813594194 (lo sanitizo en runtime)
    whatsapp: "+5493813594194",
  },
  imagenes: ["Img001.png", "Img002.png", "Img003.png", "Img004.png"],
  video: "presenta.webm",
  bullets: [
    "Continuidad operativa: sin clases interrumpidas.",
    "Adecuación normativa: PAT, pararrayos y selectividad.",
    "Luz eficiente: recambio LED con medición de lux.",
    "Respaldo: UPS/ATS para microcortes.",
    "Mantenimiento preventivo con checklists.",
  ],
  pasos: [
    { n: 1, t: "Descubrir", d: "Agenda inspección y relevamos riesgos y prioridades." },
    { n: 2, t: "Usar", d: "Propuesta 30•60•90 y cronograma sin interrumpir clases." },
    { n: 3, t: "Confirmar", d: "Ejecución con pruebas, rotulado y certificaciones." },
    { n: 4, t: "Medir", d: "Checklist y recomendaciones de mejora continua." },
  ],
  metricas: [
    { n: "3+", l: "instituciones asistidas" },
    { n: "15+", l: "intervenciones completadas" },
    { n: "9,7/10", l: "satisfacción promedio" },
  ],
}

/** =========================
 *  HELPERS
 *  ========================= */
function asset(path) {
  return import.meta.env.BASE_URL + path
}

function RotadorPains() {
  const items = siteData.dolores.map((d) => d.titulo)
  const [idx, setIdx] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 2200)
    return () => clearInterval(t)
  }, [])
  return <span className="rotador">{items[idx]}</span>
}

/** =========================
 *  ICONOS (SVG inline)
 *  ========================= */
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.3c0-.4.3-.7.7-.7z"/></svg>
)
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16 3c.6 1.7 1.9 3.2 3.5 4V9c-1.6-.1-3.1-.7-4.4-1.6V14a6 6 0 1 1-6-6c.3 0 .7 0 1 .1V10a3.5 3.5 0 1 0 2.5 3.4V3h3z"/></svg>
)
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2c-.1-1.7-.6-3.3-1.3-4.7A8.02 8.02 0 0 1 19.9 11zM12 4c.9 1.2 1.8 3.4 1.9 6h-3.8c.1-2.6 1-4.8 1.9-6zM6.6 6.3C5.9 7.7 5.4 9.3 5.3 11H2.1a8.02 8.02 0 0 1 4.5-4.7zM2.1 13h3.2c.1 1.7.6 3.3 1.3 4.7A8.02 8.02 0 0 1 2.1 13zM12 20c-.9-1.2-1.8-3.4-1.9-6h3.8c-.1 2.6-1 4.8-1.9 6zM17.4 17.7c.7-1.4 1.2-3 1.3-4.7h3.2a8.02 8.02 0 0 1-4.5 4.7z"/></svg>
)
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 3.9A10 10 0 0 0 3.5 17.8L3 21l3.3-.9A10 10 0 1 0 20 3.9zm-8 .9a8 8 0 0 1 6.3 12.8c-.3.4-.8.7-1.3.6-1.1-.3-2.7-.9-4.6-2.1-2-.1-3.9-1.8-4.9-3-.7-1-1.3-2.1-1.6-3.3-.2-.6.2-1.2.7-1.4.8-.4 1.7-.9 1.7-.9.4-.2.9 0 1 .5.2.8.6 1.9 1.1 2.6.3.4.2.9-.1 1.2l-.5.6c.8 1.1 2 2 3.3 2.6l.6-.5c.3-.3.8-.3 1.2-.1.8.3 1.8.8 2.6 1 .5.2.8.6.7 1.1 0 0-.4.9-.8 1.7a1 1 0 0 1-1.2.6A8 8 0 0 1 12 4.8z"/></svg>
)

/** =========================
 *  APP
 *  ========================= */
export default function App() {
  // Link de WhatsApp si hay número; fallback al sitio
  const waNumber = (siteData.urls.whatsapp || "").replace(/\D/g, "")
  const waMsg = encodeURIComponent("Quiero inspección técnica para mi escuela/edificio")
  const waHref = waNumber ? `https://wa.me/${waNumber}?text=${waMsg}` : siteData.urls.sitio

  // Animación de aparición para los pasos (IntersectionObserver)
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("appear")
        })
      },
      { threshold: 0.2 }
    )
    document.querySelectorAll(".step").forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-left">
          <img src={asset("logo-ageel.svg")} alt="logo" className="logo" />
          <span className="brand">{siteData.empresa}</span>
        </div>
        <div className="nav-right">
          <a className="btn btn-primary" href="#cta">Agendar visita</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero container">
        <p className="attention" style={{ textAlign: 'center', fontSize: 'clamp(28px, 6vw, 60px)', lineHeight: 1.15 }}>
          ¿<RotadorPains /> ?
        </p>
        <h1 className="title" style={{ textAlign: 'center', fontSize: 'clamp(14px, 6vw, 40px)', lineHeight: 1.15 }}>
          <span className="white">{siteData.producto}</span><br />
        </h1>
        <p className="subtitle" style={{ textAlign: 'justify', fontSize: 'clamp(10px, vw, 20px)', lineHeight: 1.05 }}>
          En muchas escuelas se repiten los mismos problemas: microcortes en plena clase, diferenciales que disparan, sobrecargas y cables envejecidos, tableros sin rotulado ni selectividad, tomas flojas y luminarias que parpadean. Falta de PAT o pararrayos, mala iluminación y mantenimiento irregular interrumpen actividades y complican inspecciones, generando riesgos eléctricos y costos.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#cta">Agendar visita</a>
          <a className="btn btn-ghost" href="#faq">Preguntas frecuentes</a>
        </div>
      </header>

      {/* MÉTRICAS */}
      <section className="metrics container">
        {siteData.metricas.map((m, i) => (
          <div key={i} className="card metric">
            <div className="metric-n">{m.n}</div>
            <div className="metric-l">{m.l}</div>
          </div>
        ))}
      </section>

      {/* VIDEO + BULLETS */}
      <section className="video-bullets container">
        <div className="video-card">
          <div className="video-frame">
            <video controls poster={asset("poster.png")}>
              <source src={asset(siteData.video)} type="video/webm" />
              Tu navegador no soporta video.
            </video>
          </div>
        </div>
        <ul className="bullets">
          <p className="subtitle" style={{ textAlign: 'justify', fontSize: 'clamp(14px, 30vw, 20px)', lineHeight: 1.15 }}>
          Qué solucionamos?
          </p>
          {siteData.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      {/* PASOS */}
      <section className="steps container">
        {siteData.pasos.map((p) => (
          <div className="step card" key={p.n}>
            <div className="step-num">{p.n}</div>
            <div className="step-title">{p.t}</div>
            <div className="step-desc">{p.d}</div>
          </div>
        ))}
      </section>

      {/* CARRUSEL */}
      <section className="carousel container">
        <Carousel images={siteData.imagenes} />
      </section>

      {/* FAQ */}
      <section id="faq" className="faq container">
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Cómo es la instalación y en qué horarios trabajan?</summary>
          <p>
            Relevamos, proponemos y ejecutamos <strong>fuera del horario escolar</strong> cuando se requiere
            corte o pruebas. Coordinamos por WhatsApp y actas.
          </p>
        </details>
        <details>
          <summary>¿Es compatible con edificios antiguos?</summary>
          <p>
            Sí. Incluye escuelas/edificios con instalaciones antiguas u obsoletas; normalizamos cableado,
            tableros, PAT y pararrayos según normativa vigente.
          </p>
        </details>
        <details>
          <summary>¿Cuánto demora?</summary>
          <p>Diagnóstico en 24 h; adecuaciones típicas entre 72 h y 2 semanas, según alcance.</p>
        </details>
        <details>
          <summary>¿Cómo presupuestan?</summary>
          <p>
            Llave en mano (MO + materiales) o MO + pliegos. Entregamos PDF con detalle y cronograma.
          </p>
        </details>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="cta container">
        <h3>Electricidad segura, sin frenar las clases.</h3>
        <p>Agendá tu visita técnica y recibí un plan 30•60•90 con prioridades claras.</p>
        <div className="actions">
          <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
            <span className="ico"><IconWhatsApp /></span> WhatsApp
          </a>
          <a className="btn btn-outline" href={siteData.urls.sitio} target="_blank" rel="noreferrer">
            Visitar sitio
          </a>
        </div>
      </section>

      <footer className="footer container">
        <div className="socials">
          <a href={siteData.urls.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><IconInstagram/></a>
          <a href={siteData.urls.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><IconFacebook/></a>
          <a href={siteData.urls.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer"><IconTikTok/></a>
          <a href={siteData.urls.sitio} aria-label="Sitio" target="_blank" rel="noreferrer"><IconGlobe/></a>
        </div>
        <div className="legal">
          <small>
            © {new Date().getFullYear()} {siteData.empresa} — Diseñado y Administrado por YRVING VIERA.
          </small>
        </div>
      </footer>
    </div>
  )
}

/** =========================
 *  CARRUSEL
 *  ========================= */
function Carousel({ images }) {
  const [idx, setIdx] = React.useState(0)
  const prev = () => setIdx((idx - 1 + images.length) % images.length)
  const next = () => setIdx((idx + 1) % images.length)

  return (
    <div className="carousel-wrap">
      <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {images.map((img, i) => (
          <div className="carousel-item" key={i}>
            <img src={asset(img)} alt={`Imagen ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="btn btn-outline" onClick={prev} aria-label="Anterior">‹</button>
        <button className="btn btn-outline" onClick={next} aria-label="Siguiente">›</button>
      </div>
    </div>
  )
}
