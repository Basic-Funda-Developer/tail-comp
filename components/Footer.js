import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="b-0 fixed w-max grid ">
      <div className="flex flex-col">
        <h4>Sources</h4>
        <Link href="https://github.com/basic-funda-developer/tail-comp">Github</Link>
        <Link href="https://tailwindcss.com">TailwindCSS</Link>
        <Link href="https://headlessui.com/">HeadlessUI</Link>
        <Link href="https://heroicons.com/">Heroicons</Link> 
      </div>
     
      
    </div>
  )
}

export default Footer