import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import People from './pages/People'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Publications from './pages/Publications'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/products" element={<Products />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  )
}

export default App

