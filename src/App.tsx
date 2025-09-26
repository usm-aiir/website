import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import People from './pages/People'
import Projects from './pages/Projects'
import Publications from './pages/Publications'

function App() {
  return (
    <Router basename="/~behrooz.mansouri/aiir/dist">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  )
}

export default App

