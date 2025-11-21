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

          {/* Quick Guide Section */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow mb-8 border border-blue-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Quick Guide: Choosing the Right Tool
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">For Virtual Environments</h3>
                <p className="text-gray-700 text-sm mb-2">Use <strong>UV</strong> or <strong>Pixi</strong> for package management and lightweight environments</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">For Full Control</h3>
                <p className="text-gray-700 text-sm mb-2">Use <strong>Docker</strong> or <strong>Apptainer</strong> for complete OS-level containerization</p>
              </div>
            </div>
          </section>

          {/* Understanding Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Understanding Virtual Environments vs Containers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <BeakerIcon className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Virtual Environments</h3>
                    <p className="text-gray-700 mb-3">
                      Virtual environments are isolated collections of packages and libraries that run on your existing 
                      operating system. They allow you to manage project dependencies separately without affecting your 
                      system-wide installations. The OS remains the same; only the packages differ.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Key Characteristics</h4>
                      <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                        <li>Lightweight: Only packages and libraries are isolated</li>
                        <li>Same OS: Runs on your current operating system</li>
                        <li>Fast setup: Quick to create and activate</li>
                        <li>Language-specific: Typically for Python, R, or similar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Containers</h3>
                    <p className="text-gray-700 mb-3">
                      Containers package a complete virtual computer with its own operating system, libraries, dependencies, 
                      and application code. They can be moved anywhere and will run identically regardless of the host system. 
                      Think of containers as portable, self-contained computing environments.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Key Characteristics</h4>
                      <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                        <li>Complete isolation: Full OS environment included</li>
                        <li>Maximum portability: Run anywhere without modifications</li>
                        <li>Reproducibility: Exact same environment across systems</li>
                        <li>System-level control: Manage OS libraries and configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Environments Header */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg shadow mb-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Virtual Environments</h2>
          </div>

          {/* UV Section - moved to first */}
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
                    <p className="text-sm text-gray-600 mb-2">Activate the virtual environment:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      source .venv/bin/activate
                    </code>
                    <p className="text-sm text-gray-600 mt-2">(Activates the environment so you can use its packages)</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-2">Install packages (pip-compatible):</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip install numpy pandas matplotlib
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-600 mb-2">Install from requirements.txt:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip install -r requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <p className="text-sm text-gray-600 mb-2">Compile dependencies with lock file:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip compile requirements.in -o requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-600 mb-2">Sync environment to match requirements exactly:</p>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      uv pip sync requirements.txt
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-pink-500">
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
                  making migration simple while offering performance improvements.
                </p>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about UV, head <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* Pixi Section - second */}
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

          {/* Conda Section - third */}
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

          {/* Containers Header */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg shadow mb-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Containers</h2>
          </div>

          {/* Docker Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Docker
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Docker?</h3>
                    <p className="text-gray-700 mb-3">
                      Docker creates true containers that package entire operating system environments, not just packages. 
                      Essential for deploying applications, running complex software stacks, and ensuring exact reproducibility 
                      across any system.
                    </p>

                    <div className="bg-gray-50 p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Docker Basics</h4>
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
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">When to Use Docker?</h3>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Deploying web applications or APIs</li>
                  <li>Running complex software with system-level dependencies</li>
                  <li>Ensuring exact reproducibility including OS-level libraries</li>
                  <li>Cross-platform development and deployment</li>
                </ul>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To explore more about Docker and get started with tutorials, head <a href="https://www.docker.com/101-tutorial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">here</a>.</p>
              </div>
            </div>
          </section>

          {/* Apptainer Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Apptainer (Singularity)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Apptainer?</h3>
                    <p className="text-gray-700 mb-4">
                      Apptainer (formerly Singularity) is a container platform designed specifically for HPC and scientific computing. 
                      Apptainer is ideal for shared computing environments like Yale's HPC clusters. Apptainer containers are compatible with Docker images and provide secure, 
                      reproducible environments for research workflows.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>No root privileges required for execution</li>
                        <li>Compatible with Docker containers and images</li>
                        <li>Single-file container images for easy sharing</li>
                        <li>Optimized for HPC batch scheduling systems</li>
                        <li>Strong security model for multi-user systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">Apptainer at Yale</h3>
                <p className="text-purple-800 text-sm mb-3">
                  Apptainer is available on Yale HPC. You can build containers locally or pull existing 
                  Docker images to run on Yale's systems. This enables reproducible research while maintaining the 
                  security requirements of shared HPC environments.
                </p>
                <p className="text-purple-800 text-sm">
                  Common use cases include running containerized applications, creating reproducible analysis pipelines, 
                  and packaging complex software stacks with specific dependencies.
                </p>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To learn more about using Apptainer on Yale's clusters, visit the <a href="https://docs.ycrc.yale.edu/clusters-at-yale/guides/containers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Yale Center for Research Computing containers guide</a>.</p>
              </div>
            </div>
          </section>

          {/* Kubernetes Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Kubernetes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CommandLineIcon className="h-8 w-8 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Kubernetes?</h3>
                    <p className="text-gray-700 mb-3">
                      Kubernetes orchestrates Docker containers at scale, managing deployment, scaling, and networking 
                      across clusters. Used for production applications and large-scale computational workflows that need 
                      to run across multiple nodes with automatic scaling and recovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">When to Use Kubernetes?</h3>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Scaling computational workloads across multiple nodes</li>
                  <li>Deploying microservices and distributed applications</li>
                  <li>Managing complex multi-container applications</li>
                  <li>Automated deployment, scaling, and management of containerized apps</li>
                </ul>
              </div>

              <div className="mt-3 text-sm">
                <p className="text-gray-700">To learn more about Kubernetes and get started, visit the <a href="https://kubernetes.io/docs/setup/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">official Kubernetes setup guide</a>.</p>
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
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">Tip</h3>
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