import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PageTransition } from './components/PageTransition'
import About from './pages/About'
import Art from './pages/Art'
import Concierage from './pages/Concierge'
import Connections from './pages/Connections'
import Enquiry from './pages/Enquiry'
import Experiences from './pages/Experiences'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-napsta-black text-napsta-ivory">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/concierge" element={<PageTransition><Concierage /></PageTransition>} />
          <Route path="/art" element={<PageTransition><Art /></PageTransition>} />
          <Route path="/connections" element={<PageTransition><Connections /></PageTransition>} />
          <Route path="/experiences" element={<PageTransition><Experiences /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/enquiry" element={<PageTransition><Enquiry /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
