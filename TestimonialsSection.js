import React from 'react';

const testimonials = [
  {
    quote: "Euphony Opus transformó nuestra empresa con soluciones innovadoras y un enfoque humano excepcional.",
    author: "Juan Martínez, CEO de Cloud4Colombia"
  },
  {
    quote: "Gracias a Euphony Opus ahora operamos de manera sostenible y eficiente, mejorando el bienestar de nuestro equipo.",
    author: "Laura Ramírez, Directora de EcoLogistics"
  }
];

export default function TestimonialsSection() {
  return (
    <section>
      <h2>Testimonios</h2>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            {t.quote}
            <div className="testimonial-author">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}