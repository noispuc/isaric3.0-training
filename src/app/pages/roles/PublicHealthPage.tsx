import { ArrowLeft, Building2, Globe, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export default function PublicHealthPage() {
  const tools = [
    { name: "VERTEX", path: "/tools/vertex", level: "Primary" },
    { name: "ARC", path: "/tools/arc", level: "Primary" },
    { name: "BRIDGE", path: "/tools/bridge", level: "Secondary" },
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
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Public Health Authorities</h1>
          </div>
          <p className="text-xl text-teal-100">
            Epidemiology and Public Health Surveillance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Role Overview</h2>
            <p className="text-slate-700 mb-4">
              Public Health Authorities use the analytical framework for
              population health surveillance, outbreak investigation, policy
              development, and public health reporting. They analyze
              epidemiological data to protect and improve community health.
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
                  <Globe className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Disease Surveillance
                  </h3>
                  <p className="text-slate-600">
                    Monitor disease trends and detect outbreaks in populations
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Epidemiological Analysis
                  </h3>
                  <p className="text-slate-600">
                    Analyze population health data to identify risk factors
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Outbreak Response
                  </h3>
                  <p className="text-slate-600">
                    Investigate and respond to public health emergencies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Policy Development</h3>
                  <p className="text-slate-600">
                    Use data to inform public health policies and interventions
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
                  1. Surveillance Activities
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Collect data from multiple sources via BRIDGE</li>
                  <li>Monitor disease incidence and prevalence in VERTEX</li>
                  <li>Generate automated surveillance reports with ARC</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  2. Outbreak Investigation
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Detect anomalies in surveillance data</li>
                  <li>Conduct epidemiological analysis</li>
                  <li>Map outbreak spread and identify sources</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  3. Population Health Assessment
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Analyze health disparities and social determinants</li>
                  <li>Track health indicators over time</li>
                  <li>Evaluate intervention effectiveness</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Public Reporting
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Create public-facing dashboards and visualizations</li>
                  <li>Generate regulatory and statutory reports</li>
                  <li>Communicate findings to stakeholders and public</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
