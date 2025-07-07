import React from "react";
import { customersData } from "../../data/customersData";

export default function CustomersInfo() {
  const headers = Object.keys(customersData[0]);

  return (
    <>
      <div className="bg-white grow rounded-2xl p-2">
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="font-bold text-lg">All Customers</p>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="border-gray-300 px-2 py-1 border-2 rounded-2xl  ">
              <li className="fa-solid fa-search"></li>
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-white px-2"
                width="w-1/5"
              />
            </div>
            <div className="flex items-center bg-gray-300 rounded-2xl px-2 py-1">
              <p className="text-sm">sort by</p>
              <select name="" id=""></select>
            </div>
          </div>
        </div>
        <div>Active Members</div>
        <div>
          <table className="w-full border-collapse table-auto">
            <thead className="text-left text-gray-400">
              <tr>
                {headers.map((customer) => (
                  <th key={customer}>{customer}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customersData.map((customer, i) => (
                <tr key={i + 1}>
                  <td>{customer.customerName}</td>
                  <td>{customer.company}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.country}</td>
                  <td className={`text-center`}>{customer.status}</td>
                </tr>
              ))}
              {customersData.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {headers.map((key) => (
                    <td key={key} className="border border-gray-300 px-4 py-2">
                      {customer[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
