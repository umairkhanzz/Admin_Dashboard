"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link className='flex items-center p-4 hover:text-blue-800' href={item.path} >
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink

// className={`${pathname === item.path && styles.active}`}