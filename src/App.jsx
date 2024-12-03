import { Routes, Route } from 'react-router-dom'
import ProjectBoard from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import './styles/index.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProjectBoard />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  )
}

export default App