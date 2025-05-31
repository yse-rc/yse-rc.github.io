import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection';
import { NewsSection } from '../sections/NewsSection/NewsSection';
import { EventsSection } from '../sections/EventsSection/EventsSection';
import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

const ProjectBoard = () => {
  console.log("HomePage (ProjectBoard) component function executed.");

  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto">
          <section id="news">
            <div className="p-6">
              <NewsSection />
            </div>
          </section>
          <section id="projects" className="mt-12">
            <div className="p-6">
              <ProjectsSection />
            </div>
          </section>
          <section id="events" className="mt-12">
            <div className="p-6">
              <EventsSection />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectBoard; 