import React from "react";

// Import MUI icons
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const metrics = [
  {
    title: "Wallet",
    value: 5,
    icon: <AccountBalanceWalletIcon className="text-blue-500" />,
  },
  {
    title: "Fund Balance",
    value: 0,
    icon: <AccountBalanceIcon className="text-green-500" />,
  },
  {
    title: "Total Income",
    value: 45,
    icon: <AttachMoneyIcon className="text-yellow-500" />,
  },
  {
    title: "Active Bonus",
    value: 5,
    icon: <EmojiEventsIcon className="text-pink-500" />,
  },
  {
    title: "ROI Income",
    value: 30,
    icon: <TrendingUpIcon className="text-purple-500" />,
  },
  {
    title: "Referral Bonus",
    value: 8,
    icon: <GroupIcon className="text-indigo-500" />,
  },
  {
    title: "Level ROI",
    value: 2,
    icon: <MonetizationOnIcon className="text-teal-500" />,
  },
  {
    title: "Total Withdraw",
    value: 40,
    icon: <AutorenewIcon className="text-red-500" />,
  },
  {
    title: "Total Team Business",
    value: 100,
    icon: <PeopleAltIcon className="text-cyan-500" />,
  },
  {
    title: "Total Direct",
    value: 1,
    icon: <GroupIcon className="text-gray-600" />,
  },
  {
    title: "Active Direct",
    value: 1,
    icon: <GroupIcon className="text-green-700" />,
  },
  {
    title: "Active Downline",
    value: 1,
    icon: <PeopleAltIcon className="text-blue-700" />,
  },
  {
    title: "Not Active Downline",
    value: 0,
    icon: <PeopleAltIcon className="text-gray-400" />,
  },
  {
    title: "Pending Fund Request",
    value: 0,
    icon: <PendingActionsIcon className="text-orange-500" />,
  },
];

const personalInfo = [
  { label: "User Name", value: "FD6135566" },
  { label: "Name", value: "Pushap Pathania" },
  { label: "Sponsor", value: "FD3426618" },
  { label: "Sponsor Name", value: "Smriti Kaur" },
  { label: "Reg. Date", value: "26-07-2025" },
  { label: "Active Date", value: "26-07-2025" },
  { label: "Mobile", value: "9855802549" },
  { label: "Investment($)", value: "100" },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 sticky top-0 z-10 bg-gray-50 py-4 px-2 mb-6 border-b border-gray-200">
        Dashboard Overview
      </h2>

      {/* TOTAL + PERSONAL INFO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Total Grid */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="text-4xl font-extrabold text-blue-600">$100</div>
            <div className="text-4xl font-extrabold text-blue-600">$45</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Earned So Far
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Out Of
            </div>
            <div className="col-span-2 text-3xl font-semibold text-gray-800 mt-6">
              $300
            </div>
            <div className="col-span-2 text-sm text-gray-500 uppercase tracking-wide">
              Max Limit
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {personalInfo.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  {item.label}
                </span>
                <span className="text-base font-semibold text-gray-800">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Status */}
            <div className="flex flex-col col-span-1 sm:col-span-2">
              <span className="text-sm font-medium text-gray-500">Status</span>
              <span className="inline-block mt-1 w-fit px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 border border-gray-200 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl">{metric.icon}</div>
            <div>
              <div className="text-sm text-gray-600 font-semibold">
                {metric.title}
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {metric.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
