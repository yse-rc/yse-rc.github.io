import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, WindowIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const AdvancedHPC = () => {
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
                <li className="font-medium text-gray-900">Advanced HPC</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Advanced HPC Techniques
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Advanced tips and techniques for power users in HPC environments
            </p>
          </div>

          {/* Tmux Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Tmux Terminal Multiplexer
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4 mb-4">
                  <WindowIcon className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">What is Tmux?</h3>
                    <p className="text-gray-700">
                      Tmux is a terminal multiplexer that allows you to hold and view multiple windows or terminals, 
                      all accessed and controlled from a single terminal. Run tmux on the login node (not compute node), 
                      and use "salloc" within tmux.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Key Benefit</h4>
                  <p className="text-blue-800 text-sm">
                    Tmux keeps your terminal session alive even if you disconnect from the server. Any running processes 
                    (scripts, applications, interactive jobs) are preserved when you disconnect and you can pick up 
                    exactly where you left off when you reattach later.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Getting Started</h3>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Start a Tmux Session</h4>
                  <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                    tmux new -s myproject
                  </code>
                  <p className="text-sm text-gray-600 mt-2">Creates a new tmux session named "myproject"</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Detach and Reattach</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-3">To Detach from Session</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">1</span>
                        <div>
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">Ctrl + b</code>
                          <p className="text-gray-600 mt-1">Signal to tmux that the following keystroke is meant for it</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">2</span>
                        <div>
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">d</code>
                          <p className="text-gray-600 mt-1">Detach from the session</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">To Reattach to Session</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      tmux attach -t myproject
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">To Exit Session</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      Ctrl + d
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Using Tmux on Clusters</h3>
                <p className="text-gray-700 mb-4">
                  Using tmux on clusters allows you to create interactive allocations that you can detach from. 
                  Normally, if you disconnect from an interactive allocation (e.g., laptop goes to sleep), 
                  your allocation terminates and jobs are killed. Tmux maintains your allocation when you detach gracefully.
                </p>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-3">Proper Workflow</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 1</span>
                      <span className="text-gray-700">Enter the cluster of your choice</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 2</span>
                      <span className="text-gray-700">Open a terminal and start tmux</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 3</span>
                      <div>
                        <span className="text-gray-700">Inside tmux session, submit an interactive job with salloc</span>
                        <div className="mt-1">
                          <a 
                            href="https://docs.ycrc.yale.edu/clusters-at-yale/job-scheduling/#interactive-jobs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm underline"
                          >
                            See Slurm commands →
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 4</span>
                      <span className="text-gray-700">Inside job allocation (compute node), start your application (e.g., matlab or R)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 5</span>
                      <span className="text-gray-700">Detach from tmux by <code className="bg-gray-100 px-1 rounded">Ctrl + b</code>, then <code className="bg-gray-100 px-1 rounded">d</code></span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 6</span>
                      <span className="text-gray-700">Later, on the same login node, reattach by running <code className="bg-gray-100 px-1 rounded">tmux attach</code></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Operating Multiple Windows and Panes</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <p className="text-gray-700 mb-3">
                      Tmux allows you to create, toggle between, and manipulate panes and windows in your session:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                      <li><strong>Window:</strong> The whole screen that tmux displays to you</li>
                      <li><strong>Panes:</strong> Subdivisions in the current window, each running an independent terminal</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-3">Example Workflow</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                      <pre>{`[ms725@grace1 ~]$ tmux new -s analysis
# I am in my tmux session now
[ms725@grace1 ~]$ salloc
[ms725@c14n02 ~]$ ./my_fancy_analysis.sh`}</pre>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-3">Monitor CPU and Memory Utilization</h4>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>To split window:</strong></p>
                        <div className="flex items-center space-x-2">
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">Ctrl + b</code>
                          <span className="text-gray-500">then</span>
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">%</code>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-700 mb-2"><strong>Go to compute node and monitor:</strong></p>
                        <div className="bg-gray-800 text-green-400 px-3 py-2 rounded font-mono">
                          ssh c14n02<br />
                          top
                        </div>
                        <p className="text-gray-600 mt-2">
                          The compute node is obtained from your prompt: e.g., ms725@c14n02
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-700 mb-2"><strong>To switch between panes:</strong></p>
                        <div className="flex items-center space-x-2">
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">Ctrl + b</code>
                          <span className="text-gray-500">then</span>
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono">o</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slurm Job Arrays Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Slurm Job Arrays
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CpuChipIcon className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Use Job Arrays</h3>
                    <p className="text-gray-700 mb-4">
                      Arrays are useful when you have many identical independent jobs to run. 
                      For example: processing 1000 image files that correspond to individual samples.
                    </p>
                    
                    <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Example Use Case</h4>
                      <p className="text-gray-700 text-sm">
                        Running the same analysis script on 1000 different image files, where each file 
                        can be processed independently and in parallel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-4">
                  <CommandLineIcon className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">
                      Dead Simple Queue (DSQ)
                    </h3>
                    <p className="text-purple-800 mb-4">
                      For such cases, using Dead Simple Queue is highly recommended. DSQ simplifies 
                      the process of submitting many similar jobs with minimal configuration.
                    </p>
                    <div className="bg-white p-3 rounded border border-purple-300 mb-4">
                      <p className="text-purple-900 text-sm font-medium">
                        <strong>Note:</strong> All jobs in an array will share the same job ID for easy management.
                      </p>
                    </div>
                    <a 
                      href="https://docs.ycrc.yale.edu/clusters-at-yale/job-scheduling/dsq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Learn more about DSQ →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits of Job Arrays</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Efficiency</h4>
                    <p className="text-gray-700 text-sm">Process multiple files simultaneously instead of sequentially</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Management</h4>
                    <p className="text-gray-700 text-sm">All jobs share the same ID for easy monitoring and control</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
                    <p className="text-gray-700 text-sm">Handle hundreds or thousands of similar tasks</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Resource Usage</h4>
                    <p className="text-gray-700 text-sm">Better cluster resource utilization</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Independence</h4>
                    <p className="text-gray-700 text-sm">Each array element runs independently</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Fault Tolerance</h4>
                    <p className="text-gray-700 text-sm">If one job fails, others continue running</p>
                  </div>
                </div>
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
                to="/knowledge/yale-computing/intermediate-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Back to Intermediate HPC
              </Link>
              <Link 
                to="/knowledge/yale-computing/parallel-programming"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Back to Parallel Programming
              </Link>
              <Link 
                to="/knowledge"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">↑</span>
                Back to Knowledge Base
              </Link>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AdvancedHPC;