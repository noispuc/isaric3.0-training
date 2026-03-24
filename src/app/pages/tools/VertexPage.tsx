import {
  ArrowLeft,
  CheckCircle,
  Database,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  ExternalLink,
  BookOpen,
  Settings,
  Wrench,
  Lightbulb,
  LifeBuoy,
  Mail,
  Github,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function VertexPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    {
      icon: BookOpen,
      label: "Overview",
      hash: "#overview",
    },
    {
      icon: Settings,
      label: "Setup & Configuration",
      hash: "#setup",
    },
    {
      icon: Wrench,
      label: "How To",
      hash: "#howto",
    },
    {
      icon: Lightbulb,
      label: "Use Cases",
      hash: "#usecases",
    },
    {
      icon: LifeBuoy,
      label: "Support",
      hash: "#support",
    },
  ];

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl mb-4">VERTEX</h1>
          <p className="text-xl text-red-100">
            Advanced Data Analysis and Visualization Platform
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside
              className={`
                ${sidebarOpen ? "w-64" : "w-16"} 
                bg-slate-50 rounded-lg border border-slate-200
                transition-all duration-300 sticky top-4 self-start
              `}
            >
              <div className="p-3">
                {/* Toggle Button */}
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500 hover:text-red-600 transition-colors"
                  >
                    {sidebarOpen ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.hash}
                      onClick={() => scrollToSection(item.hash)}
                      className="w-full flex items-center gap-2 px-2 py-2 rounded-md transition-all duration-200 group relative text-slate-600 hover:bg-slate-100 hover:text-red-600"
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-red-600" />
                      {sidebarOpen ? (
                        <span className="text-xs font-medium">{item.label}</span>
                      ) : (
                        <span className="absolute left-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                          {item.label}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-4">
                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                  <h2 className="text-2xl mb-4">Overview</h2>
                  <p className="text-slate-700 mb-4">
                    VERTEX is the top-level analytical platform in our integrated
                    framework, providing advanced data analysis, statistical
                    modeling, and visualization capabilities for healthcare research
                    and epidemiological studies.
                  </p>
                  <p className="text-slate-700">
                    As the apex of the analytical tool stack, VERTEX integrates data
                    from all underlying systems (REDCap, BRIDGE, ARC, and CCP) to
                    provide comprehensive insights and reporting capabilities.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Visualization</h4>
                        <p className="text-slate-600 text-sm">
                          Interactive charts, graphs, and dashboards for data exploration
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Data Integration</h4>
                        <p className="text-slate-600 text-sm">
                          Seamless connection to all data capture systems
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Statistical Analysis</h4>
                        <p className="text-slate-600 text-sm">
                          Built-in statistical models and machine learning algorithms
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileSpreadsheet className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Report Generation</h4>
                        <p className="text-slate-600 text-sm">
                          Automated report creation and export capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Setup & Configuration Section */}
              <section id="setup" className="scroll-mt-4">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl mb-6">Setup & Configuration</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Installation Requirements</h3>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Operating System: Linux (Ubuntu 20.04+) or macOS</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Python 3.8 or higher</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>R 4.0 or higher (optional for statistical packages)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Minimum 8GB RAM (16GB recommended)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Installation Steps</h3>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Clone the Repository</h4>
                            <code className="block bg-slate-100 p-3 rounded text-sm mt-2">
                              git clone https://github.com/ISARICResearch/VERTEX.git
                            </code>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Install Dependencies</h4>
                            <code className="block bg-slate-100 p-3 rounded text-sm mt-2">
                              pip install -r requirements.txt
                            </code>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Configure Database Connection</h4>
                            <p className="text-slate-600 mt-1">
                              Edit the config.yml file to set up your database connections and API keys
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Run the Application</h4>
                            <code className="block bg-slate-100 p-3 rounded text-sm mt-2">
                              python vertex.py --start
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How To Section */}
              <section id="howto" className="scroll-mt-4">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl mb-6">How To</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Customizing Visualizations</h3>
                      <p className="text-slate-700 mb-3">
                        VERTEX allows you to customize charts and dashboards to meet your specific research needs.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Create custom chart templates using the visualization editor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Modify color schemes and themes in the settings panel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Export visualizations in multiple formats (PNG, SVG, PDF)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Creating Analysis Workflows</h3>
                      <p className="text-slate-700 mb-3">
                        Build reproducible analysis pipelines with VERTEX's workflow engine.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Define data preprocessing steps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Chain statistical analyses in sequence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Schedule automated report generation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Integrating External Data Sources</h3>
                      <p className="text-slate-700 mb-3">
                        Connect VERTEX to external databases and APIs for comprehensive analysis.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Configure database connectors in the data sources panel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Set up API authentication credentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Create data mapping rules for field alignment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Use Cases Section */}
              <section id="usecases" className="scroll-mt-4">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl mb-6">Use Cases</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Epidemiological Surveillance and Outbreak Analysis</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Monitor disease patterns, detect outbreaks early, and analyze transmission dynamics in real-time.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Clinical Trial Data Analysis</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Perform interim analyses, safety monitoring, and efficacy assessments for clinical trials.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Health Outcomes Research</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Evaluate treatment effectiveness, quality improvement initiatives, and patient outcomes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Population Health Dashboards</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Create interactive dashboards for public health monitoring and policy decision support.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Real-time Public Health Monitoring</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Track health indicators continuously and generate automated alerts for public health authorities.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Support Section */}
              <section id="support" className="scroll-mt-4">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl mb-6">Support</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Get Help</h3>
                      <p className="text-slate-700 mb-4">
                        Need assistance with VERTEX? Our team is here to help you get the most out of the platform.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-slate-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <Github className="w-6 h-6 text-red-600" />
                          </div>
                          <h4 className="font-semibold">GitHub</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Report issues, request features, and contribute to the project on GitHub.
                        </p>
                        <a
                          href="https://github.com/ISARICResearch"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                        >
                          Visit GitHub Repository
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-red-600" />
                          </div>
                          <h4 className="font-semibold">Email Support</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Contact our support team for technical assistance and guidance.
                        </p>
                        <a
                          href="mailto:support@isaric.org"
                          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                        >
                          support@isaric.org
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Community Resources</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Join our community forums for discussions and best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Access video tutorials and webinar recordings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Browse our knowledge base for common questions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
