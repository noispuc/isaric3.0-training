import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const location = useLocation();

  const tools = [
    { name: "VERTEX", path: "/tools/vertex" },
    { name: "REDCap", path: "/tools/redcap" },
    { name: "BRIDGE", path: "/tools/bridge" },
    { name: "ARC", path: "/tools/arc" },
    { name: "CCP", path: "/tools/ccp" },
  ];

  const roles = [
    { name: "Data Analysts", path: "/roles/data-analysts" },
    { name: "Data Managers", path: "/roles/data-managers" },
    { name: "Clinical Researchers", path: "/roles/clinical-researchers" },
    { name: "Healthcare Professionals", path: "/roles/healthcare-professionals" },
    { name: "Public Health Authorities", path: "/roles/public-health" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold">
              Analytical Tools Guide
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`hover:text-teal-200 transition-colors ${
                  location.pathname === "/" ? "text-teal-200" : ""
                }`}
              >
                Home
              </Link>

              {/* Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  className="flex items-center gap-1 hover:text-teal-200 transition-colors"
                >
                  Tools
                  <ChevronDown className="w-4 h-4" />
                </button>
                {toolsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-slate-800 rounded-lg shadow-xl py-2 min-w-[200px]">
                    {tools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 hover:bg-teal-50 transition-colors"
                        onClick={() => setToolsDropdownOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Roles Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setRolesDropdownOpen(!rolesDropdownOpen)}
                  className="flex items-center gap-1 hover:text-teal-200 transition-colors"
                >
                  User Roles
                  <ChevronDown className="w-4 h-4" />
                </button>
                {rolesDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white text-slate-800 rounded-lg shadow-xl py-2 min-w-[240px]">
                    {roles.map((role) => (
                      <Link
                        key={role.path}
                        to={role.path}
                        className="block px-4 py-2 hover:bg-teal-50 transition-colors"
                        onClick={() => setRolesDropdownOpen(false)}
                      >
                        {role.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Link
                to="/"
                className="block py-2 hover:text-teal-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-1">
                <div className="font-semibold py-2">Tools</div>
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    className="block py-2 pl-4 hover:text-teal-200 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-1">
                <div className="font-semibold py-2">User Roles</div>
                {roles.map((role) => (
                  <Link
                    key={role.path}
                    to={role.path}
                    className="block py-2 pl-4 hover:text-teal-200 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {role.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <p className="text-slate-300 text-sm">
                Comprehensive guide to analytical tools for healthcare research
                and epidemiology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tools/vertex"
                    className="text-slate-300 hover:text-white"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roles/data-analysts"
                    className="text-slate-300 hover:text-white"
                  >
                    User Roles
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-slate-300 text-sm">
                For more information about our analytical tools and services.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
            © ISARIC Scalable Analytics Guide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
