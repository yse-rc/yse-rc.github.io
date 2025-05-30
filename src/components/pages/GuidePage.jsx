import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

export const GuidePage = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto">
          {/* Guide Section */}
          <section id="guide" className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
              Guide
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to the YSE Research Computing Guide. Here you will find comprehensive documentation to help you get started with our resources and services.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}; 