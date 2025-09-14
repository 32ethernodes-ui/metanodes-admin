import React from "react";

const walletData = [
  { sr: 1, username: "fd6135566", date: "13-09-2025", particular: "ROI", remark: "ROI Income", credit: 1, debit: 0 },
  { sr: 2, username: "FD6135566", date: "13-09-2025", particular: "LEVEL ROI", remark: "FD5325518", credit: 0.2, debit: 0 },
  { sr: 3, username: "FD6135566", date: "12-09-2025", particular: "LEVEL ROI", remark: "FD5325518", credit: 0.2, debit: 0 },
  { sr: 4, username: "FD6135566", date: "12-09-2025", particular: "ROI", remark: "ROI Income", credit: 1, debit: 0 },
];

const Wallet = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-4 border-b border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">From Date</label>
          <input type="date" className="border px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">To Date</label>
          <input type="date" className="border px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Check User Account Statement
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-800 text-sm font-semibold">
            <tr>
              <th className="px-4 py-3 border">Sr No</th>
              <th className="px-4 py-3 border">Username</th>
              <th className="px-4 py-3 border">Date</th>
              <th className="px-4 py-3 border">Particular</th>
              <th className="px-4 py-3 border">Remark</th>
              <th className="px-4 py-3 border">Credit</th>
              <th className="px-4 py-3 border">Debit</th>
            </tr>
          </thead>
          <tbody>
            {walletData.map((entry) => (
              <tr key={entry.sr} className="even:bg-gray-50 hover:bg-gray-100 transition duration-150">
                <td className="px-4 py-2 border">{entry.sr}</td>
                <td className="px-4 py-2 border">{entry.username}</td>
                <td className="px-4 py-2 border">{entry.date}</td>
                <td className="px-4 py-2 border">{entry.particular}</td>
                <td className="px-4 py-2 border">{entry.remark}</td>
                <td className="px-4 py-2 border text-green-600 font-semibold">{entry.credit}</td>
                <td className="px-4 py-2 border text-red-600 font-semibold">{entry.debit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
