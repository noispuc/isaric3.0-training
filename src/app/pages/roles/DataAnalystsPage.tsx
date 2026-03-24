import { ArrowLeft, Database, BarChart3, Code, Zap } from "lucide-react";
import { Link } from "react-router";

export default function DataAnalystsPage() {
  const tools = [
    { name: "VERTEX", path: "/tools/vertex", level: "Primary" },
    { name: "REDCap", path: "/tools/redcap", level: "Secondary" },
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
              <Database className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Data Analysts</h1>
          </div>
          <p className="text-xl text-teal-100">
            Analysis Tools and Workflows for Data Analysis
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Role Overview</h2>
            <p className="text-slate-700 mb-4">
              Data Analysts transform raw research data into meaningful
              insights through statistical analysis, visualization, and
              reporting. They work primarily with the analysis tools layer,
              extracting and interpreting data from multiple sources.
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
                  <BarChart3 className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Statistical Analysis
                  </h3>
                  <p className="text-slate-600">
                    Perform descriptive and inferential statistical analyses on
                    research data
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Processing</h3>
                  <p className="text-slate-600">
                    Clean, transform, and prepare data for analysis
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Script Development
                  </h3>
                  <p className="text-slate-600">
                    Create reproducible analysis scripts and pipelines
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Insight Generation
                  </h3>
                  <p className="text-slate-600">
                    Interpret results and communicate findings to stakeholders
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
                  1. Data Extraction and Preparation
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Extract data from REDCap or other data sources</li>
                  <li>Validate data quality and completeness</li>
                  <li>Clean and transform data using BRIDGE or VERTEX</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  2. Exploratory Analysis
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Generate descriptive statistics</li>
                  <li>Create visualizations in VERTEX</li>
                  <li>Identify patterns and trends</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Statistical Modeling</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Select appropriate statistical methods</li>
                  <li>Build and validate models</li>
                  <li>Assess assumptions and model fit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Reporting and Communication
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Create comprehensive analysis reports</li>
                  <li>Develop interactive dashboards</li>
                  <li>Present findings to research teams</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
