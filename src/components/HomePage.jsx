import { Header } from './Header';
import { ProjectsSection } from './ProjectsSection/ProjectsSection';
import { NewsSection } from './NewsSection/NewsSection';
import { EventsSection } from './EventsSection/EventsSection';

const ProjectBoard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6 max-w-[2400px] mx-auto">
        <ProjectsSection />
        
        {/* Flex container for News and Events sections */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <NewsSection />
          </div>
          <div className="flex-1">
            <EventsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard; 