'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Code, Briefcase, Mail, Menu } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Technical Background', href: '/technical-background', icon: Code },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav 
      className={`bg-[#D4F1F4] text-[#003459] shadow-lg transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4 flex items-center justify-between">
        {isExpanded && <h1 className="text-xl font-bold">Safal Noushad</h1>}
        <button className="p-1 rounded-md hover:bg-[#003459] hover:text-[#D4F1F4] transition-colors duration-200">
          <Menu size={20} />
        </button>
      </div>
      <ul className="space-y-2 py-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className={`flex items-center px-4 py-2 hover:bg-[#003459] hover:text-[#D4F1F4] transition-colors duration-200 ${
                pathname === item.href ? 'bg-[#003459] text-[#D4F1F4]' : ''
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isExpanded && <span className="ml-3">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}