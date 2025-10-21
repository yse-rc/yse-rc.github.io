import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const IntermediateHPC = () => {
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
                <li className="font-medium text-gray-900">Intermediate HPC</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Intermediate HPC Techniques
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Advanced techniques for complex tasks in HPC environments
            </p>
          </div>

          {/* Bigmem and GPU Nodes Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Bigmem and GPU Nodes
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-yellow-800 text-sm">
                  <p className="font-medium mb-1">Resource Request Guidelines</p>
                  <p>Only request GPU or bigmem nodes if you need them and your program will use them. Memory on compute nodes is shared between jobs and 5GB is allocated to each CPU. The limit is strictly enforced - jobs exceeding the limit are killed.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Memory Configuration Options</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Memory per Node</h4>
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">--mem=6g</code>
                    <p className="text-sm text-gray-600 mt-2">Specify total memory for the job</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Memory per CPU</h4>
                    <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">--mem-per-cpu=6g</code>
                    <p className="text-sm text-gray-600 mt-2">Best if memory use scales with CPUs</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Bigmem Nodes</h3>
                <p className="text-gray-700 mb-4">
                  These are nodes with <strong>512GB-4TB of RAM</strong>, depending on cluster. They are available via the 
                  <span className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono mx-1">bigmem</span> partition and reserved for applications with large memory needs.
                </p>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Example</h4>
                  <code className="bg-gray-800 text-green-300 px-3 py-2 rounded block text-sm font-mono">
                    sbatch -p bigmem --mem=1500g script.R
                  </code>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">GPU Nodes</h3>
                <p className="text-gray-700 mb-4">
                  GPU nodes have conventional CPUs with multiple cores, and <strong>1-4 GPUs</strong>.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements for GPU Usage</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">1</span>
                        <span className="text-gray-700">Request nodes from GPU partition: <code className="bg-gray-800 text-green-300 px-1 rounded">gpu</code>, <code className="bg-gray-800 text-green-300 px-1 rounded">gpu_devel</code>, <code className="bg-gray-800 text-green-300 px-1 rounded">scavenge</code></span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">2</span>
                        <span className="text-gray-700">Request number of GPUs</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">3</span>
                        <span className="text-gray-700">Have an application that uses GPUs</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">4</span>
                        <span className="text-gray-700">Specify CPUs</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Scavenging Partition</h4>
                    <p className="text-blue-800 text-sm mb-2">Scavenging allows users to:</p>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1 ml-4">
                      <li>Access unused nodes from other partitions</li>
                      <li>Run jobs at lower priority, which may be preempted (killed) if higher-priority jobs need resources</li>
                      <li>Submit opportunistic workloads: short jobs, checkpointable jobs, job arrays, or dSQ tasks</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-3">GPU Usage Examples</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Interactive GPU session:</p>
                        <code className="bg-gray-800 text-green-300 px-3 py-2 rounded block text-sm font-mono">
                          salloc -p gpu -c 8 --gpus=1080ti:4 --mem=64g --time=02:00:00
                        </code>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Batch GPU job:</p>
                        <code className="bg-gray-800 text-green-300 px-3 py-2 rounded block text-sm font-mono">
                          sbatch -p gpu -c 8 --gpus=1080ti:4 --mem=64g --time=02:00:00 batch.sh
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Monitoring Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Job Monitoring
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Real-time Monitoring Method</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 1</span>
                    <div>
                      <p className="text-gray-700">Check if job is running efficiently and using allocated resources</p>
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono mt-1 inline-block">squeue</code>
                      <span className="text-sm text-gray-600 ml-2">to identify node where job is running</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 2</span>
                    <div>
                      <p className="text-gray-700">SSH to the node and run system monitoring tools</p>
                      <div className="mt-1 space-x-2">
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">ssh [node]</code>
                        <span className="text-gray-500">then</span>
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">top</code>
                        <span className="text-gray-500">or</span>
                        <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">htop</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Step 3</span>
                    <div>
                      <p className="text-gray-700">For GPU monitoring, check GPU utilization</p>
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono mt-1 inline-block">nvidia-smi</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Post-Job Analysis Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">seff jobid</code>
                      <p className="text-gray-700 text-sm">Job efficiency summary for single jobs</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">seff-array jobid</code>
                      <p className="text-gray-700 text-sm">Job efficiency summary for array jobs</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">sacct -j jobid</code>
                      <p className="text-gray-700 text-sm">Detailed job accounting information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Parallel Jobs Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Running Parallel Jobs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Programs can use multiple CPUs on one node. Parallelism is especially useful in these scenarios:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Multiple Data Files</h4>
                    <p className="text-gray-700 text-sm">Process each file simultaneously instead of sequentially</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Parameter Evaluation</h4>
                    <p className="text-gray-700 text-sm">Evaluate different parameter sets concurrently</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Learn More About Parallel Programming</h3>
                <p className="text-blue-800 mb-3">
                  For detailed guidance on implementing parallel programming techniques in HPC environments:
                </p>
                <a 
                  href="parallel_programming.md" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Parallel Programming Guide →
                </a>
              </div>
            </div>
          </section>

          {/* Batch Jobs Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Batch Jobs through Slurm Commands
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Use Batch Jobs?</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Automation</h4>
                    <p className="text-gray-600 text-xs">No manual monitoring required</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Resource Control</h4>
                    <p className="text-gray-600 text-xs">Specify exact CPU, memory, time needs</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Reproducibility</h4>
                    <p className="text-gray-600 text-xs">Workflow documented in batch script</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Scalability</h4>
                    <p className="text-gray-600 text-xs">Easy to scale up resources</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Queue Management</h4>
                    <p className="text-gray-600 text-xs">Slurm handles scheduling automatically</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Output Logging</h4>
                    <p className="text-gray-600 text-xs">Automatic capture of results</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Common Slurm Commands for Batch Jobs</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">sbatch</code>
                      <p className="text-gray-700 text-sm">Submit a batch job - job ID is returned</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">squeue --me</code>
                      <p className="text-gray-700 text-sm">List all your pending and running jobs</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">scancel JOBID</code>
                      <p className="text-gray-700 text-sm">Cancel queued job or kill running job</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">nano slurm_script.sh</code>
                      <p className="text-gray-700 text-sm">Create a slurm script</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-800 text-green-300 px-2 py-1 rounded text-sm font-mono">sbatch slurm_script.sh</code>
                      <p className="text-gray-700 text-sm">Submit the job script</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sample Batch Script</h3>
                <div className="bg-gray-800 text-green-300 p-4 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`#!/bin/bash

#SBATCH -J example_job
#SBATCH -p day
#SBATCH -t 12:00:00 
#SBATCH --mail-type=ALL
#SBATCH --cpus-per-task=1

module reset
module load miniconda
module load R
conda activate my_env

python test_python.py # run python script
Rscript my_script.R # run R script`}</pre>
                </div>
                
                <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
                  <div className="space-y-2">
                    <div><code className="bg-gray-800 text-green-300 px-1 rounded">#SBATCH -J</code> - Job name</div>
                    <div><code className="bg-gray-800 text-green-300 px-1 rounded">#SBATCH -p</code> - Partition</div>
                    <div><code className="bg-gray-800 text-green-300 px-1 rounded">#SBATCH -t</code> - Time limit</div>
                  </div>
                  <div className="space-y-2">
                    <div><code className="bg-gray-800 text-green-300 px-1 rounded">--mail-type=ALL</code> - Email notifications</div>
                    <div><code className="bg-gray-800 text-green-300 px-1 rounded">--cpus-per-task</code> - CPU cores</div>
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
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Introduction to HPC
              </Link>
              <Link
                to="/knowledge/yale-computing/advanced-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Advanced HPC
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

export default IntermediateHPC;