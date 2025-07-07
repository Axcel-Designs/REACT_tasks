import React, { useState } from "react";
import { customersData } from "../../data/customersData";
import "./customersInfo.css";

export default function CustomersInfo() {
  const [search, setSearch] = useState("");
  const headers = Object.keys(customersData[0]);
  // Filter only by customerName
  const filteredCustomers = customersData.filter((customer) =>
    customer.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div
        className="bg-white grow rounded-2xl p-2 w-full"
        style={{ boxShadow: "0 0 20px rgba(0,0, 0,0.15)" }}
      >
        <div className="gap-4 px-6">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-lg">All Customers</p>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="border-gray-300 px-2 py-1 border-2 rounded-2xl  ">
                <li className="fa-solid fa-search"></li>
                {/* search */}
                <input
                  type="text"
                  placeholder="Search by name"
                  className="outline-none bg-white px-2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  width="w-1/5"
                />
              </div>
              <div className="flex items-center bg-gray-300 rounded-2xl px-2 py-1">
                <p className="text-sm">sort by</p>
                <select name="" id=""></select>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-400">
              Active Members
            </p>
          </div>
        </div>
        <div>
          <div className="tableContainer">
            <table className="customersInfoTable text-sm">
              <thead>
                <tr>
                  {headers.map((customer) => (
                    <th key={customer}>{customer}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-left">
                {filteredCustomers.map((customer, i) => (
                  <tr key={i + 1}>
                    <td>{customer.customerName}</td>
                    <td>{customer.company}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.country}</td>
                    <td>
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
                {/* {customersData.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {headers.map((key) => (
                    <td key={key} className="border border-gray-300 px-4 py-2">
                      {customer[key]}
                    </td>
                  ))}
                </tr>
              ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
