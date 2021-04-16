import { FunctionComponent } from 'react'
import Link from 'next/link'

type NavbarLinkProps = {
  title: string;
  href: string;
}

export const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a className="h-full py-2 lg:py-0 px-4 flex items-center justify-center transition duration-200 hover:bg-gray-100 hover:text-blurple focus:bg-gray-100 focus:text-blurple text-black">{title}</a>
    </Link>
  )
}