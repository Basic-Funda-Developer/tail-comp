import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bottom-0 fixed w-full flex bg-gray-100">
      <div className="flex flex-col mx-auto">
        <video className="w-24 h-24" autoPlay loop="true" src='/tail_comp_vid.mp4'></video>
      </div>
      <div className="flex flex-col mx-auto">
        <h4 className="footer-header">Sources</h4>
        <ul>
        <li className="footer-li"> <Link href="https://github.com/basic-funda-developer/tail-comp">Github</Link></li>
        <li className="footer-li"> <Link href="https://tailwindcss.com">TailwindCSS</Link></li>
        <li className="footer-li"> <Link href="https://headlessui.com/">HeadlessUI</Link></li>
        <li className="footer-li"> <Link href="https://heroicons.com/">Heroicons</Link> </li>
      </ul>
      </div>
      <div className="flex flex-col mx-auto">
        <h4 className='footer-header'>Pages</h4>
        <ul>
        <li className="footer-li"><Link href="/">Home</Link></li>
        <li className="footer-li"><Link href="/about">About</Link></li>
        <li className="footer-li"><Link href="/contact">Contact</Link></li>
        <li className="footer-li"><Link href="/components">Components</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer