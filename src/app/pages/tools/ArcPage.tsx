import {
  ArrowLeft,
  CheckCircle,
  FileCheck,
  AlertCircle,
  ClipboardCheck,
  TrendingUp,
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

export default function ArcPage() {
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
          <h1 className="text-4xl md:text-5xl mb-4">ARC</h1>
          <p className="text-xl text-red-100">
            Automated Reporting and Compliance Tool
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
                    ARC (Automated Reporting and Compliance) streamlines the creation
                    of regulatory reports, study documentation, and compliance
                    monitoring. It automates routine reporting tasks while ensuring
                    adherence to regulatory standards and institutional policies.
                  </p>
                  <p className="text-slate-700">
                    Integrated with case report forms and protocol management systems,
                    ARC reduces manual effort and minimizes errors in regulatory
                    submissions and compliance documentation.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Automated Reports</h4>
                        <p className="text-slate-600 text-sm">
                          Generate regulatory and study reports automatically
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Compliance Tracking</h4>
                        <p className="text-slate-600 text-sm">
                          Monitor protocol deviations and regulatory requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ClipboardCheck className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quality Assurance</h4>
                        <p className="text-slate-600 text-sm">
                          Built-in validation and audit trail capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Metrics Dashboard</h4>
                        <p className="text-slate-600 text-sm">
                          Real-time compliance metrics and KPIs
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
                          <span>Operating System: Windows 10+, Linux, or macOS</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Python 3.8+ or Node.js 14+</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Database: SQLite (included) or PostgreSQL</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Minimum 4GB RAM</span>
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
                              git clone https://github.com/ISARICResearch/ARC.git
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
                            <h4 className="font-semibold mb-1">Configure Report Templates</h4>
                            <p className="text-slate-600 mt-1">
                              Edit the templates directory to customize report formats and layouts
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Launch ARC</h4>
                            <code className="block bg-slate-100 p-3 rounded text-sm mt-2">
                              python arc.py --start
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
                      <h3 className="font-semibold mb-3 text-lg">Creating Custom Report Templates</h3>
                      <p className="text-slate-700 mb-3">
                        Design report templates that match your institutional requirements and regulatory standards.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Use the template editor to create custom report layouts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Add dynamic fields that pull data from your studies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Include institutional logos and branding elements</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Configuring Compliance Rules</h3>
                      <p className="text-slate-700 mb-3">
                        Set up automated compliance monitoring to track protocol adherence and regulatory requirements.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Define compliance thresholds and monitoring criteria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Set up email alerts for compliance issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Create dashboards for compliance oversight</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Scheduling Automated Reports</h3>
                      <p className="text-slate-700 mb-3">
                        Configure automatic report generation and distribution on a regular schedule.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Set up daily, weekly, or monthly report schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Configure email distribution lists</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Archive reports automatically for regulatory compliance</span>
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
                        <h4 className="font-semibold">Adverse Event Reporting</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Generate AE and SAE reports automatically with required regulatory information and timelines.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">IRB Continuing Review</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Prepare annual reports for Institutional Review Board submissions with all required documentation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">DSMB Safety Monitoring</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Create comprehensive safety reports for Data Safety Monitoring Board review meetings.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Enrollment Tracking</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Monitor recruitment progress with automated enrollment and retention reports.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Protocol Deviation Tracking</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Document and report protocol deviations and violations to regulatory authorities.
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
                        Need assistance with ARC? Our team is here to help you streamline your reporting and compliance workflows.
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
