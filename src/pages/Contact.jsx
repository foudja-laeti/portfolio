import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import Reveal from '../components/Reveal'
import IconeUI from '../components/Icone'
import { profil } from '../data'

const chemins = {
  mail: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  phone:
    'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z',
  pin: 'M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z',
  horloge: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z',
  avion: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z',
}

function Icone({ nom }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={chemins[nom]} />
    </svg>
  )
}

const vide = { nom: '', email: '', sujet: '', message: '', piege: '' }

function Contact() {
  const [champs, setChamps] = useState(vide)
  const [statut, setStatut] = useState('repos') // repos | envoi | ok | erreur

  const modifier = (e) => setChamps({ ...champs, [e.target.name]: e.target.value })

  const envoyer = async (e) => {
    e.preventDefault()
    if (champs.piege) return // un robot a rempli le champ caché

    // Sans service d'envoi configuré, on ouvre la messagerie de la personne
    if (!profil.formulaire) {
      const corps = `${champs.message}\n\n${champs.nom} (${champs.email})`
      window.location.href = `mailto:${profil.email}?subject=${encodeURIComponent(
        champs.sujet,
      )}&body=${encodeURIComponent(corps)}`
      return
    }

    setStatut('envoi')
    try {
      const rep = await fetch(profil.formulaire, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: champs.nom,
          email: champs.email,
          subject: champs.sujet,
          message: champs.message,
        }),
      })
      if (rep.ok) {
        setStatut('ok')
        setChamps(vide)
      } else {
        setStatut('erreur')
      }
    } catch {
      setStatut('erreur')
    }
  }

  return (
    <PageWrapper titre="Contact">
      <Reveal>
        <p className="contact-intro">
          Un projet, une opportunité de stage, une idée à concrétiser ou simplement l'envie
          d'échanger ? Écrivez-moi : je lis et je réponds à chaque message.
        </p>
      </Reveal>

      <div className="contact-haut">
        <div className="contact-cartes">
          <Reveal className="contact-carte">
            <h3>
              <IconeUI nom="stage" /> Stage & opportunités
            </h3>
            <p>
              Je recherche un stage de 16 à 24 semaines en architecture et développement logiciel.
              Curieuse, rigoureuse et autonome, je suis prête à rejoindre votre équipe et à monter
              en compétences à ses côtés.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="contact-carte">
            <h3>
              <IconeUI nom="collab" /> Projets & collaboration
            </h3>
            <p>
              Un projet web ou mobile à concrétiser ? De l'étude du besoin au déploiement : cahier
              des charges, maquettes Figma, développement full stack.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="contact-photo">
          <div className="contact-photo-cadre">
            <img src={profil.photo} alt={`Portrait de ${profil.nom}`} />
          </div>
          <div className="dispo">
            <span className="point" />
            Disponible pour un stage · 16 à 24 semaines
          </div>
        </Reveal>
      </div>

      <div className="contact-infos">
        <Reveal className="info">
          <span className="rond"><Icone nom="pin" /></span>
          {profil.ville} · disponible pour me déplacer
        </Reveal>
        <Reveal delay={0.08} className="info">
          <span className="rond"><Icone nom="phone" /></span>
          <a href={`tel:${profil.telephone.replace(/\s/g, '')}`}>{profil.telephone}</a>
        </Reveal>
        <Reveal delay={0.16} className="info">
          <span className="rond"><Icone nom="mail" /></span>
          <a href={`mailto:${profil.email}`}>{profil.email}</a>
        </Reveal>
        <Reveal delay={0.24} className="info">
          <span className="rond"><Icone nom="horloge" /></span>
          Réponse sous 48 h
        </Reveal>
      </div>

      <Reveal className="formulaire-carte">
        <h3>
          <span className="rond grand"><Icone nom="avion" /></span> Envoyez-moi un message
        </h3>
        <p className="sous">
          Remplissez les champs ci-dessous : votre message m'arrive directement et je vous réponds
          rapidement.
        </p>

        <form onSubmit={envoyer}>
          <div className="form-grid">
            <input className="champ" name="nom" value={champs.nom} onChange={modifier} placeholder="Votre nom" aria-label="Votre nom" required />
            <input className="champ" type="email" name="email" value={champs.email} onChange={modifier} placeholder="Votre e-mail" aria-label="Votre e-mail" required />
            <input className="champ pleine" name="sujet" value={champs.sujet} onChange={modifier} placeholder="Sujet" aria-label="Sujet" required />
            <textarea className="champ pleine" name="message" value={champs.message} onChange={modifier} placeholder="Votre message..." aria-label="Votre message" required />
            <input className="piege" name="piege" value={champs.piege} onChange={modifier} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          </div>

          <button className="btn primary envoyer" type="submit" disabled={statut === 'envoi'}>
            {statut === 'envoi' ? (
              'Envoi en cours…'
            ) : (
              <>
                Envoyer le message <IconeUI nom="etincelle" />
              </>
            )}
          </button>

          {statut === 'ok' && (
            <p className="retour ok">Merci ! Votre message est bien parti, je vous réponds très vite.</p>
          )}
          {statut === 'erreur' && (
            <p className="retour erreur">
              Oups, l'envoi a échoué. Écrivez-moi directement à {profil.email}.
            </p>
          )}
        </form>
      </Reveal>
    </PageWrapper>
  )
}

export default Contact