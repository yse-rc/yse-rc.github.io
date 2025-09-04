import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Plot from 'react-plotly.js';

const AITaxonomy = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full max-w-6xl">
          
          {/* Header with Breadcrumb */}
          <div className="bg-white p-8 rounded shadow mb-8">
            {/* Breadcrumb */}
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link to="/knowledge" className="hover:text-blue-600">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li>
                  <Link to="/knowledge/ai" className="hover:text-blue-600">
                    AI Resources
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">AI Taxonomy</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              AI Taxonomy
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Understanding the hierarchy and types of artificial intelligence
            </p>
          </div>

          {/* Introduction */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Artificial Intelligence (AI) encompasses a broad range of technologies designed to perform tasks 
              that typically require human intelligence. Understanding the AI landscape and its hierarchical 
              structure helps in choosing the right tools and approaches for your specific needs.
            </p>
          </section>

          {/* Visual Taxonomy */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Interactive AI Taxonomy
            </h2>
            <p className="text-gray-700 mb-6">
              The following interactive diagram illustrates how I conceptualize the relationships between various AI concepts. 
              Hover over each concept to see its full name and description. Click on the example points (●) to explore specific implementations. 
              The overlapping areas represent shared techniques and applications.
            </p>
            
            <div className="flex justify-center">
              <Plot
                data={[
                  // AI main marker (invisible for hover)
                  {
                    x: [0],
                    y: [45],
                    mode: 'markers',
                    name: 'AI',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Artificial Intelligence</b><br>The broad field encompassing all approaches to creating intelligent systems<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(135, 206, 235)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // ML marker
                  {
                    x: [-10],
                    y: [25],
                    mode: 'markers',
                    name: 'ML',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Machine Learning</b><br>Systems that learn patterns from data without explicit programming<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(255, 193, 7)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // DL marker
                  {
                    x: [-12.5],
                    y: [2.5],
                    mode: 'markers',
                    name: 'DL',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Deep Learning</b><br>Neural networks with multiple layers that learn hierarchical representations<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(76, 175, 80)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // NLP marker
                  {
                    x: [26.25],
                    y: [15.5],
                    mode: 'markers',
                    name: 'NLP',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Natural Language Processing</b><br>Understanding and generating human language<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(255, 192, 203)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // CV marker
                  {
                    x: [0],
                    y: [-35],
                    mode: 'markers',
                    name: 'CV',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Computer Vision</b><br>Enabling computers to understand and interpret visual information<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(255, 127, 80)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // GenAI marker
                  {
                    x: [13.75],
                    y: [-1.25],
                    mode: 'markers',
                    name: 'GenAI',
                    showlegend: false,
                    marker: { opacity: 0, size: 20 },
                    hovertemplate: '<b>Generative AI</b><br>AI systems that create new content like text, images, or code<extra></extra>',
                    hoverlabel: { bgcolor: 'rgb(255, 235, 59)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // Example points - white background circles
                  {
                    x: [-30, 20, -25, 10, 8.5, -10, 6],
                    y: [40, 27, 10, 4, -8, -22, -31],
                    mode: 'markers',
                    name: 'bg_white',
                    showlegend: false,
                    marker: { color: 'white', size: 24, line: { width: 0 }, opacity: 1 },
                    hoverinfo: 'skip',
                    type: 'scatter'
                  },
                  // Example points - black background
                  {
                    x: [-30, 20, -25, 10, 8.5, -10, 6],
                    y: [40, 27, 10, 4, -8, -22, -31],
                    mode: 'markers',
                    name: 'bg_black',
                    showlegend: false,
                    marker: { color: 'black', size: 20, line: { width: 0 }, opacity: 1 },
                    hoverinfo: 'skip',
                    type: 'scatter'
                  },
                  // Deep Blue
                  {
                    x: [-30],
                    y: [40],
                    mode: 'markers',
                    name: 'Deep Blue',
                    showlegend: false,
                    marker: { color: 'rgb(135, 206, 235)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>Deep Blue (1977): Chess-playing system using minimax algorithms and evaluation functions.</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(135, 206, 235)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // SmarterChild
                  {
                    x: [20],
                    y: [27],
                    mode: 'markers',
                    name: 'SmarterChild',
                    showlegend: false,
                    marker: { color: 'rgb(255, 192, 203)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: "<b>SmarterChild (2001): AOL's instant-messaging chatbot using rules-based programming for conversations.</b><extra></extra>",
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(255, 192, 203)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // Classical Algorithms
                  {
                    x: [-25],
                    y: [10],
                    mode: 'markers',
                    name: 'Classical Algorithms',
                    showlegend: false,
                    marker: { color: 'rgb(255, 193, 7)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>Classical Algorithms: Linear Regression, Random Forests, kNN, Fuzzy Clustering, PCA.</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(255, 193, 7)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // Modern Chatbots
                  {
                    x: [10],
                    y: [4],
                    mode: 'markers',
                    name: 'Modern Chatbots',
                    showlegend: false,
                    marker: { color: 'rgb(255, 235, 59)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>Modern Chatbots: ChatGPT, Copilot, Claude, Gemini.</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(255, 235, 59)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // AI Image Generation
                  {
                    x: [8.5],
                    y: [-8],
                    mode: 'markers',
                    name: 'AI Image Generation',
                    showlegend: false,
                    marker: { color: 'rgb(255, 235, 59)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>AI Image Generation: Stable Diffusion, Flux, Adobe Firefly, Midjourney.</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(255, 235, 59)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // Land Cover Classification
                  {
                    x: [-10],
                    y: [-22],
                    mode: 'markers',
                    name: 'Land Cover Classification',
                    showlegend: false,
                    marker: { color: 'rgb(229, 57, 53)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>Land Cover Classification: Feature extraction from satellite imagery using classic algorithms (Random Forests, SVM, k-Means).</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(229, 57, 53)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  },
                  // Trail Cameras
                  {
                    x: [6],
                    y: [-31],
                    mode: 'markers',
                    name: 'Trail Cameras',
                    showlegend: false,
                    marker: { color: 'rgb(229, 57, 53)', size: 8, line: { width: 0 }, opacity: 0.7 },
                    hovertemplate: '<b>Trail Cameras: Background subtraction, infrared, or frame differencing to trigger recording.</b><extra></extra>',
                    hoverlabel: { bgcolor: 'white', bordercolor: 'rgb(229, 57, 53)', font: { color: 'black', size: 16 } },
                    type: 'scatter'
                  }
                ]}
                layout={{
                  xaxis: { visible: false, range: [-70, 70] },
                  yaxis: { visible: false, range: [-70, 70], scaleanchor: 'x', scaleratio: 1 },
                  showlegend: false,
                  paper_bgcolor: 'white',
                  plot_bgcolor: 'white',
                  width: 900,
                  height: 900,
                  margin: { l: 0, r: 0, t: 0, b: 0 },
                  hovermode: 'closest',
                  shapes: [
                    // AI circle (outermost)
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: -60,
                      y0: -60,
                      x1: 60,
                      y1: 60,
                      fillcolor: 'rgba(135, 206, 235, 0.3)',
                      line: { color: 'black', width: 3 },
                      layer: 'below'
                    },
                    // ML circle
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: -40,
                      y0: -30,
                      x1: 20,
                      y1: 30,
                      fillcolor: 'rgba(255, 193, 7, 0.3)',
                      line: { color: 'black', width: 2.5 },
                      layer: 'below'
                    },
                    // DL circle
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: -20,
                      y0: -20,
                      x1: 15,
                      y1: 15,
                      fillcolor: 'rgba(76, 175, 80, 0.3)',
                      line: { color: 'black', width: 2.5 },
                      layer: 'below'
                    },
                    // NLP circle
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: -7.5,
                      y0: -4.5,
                      x1: 35,
                      y1: 33,
                      fillcolor: 'rgba(255, 192, 203, 0.3)',
                      line: { color: 'black', width: 2 },
                      layer: 'below'
                    },
                    // CV circle
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: -17.5,
                      y0: -37.5,
                      x1: 17.5,
                      y1: -2.5,
                      fillcolor: 'rgba(229, 57, 53, 0.3)',
                      line: { color: 'black', width: 2 },
                      layer: 'below'
                    },
                    // GenAI circle
                    {
                      type: 'circle',
                      xref: 'x',
                      yref: 'y',
                      x0: 2.5,
                      y0: -12.5,
                      x1: 25,
                      y1: 10,
                      fillcolor: 'rgba(255, 235, 59, 0.3)',
                      line: { color: 'black', width: 2 },
                      layer: 'below'
                    }
                  ],
                  annotations: [
                    // AI label
                    {
                      x: 0,
                      y: 45,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>AI</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 28 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    },
                    // ML label
                    {
                      x: -10,
                      y: 25,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>ML</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 24 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    },
                    // DL label
                    {
                      x: -12.5,
                      y: 2.5,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>DL</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 22 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    },
                    // NLP label
                    {
                      x: 26.25,
                      y: 15.5,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>NLP</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 22 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    },
                    // CV label
                    {
                      x: 0,
                      y: -35,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>CV</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 22 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    },
                    // GenAI label
                    {
                      x: 13.75,
                      y: -1.25,
                      xref: 'x',
                      yref: 'y',
                      text: '<b>GenAI</b>',
                      showarrow: false,
                      font: { color: 'black', family: 'Arial', size: 20 },
                      xanchor: 'center',
                      yanchor: 'middle'
                    }
                  ]
                }}
                config={{ displayModeBar: false, displaylogo: false, responsive: true }}
              />
            </div>
          </section>

          {/* Historical Evolution */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Historical Evolution
            </h2>

            <p className="text-gray-700 mb-6">
              The journey of artificial intelligence spans over 70 years, marked by cycles of breakthrough innovations 
              and periods of reduced funding known as "AI winters." Each era built upon previous discoveries, 
              ultimately leading to today's transformative AI capabilities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-blue-700 text-sm">1950s</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">The Birth of AI</h3>
                  <p className="text-gray-600">Alan Turing proposes the "Turing Test" (1950). The Dartmouth Conference coins the term "Artificial Intelligence" (1956). Early programs like Logic Theorist prove mathematical theorems.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-orange-700 text-sm">1960s-70s</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Early Enthusiasm & First Winter</h3>
                  <p className="text-gray-600">ELIZA chatbot mimics psychotherapist (1966). Expert systems emerge. First "AI Winter" (1974-1980) as promises exceed capabilities. Focus shifts to knowledge representation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-yellow-700 text-sm">1980s-90s</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Expert Systems & Machine Learning</h3>
                  <p className="text-gray-600">Backpropagation algorithm revolutionizes neural networks (1986). Second AI Winter (late 1980s). IBM's Deep Blue defeats chess champion Kasparov (1997). Support Vector Machines gain popularity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-teal-700 text-sm">2000s</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Big Data & Statistical Learning</h3>
                  <p className="text-gray-600">Internet provides massive datasets. Google's PageRank algorithm. Netflix Prize competition (2006). GPUs begin accelerating neural network training. IBM Watson wins Jeopardy! (2011).</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-green-700 text-sm">2012</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">The Deep Learning Revolution</h3>
                  <p className="text-gray-600">AlexNet wins ImageNet competition by huge margin using deep CNNs and GPUs. This moment reignites global AI research. Google, Facebook, and others establish AI labs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-indigo-700 text-sm">2017</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Transformers: "Attention is All You Need"</h3>
                  <p className="text-gray-600">Google researchers introduce the Transformer architecture, replacing RNNs with self-attention mechanisms. This enables training on much larger datasets and becomes the foundation for GPT, BERT, and modern LLMs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-purple-700 text-sm">2020-22</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Large Language Models Emerge</h3>
                  <p className="text-gray-600">GPT-3 (175B parameters) demonstrates few-shot learning. GitHub Copilot launches. DALL-E 2 and Stable Diffusion democratize AI art. ChatGPT reaches 100M users in 2 months (Nov 2022).</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 rounded-lg px-3 py-2 flex items-center justify-center flex-shrink-0 mr-4 min-w-[85px]">
                  <span className="font-bold text-red-700 text-sm">2023-</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">The AI Assistant Revolution</h3>
                  <p className="text-gray-600">GPT-4 shows emergent reasoning abilities. Claude, Gemini, and open models like Llama proliferate. Multimodal models understand text, images, and code. AI becomes integral to daily work across industries.</p>
                </div>
              </div>
            </div>
          </section>


          {/* Related Resources */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Continue Learning
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link 
                to="/knowledge/ai/prompting"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Prompting Best Practices
              </Link>
              <Link 
                to="/knowledge/ai/model-selection"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Model Selection
              </Link>
              <Link 
                to="/knowledge/ai/ai-tools-yale"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                AI Tools @ Yale
              </Link>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AITaxonomy;