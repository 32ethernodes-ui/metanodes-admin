import React, { useState } from "react";

const dummyTickets = [
  {
    id: 1,
    subject: "Withdrawal issue",
    status: "Resolved",
    date: "10-09-2025",
  },
  {
    id: 2,
    subject: "Wrong referral",
    status: "Pending",
    date: "12-09-2025",
  },
  {
    id: 3,
    subject: "Topup not reflecting",
    status: "In Progress",
    date: "14-09-2025",
  },
];

const TicketSupport = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ subject, message });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Support Center</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Raise Ticket - wider (60%) */}
        <div className="bg-white p-6 rounded-md shadow-md flex-grow lg:flex-grow-0 lg:basis-3/5">
          <h3 className="text-xl font-semibold mb-4">Raise a Ticket</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Describe your issue..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Ticket History - narrower (40%) */}
        <div className="bg-white p-6 rounded-md shadow-md overflow-x-auto flex-grow lg:flex-grow-0 lg:basis-2/5">
          <h3 className="text-xl font-semibold mb-4">Ticket History</h3>
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {dummyTickets.map((ticket, index) => (
                <tr
                  key={ticket.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{ticket.subject}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs font-medium ${
                        ticket.status === "Resolved"
                          ? "bg-green-500"
                          : ticket.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketSupport;
