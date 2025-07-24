import React from 'react';

const services = [
  {
    icon: (
      <svg width="42" height="42" className="card-icon" viewBox="0 0 42 42"><circle cx="21" cy="21" r="18" fill="#7f3fff"/><path d="M14 21h14M21 14v14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Transformación Digital",
    desc: "Impulsamos la adopción tecnológica con soluciones en la nube y digitalización empresarial."
  },
  {
    icon: (
      <svg width="42" height="42" className="card-icon" viewBox="0 0 42 42"><rect x="8" y="14" width="26" height="14" rx="7" fill="#00e4ff"/><path d="M21 21v7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Optimización de Procesos",
    desc: "Implementamos prácticas de ingeniería industrial para elevar la eficiencia operativa."
  },
  {
    icon: (
      <svg width="42" height="42" className="card-icon" viewBox="0 0 42 42"><path d="M21 8a13 13 0 1 0 13 13" stroke="#7f3fff" strokeWidth="2" fill="none"/><circle cx="34" cy="21" r="4" fill="#00e4ff"/></svg>
    ),
    title: "Sostenibilidad",
    desc: "Desarrollamos proyectos para reducir la huella de carbono y promover prácticas responsables."
  },
  {
    icon: (
      <svg width="42" height="42" className="card-icon" viewBox="0 0 42 42"><circle cx="21" cy="21" r="18" fill="#7f3fff"/><path d="M14 28l7-14 7 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
    ),
    title: "Impacto Social",
    desc: "Realizamos iniciativas filantrópicas y colaboraciones para fortalecer el bienestar y la salud mental."
  },
];

export default function ServicesSection() {
  return (
    <section>
      <h2>Servicios</h2>
      <div className="cards-container">
        {services.map((s, i) => (
          <div className="card" key={i}>
            {s.icon}
            <div className="card-title">{s.title}</div>
            <div className="card-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}