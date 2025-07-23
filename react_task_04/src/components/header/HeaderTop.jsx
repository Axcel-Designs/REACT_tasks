import React from "react";

export default function HeaderTop() {
  return (
    <section className="p-2 bg-black text-white w-full">
      <table className="w-full ">
        <tbody>
          <tr>
            <td></td>
            <td className="flex justify-center gap-2">
              <span className="max-sm:hidden">
                Summer Sale for All swim suits and free Express Delivery of 50%!
              </span>
              <strong className="underline">ShopNow</strong>
            </td>
            <td>
              <select name="lang" id="lang" className="justify-self-endo">
                <option value="english">English</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
