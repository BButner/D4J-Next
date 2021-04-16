import { FunctionComponent } from 'react'
import { NavbarLinks } from './NavbarLinks'

type NavbarMobileMenuProps = {
  visible: boolean;
}

export const NavbarMobileMenu: FunctionComponent<NavbarMobileMenuProps> = () => {
  return (
    <NavbarLinks />
  )
}