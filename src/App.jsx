import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import ProjectBoard from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import GovDataPage from './components/pages/GovDataPage'
import { KnowledgeBase } from './components/pages/KnowledgeBase'
import { Header } from './components/layout/Header'
import { SideNav } from './components/layout/SideNav'
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