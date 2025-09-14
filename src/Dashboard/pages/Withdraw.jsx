import React, { useState, useEffect } from "react";

const Withdraw = () => {
  const availableBalance = 5; // Can be fetched from backend later

  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState(0);
  const [adminCharge, setAdminCharge] = useState(0);
  const [payout, setPayout] = useState(0);

  useEffect(() => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0) {
      const chg = amt * 0.05; // 5% general charge
      const admin = amt * 0.02; // 2% admin charge
      const net = amt - chg - admin;

      setCharge(chg.toFixed(2));
      setAdminCharge(admin.toFixed(2));
      setPayout(net.toFixed(2));
    } else {
      setCharge(0);
      setAdminCharge(0);
      setPayout(0);
    }
  }, [amount]);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Sticky Welcome Header */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-4 border-b border-gray-200 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
      </div>

      {/* Warning Message */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded">
        <p className="text-sm font-medium">
          ⚠️ Please do not use refresh, reload, or scroll down until the process is complete.
        </p>
      </div>

      {/* Withdraw Form */}
      <div className="bg-white max-w-xl p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Withdraw Request</h3>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Available Balance</label>
          <div className="text-lg font-bold text-green-600">{availableBalance} ($)</div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Withdraw Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount in $"
          />
        </div>

        {/* Charges Breakdown */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-gray-50 p-3 rounded border">
            <span className="block font-medium">Charges (5%)</span>
            <span className="text-blue-600 font-semibold">${charge}</span>
          </div>

          <div className="bg-gray-50 p-3 rounded border">
            <span className="block font-medium">Admin Charges (2%)</span>
            <span className="text-blue-600 font-semibold">${adminCharge}</span>
          </div>

          <div className="col-span-2 bg-gray-100 p-4 rounded border mt-2">
            <span className="block font-semibold text-gray-800">Final Payout</span>
            <span className="text-green-600 text-lg font-bold">${payout}</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            disabled={parseFloat(amount) > availableBalance || payout <= 0}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
