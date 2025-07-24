import React from 'react';

const metrics = [
  { title: "Adopción Tecnológica", value: "+30%", desc: "Empresas modernizadas con soluciones cloud." },
  { title: "Eficiencia Operativa", value: "+25%", desc: "Mejora en procesos y reducción de costos." },
  { title: "Sostenibilidad", value: "-20%", desc: "Reducción de huella de carbono empresarial." }
];

export default function MetricsSection() {
  return (
    <section>
      <h2>Métricas Clave</h2>
      <div className="metrics-container">
        {metrics.map((m, i) => (
          <div className="metric" key={i}>
            <div className="metric-title">{m.title}</div>
            <div className="metric-value">{m.value}</div>
            <div>{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}