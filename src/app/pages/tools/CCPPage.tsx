import {
  ArrowLeft,
  CheckCircle,
  Clipboard,
  Search,
  UserCheck,
  Activity,
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

export default function CCPPage() {
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
          <h1 className="text-4xl md:text-5xl mb-4">CCP</h1>
          <p className="text-xl text-red-100">
            Clinical Caracterization Protocol
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
                    CCP (Clinical Caracterization Protocol) is the foundational layer for
                    managing individual clinical cases, patient records, and case
                    report forms. It provides structured data entry, case tracking,
                    and clinical workflow management capabilities.
                  </p>
                  <p className="text-slate-700">
                    As the base of our analytical framework, CCP ensures accurate and
                    complete capture of clinical data at the patient level,
                    supporting all upstream analytical and reporting functions.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clipboard className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Case Management</h4>
                        <p className="text-slate-600 text-sm">
                          Comprehensive tracking of clinical cases and workflows
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Search className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Search</h4>
                        <p className="text-slate-600 text-sm">
                          Query and filter cases based on multiple criteria
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Patient Enrollment</h4>
                        <p className="text-slate-600 text-sm">
                          Streamlined enrollment and eligibility screening
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Visit Tracking</h4>
                        <p className="text-slate-600 text-sm">
                          Schedule and track study visits and assessments
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
                          <span>Operating System: Windows 10+, Linux (Ubuntu 20.04+), or macOS</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>REDCap instance (version 10.0 or higher)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Database: MySQL 8+ or PostgreSQL 12+</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Minimum 4GB RAM (8GB recommended for large studies)</span>
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
                            <h4 className="font-semibold mb-1">Download CCP Forms</h4>
                            <code className="block bg-slate-100 p-3 rounded text-sm mt-2">
                              git clone https://github.com/ISARICResearch/CCP.git
                            </code>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Import to REDCap</h4>
                            <p className="text-slate-600 mt-1">
                              Import the CCP data dictionary XML file into your REDCap project
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Configure Study Parameters</h4>
                            <p className="text-slate-600 mt-1">
                              Customize visit schedules, eligibility criteria, and data collection forms
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Set Up User Access</h4>
                            <p className="text-slate-600 mt-1">
                              Configure user roles and permissions for your research team
                            </p>
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
                      <h3 className="font-semibold mb-3 text-lg">Customizing Case Report Forms</h3>
                      <p className="text-slate-700 mb-3">
                        Adapt the CCP forms to match your specific study requirements and clinical workflows.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Add or remove data fields to match your protocol</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Configure branching logic for conditional questions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Set up calculated fields for derived variables</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Managing Patient Enrollment</h3>
                      <p className="text-slate-700 mb-3">
                        Streamline the process of screening and enrolling participants into your study.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Use screening forms to assess eligibility criteria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Generate unique study IDs automatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Track informed consent documentation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Tracking Longitudinal Data</h3>
                      <p className="text-slate-700 mb-3">
                        Manage repeated measures and follow-up visits throughout the study duration.
                      </p>
                      <ul className="space-y-2 text-slate-700 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Configure visit schedules and windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Set up automated reminders for upcoming visits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Track visit completion status and missing data</span>
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
                        <h4 className="font-semibold">Infectious Disease Surveillance</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Capture standardized clinical data for emerging infectious disease outbreaks and epidemics.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Clinical Trial Data Collection</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Implement comprehensive case report forms for interventional and observational clinical trials.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Patient Registry Management</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Create and maintain registries for specific diseases or patient populations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Cohort Studies</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Track participants over time with longitudinal data collection and follow-up assessments.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Quality Improvement Projects</h4>
                        <p className="text-slate-600 text-sm mt-1">
                          Document clinical processes and outcomes for healthcare quality improvement initiatives.
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
                        Need assistance with CCP? Our team is here to help you implement and customize the protocol for your research.
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
