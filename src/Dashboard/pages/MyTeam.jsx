import React from "react";

const MyTeam = () => {
  const teamData = [
    {
      srNo: 1,
      username: "FD5325518",
      name: "Chahat Pathania",
      status: "Active",
      registerDate: "02-09-2025",
      activateDate: "02-09-2025",
      package: 100,
      type: 0,
    },
    // Add more members if needed
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-4 border-b border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sponser List</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-800 text-sm font-semibold">
            <tr>
              <th className="px-4 py-3 border">Sr. No</th>
              <th className="px-4 py-3 border">Username</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Status</th>
              <th className="px-4 py-3 border">Register Date</th>
              <th className="px-4 py-3 border">Activate Date</th>
              <th className="px-4 py-3 border">Selected Package</th>
              <th className="px-4 py-3 border">Type</th>
              <th className="px-4 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member, index) => (
              <tr
                key={index}
                className="even:bg-gray-50 hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-2 border">{member.srNo}</td>
                <td className="px-4 py-2 border">{member.username}</td>
                <td className="px-4 py-2 border">{member.name}</td>
                <td className="px-4 py-2 border text-green-600 font-medium">
                  {member.status}
                </td>
                <td className="px-4 py-2 border">{member.registerDate}</td>
                <td className="px-4 py-2 border">{member.activateDate}</td>
                <td className="px-4 py-2 border">${member.package}</td>
                <td className="px-4 py-2 border">{member.type}</td>
                <td className="px-4 py-2 border">
                  <button className="text-sm text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
