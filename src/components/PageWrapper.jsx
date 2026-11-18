import { motion } from 'framer-motion'

function PageWrapper({ titre, children }) {
  return (
    <motion.section
      className="section page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1 className="section-title">{titre}</h1>
        {children}
      </div>
    </motion.section>
  )
}

export default PageWrapper