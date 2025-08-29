import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';

export const ComingSoonPage = ({ title }) => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          <section>
            <div className="p-6">
              <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-3 text-center">
                  {title}
                </h2>
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">Coming soon...</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};