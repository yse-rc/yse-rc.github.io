import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import ProjectBoard from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import GovDataPage from './components/pages/GovDataPage'
import { KnowledgeBase } from './components/pages/KnowledgeBase'
import { Header } from './components/layout/Header'
import { SideNav } from './components/layout/SideNav'
// Knowledge Base sub-pages
import AIToolsYale from './components/pages/knowledge/AIToolsYale'
import AIGenerative from './components/pages/knowledge/AIGenerative'
import AIDataAnalysis from './components/pages/knowledge/AIDataAnalysis'
import DataStorage from './components/pages/knowledge/DataStorage'
import DataDatabases from './components/pages/knowledge/DataDatabases'
import DataPipelines from './components/pages/knowledge/DataPipelines'
import Trainings from './components/pages/knowledge/Trainings'
import TrainingWorkshops from './components/pages/knowledge/TrainingWorkshops'
import TrainingCertifications from './components/pages/knowledge/TrainingCertifications'
import YCRCClusters from './components/pages/knowledge/YCRCClusters'
import YCRCGrace from './components/pages/knowledge/YCRCGrace'
import YCRCFarnam from './components/pages/knowledge/YCRCFarnam'
import './styles/index.css'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
    }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ProjectBoard />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/govdata" element={<GovDataPage />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
          {/* AI Resources */}
          <Route path="/knowledge/ai-tools-yale" element={<AIToolsYale />} />
          <Route path="/knowledge/ai-tools-yale/generative" element={<AIGenerative />} />
          <Route path="/knowledge/ai-tools-yale/analysis" element={<AIDataAnalysis />} />
          {/* Data Engineering */}
          <Route path="/knowledge/data-storage" element={<DataStorage />} />
          <Route path="/knowledge/data-storage/databases" element={<DataDatabases />} />
          <Route path="/knowledge/data-storage/pipelines" element={<DataPipelines />} />
          {/* Professional Development */}
          <Route path="/knowledge/trainings" element={<Trainings />} />
          <Route path="/knowledge/trainings/workshops" element={<TrainingWorkshops />} />
          <Route path="/knowledge/trainings/certifications" element={<TrainingCertifications />} />
          {/* Yale Computing */}
          <Route path="/knowledge/ycrc-clusters" element={<YCRCClusters />} />
          <Route path="/knowledge/ycrc-clusters/grace" element={<YCRCGrace />} />
          <Route path="/knowledge/ycrc-clusters/farnam" element={<YCRCFarnam />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  console.log("App component function executed.");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const headerHeight = '80px'; // Estimated header height (5rem)

  return (
    <div className="pattern-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Router>
        <Header />
        <div className="flex flex-1">
          {!isMobile && <SideNav />}
          <main 
            className={`flex-1 ${!isMobile ? 'pl-64' : ''} pt-0`} 
            style={{ minHeight: `calc(100vh - ${headerHeight})`, paddingTop: headerHeight }}
          >
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App