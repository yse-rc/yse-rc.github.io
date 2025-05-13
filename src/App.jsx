import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectBoard from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import GovDataPage from './components/pages/GovDataPage'
import './styles/index.css'

function App() {
  console.log("App component function executed.");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProjectBoard />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/govdata" element={<GovDataPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App