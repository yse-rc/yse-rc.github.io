import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection';
import { NewsSection } from '../sections/NewsSection/NewsSection';
import { EventsSection } from '../sections/EventsSection/EventsSection';
import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

const ProjectBoard = () => {
  console.log("HomePage (ProjectBoard) component function executed.");

  return (
    <PageTransition>
      <div className="min-h-full">
        <div className={`p-6 px-4 mx-auto space-y-12 w-full`}>
          <section id="news">
            <div className="p-6">
              <NewsSection />
            </div>
          </section>
          <section id="projects">
            <div className="p-6">
              <ProjectsSection />
            </div>
          </section>
          <section id="events">
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