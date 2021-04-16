import { FunctionComponent } from 'react'
import Link from 'next/link'
import { LogoTextSVG } from 'components/misc/LogoTextSVG'
import { NavbarMobile } from './NavbarMobile'
import { NavbarLinks } from './NavbarLinks'

export const Navbar: FunctionComponent = () => {
  return (
    <nav className="w-full h-16 bg-white">
      <div className="ml-4 lg:ml-auto lg:w-4/5 xl:w-4/5 h-full m-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <img src="/logos/logo.svg" className="w-12 h-12" />
            <LogoTextSVG className="h-10 w-auto" />
          </a>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:block lg:h-full">
          <NavbarLinks />
        </div>

        {/* Mobile Navbar Links */}
        <NavbarMobile />
      </div>
    </nav>
  )
}