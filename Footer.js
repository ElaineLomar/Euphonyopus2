import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a className="footer-link" href="https://linkedin.com/company/euphony-opus" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/euphonyopus" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div>© {new Date().getFullYear()} Euphony Opus. Todos los derechos reservados.</div>
    </footer>
  );
}