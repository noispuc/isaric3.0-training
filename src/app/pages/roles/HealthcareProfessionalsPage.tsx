import { ArrowLeft, Stethoscope, Heart, Activity, BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function HealthcareProfessionalsPage() {
  const tools = [
    { name: "CCP", path: "/tools/ccp", level: "Primary" },
    { name: "VERTEX", path: "/tools/vertex", level: "Secondary" },
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
              <Stethoscope className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Healthcare Professionals</h1>
          </div>
          <p className="text-xl text-teal-100">
            Evidence-Based Clinical Decision Support
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Role Overview</h2>
            <p className="text-slate-700 mb-4">
              Healthcare Professionals including physicians, nurses, and allied
              health workers use the analytical framework to access clinical
              evidence, support patient care decisions, and contribute to
              clinical research activities.
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
            <h2 className="text-2xl mb-6">Key Use Cases</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Patient Care</h3>
                  <p className="text-slate-600">
                    Access clinical data and evidence to support patient care
                    decisions
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Clinical Research
                  </h3>
                  <p className="text-slate-600">
                    Participate in research studies and contribute clinical data
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Evidence Review
                  </h3>
                  <p className="text-slate-600">
                    Review aggregated clinical evidence and best practices
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Quality Improvement
                  </h3>
                  <p className="text-slate-600">
                    Use data insights for quality improvement initiatives
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
                  1. Clinical Decision Support
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Access patient data through CCP</li>
                  <li>Review evidence-based guidelines</li>
                  <li>Make informed treatment decisions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  2. Research Participation
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Identify eligible patients for research studies</li>
                  <li>Document clinical observations in case report forms</li>
                  <li>Coordinate study visits and procedures</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  3. Data-Driven Practice
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Review clinical outcome data via VERTEX</li>
                  <li>Identify trends in patient populations</li>
                  <li>Apply insights to improve patient care</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Continuing Education
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Access research findings and clinical evidence</li>
                  <li>Stay current with evidence-based practices</li>
                  <li>Participate in professional development activities</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
