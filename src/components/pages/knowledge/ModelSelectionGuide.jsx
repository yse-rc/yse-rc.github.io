import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ModelSelectionGuide = () => {
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
                <li className="font-medium text-gray-900">Model Selection Guide</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Model Selection Guide
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Choosing the right AI model and tools for your specific use case
            </p>
          </div>

          {/* Important Considerations Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Important Considerations
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Data Privacy Warning for External AI Services</h3>
                  <p className="text-gray-700 mb-3">
                    When using external AI coding assistants (not provided by Yale), you must understand that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>All code and data shared should be assumed to be stored and collected by third parties</li>
                    <li>These tools are for personal use only and are not provided or endorsed by the university</li>
                    <li>Use only when handling <strong>low-risk, non-sensitive code</strong></li>
                    <li>Never share protected research code, proprietary algorithms, or confidential university projects</li>
                    <li>For sensitive work, use Yale's Clarity platform or consult with Yale IT</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Recommended for Yale Work</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Clarity platform for secure AI assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Yale-licensed software with AI features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Tools approved by your department</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Use with Caution</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-0.5">⚠</span>
                    <span>External AI services (GitHub Copilot, ChatGPT, Claude, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-0.5">⚠</span>
                    <span>Free online AI code generators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-0.5">⚠</span>
                    <span>Browser-based coding assistants</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Model Benchmarking Resources */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Model Selection & Benchmarking Resources
            </h2>
            
            <p className="text-gray-700 mb-6">
              Selecting the right AI model requires understanding performance trade-offs across different dimensions. 
              These platforms provide empirical data to inform your decision.
            </p>

            <div className="space-y-6">
              {/* Primary Benchmarks */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Benchmarking Platforms</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      <a href="https://lmarena.ai/leaderboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        LMArena (LMSYS Chatbot Arena) →
                      </a>
                    </h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Why it matters:</strong> The only benchmark based on blind human preference testing. 
                      Models compete head-to-head in anonymous battles, eliminating brand bias and measuring real user satisfaction.
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Millions of human judgments across diverse real-world tasks</li>
                      <li>• Elo rating system like chess rankings</li>
                      <li>• Covers chat, coding, vision, and reasoning capabilities</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        Artificial Analysis →
                      </a>
                    </h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Why it matters:</strong> Essential for production deployment decisions. 
                      Provides real-world performance metrics that directly impact cost and user experience.
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Live speed testing (tokens/second, time-to-first-token)</li>
                      <li>• Current pricing per million tokens</li>
                      <li>• Context window limits and API reliability</li>
                      <li>• Quality vs. cost trade-off analysis</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      <a href="https://www.swebench.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        SWE-bench →
                      </a>
                    </h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Why it matters:</strong> The most realistic test of coding ability. 
                      Models must solve actual GitHub issues from real repositories, not toy problems.
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Tests complete software engineering workflow</li>
                      <li>• Requires understanding existing codebases</li>
                      <li>• Monthly updates with new real-world issues</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      <a href="https://gorilla.cs.berkeley.edu/leaderboard.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        Berkeley Function Calling Leaderboard (BFCL) →
                      </a>
                    </h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Why it matters:</strong> De facto standard for evaluating tool use and agent capabilities. 
                      Essential for models that need to interact with APIs and external systems.
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Tests function calling and API interaction</li>
                      <li>• Multi-turn tool orchestration evaluation</li>
                      <li>• UC Berkeley academic standard</li>
                    </ul>
                  </div>

                </div>
              </div>


              {/* Decision Framework */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start">
                  <InformationCircleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Recommended Evaluation Process</h4>
                    <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                      <li><strong>Start with LMArena (LMSYS)</strong> - Check blind human preference rankings for overall quality</li>
                      <li><strong>For coding:</strong> Check SWE-bench scores for real-world software engineering capability</li>
                      <li><strong>For tool use/agents:</strong> Consult Berkeley Function Calling Leaderboard (BFCL)</li>
                      <li><strong>For production:</strong> Use Artificial Analysis to compare speed, cost, and API reliability</li>
                      <li><strong>Always test</strong> final candidates on your specific use cases before committing</li>
                    </ol>
                    <p className="text-gray-700 mt-3 italic">
                      <strong>Trust hierarchy:</strong> Academic benchmarks (LMSYS, SWE-bench, BFCL) are most reliable. 
                      Artificial Analysis provides useful production metrics. Be cautious with commercial leaderboards that may have 
                      conflicts of interest. Combine multiple sources for comprehensive evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Choosing the Right AI Coding Assistant */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Choosing the Right AI Coding Assistant
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Consider Your Workflow</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span><strong>Terminal lovers:</strong> Choose CLI tools like Claude Code or Gemini CLI for lightweight, command-line integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span><strong>IDE users:</strong> VSCode + Copilot or specialized editors like Cursor for integrated development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span><strong>Project complexity:</strong> Full IDE assistants for large projects, CLI tools for quick tasks and scripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span><strong>Task type:</strong> Code generation vs refactoring vs debugging may favor different tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Always review AI-generated code for security and correctness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Test models on your actual codebase before committing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Maintain understanding of the code - don't blindly trust AI output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>For sensitive projects, use Yale's Clarity platform or approved tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Related Topics
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link 
                to="/knowledge/ai/local-inferencing"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Local Inferencing
              </Link>
              <Link 
                to="/knowledge/ai/prompting"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Prompting Best Practices
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

export default ModelSelectionGuide;