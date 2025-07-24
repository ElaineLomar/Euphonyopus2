import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setEnviado(true);
    // Aquí puedes integrar con tu backend, servicio de correo, etc.
  };

  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <label className="form-label" htmlFor="nombre">Nombre</label>
        <input className="form-input" type="text" name="nombre" id="nombre" required value={form.nombre} onChange={onChange} />

        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" type="email" name="email" id="email" required value={form.email} onChange={onChange} />

        <label className="form-label" htmlFor="mensaje">Mensaje</label>
        <textarea className="form-textarea" name="mensaje" id="mensaje" required value={form.mensaje} onChange={onChange} />

        <button className="form-btn" type="submit">Enviar</button>
        {enviado && <div style={{color:"#7f3fff", marginTop:"10px"}}>¡Mensaje enviado! Nos pondremos en contacto pronto.</div>}
      </form>
    </section>
  );
}