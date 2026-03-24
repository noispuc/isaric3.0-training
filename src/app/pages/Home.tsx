import { Link } from "react-router";
import { Database, FileText, Users, Activity, Stethoscope, Building2, Github, ExternalLink, CheckCircle } from "lucide-react";
import diagramImage from "figma:asset/401b8dd363996da089ae9d0199e739f02fb1aecc.png";

export default function Home() {
  const isaricTools = [
    {
      name: "VERTEX",
      path: "/tools/vertex",
      description: "Advanced data analysis and visualization platform",
      color: "bg-red-500",
      isIsaric: true,
    },
    {
      name: "BRIDGE",
      path: "/tools/bridge",
      description: "Data integration and interoperability framework",
      color: "bg-red-600",
      isIsaric: true,
    },
    {
      name: "ARC",
      path: "/tools/arc",
      description: "Automated Reporting and Compliance tool",
      color: "bg-red-500",
      isIsaric: true,
    },
    {
      name: "CCP",
      path: "/tools/ccp",
      description: "Clinical Caracterization Protocol",
      color: "bg-red-600",
      isIsaric: true,
    },
  ];

  const externalTools = [
    {
      name: "REDCap",
      path: "/tools/redcap",
      description: "Research Electronic Data Capture system",
      color: "bg-gray-700",
      isIsaric: false,
    },
  ];

  const roles = [
    {
      name: "Data Analysts",
      path: "/roles/data-analysts",
      icon: Database,
      description: "Tools and workflows for data analysis",
    },
    {
      name: "Data Managers",
      path: "/roles/data-managers",
      icon: FileText,
      description: "Data management and quality assurance",
    },
    {
      name: "Clinical Researchers",
      path: "/roles/clinical-researchers",
      icon: Users,
      description: "Research protocol and case report forms",
    },
    {
      name: "Healthcare Professionals",
      path: "/roles/healthcare-professionals",
      icon: Stethoscope,
      description: "Evidence-based clinical decision support",
    },
    {
      name: "Public Health Authorities",
      path: "/roles/public-health",
      icon: Building2,
      description: "Epidemiology and public health surveillance",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            Analytical Tools User Guide
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Comprehensive documentation for healthcare research and epidemiology
            analytical platforms
          </p>
        </div>
      </section>

      {/* Ecosystem Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-lg text-slate-700 mb-6 text-center">
                A suite of tools including the clinical epidemiological platform that streamlines data collection, analysis, and visualisation for clinical research.
              </p>
              <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Developed under the following principles:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Flexibility</h4>
                      <p className="text-slate-600 text-sm">Standardised methods adaptable to the context</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Open Source</h4>
                      <p className="text-slate-600 text-sm">Tools can be downloaded, adapted and open for contribution</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Supportive</h4>
                      <p className="text-slate-600 text-sm">ISARIC offers help to set up and use the tools</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Scientifically Efficient</h4>
                      <p className="text-slate-600 text-sm">Rapid generation of evidence to inform both clinical and policy levels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <img
              src={diagramImage}
              alt="Analytical Tools Framework showing VERTEX, REDCap, BRIDGE, ARC, and CCP layers"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">Scalable Analytical Tools</h2>
          
          {/* ISARIC Tools */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-700">ISARIC Tools</h3>
              <a 
                href="https://github.com/ISARICResearch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isaricTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-teal-600"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`${tool.color} text-white px-4 py-2 rounded font-semibold text-sm`}
                    >
                      {tool.name}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* External Tools */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">Integrated External Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-gray-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`${tool.color} text-white px-4 py-2 rounded font-semibold text-sm`}
                    >
                      {tool.name}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">User Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role) => (
              <Link
                key={role.path}
                to={role.path}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-lg">{role.name}</h3>
                </div>
                <p className="text-slate-600">{role.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gradient-to-br from-teal-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Integrated Platform</h3>
              <p className="text-slate-600">
                Seamlessly connected tools for end-to-end research workflows
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Data Capture</h3>
              <p className="text-slate-600">
                Robust systems for collecting and managing research data
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Evidence-Based</h3>
              <p className="text-slate-600">
                Built on best practices and clinical evidence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}