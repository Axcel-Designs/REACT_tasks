import React from 'react'

export default function FooterBottom() {
  return (
    <section className='bg-black border-t-gray-200 text-center'>
      <p className='text-gray-700'>&copy; Copyright {new Date().getFullYear()}. All right reserved </p>
    </section>
  )
}
