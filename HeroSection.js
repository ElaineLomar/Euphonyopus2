import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-bg">
      <img src="/logo.png" alt="Euphony Opus logo" className="hero-logo" />
      <div className="hero-title">Euphony Opus</div>
      <div className="hero-slogan">Innovación en armonía. Orquestando el futuro en equilibrio interdisciplinario</div>
      <a href="#contacto">
        <button className="cta-btn">Contáctanos</button>
      </a>
    </section>
  );
}