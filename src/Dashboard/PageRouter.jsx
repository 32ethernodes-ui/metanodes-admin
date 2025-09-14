import Dashboard from "./pages/Dashboard";
import FundManagement from "./pages/FundManagement";
import More from "./pages/More";
import MyTeam from "./pages/MyTeam";
import Profile from "./pages/Profile";
import TopUp from "./pages/TopUp";
import Wallet from "./pages/Wallet";
import Withdraw from "./pages/Withdraw";


const routes = {
  "/dashboard": <Dashboard />,
  "/profile": <Profile />,
  "/topup": <TopUp />,
  "/my-team": <MyTeam />,
  "/fund-management": <FundManagement />,
  "/wallet": <Wallet />,
  "/withdraw": <Withdraw />,
  "/more": <More />,
};

export default function PageRouter({ pathname }) {
  return routes[pathname] || <div className="p-4">🔍 Page Not Found</div>;
}
