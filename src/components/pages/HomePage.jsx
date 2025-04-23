import { Header } from '../layout/Header';
import { SideNav } from '../layout/SideNav';
import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection';
import { NewsSection } from '../sections/NewsSection/NewsSection';
import { EventsSection } from '../sections/EventsSection/EventsSection';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '../layout/Footer';

const ProjectBoard = () => {
  console.log("HomePage (ProjectBoard) component function executed.");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      {!isMobile && <SideNav />}
      
      <div className={`p-6 ${!isMobile ? 'pl-60' : 'px-4'} mx-auto space-y-12`}>
        <section id="news" className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6">
            <NewsSection />
          </div>
        </section>
        <section id="projects" className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6">
            <ProjectsSection />
          </div>
        </section>
        <section id="events" className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6">
            <EventsSection />
          </div>
        </section>
      </div>
      <div className="footer-divider"></div>
      <Footer />
    </div>
  );
};

export default ProjectBoard; 