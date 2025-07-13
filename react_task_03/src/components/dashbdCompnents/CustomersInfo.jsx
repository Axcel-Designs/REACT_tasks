import React, { useState } from "react";
import { customersData } from "../../data/customersData";

export default function CustomersInfo() {
  const [search, setSearch] = useState("");
  const [activeMembers, setActiveMembers] = useState(false);
  const [selectValue, setSelectValue] = useState("newest");

  let filteredCustomers = customersData;

  function getActiveMembers() {
    setActiveMembers(!activeMembers);
  }

  filteredCustomers = customersData
    .filter((customer) => (activeMembers ? customer.status === "active" : true))
    .filter((customer) =>
      customer.customerName.toLowerCase().includes(search.toLowerCase())
    );

  const headers = Object.keys(customersData[0])
    .map((key) => key[0].toUpperCase() + key.slice(1))
    .slice(0, -1);

  selectValue === "newest"
    ? filteredCustomers.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : filteredCustomers.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

  return (
    <>
      <div
        className="bg-white rounded-2xl p-2 w-full overflow-x-auto sm:p-4 md:p-6"
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
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className="ml-2 w-full sm:w-auto font-semibold"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div onClick={getActiveMembers} className="w-fit">
            <p className="text-sm font-semibold text-green-400 cursor-pointer my-4 hover:text-green-600">
              Active Members
            </p>
          </div>
        </div>
        <div className="tableContainer w-full overflow-x-auto mt-2 ">
          {/* table */}
          <table className="customersInfoTable text-xs sm:text-sm  md:min-w-[600px] w-full border-collapse">
            <thead className="sticky top-0 text-left">
              <tr className="grid md:grid-cols-6">
                {headers.map((customer) => (
                  <th key={customer} className="p-1  whitespace-nowrap">
                    {customer}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left">
              {filteredCustomers.map((customer, i) => (
                <tr
                  key={i + 1}
                  className="hover:bg-gray-50 grid md:grid-cols-6 min-w-fit"
                >
                  <td className="p-1 sm:p-2">{customer.customerName}</td>
                  <td className="p-1 sm:p-2"> {customer.company}</td>
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
