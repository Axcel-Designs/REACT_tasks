import React from "react";
import { customersData } from "../../data/customersData";
import './customersInfo.css'

export default function CustomersInfo() {
  const headers = Object.keys(customersData[0]);

  return (
    <>
      <div className="bg-white grow rounded-2xl p-2 w-full" style={{'box-shadow': '0 0 20px rgba(0,0, 0,0.15)'}}>
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
        <div>
          <p className="text-sm font-semibold text-green-400">Active Members</p>
        </div>
        <div>

          <table className="customersInfoTable">
            <thead>
              <tr>
                {headers.map((customer) => (
                  <th key={customer}>{customer}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left">
              {customersData.map((customer, i) => (
                <tr key={i + 1}>
                  <td>{customer.customerName}</td>
                  <td>{customer.company}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.country}</td>
                  <td>
                  <div className={`text-center border-1 w-16 h-8 ${customer.status == 'active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-200'}`}>{customer.status}</div>
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
    </>
  );
}
