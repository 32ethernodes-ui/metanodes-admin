import React from "react";

const FundManagement = () => {
  const wallets = [
    {
      id: 1,
      currency: "USDT",
      address: "0xC457C8C90b71bbdd1fD02c5fA658B0FfCA2ef963",
    },
    // Add more wallets if needed
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-4 border-b border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fund Request</h2>
      </div>

      {/* Wallets Table */}
      <div className="overflow-x-auto mb-8 bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-800 text-sm font-semibold">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">Currency Name</th>
              <th className="px-4 py-3 border">Wallet Address</th>
              <th className="px-4 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr key={wallet.id} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border">{wallet.id}</td>
                <td className="px-4 py-2 border">{wallet.currency}</td>
                <td className="px-4 py-2 border break-all">{wallet.address}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => navigator.clipboard.writeText(wallet.address)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fund Request Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
        <form className="space-y-5">
          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Amount
            </label>
            <input
              type="number"
              placeholder="Amount in USDT"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remark */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Remark
            </label>
            <textarea
              rows={3}
              placeholder="Write your remark..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Receipt
            </label>
            <input
              type="file"
              className="w-full text-sm border border-gray-300 rounded-md file:px-4 file:py-2 file:bg-blue-100 file:border-none file:rounded file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundManagement;
