import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, KeyIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const GitSSHSetup = () => {
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
                <li>
                  <Link to="/knowledge/yale-computing" className="hover:text-blue-600">
                    Yale Computing
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">Git &amp; SSH Setup</li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Git &amp; SSH Setup
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Connect GitHub to your local machine or the cluster via SSH keys
            </p>
          </div>

          {/* How SSH Keys Work */}
          <section id="how-ssh-keys-work" className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              How SSH Keys Work
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <KeyIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div className="space-y-3 text-gray-700">
                  <p>
                    SSH authentication uses a <strong>key pair</strong> — two files generated together that are mathematically linked:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-white p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        <code className="bg-gray-800 text-green-300 px-2 py-0.5 rounded text-sm font-mono">id_ed25519</code> — Private Key
                      </h4>
                      <p className="text-sm text-gray-700">
                        The <strong>key</strong>. Stays on your machine. Never share or display this file.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        <code className="bg-gray-800 text-green-300 px-2 py-0.5 rounded text-sm font-mono">id_ed25519.pub</code> — Public Key
                      </h4>
                      <p className="text-sm text-gray-700">
                        The <strong>lock</strong>. You give this to GitHub. Only your private key can open it.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Why ed25519?</strong> A modern elliptic-curve algorithm — faster and more secure than the older RSA default, with shorter keys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 1: Generate */}
          <section id="generate-key" className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">1</span>
              Generate a Key Pair
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 text-sm">
                Open a terminal (on the cluster: Applications → System Tools → MATE Terminal) and run:
              </p>
              <div className="bg-gray-800 p-4 rounded font-mono text-sm">
                <span className="text-green-300">ssh-keygen -t ed25519 -C </span>
                <span className="text-amber-300">"your_email@example.com"</span>
              </div>
              <p className="text-gray-600 text-sm">
                Use your <strong>GitHub email</strong>. Press <kbd className="bg-gray-200 px-1.5 py-0.5 rounded text-xs font-mono">Enter</kbd> through all prompts to accept defaults (default file location, no passphrase).
              </p>
            </div>
          </section>

          {/* Step 2: Copy */}
          <section id="copy-public-key" className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">2</span>
              Copy Your Public Key
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="bg-gray-800 p-4 rounded font-mono text-sm">
                <span className="text-green-300">cat ~/.ssh/id_ed25519.pub</span>
              </div>
              <p className="text-gray-600 text-sm">
                Copy the entire output. It starts with <code className="bg-gray-200 px-1 py-0.5 rounded text-xs font-mono">ssh-ed25519</code> and ends with your email.
              </p>
              <div className="bg-red-50 p-4 rounded border border-red-200 flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-800">
                  The <code className="bg-red-100 px-1 py-0.5 rounded text-xs font-mono">.pub</code> extension matters.
                  Without it, <code className="bg-gray-800 text-red-300 px-1.5 py-0.5 rounded text-xs font-mono">cat ~/.ssh/id_ed25519</code> displays
                  your <strong>private key</strong>. Never share that.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3: Add to GitHub */}
          <section id="add-to-github" className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">3</span>
              Add to GitHub
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
                <li>
                  Go to{' '}
                  <a
                    href="https://github.com/settings/keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    github.com/settings/keys
                  </a>
                </li>
                <li>Click <strong>New SSH Key</strong></li>
                <li>Paste the copied public key and save</li>
              </ol>
            </div>
          </section>

          {/* Step 4: Test */}
          <section id="test-connection" className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">4</span>
              Test the Connection
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="bg-gray-800 p-4 rounded font-mono text-sm">
                <span className="text-green-300">ssh -T git@github.com</span>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Expected output:</strong> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide shell access.
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
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Introduction to HPC
              </Link>
              <a
                href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                GitHub SSH Docs
              </a>
              <Link
                to="/knowledge/yale-computing"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">↑</span>
                Back to Yale Computing
              </Link>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GitSSHSetup;
