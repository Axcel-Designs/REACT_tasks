import React from 'react'

export default function ScrollToTop() {
  return (
    <div>
      <div
        className="flex justify-end p-2 cursor-pointer fixed bottom-20 right-10"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
}
