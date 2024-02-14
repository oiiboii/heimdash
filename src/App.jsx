import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalReportEmpty } from "./screens/ModalReportEmpty";
import { EmployeeOverview } from "./screens/EmployeeOverview";
import { LogIn } from "./screens/LogIn";
import { Contacts } from "./screens/Contacts";
import { Reports } from "./screens/Reports";
import { Dash } from "./screens/Dash";
import { ModalReportEmptyScreen } from "./screens/ModalReportEmptyScreen";
import { ModalSummary } from "./screens/ModalSummary";
import { ModalOshaLog } from "./screens/ModalOshaLog";
import { ModalIncident } from "./screens/ModalIncident";
import { ModalProfile } from "./screens/ModalProfile";
import { ModalSummaryScreen } from "./screens/ModalSummaryScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ModalReportEmpty />,
  },
  {
    path: "/modal-report-empty",
    element: <ModalReportEmpty />,
  },
  {
    path: "/employee-overview",
    element: <EmployeeOverview />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/dash",
    element: <Dash />,
  },
  {
    path: "/modal-report-empty2",
    element: <ModalReportEmptyScreen />,
  },
  {
    path: "/modal-300a-summary-of-incidents-empty",
    element: <ModalSummary />,
  },
  {
    path: "/modal-osha-300-log-of-incidents",
    element: <ModalOshaLog />,
  },
  {
    path: "/modal-incident-report-301-empty",
    element: <ModalIncident />,
  },
  {
    path: "/modal-profile",
    element: <ModalProfile />,
  },
  {
    path: "/modal-300a-summary-of-incidents-u45-filled",
    element: <ModalSummaryScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
