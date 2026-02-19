import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const IntroToHPC = () => {
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
                  <Link to="/knowledge/yale-computing" className="hover:text-blue-600">
                    Yale Computing
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li>
                  <Link to="/knowledge/yale-computing/ycrc-clusters" className="hover:text-blue-600">
                    YCRC Clusters
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">Introduction to HPC</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Introduction to High-Performance Computing
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Getting started with HPC resources at Yale University
            </p>
          </div>

          {/* Why Use HPC Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Why Use HPC?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Performance & Storage</h3>
                <p className="text-gray-700 text-sm">Personal machine limitations overcome with powerful computing resources</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">GPU Access</h3>
                <p className="text-gray-700 text-sm">Access to specialized hardware for machine learning and AI workloads</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Large-Scale Jobs</h3>
                <p className="text-gray-700 text-sm">Run multiple concurrent jobs efficiently</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Software Access</h3>
                <p className="text-gray-700 text-sm">Pre-installed scientific and research software packages</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Data & Cloud Storage</h3>
                <p className="text-gray-700 text-sm">Access to databases and cloud storage solutions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">YCRC Support</h3>
                <p className="text-gray-700 text-sm">Expert technical support from Yale Center for Research Computing</p>
              </div>
            </div>
          </section>

          {/* HPC at Yale Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              HPC Clusters at Yale
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Yale currently offers several high-performance computing clusters:
              </p>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <a 
                  href="https://docs.ycrc.yale.edu/clusters/bouchet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 rounded text-center font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                >
                  Bouchet
                </a>                
                <a 
                  href="https://docs.ycrc.yale.edu/clusters/hopper/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 rounded text-center font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                >
                  Hopper
                </a>   
                                <a 
                  href="https://docs.ycrc.yale.edu/clusters/mccleary/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 rounded text-center font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                >
                  McCleary
                </a>
                <a 
                  href="https://docs.ycrc.yale.edu/clusters/milgram/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 rounded text-center font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                >
                  Milgram
                </a>
                <a 
                  href="https://docs.ycrc.yale.edu/clusters/grace/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 rounded text-center font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                >
                  Grace
                </a>   
              </div>
            </div>
          </section>

          {/* Access Methods Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              How to Access HPC at Yale
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Network Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>YaleSecure wireless network</li>
                  <li>Ethernet connection (on campus)</li>
                  <li>Yale VPN (required when off campus)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Access Methods</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Command Line SSH</h4>
                    <p className="text-sm text-gray-600">Linux or macOS terminal access</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Open OnDemand</h4>
                    <p className="text-sm text-gray-600">Web-based graphical interface</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Graphical SSH</h4>
                    <p className="text-sm text-gray-600">Tools like MobaXterm for Windows</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> SSH methods require SSH keys. See our{' '}
                    <Link to="/knowledge/yale-computing/git-ssh-setup" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      Git &amp; SSH Setup guide
                    </Link>{' '}
                    for a quick walkthrough. Access via login nodes, but computational work must happen on compute or interactive nodes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Open OnDemand Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Navigating Open OnDemand
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Getting Started</h3>
                <p className="text-gray-700 mb-3">
                  Log into the{' '}
                  <a 
                    href="https://docs.ycrc.yale.edu/clusters-at-yale/access/ood/#:~:text=Open%20OnDemand%20is%20available%20on%20each%20cluster%20using,to%20access%20the%20web%20portal%20on%20the%20cluster."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    Web Portal
                  </a>{' '}
                  and click on the OOD site link of the cluster you use.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Interactive Apps</h4>
                    <p className="text-gray-700 mb-2">Choose and use specific software (e.g., RStudio) in Interactive Sessions</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                      <li><strong>Sessions persist</strong> when website is closed</li>
                      <li>Can reopen from any computer and continue where you left off</li>
                      <li>Sessions end when time runs out or manually deleted</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Clusters</h4>
                    <p className="text-gray-700">Open terminal access to cluster resources</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Utilities</h4>
                    <p className="text-gray-700">Check node status, CPU hours usage, and storage quotas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Linux Basics Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Basic Linux for HPC Environments
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Linux is an open-source operating system widely used in high-performance computing (HPC) environments 
                  for its command-line interface. In an HPC terminal, users navigate the file system using commands.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Understanding the Prompt</h3>
                <div className="bg-gray-800 text-green-300 p-3 rounded font-mono text-sm mb-3">
                  [scr93@login2.grace fungi]$
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div><strong>scr93:</strong> NetID</div>
                    <div><strong>login2:</strong> Current node</div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div><strong>grace:</strong> Cluster name</div>
                    <div><strong>fungi:</strong> Current directory</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> If you see "~" as the directory name, you're in your home directory
                    (typically /home/&lt;netid&gt;), your personal starting point in the file system.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Essential Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">ls</code>
                      <div>
                        <p className="text-gray-700">List files and directories in current location</p>
                        <p className="text-sm text-gray-600 mt-1">
                          In home directory, you'll see <strong>palmer_scratch</strong> (60-day temporary storage)
                          and <strong>project</strong> (long-term storage)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">getquota</code>
                      <p className="text-gray-700">Check storage quotas for key directories</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <div className="space-x-2">
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">cd</code>
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">pwd</code>
                      </div>
                      <p className="text-gray-700">Navigate directories and print current path</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">nano</code>
                      <div>
                        <p className="text-gray-700">Create and edit files (e.g., <code>nano test.txt</code>)</p>
                        <p className="text-sm text-gray-600 mt-1">Exit with Ctrl+X</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">mkdir</code>
                      <p className="text-gray-700">Create directories (e.g., <code>mkdir new_directory</code>)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <div className="space-x-2">
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">cp</code>
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">mv</code>
                      </div>
                      <div>
                        <p className="text-gray-700">Copy and move files/directories</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Consider using <code>rsync</code> for progress updates
                        </p>
                        <div className="mt-2 text-sm text-gray-600">
                          <strong>File Transfer Options:</strong>
                          <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                            <li><code>wget</code> - Direct downloads from URLs</li>
                            <li><code>Rclone</code> - Cloud storage (Box, Dropbox, AWS S3, Google Cloud)</li>
                            <li>Globus - Large file transfers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <div className="space-x-2">
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">cat</code>
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">less</code>
                      </div>
                      <p className="text-gray-700">View file contents (cat for short files, less for larger files with search)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">rm</code>
                      <div>
                        <p className="text-gray-700">Remove files and directories</p>
                        <p className="text-sm text-gray-600 mt-1">Use <code>rm -r DIRECTORY</code> to delete directory and contents</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">salloc</code>
                      <div>
                        <p className="text-gray-700">Allocate compute resources for interactive work</p>
                        <div className="mt-2 text-sm text-gray-600">
                          <strong>Common flags:</strong>
                          <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                            <li><code>-p partition</code> - Specify partition (default: devel)</li>
                            <li><code>-t time</code> - Time limit (default: 1 hour)</li>
                            <li><code>--mem-per-cpu</code> - Memory per CPU (default: 5GB)</li>
                            <li><code>-c cores</code> - CPU cores per task (default: 1)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Management Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Running Jobs on Cluster
            </h2>
            
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Interactive Jobs</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>" Great for development and debugging</li>
                    <li>" All OOD sessions are interactive jobs</li>
                    <li>" Limited to <strong>4 simultaneous sessions</strong></li>
                    <li>" Real-time interaction with applications</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-900">Batch Jobs</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>" Non-interactive, automated execution</li>
                    <li>" Run many jobs simultaneously</li>
                    <li>" Email notifications available</li>
                    <li>" Better for production workloads</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Batch Job Workflow</h3>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full font-medium">Submit</span>
                  <span className="text-gray-400"></span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full font-medium">Pending</span>
                  <span className="text-gray-400"></span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full font-medium">Resource Allocation</span>
                  <span className="text-gray-400"></span>
                  <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full font-medium">Running</span>
                  <span className="text-gray-400"></span>
                  <span className="bg-gray-500 text-white px-3 py-2 rounded-full font-medium">Completed</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">General Purpose Partitions</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900">devel</h4>
                    <p className="text-sm text-gray-600">Default for interactive jobs (&lt; 6 hours)</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900">day</h4>
                    <p className="text-sm text-gray-600">Default for batch jobs (&lt; 24 hours)</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900">week</h4>
                    <p className="text-sm text-gray-600">Long jobs (don't submit &lt; 24 hour jobs here)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Module Management Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Loading Modules
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                YCRC provides common software through the module system. Load modules to access installed software:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">module load miniconda</code>
                    <p className="text-gray-700 text-sm">Load default version of miniconda</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">module load R/4.4.1-foss-2022b</code>
                    <p className="text-gray-700 text-sm">Load specific version of R software</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">module list</code>
                    <p className="text-gray-700 text-sm">Show currently loaded modules</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">module spider R</code>
                    <p className="text-gray-700 text-sm">List available R modules by version</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">module reset</code>
                    <p className="text-gray-700 text-sm">Unload all modules</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Monitoring Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Monitoring Jobs with jobstats
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Benefits of Job Monitoring</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Optimize resource utilization for better performance</li>
                  <li>Detect problems early and aid troubleshooting</li>
                  <li>Request appropriate resources to reduce wait times</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Two Ways to Monitor Jobs</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Method 1: User Portal</h4>
                    <p className="text-gray-700 text-sm">Go to User Portal and select JobID to view jobstats</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Method 2: Terminal</h4>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2">After job completion, run:</p>
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded font-mono">jobstats JOBID</code>
                      <p className="mt-2 mb-2">Check output file:</p>
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded font-mono">cat slurm-JOBID.out</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Topics */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Related Topics
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                to="/knowledge/yale-computing/intermediate-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Intermediate HPC
              </Link>
              <a
                href="https://docs.ycrc.yale.edu/clusters-at-yale/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Getting Started (YCRC)
              </a>
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

export default IntroToHPC;