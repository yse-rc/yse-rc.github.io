import { Header } from '../layout/Header';
import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection';
import { NewsSection } from '../sections/NewsSection/NewsSection';
import { EventsSection } from '../sections/EventsSection/EventsSection';

const ProjectBoard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="p-6 max-w-[2400px] mx-auto space-y-12">
        <ProjectsSection />
        <EventsSection />
        <NewsSection />
      </div>
    </div>
  );
};

export default ProjectBoard; 