import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, LightBulbIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Prompting = () => {
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
                <li className="font-medium text-gray-900">Prompting Best Practices</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Prompting Best Practices
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Master the art of communicating effectively with AI models
            </p>
          </div>

          {/* Core Principle */}
          <section className="bg-yellow-50 border-4 border-yellow-300 p-8 rounded-lg shadow mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-yellow-900 mb-4">
                🗑️ Garbage In → Garbage Out 🗑️
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                This fundamental principle applies to both <strong>training models</strong> and <strong>using models</strong>. 
                The quality of your output directly depends on the quality of your input. Clear, specific, and 
                well-structured prompts yield significantly better results.
              </p>
            </div>
          </section>

          {/* Key Principles */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Universal Prompting Principles
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span> Be Specific
                </h3>
                <p className="text-gray-700 mb-3">
                  Provide clear context and detailed requirements. Vague prompts lead to vague responses.
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="text-red-600 mb-1">❌ "Write about AI"</p>
                  <p className="text-green-600">✅ "Write a 500-word introduction to machine learning for undergraduate biology students"</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📝</span> Use Examples
                </h3>
                <p className="text-gray-700 mb-3">
                  Show the model what you want with concrete examples (few-shot learning).
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Example prompt:</p>
                  <p className="text-gray-600">"Format these as citations:<br/>
                  Example: Smith, J. (2023). Title. Journal.<br/>
                  Now format: john doe 2024 ai research nature"</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔄</span> Iterate
                </h3>
                <p className="text-gray-700 mb-3">
                  Refine your prompts based on responses. Treat it as a conversation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start with a basic prompt</li>
                  <li>• Analyze the response</li>
                  <li>• Add constraints or clarifications</li>
                  <li>• Repeat until satisfied</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📋</span> Structure Your Request
                </h3>
                <p className="text-gray-700 mb-3">
                  Break complex tasks into clear steps or components.
                </p>
                <div className="bg-white p-3 rounded text-sm text-gray-600">
                  <p className="font-semibold mb-1">Well-structured prompt:</p>
                  <p>1. Summarize the main argument<br/>
                  2. List three supporting points<br/>
                  3. Identify potential counterarguments<br/>
                  4. Suggest further reading</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Techniques */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Advanced Prompting Techniques
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Role Playing</h3>
                <p className="text-gray-700 mb-3">
                  Assign the AI a specific role or persona to get more targeted responses.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm font-mono text-gray-600">
                    "You are an experienced data scientist reviewing code for a junior developer. 
                    Provide constructive feedback on this Python script..."
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Chain of Thought</h3>
                <p className="text-gray-700 mb-3">
                  Ask the model to explain its reasoning step-by-step for complex problems.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm font-mono text-gray-600">
                    "Let's solve this step by step. First, identify the variables. 
                    Then, show your calculations. Finally, verify the answer."
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Output Formatting</h3>
                <p className="text-gray-700 mb-3">
                  Specify exactly how you want the output structured.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm font-mono text-gray-600">
                    "Provide your response in the following format:<br/>
                    SUMMARY: [one sentence]<br/>
                    KEY POINTS: [bullet list]<br/>
                    RECOMMENDATION: [your advice]"
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Constraints and Boundaries</h3>
                <p className="text-gray-700 mb-3">
                  Set clear limitations to focus the response.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm font-mono text-gray-600">
                    "In 100-150 words, using only peer-reviewed sources from 2020 onwards, 
                    explain the concept without technical jargon."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Model-Specific Tips */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Model-Specific Considerations
            </h2>

            <p className="text-gray-700 mb-6">
              Each AI model is trained differently, which affects how to best prompt it. Understanding your 
              model's training approach and strengths will help you craft more effective prompts.
            </p>

            <div className="grid gap-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Conversational Models (ChatGPT, Claude, Gemini)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Strengths:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Natural language understanding</li>
                      <li>• Context retention in conversations</li>
                      <li>• Creative and analytical tasks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Practices:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use conversational tone</li>
                      <li>• Build on previous responses</li>
                      <li>• Ask for clarifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Code Models (Copilot, Codex)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Strengths:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Code completion</li>
                      <li>• Pattern recognition</li>
                      <li>• Multi-language support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Practices:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Provide clear function names</li>
                      <li>• Include helpful comments</li>
                      <li>• Show example inputs/outputs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Image Models (DALL-E, Midjourney, Stable Diffusion)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Strengths:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Visual creativity</li>
                      <li>• Style mimicry</li>
                      <li>• Concept combination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Practices:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Describe visual details</li>
                      <li>• Specify art style</li>
                      <li>• Include lighting/mood</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Pitfalls */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Common Pitfalls to Avoid
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Being Too Vague</h3>
                    <p className="text-sm text-gray-700">
                      Avoid prompts like "Help me with my project" without providing context, goals, or constraints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Information Overload</h3>
                    <p className="text-sm text-gray-700">
                      Don't include unnecessary details that might confuse the model. Keep it relevant and focused.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Assuming Knowledge</h3>
                    <p className="text-sm text-gray-700">
                      Don't assume the model knows specific internal information about your organization or project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Not Verifying Output</h3>
                    <p className="text-sm text-gray-700">
                      Always fact-check important information and review code for security and correctness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Examples */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Practical Examples
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Research Assistant</h3>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                  <p className="text-green-600 mb-2">Good Prompt:</p>
                  <p className="text-gray-700 whitespace-pre-wrap">
{`"I'm researching the impact of climate change on coral reefs for my marine biology thesis.
Please:
1. Summarize the three main mechanisms of coral bleaching
2. List recent (2020-2024) peer-reviewed studies on this topic
3. Identify gaps in current research
Keep each section under 200 words and use scientific terminology."`}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Code Review</h3>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                  <p className="text-green-600 mb-2">Good Prompt:</p>
                  <p className="text-gray-700 whitespace-pre-wrap">
{`"Review this Python function for:
- Performance bottlenecks
- Security vulnerabilities
- PEP 8 compliance
- Potential edge cases
Provide specific line numbers and suggest improvements with code examples."`}
                  </p>
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
                to="/knowledge/ai/ai-taxonomy"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                AI Taxonomy
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

export default Prompting;