import React from 'react'

export default function Footer() {
  return (
    <Footer className= 'flex justify-center text-sm md:text-base text-slate-200 p-4 bg-slate-900'>&copy;{new Date().getFullYear()} Airspace. All rights reserved.</Footer>
  )
}
