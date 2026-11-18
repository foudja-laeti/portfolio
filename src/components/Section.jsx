function Section({ id, titre, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{titre}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section