import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import VertexPage from "./pages/tools/VertexPage";
import REDCapPage from "./pages/tools/REDCapPage";
import BridgePage from "./pages/tools/BridgePage";
import ArcPage from "./pages/tools/ArcPage";
import CCPPage from "./pages/tools/CCPPage";
import DataAnalystsPage from "./pages/roles/DataAnalystsPage";
import DataManagersPage from "./pages/roles/DataManagersPage";
import ClinicalResearchersPage from "./pages/roles/ClinicalResearchersPage";
import HealthcareProfessionalsPage from "./pages/roles/HealthcareProfessionalsPage";
import PublicHealthPage from "./pages/roles/PublicHealthPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "tools/vertex", Component: VertexPage },
      { path: "tools/redcap", Component: REDCapPage },
      { path: "tools/bridge", Component: BridgePage },
      { path: "tools/arc", Component: ArcPage },
      { path: "tools/ccp", Component: CCPPage },
      { path: "roles/data-analysts", Component: DataAnalystsPage },
      { path: "roles/data-managers", Component: DataManagersPage },
      { path: "roles/clinical-researchers", Component: ClinicalResearchersPage },
      { path: "roles/healthcare-professionals", Component: HealthcareProfessionalsPage },
      { path: "roles/public-health", Component: PublicHealthPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
