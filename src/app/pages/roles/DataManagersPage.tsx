import { ArrowLeft, FileText, Shield, CheckCircle, Database } from "lucide-react";
import { Link } from "react-router";

export default function DataManagersPage() {
  const tools = [
    { name: "REDCap", path: "/tools/redcap", level: "Primary" },
    { name: "BRIDGE", path: "/tools/bridge", level: "Primary" },
    { name: "ARC", path: "/tools/arc", level: "Secondary" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Data Managers</h1>
          </div>
          <p className="text-xl text-teal-100">
            Data Management and Quality Assurance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Role Overview</h2>
            <p className="text-slate-700 mb-4">
              Data Managers ensure the integrity, quality, and security of
              research data throughout its lifecycle. They oversee data
              collection systems, implement quality control processes, and
              maintain data documentation.
            </p>
          </section>

          {/* Primary Tools */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-6">Relevant Tools</h2>
            <div className="space-y-4">
              {tools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all"
                >
                  <div>
                    <h3 className="font-semibold">{tool.name}</h3>
                    <span className="text-sm text-slate-500">
                      {tool.level} Tool
                    </span>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-teal-600 rotate-180" />
                </Link>
              ))}
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-6">Key Responsibilities</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Database Design</h3>
                  <p className="text-slate-600">
                    Design and configure data collection instruments in REDCap
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Quality Control
                  </h3>
                  <p className="text-slate-600">
                    Implement validation rules and conduct data quality checks
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Security</h3>
                  <p className="text-slate-600">
                    Manage user access and ensure data privacy compliance
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Documentation</h3>
                  <p className="text-slate-600">
                    Maintain data dictionaries and standard operating procedures
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Workflows */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6">Common Workflows</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">
                  1. Database Setup and Configuration
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Create REDCap project based on study protocol</li>
                  <li>Design case report forms and surveys</li>
                  <li>Configure validation rules and branching logic</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  2. User Management
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Set up user accounts and assign roles</li>
                  <li>Configure data access groups</li>
                  <li>Provide training and support to data entry personnel</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  3. Quality Assurance
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Run data quality reports and queries</li>
                  <li>Identify and resolve discrepancies</li>
                  <li>Monitor data completeness and compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Data Integration
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Configure BRIDGE connections to external systems</li>
                  <li>Manage data exports and transfers</li>
                  <li>Ensure data consistency across platforms</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
