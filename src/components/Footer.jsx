const icones = {
  github:
    'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 4.4 18 4.7 18 4.7c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.7 18.3.5 12 .5z',
  linkedin:
    'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H6.5v-7H9v7zm-1.3-8C7 9 6.5 8.5 6.5 7.7S7 6.5 7.7 6.5s1.2.5 1.2 1.2S8.4 9 7.7 9zm9.3 8H14.5v-3.7c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V17H9.5s.1-6 0-7H12v1c.4-.6 1-1.4 2.4-1.4 1.7 0 3 1.1 3 3.5V17z',
  mail: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  phone:
    'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z',
  pin: 'M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z',
}

function Icone({ nom }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icones[nom]} />
    </svg>
  )
}

function Polyedre() {
  return (
    <svg className="polyedre" viewBox="0 0 200 200" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" />
        <polyline points="100,10 100,95 170,50" />
        <polyline points="100,95 30,50" />
        <polyline points="100,95 170,140" />
        <polyline points="100,95 30,140" />
        <polyline points="100,95 100,190" />
        <polyline points="65,75 140,70 120,135 70,125 65,75" />
        <polyline points="65,75 100,10" />
        <polyline points="140,70 170,50" />
        <polyline points="120,135 170,140" />
        <polyline points="70,125 30,140" />
        <polyline points="65,75 30,50" />
        <polyline points="140,70 100,95 120,135" />
      </g>
      <g fill="currentColor">
        <circle cx="100" cy="10" r="2.5" />
        <circle cx="170" cy="50" r="2.5" />
        <circle cx="170" cy="140" r="2.5" />
        <circle cx="100" cy="190" r="2.5" />
        <circle cx="30" cy="140" r="2.5" />
        <circle cx="30" cy="50" r="2.5" />
        <circle cx="100" cy="95" r="2.5" />
        <circle cx="65" cy="75" r="2" />
        <circle cx="140" cy="70" r="2" />
        <circle cx="120" cy="135" r="2" />
        <circle cx="70" cy="125" r="2" />
      </g>
    </svg>
  )
}

function Footer({ profil }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={profil.logo} alt="" className="footer-logo" />
          <div>
            <strong>{profil.nom}</strong>
            <span>Développeuse & Architecte Logiciel</span>
          </div>
        </div>

        <Polyedre />

        <div className="footer-col">
          <h4>Contact direct</h4>
          <a className="footer-ligne" href={`tel:${profil.telephone.replace(/\s/g, '')}`}>
            <span className="rond"><Icone nom="phone" /></span>
            {profil.telephone}
          </a>
          <a className="footer-ligne" href={`mailto:${profil.email}`}>
            <span className="rond"><Icone nom="mail" /></span>
            {profil.email}
          </a>
          <span className="footer-ligne">
            <span className="rond"><Icone nom="pin" /></span>
            {profil.ville}
          </span>
        </div>

        <div className="footer-col">
          <h4>Réseaux</h4>
          <div className="socials">
            <a className="rond grand" href={profil.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icone nom="github" />
            </a>
            <a className="rond grand" href={profil.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icone nom="linkedin" />
            </a>
            <a className="rond grand" href={`mailto:${profil.email}`} aria-label="Email">
              <Icone nom="mail" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {profil.nom}. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer