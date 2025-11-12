import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, CpuChipIcon, CodeBracketIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const ParallelProgramming = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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
                  <Link to="/knowledge/intermediate-hpc" className="hover:text-blue-600">
                    Intermediate HPC
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">Parallel Programming in R</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Parallel Programming in R
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Foundational tools and techniques for parallel computing in R
            </p>
          </div>

          {/* Why Use Parallel Programming */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Why Use Parallel Programming?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  As data grows in size and complexity, traditional sequential computing methods often become 
                  inefficient or impractical. Parallel programming offers a solution by allowing computations 
                  to be distributed across multiple processor cores, significantly reducing runtime and improving scalability.
                </p>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <CpuChipIcon className="h-6 w-6 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">Simulations</h3>
                    <p className="text-gray-700 text-sm">Monte Carlo methods and statistical simulations</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <CpuChipIcon className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">Bootstrapping</h3>
                    <p className="text-gray-700 text-sm">Resampling methods for statistical inference</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <CpuChipIcon className="h-6 w-6 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">Data Processing</h3>
                    <p className="text-gray-700 text-sm">Large-scale data analysis and transformations</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> While this guide focuses on R, parallel programming techniques 
                  are available in other languages like Python as well.
                </p>
              </div>
            </div>
          </section>

          {/* Base R: parallel package */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Base R: parallel Package
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The parallel package uses base R language and is good for generic tasks and processes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Essential Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">1. Detect Available Cores</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      parallel::detectCores()
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Create a Cluster</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      cl &lt;- parallel::makeCluster(4) # creates cluster with 4 workers
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">3. Run Parallel Tasks</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      results &lt;- parallel::parLapply(cl, 1:10, function(x) x^2)
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">4. Export Variables/Functions</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      parallel::clusterExport(cl, varlist = c("my_function", "my_data"))
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                    <h4 className="font-semibold text-gray-900 mb-2">5. Load Packages on Workers</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      parallel::clusterEvalQ(cl, library(dplyr))
                    </code>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">6. Terminate Cluster</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      parallel::stopCluster(cl)
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Other Useful Functions</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="bg-white p-3 rounded border">
                    <code className="bg-gray-500 px-2 py-1 rounded text-sm font-mono">parSapply()</code>
                    <p className="text-gray-700 text-sm mt-1">Parallel version of sapply()</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <code className="bg-gray-500 px-2 py-1 rounded text-sm font-mono">parApply()</code>
                    <p className="text-gray-700 text-sm mt-1">Parallel version of apply() for matrices</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <code className="bg-gray-500 px-2 py-1 rounded text-sm font-mono">clusterApply()</code>
                    <p className="text-gray-700 text-sm mt-1">More flexible, lower-level parallel loop</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <code className="bg-gray-500 px-2 py-1 rounded text-sm font-mono">clusterMap()</code>
                    <p className="text-gray-700 text-sm mt-1">Like Map() but parallel</p>
                  </div>
                </div>
              </div>

              {/* Collapsible Example Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('parallel-example')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Complete Example</h3>
                  {expandedSections['parallel-example'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['parallel-example'] && (
                  <div className="mt-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      <pre>{`library(parallel)

# Create cluster
cl <- makeCluster(4)

# Export function
my_fun <- function(x) x^2
clusterExport(cl, "my_fun")

# Run in parallel
results <- parLapply(cl, 1:10, my_fun)

# Stop cluster
stopCluster(cl)

print(results)`}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* foreach + doParallel */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              foreach + doParallel
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Great for loop-based parallelism!</h3>
                <p className="text-blue-800 text-sm">
                  The foreach package provides intuitive loop-based parallel processing with the doParallel backend.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Commands</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">1. Load Libraries</h4>
                    <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                      library(foreach)<br />
                      library(doParallel)
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Create Cluster and Register Backend</h4>
                    <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                      cl &lt;- makeCluster(4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Create cluster with 4 cores<br />
                      registerDoParallel(cl)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Register parallel backend
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">3. Basic Parallel Loop</h4>
                    <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                      results &lt;- foreach(i = 1:10, .combine = c) %dopar% &#123;<br />
                      &nbsp;&nbsp;i^2<br />
                      &#125;
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">4. Exporting Custom Functions</h4>
                    <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                      my_fun &lt;- function(x) x^2<br />
                      results &lt;- foreach(i = 1:10, .combine = c, .export = "my_fun") %dopar% &#123;<br />
                      &nbsp;&nbsp;my_fun(i)<br />
                      &#125;
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                    <h4 className="font-semibold text-gray-900 mb-2">5. Loading Packages on Workers</h4>
                    <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                      results &lt;- foreach(i = 1:10, .combine = c, .packages = "dplyr") %dopar% &#123;<br />
                      &nbsp;&nbsp;dplyr::n()<br />
                      &#125;
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">6. Shutting Down Cluster</h4>
                    <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm font-mono">
                      stopCluster(cl)
                    </code>
                  </div>
                </div>
              </div>

              {/* Collapsible Error Handling Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('error-handling')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Error Handling</h3>
                  {expandedSections['error-handling'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['error-handling'] && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">
                      When dealing with loops, it helps to have a method to contain errors. Here's an example using 
                      <code className="bg-gray-500 px-1 rounded mx-1">system.time()</code>, 
                      <code className="bg-gray-500 px-1 rounded mx-1">message()</code>, and 
                      <code className="bg-gray-500 px-1 rounded mx-1">tryCatch()</code>:
                    </p>
                    <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      <pre>{`# Custom function that may throw an error
risky_function <- function(x) {
  if (x == 5) stop("Intentional error at x = 5")
  return(sqrt(x))
}

# Use system.time to measure how long the loop takes
execution_time <- system.time({
  results <- foreach(i = 1:10, .combine = c) %do% {
    tryCatch({
      # Try to run the risky function
      risky_function(i)
    }, error = function(e) {
      # Handle the error gracefully
      message(sprintf("Error at i = %d: %s", i, e$message))
      NA  # Return NA for failed iteration
    })
  }
})

# Print results and timing
print(results)
print(execution_time)`}</pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsible Platform-Specific Examples */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('platform-examples')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Platform-Specific Examples</h3>
                  {expandedSections['platform-examples'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['platform-examples'] && (
                  <div className="mt-4">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h4 className="font-semibold text-gray-900 mb-3">Linux/macOS</h4>
                        <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                          <pre>{`library(foreach)
library(doMC)

cl <- makeCluster(4)
registerDoMC(cl) # NOTE: use this for Linux

# Parallel loop
result <- foreach(i=1:100) { %dopar% sqrt(i) }`}</pre>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-semibold text-gray-900 mb-3">Windows</h4>
                        <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                          <pre>{`library(foreach)
library(doParallel)

cl <- makeCluster(4)
registerDoParallel(cl)

# Parallel loop
result <- foreach(i = 1:10, .combine = c) %dopar% {
  i^2
}

stopCluster(cl)`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* future + furrr */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              future + furrr
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The <strong>future</strong> package enables parallel and asynchronous programming, allowing you to switch 
                  between sequential and parallel execution using multicore or multisession. The <strong>furrr</strong> package 
                  builds on this by offering parallel versions of purrr's mapping functions, enabling parallel processing 
                  with minimal code changes.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Future</h4>
                    <p className="text-gray-700 text-sm">An object representing a computation that may not have finished yet</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Plan</h4>
                    <p className="text-gray-700 text-sm">Defines how and where futures are resolved (e.g., sequentially, in parallel, on a cluster)</p>
                  </div>
                </div>
              </div>

              {/* Collapsible future Commands */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('future-commands')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Key Commands for future</h3>
                  {expandedSections['future-commands'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['future-commands'] && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Library and Plans</h4>
                      <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                        <pre>{`library(future) # loads library

plan(sequential)     # Default: runs sequentially
plan(multisession)   # Parallel on multiple R sessions (cross-platform)
plan(multicore)      # Parallel using forked processes (Unix/macOS only)

# Check current plan
plan()

# Set global options (e.g., memory limits)
options(future.globals.maxSize = 1e9)`}</pre>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Creating and Using Futures</h4>
                      <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                        <pre>{`# Create a future
f <- future({ Sys.sleep(2); 42 })

# Retrieve the result
value(f)`}</pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsible furrr Commands */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('furrr-commands')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Key Commands for furrr</h3>
                  {expandedSections['furrr-commands'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['furrr-commands'] && (
                  <div className="mt-4">
                    <div className="bg-white p-4 rounded border">
                      <div className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm font-mono">
                        <pre>{`library(furrr)
plan(multisession)  # Set up parallel backend

# Parallel version of purrr::map()
future_map(.x, .f, ..., .options = furrr_options(seed = TRUE)) # seed = TRUE for reproducibility

# Parallel version of purrr::map2()
future_map2(.x, .y, .f)

# Parallel version of purrr::pmap()
future_pmap(.l, .f)

# Type-specific versions
future_map_dbl(.x, .f)
future_map_chr(.x, .f)
future_map_dfr(.x, .f)  # Combine results into a data frame; .f is your function`}</pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsible mtcars Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleSection('mtcars-example')}
                  className="flex items-center justify-between w-full text-left bg-white hover:bg-gray-100 p-2 rounded transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">Complete Example with mtcars</h3>
                  {expandedSections['mtcars-example'] ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections['mtcars-example'] && (
                  <div className="mt-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      <pre>{`# Load required packages
library(dplyr)
library(furrr)
library(future)

# Set up parallel processing
plan(multisession)  # Use multiple R sessions 

# Group mtcars by number of cylinders
grouped_data <- mtcars %>%
  group_by(cyl) %>%
  group_split() # Splits data frame into A LIST OF dataframes by cylinder count

# Define a modeling function
fit_model <- function(df) {
  model <- lm(mpg ~ wt, data = df)
  summary(model)$r.squared  # Return R-squared as a simple output
}

# Apply the function in parallel using future_map
results <- future_map(grouped_data, fit_model) # Applies function to each group in parallel

# Combine results with cylinder labels
cylinders <- unique(mtcars$cyl)
output <- tibble(cyl = cylinders, r_squared = unlist(results))

# Print the output
print(output)

# Optional: Reset to sequential
plan(sequential)`}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* BiocParallel */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              BiocParallel
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-start space-x-4">
                <CodeBracketIcon className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    Specialized for Bioinformatics!
                  </h3>
                  <p className="text-green-800 mb-4">
                    BiocParallel is especially useful for bioinformatics workflows and is part of the 
                    Bioconductor ecosystem. It provides efficient parallel computing for genomic data analysis.
                  </p>
                  <a 
                    href="https://www.bioconductor.org/packages/release/bioc/vignettes/BiocParallel/inst/doc/Introduction_To_BiocParallel.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                  >
                    View BiocParallel Introduction →
                  </a>
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
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Back to Introduction to HPC
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

export default ParallelProgramming;