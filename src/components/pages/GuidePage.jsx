import { Header } from '../layout/Header';
import { SideNav } from '../layout/SideNav';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '../layout/Footer';

export const GuidePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="min-h-screen bg-white pt-24 flex flex-col">
      <Header />
      <div className="flex flex-1">
        {!isMobile && <SideNav />}
        <div className={`flex-1 p-6 ${!isMobile ? 'pl-60' : 'px-4'} mx-auto`}>
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
      </div>
      <Footer />
    </div>
  );
}; 