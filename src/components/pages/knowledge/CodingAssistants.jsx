import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const CodingAssistants = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          
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
                <li className="font-medium text-gray-900">Coding Assistants</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Coding Assistants
            </h1>
            <p className="text-lg text-gray-600 text-center">
              AI-powered tools to enhance your software development workflow
            </p>
          </div>

          {/* Introduction */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Modern AI coding assistants have revolutionized software development by providing intelligent code completion, 
              generation, and debugging capabilities. These tools range from lightweight terminal-based assistants to 
              full-featured IDE integrations, each offering unique advantages for different workflows.
            </p>
          </section>

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
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Recommended for Yale Work</h3>
                <ul className="text-sm text-gray-700 space-y-2">
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
                <h3 className="font-semibold text-gray-900 mb-2">Use with Caution</h3>
                <ul className="text-sm text-gray-700 space-y-2">
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

          {/* Terminal-Based Assistants Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Terminal-Based / CLI Assistants
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <InformationCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Terminal-based assistants offer a lightweight approach to AI-assisted coding, sometimes referred to as 
                  "vibe-coding". These tools integrate directly into your command line workflow without requiring a full IDE.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Claude Code</h3>
                <p className="text-gray-700 mb-3">
                  Anthropic's terminal-based coding assistant that provides intelligent code generation and modification 
                  directly from your command line. It excels at understanding context and maintaining code style consistency.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Direct file manipulation capabilities</li>
                  <li>Context-aware code generation</li>
                  <li>Multi-file project understanding</li>
                  <li>Integrated testing and debugging support</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Gemini CLI</h3>
                <p className="text-gray-700 mb-3">
                  Google's command-line AI assistant that brings the power of Gemini models to your terminal. 
                  Particularly strong for code explanation and optimization tasks.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Code review and optimization suggestions</li>
                  <li>Multi-language support</li>
                  <li>Integration with Google Cloud services</li>
                  <li>Advanced reasoning capabilities</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Codex CLI (OpenAI)</h3>
                <p className="text-gray-700 mb-3">
                  OpenAI's terminal coding tool powered by the Codex model, which is specifically trained on code. 
                  The newer version integrates with GPT-4 for enhanced capabilities.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Natural language to code translation</li>
                  <li>Extensive programming language coverage</li>
                  <li>Code completion and generation</li>
                  <li>Documentation generation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI-Assisted IDEs Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              AI-Assisted IDEs
            </h2>

            <p className="text-gray-700 mb-6">
              Full-featured integrated development environments with built-in AI assistance provide comprehensive 
              coding support with features like auto-completion, refactoring, and code generation directly within 
              your familiar development environment.
            </p>

            <div className="grid gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">VSCode + GitHub Copilot</h3>
                <p className="text-gray-700 mb-4">
                  The most popular IDE combined with GitHub's AI pair programmer. Copilot suggests entire lines or blocks 
                  of code as you type, learning from billions of lines of public code.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time code suggestions</li>
                      <li>• Context-aware completions</li>
                      <li>• Test generation</li>
                      <li>• Multi-language support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best For:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rapid prototyping</li>
                      <li>• Learning new languages</li>
                      <li>• Boilerplate generation</li>
                      <li>• Team collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cursor</h3>
                <p className="text-gray-700 mb-4">
                  An AI-first code editor built from the ground up for pair programming with AI. It provides deep 
                  integration with AI models and a workflow optimized for AI-assisted development.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chat-based coding interface</li>
                      <li>• Codebase-wide context understanding</li>
                      <li>• AI-powered refactoring</li>
                      <li>• Custom AI model selection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best For:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Complex refactoring tasks</li>
                      <li>• Code migration projects</li>
                      <li>• AI-centric workflows</li>
                      <li>• Exploratory programming</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Roo Code</h3>
                <p className="text-gray-700 mb-4">
                  A modern AI-powered development environment that emphasizes collaboration between human developers 
                  and AI assistants, with advanced project understanding capabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Project-aware AI assistance</li>
                      <li>• Intelligent debugging</li>
                      <li>• Architecture suggestions</li>
                      <li>• Code review automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best For:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Large-scale projects</li>
                      <li>• Architecture planning</li>
                      <li>• Code quality improvement</li>
                      <li>• Team standardization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Choosing the Right Tool */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Choosing the Right Tool
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-3">Consider Your Workflow</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">•</span>
                    <span><strong>Terminal lovers:</strong> Choose CLI tools like Claude Code or Gemini CLI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">•</span>
                    <span><strong>IDE users:</strong> VSCode + Copilot or specialized editors like Cursor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">•</span>
                    <span><strong>Project complexity:</strong> Full IDEs for large projects, CLI for quick tasks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Always review AI-generated code for security and correctness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Use AI for boilerplate and repetitive tasks to save time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Maintain your coding skills - use AI as an assistant, not a replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Be mindful of licensing when using AI-generated code</span>
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

export default CodingAssistants;