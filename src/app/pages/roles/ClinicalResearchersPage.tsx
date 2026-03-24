import { ArrowLeft, Users, FileEdit, Microscope, ClipboardList } from "lucide-react";
import { Link } from "react-router";

export default function ClinicalResearchersPage() {
  const tools = [
    { name: "CCP", path: "/tools/ccp", level: "Primary" },
    { name: "ARC", path: "/tools/arc", level: "Primary" },
    { name: "REDCap", path: "/tools/redcap", level: "Secondary" },
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
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Clinical Researchers</h1>
          </div>
          <p className="text-xl text-teal-100">
            Research Protocol and Case Report Forms
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl mb-4">Role Overview</h2>
            <p className="text-slate-700 mb-4">
              Clinical Researchers design and conduct research studies,
              manage patient enrollment, collect clinical data, and ensure
              protocol compliance. They work closely with case processing
              systems and reporting tools.
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
                  <Microscope className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Study Design</h3>
                  <p className="text-slate-600">
                    Develop research protocols and study procedures
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Patient Enrollment
                  </h3>
                  <p className="text-slate-600">
                    Screen, recruit, and enroll study participants
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileEdit className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Collection</h3>
                  <p className="text-slate-600">
                    Complete case report forms and document clinical findings
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Protocol Compliance
                  </h3>
                  <p className="text-slate-600">
                    Ensure adherence to study protocols and regulatory
                    requirements
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
                  1. Study Initialization
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Review and finalize study protocol</li>
                  <li>Complete regulatory submissions</li>
                  <li>Set up case processing workflows in CCP</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  2. Participant Management
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Screen potential participants for eligibility</li>
                  <li>Obtain informed consent</li>
                  <li>Enroll participants and assign study IDs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Clinical Visits</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Conduct study visits and assessments</li>
                  <li>Enter data into case report forms</li>
                  <li>Document adverse events and protocol deviations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Compliance and Reporting
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Use ARC to generate regulatory reports</li>
                  <li>Track enrollment and visit completion</li>
                  <li>Participate in study monitoring and audits</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
