import React from 'react'

export default function FooterBottom() {
  return (
    <section className="bg-black border-t-gray-700 border-1 py-1 text-center text-sm">
      <p className="text-gray-700">
        &copy; Axcel Designs {new Date().getFullYear()}. All right reserved{" "}
      </p>
    </section>
  );
}
