import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import ProjectBoard from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import GovDataPage from './components/pages/GovDataPage'
import { KnowledgeBase } from './components/pages/KnowledgeBase'
import { Header } from './components/layout/Header'
import { SideNav } from './components/layout/SideNav'
// Knowledge Base main category pages
import AI from './components/pages/knowledge/AI'
import Data from './components/pages/knowledge/Data'
import ProfDev from './components/pages/knowledge/ProfDev'
import YaleComputing from './components/pages/knowledge/YaleComputing'
// Knowledge Base sub-pages
import AIToolsYale from './components/pages/knowledge/AIToolsYale'
import DataStorage from './components/pages/knowledge/DataStorage'
import Trainings from './components/pages/knowledge/Trainings'
import YCRCClusters from './components/pages/knowledge/YCRCClusters'
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
          {/* Knowledge Base Main Categories */}
          <Route path="/knowledge/ai" element={<AI />} />
          <Route path="/knowledge/data" element={<Data />} />
          <Route path="/knowledge/prof-dev" element={<ProfDev />} />
          <Route path="/knowledge/yale-computing" element={<YaleComputing />} />
          {/* Knowledge Base Sub-pages */}
          <Route path="/knowledge/ai/ai-tools-yale" element={<AIToolsYale />} />
          <Route path="/knowledge/data/data-storage" element={<DataStorage />} />
          <Route path="/knowledge/prof-dev/trainings" element={<Trainings />} />
          <Route path="/knowledge/yale-computing/ycrc-clusters" element={<YCRCClusters />} />
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