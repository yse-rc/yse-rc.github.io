import { Header } from '../layout/Header';
import { SideNav } from '../layout/SideNav';
import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection';
import { NewsSection } from '../sections/NewsSection/NewsSection';
import { EventsSection } from '../sections/EventsSection/EventsSection';

const ProjectBoard = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      <SideNav />
      
      <div className="p-6 pl-60 max-w-[2400px] mx-auto space-y-12">
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="events">
          <EventsSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
      </div>
    </div>
  );
};

export default ProjectBoard; 