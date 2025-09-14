import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 sticky top-0 z-10 bg-gray-50 py-4 px-2 mb-6 border-b border-gray-200">
        Welcome
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          Personal Detail
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          You Updated Your Profile 1 Time. Second Time You Can Update Your
          Profile By Admin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value="Pushap Pathania"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Father Name
            </label>
            <input
              type="text"
              placeholder="Enter Father Name"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              value="1990-02-02"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Sex</label>
            <select className="form-select mt-1 w-full border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value="pushappathania27@gmail.com"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value="Pushap@111"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              value="9855802549"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Admission Detail
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value="FD6135566"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Sponsor</label>
            <input
              type="text"
              value="FD3426618"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Sponsor Name
            </label>
            <input
              type="text"
              value="Smriti Kaur"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of Joining
            </label>
            <input
              type="text"
              value="26-07-2025"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of Activation
            </label>
            <input
              type="text"
              value="26-07-2025"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Wallet Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Network</label>
            <input
              type="text"
              value="BEP20"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <input
              type="text"
              value="0xa586cF3a2fA0594Fd4aF36aa8b2eDbB633f900b4"
              readOnly
              className="form-input mt-1 w-full bg-gray-100 border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Upload QR Code
            </label>
            <input
              type="file"
              className="form-input mt-1 w-full border-gray-300 rounded-md bg-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Nominee Detail
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Nominee Name
            </label>
            <input
              type="text"
              placeholder="Enter Nominee Name"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Relation with Nominee
            </label>
            <input
              type="text"
              placeholder="Enter Relation"
              className="form-input mt-1 w-full border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
