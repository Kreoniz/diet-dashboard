import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";

// Import your page components here
import { DashboardPage } from "@/app/dashboard/page";
import ReportsPage from "@/app/reports/page";
import SettingsPage from "@/app/settings/page";
import HelpPage from "@/app/help/page";
import AccountPage from "@/app/account/page";
import SubscriptionPage from "@/app/subscription/page";
import CreateReportPage from "@/app/create-report/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/create-report" element={<CreateReportPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
