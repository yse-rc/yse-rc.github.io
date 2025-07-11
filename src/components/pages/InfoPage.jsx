import mitchPic from '../../assets/images/prof-1.jpg';
import stanPic from '../../assets/images/stan.jpg';
import stanPic2 from '../../assets/images/stan2.png';
import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

export const InfoPage = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto">
          {/* Mission Section */}
          <section id="mission">
            <div className="p-6">
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
                  Mission
                </h2>
                <p className="text-lg text-gray-600">
                  YSE Research Computing and Data is dedicated to supporting the Yale School of the Environment's 
                  research community. We provide consultation, advanced computing resources, and data 
                  management solutions to accelerate scientific discovery and environmental research.
                </p>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="mt-12">
            <div className="p-6">
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
                  About Me
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex flex-col items-center text-center">
                    <a 
                      href="https://environment.yale.edu/directory/staff/mitchell-horn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={mitchPic}
                        alt="Team Member"
                        className="w-48 h-48 object-cover rounded-full shadow-lg mb-6"
                      />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Mitchell J. Horn
                      </h3>
                      <h4 className="text-lg text-gray-600 mb-4">
                        Senior Research Data Analyst
                      </h4>
                    </a>
                  </div>
                  <div className="flex-1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<iframe src='https://flo.uri.sh/visualisation/20745838/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:800px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/20745838/?utm_source=embed&utm_campaign=visualisation/20745838' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex flex-col items-center text-center">
                    <a 
                      href="https://environment.yale.edu/directory/student/stanley-tan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={stanPic}
                        alt="Team Member"
                        className="w-48 h-48 object-cover rounded-full shadow-lg mb-6"
                      />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Stanley Tan
                      </h3>
                      <h4 className="text-lg text-gray-600 mb-4">
                        Student Assistant
                      </h4>
                    </a>
                  </div>
                  
                <div>
                  <img
                          src={stanPic2}
                          alt="Stanley Bio Graph"
                          className="w-[80%] h-auto object-contain mb-6 ml-4"


                        />
                </div>

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