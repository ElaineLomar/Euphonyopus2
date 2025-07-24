import React from 'react';

const projects = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Cloud4Colombia",
    desc: "Digitalización de 50+ empresas con Azure y CI/CD."
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "EcoLogistics",
    desc: "Optimización logística y reducción de emisiones en cadena de suministro."
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "MentalCare",
    desc: "Programa de bienestar y salud mental en colaboración con universidades."
  }
];

export default function GallerySection() {
  return (
    <section>
      <h2>Casos de Éxito</h2>
      <div className="gallery">
        {projects.map((p, i) => (
          <div className="gallery-item" key={i}>
            <img src={p.img} alt={p.title} className="gallery-img" />
            <div className="gallery-title">{p.title}</div>
            <div>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}