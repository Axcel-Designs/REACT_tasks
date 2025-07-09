import React, { useState } from "react";
import { customersData } from "../../data/customersData";

export default function CustomersInfo() {
  const [search, setSearch] = useState("");
  const [activeMembers, setActiveMembers] = useState(false);

  let filteredCustomers = customersData;

  function getActiveMembers() {
    setActiveMembers(!activeMembers);
  }
  activeMembers &&
    (filteredCustomers = customersData.filter(
      (customer) => customer.status === "active"
    ));

  const headers = Object.keys(customersData[0]).map((key) => key[0].toUpperCase()+key.slice(1));
  filteredCustomers = filteredCustomers.filter((customer) =>
    customer.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div
        className="bg-white rounded-2xl p-2 w-full max-w-full overflow-x-auto sm:p-4 md:p-6"
        style={{ boxShadow: "0 0 20px rgba(0,0, 0,0.15)" }}
      >
        <div className="gap-4 px-2 sm:px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 ">
            <div>
              <p className="font-bold text-lg">All Customers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full sm:w-auto">
              <div className="border-gray-300 px-2 py-1 border-2 rounded-2xl w-full sm:w-auto flex items-center">
                <li className="fa-solid fa-search"></li>
                {/* search */}
                <input
                  type="text"
                  placeholder="Search by name"
                  className="outline-none bg-white px-2 w-full sm:w-auto"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ minWidth: 0 }}
                />
              </div>
              <div className="flex items-center bg-gray-300 rounded-2xl px-2 py-1 w-full sm:w-auto">
                <p className="ml-2 w-full">sort by:</p>
                <select
                  name=""
                  id=""
                  className="ml-2 w-full sm:w-auto font-semibold"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div onClick={getActiveMembers}>
            <p className="text-sm font-semibold text-green-400 cursor-pointer my-4 hover:text-green-600">
              Active Members
            </p>
          </div>
        </div>
        <div className="tableContainer w-full overflow-x-auto mt-2">
          <table className="customersInfoTable text-xs sm:text-sm min-w-[400px] md:min-w-[600px] w-full">
            <thead className="sticky top-0 text-left">
              <tr>
                {headers.map((customer) => (
                  <th
                    key={customer}
                    className="p-1  whitespace-nowrap"
                  >
                    {customer}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left">
              {filteredCustomers.map((customer, i) => (
                <tr key={i + 1} className="hover:bg-gray-50">
                  <td className="p-1 sm:p-2">{customer.customerName}</td>
                  <td className="p-1 sm:p-2 whitespace-nowrap">
                    {customer.company}
                  </td>
                  <td className="p-1 sm:p-2">{customer.phoneNumber}</td>
                  <td className="p-1 sm:p-2">{customer.email}</td>
                  <td className="p-1 sm:p-2">{customer.country}</td>
                  <td className="p-1 sm:p-2 whitespace-nowrap">
                    <div
                      className={`flex justify-around items-center border-1 w-14 h-6 ${
                        customer.status == "active"
                          ? "text-green-600 bg-green-100"
                          : "text-red-600 bg-red-200"
                      }`}
                    >
                      {customer.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
