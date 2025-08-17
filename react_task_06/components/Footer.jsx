import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white bg-black p-4">
      <section></section>
      <section className="text-center">
        <h5>
          &copy; Axcel Designs {new Date().getFullYear()}. All rights
          reversed
        </h5>
      </section>
    </footer>
  );
}
