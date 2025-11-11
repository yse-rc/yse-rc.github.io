import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, CubeIcon, BeakerIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const ReproContainers = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          
          {/* Header with Breadcrumb */}
          <div className="bg-white p-8 rounded shadow mb-8">
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
                <li className="font-medium text-gray-900">Virtual Environments & Containers</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Virtual Environments & Containers
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Tools for reproducible research and dependency management in HPC environments
            </p>
          </div>

          {/* What are Containers Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Understanding Containers & Virtual Environments
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What Are Containers?</h3>
                    <p className="text-gray-700 mb-3">
                      Containers are lightweight, standalone packages that include everything needed to run software: 
                      code, runtime, system tools, libraries, and settings. They isolate applications from their environment, 
                      ensuring consistent behavior across different computing platforms.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Key Benefits</h4>
                      <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                        <li>Reproducibility: Same environment across different systems</li>
                        <li>Portability: Run anywhere without dependency conflicts</li>
                        <li>Isolation: Keep project dependencies separate</li>
                        <li>Version control: Lock specific software versions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why We Need Them in Research</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Reproducibility</h4>
                    <p className="text-gray-700 text-sm">Ensure your research can be replicated later with exact dependencies</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                    <p className="text-gray-700 text-sm">Share environments easily with collaborators across institutions</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Dependency Management</h4>
                    <p className="text-gray-700 text-sm">Avoid conflicts between different projects' requirements</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">System Independence</h4>
                    <p className="text-gray-700 text-sm">Work seamlessly across local machines, clusters, and cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conda Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Conda
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <BeakerIcon className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Conda?</h3>
                    <p className="text-gray-700 mb-4">
                      Conda is an open-source package and environment management system that runs on Windows, macOS, and Linux. 
                      It can install and manage packages from multiple languages (Python, R, Ruby, etc.) and handles 
                      dependencies automatically.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Use Cases</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Data science projects with Python and R packages</li>
                        <li>Projects requiring specific Python versions</li>
                        <li>Scientific computing with complex dependencies</li>
                        <li>Cross-platform development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Basic Conda Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <p className="text-sm text-gray-600 mb-2">Create a new environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda create -n myenv python=3.10
                    </code>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-2">Activate environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda activate myenv
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-2">Install packages:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda install numpy pandas matplotlib
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-600 mb-2">List environments:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda env list
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <p className="text-sm text-gray-600 mb-2">Export environment for reproducibility:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda env export &gt; environment.yml
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-600 mb-2">Create environment from file:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda env create -f environment.yml
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-pink-500">
                    <p className="text-sm text-gray-600 mb-2">Deactivate environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      conda deactivate
                    </code>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about Conda, head <a href="https://docs.conda.io/projects/conda/en/stable/user-guide/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* Pixi Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Pixi
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CommandLineIcon className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Pixi?</h3>
                    <p className="text-gray-700 mb-4">
                      Pixi is a fast, modern package manager built on the conda ecosystem. It's designed to be faster than 
                      traditional conda, with better dependency resolution and a focus on reproducibility. Pixi uses a 
                      project-based approach with lock files for guaranteed reproducibility.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Use Cases</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Projects requiring fast dependency resolution</li>
                        <li>Multi-language projects (Python, R, C++)</li>
                        <li>Teams needing strict reproducibility</li>
                        <li>Modern workflows with lock files</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Basic Pixi Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <p className="text-sm text-gray-600 mb-2">Initialize a new project:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi init myproject
                    </code>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-2">Add packages to project:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi add numpy pandas matplotlib
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-2">Run commands in the environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi run python script.py
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-600 mb-2">Install all dependencies from lock file:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi install
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <p className="text-sm text-gray-600 mb-2">Activate shell in the environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi shell
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-600 mb-2">List installed packages:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      pixi list
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">pixi.lock and pixi.toml</h4>
                <p className="text-yellow-800 text-sm mb-2">
                  pixi.toml declares your project's dependencies and sources; pixi.lock records exact package
                  versions and hashes used. Commit both to your repository so others (and CI) can reproduce the
                  exact environment. Use <code className="bg-gray-800 text-green-400 px-1 rounded text-xs font-mono">pixi install</code>
                  to recreate from the lock file.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Why Choose Pixi?</h3>
                <p className="text-blue-800 text-sm mb-2">
                  Pixi offers significant speed improvements over traditional conda and enforces reproducibility 
                  through lock files, making it ideal for team projects and CI/CD pipelines.
                </p>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about Pixi, head <a href="https://pixi.sh/dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* UV Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              UV
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CommandLineIcon className="h-8 w-8 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is UV?</h3>
                    <p className="text-gray-700 mb-4">
                      UV is an extremely fast Python package installer and resolver, written in Rust. It's designed as a 
                      drop-in replacement for pip and pip-tools, offering 10-100x faster package installation. UV is 
                      Python-focused and integrates well with modern Python development workflows.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Use Cases</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Pure Python projects</li>
                        <li>Projects needing extremely fast package installation</li>
                        <li>CI/CD pipelines requiring speed optimization</li>
                        <li>Development with pyproject.toml workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Basic UV Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <p className="text-sm text-gray-600 mb-2">Create a virtual environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv venv
                    </code>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-2">Install packages (pip-compatible):</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip install numpy pandas matplotlib
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-2">Install from requirements.txt:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip install -r requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-600 mb-2">Compile dependencies with lock file:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip compile requirements.in -o requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <p className="text-sm text-gray-600 mb-2">Sync environment to match requirements exactly:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip sync requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-600 mb-2">List installed packages:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip list
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Why Choose UV?</h3>
                <p className="text-blue-800 text-sm mb-2">
                  UV's speed makes it ideal for CI/CD pipelines and large projects. It's drop-in compatible with pip, 
                  making migration simple while offering dramatic performance improvements.
                </p>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about UV, head <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* Docker & Kubernetes Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Docker & Kubernetes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Docker</h3>
                    <p className="text-gray-700 mb-3">
                      Docker creates true containers that package entire operating system environments, not just Python packages. 
                      Essential for deploying applications, running complex software stacks, and ensuring exact reproducibility 
                      across any system.
                    </p>

                    <div className="bg-gray-50 p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Docker basics (brief)</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Think of a Docker image like a sealed snapshot or a finished recipe for a computer environment — it
                        contains the application and everything it needs to run (libraries, system tools, settings). Images are
                        built from Dockerfiles (the recipe) and are made of stacked layers; when you change something
                        small, Docker only adds a new layer instead of rebuilding everything.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        A container is a running instance of an image — like launching a meal prepared from the recipe. You
                        can run many containers from the same image. Images are stored in registries (public like Docker Hub
                        or private company registries) so teams can push (upload) and pull (download) images by name and tag
                        (e.g., myimage:latest).
                      </p>
                      <p className="text-gray-700 text-sm">
                        In short: image = packaged recipe/snapshot, container = running copy, registry = library where images
                        live. Tags help identify versions (e.g., v1.0, latest).
                      </p>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">Build an image from Dockerfile:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          docker build -t myimage:latest .
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Creates a reusable image from the Dockerfile in the current folder)</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">Run a container:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          docker run -it myimage:latest
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Starts a running instance of the image so you can interact with it)</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">List running containers:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          docker ps
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Shows which containers are currently running on your machine)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CommandLineIcon className="h-8 w-8 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Kubernetes</h3>
                    <p className="text-gray-700 mb-3">
                      Kubernetes orchestrates Docker containers at scale, managing deployment, scaling, and networking 
                      across clusters. Used for production applications and large-scale computational workflows.
                    </p>
                    <div className="space-y-3 mt-4">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">Deploy an application:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          kubectl apply -f deployment.yaml
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Tells Kubernetes to create/update resources described in the file)</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">View running pods:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          kubectl get pods
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Lists the running units of work; each pod runs one or more containers)</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600 mb-1">Scale deployment:</p>
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                          kubectl scale deployment myapp --replicas=3
                        </code>
                        <p className="text-sm text-gray-600 mt-2">(Increases or decreases the number of running instances for your app)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">When to Use Docker/Kubernetes?</h3>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Deploying web applications or APIs</li>
                  <li>Running complex software with system-level dependencies</li>
                  <li>Scaling computational workloads across multiple nodes</li>
                  <li>Ensuring exact reproducibility including OS-level libraries</li>
                </ul>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about Docker, head <a href="https://www.docker.com/101-tutorial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
                <p className="text-gray-700 mt-1">To explore more about Kubernetes, head <a href="https://kubernetes.io/docs/setup/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Choosing the Right Tool
            </h2>
            
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Tool</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Best For</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Speed</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Languages</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Conda</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Cross-platform, multi-language projects</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Moderate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Python, R, C++, etc.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Pixi</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Fast, reproducible multi-language projects</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Fast</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Python, R, C++, etc.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">UV</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Pure Python, speed-critical workflows</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Very Fast</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Python only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">Pro Tip</h3>
                <p className="text-yellow-800 text-sm">
                  You can use these tools together! For example, use Conda for complex scientific dependencies, 
                  but UV for quick Python package installations. Choose based on your project's specific needs.
                </p>
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
                <span className="mr-2">←</span>
                Intermediate HPC Techniques
              </Link>
              <Link 
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Introduction to HPC
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

export default ReproContainers;