import React from "react";

const TopUp = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-4 border-b border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Top Up</h2>
      </div>

      {/* Available Balance */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700">
          Available Balance ($): <span className="font-semibold text-blue-600">0</span>
        </p>
      </div>

      {/* Top Up Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
        <form className="space-y-5">
          {/* Investor UserID */}
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
              Investor UserID
            </label>
            <input
              type="text"
              id="userId"
              placeholder="Enter UserID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Select Package */}
          <div>
            <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
              Select Package
            </label>
            <select
              id="package"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Package --</option>
              <option value="100">$100</option>
              <option value="200">$200</option>
              <option value="300">$300</option>
              <option value="500">$500</option>
              <option value="1000">$1000</option>
            </select>
          </div>

          {/* Invest Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Invest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopUp;
