import { ArrowLeft, CheckCircle, Lock, Users, Calendar, ExternalLink, Database } from "lucide-react";
import { Link } from "react-router";

export default function REDCapPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl mb-4">REDCap</h1>
          <p className="text-xl text-gray-100">
            Research Electronic Data Capture System
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* External Tool Notice */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">External Tool</h3>
                <p className="text-blue-800 mb-3">
                  REDCap is developed and maintained by Vanderbilt University. It is not an ISARIC tool but integrates seamlessly with the ISARIC analytical framework.
                </p>
                <a
                  href="https://www.project-redcap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Visit REDCap Official Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Overview</h2>
            <p className="text-slate-700 mb-4">
              REDCap (Research Electronic Data Capture) is a secure web
              application for building and managing online surveys and
              databases. It's specifically designed for research studies and
              operations, providing an intuitive interface for designing data
              collection instruments.
            </p>
            <p className="text-slate-700">
              REDCap serves as a critical data capture layer in our analytical
              framework, ensuring secure, compliant, and efficient collection
              of research data across various study types.
            </p>
          </section>

          {/* Key Features */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure & Compliant</h3>
                  <p className="text-slate-600 text-sm">
                    HIPAA compliant with comprehensive audit trails
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Management</h3>
                  <p className="text-slate-600 text-sm">
                    Comprehensive data validation and quality control
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Multi-User Access</h3>
                  <p className="text-slate-600 text-sm">
                    Role-based permissions and collaborative workflows
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Survey Scheduling</h3>
                  <p className="text-slate-600 text-sm">
                    Automated invitations and reminders
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Create a Project</h3>
                  <p className="text-slate-600">
                    Set up a new REDCap project with your study parameters
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Design Instruments</h3>
                  <p className="text-slate-600">
                    Build data collection forms using the Online Designer or
                    Data Dictionary
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Configure Access</h3>
                  <p className="text-slate-600">
                    Set up user rights and data access groups
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Launch Study</h3>
                  <p className="text-slate-600">
                    Begin data collection and monitor progress
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6">Best Practices</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Use data validation rules to ensure data quality at entry
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Implement branching logic to create dynamic, user-friendly
                  forms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Regularly backup your data and maintain version control
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Test forms thoroughly before launching to participants
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Use calculated fields to automate scoring and derived
                  variables
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}