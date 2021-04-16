import { FunctionComponent } from 'react'

type NavbarButtonProps = {
  className?: string;
}

export const NavbarButton: FunctionComponent<NavbarButtonProps> = ({ className, children }) => {
  return <button className={"px-2 py-1 rounded-md border border-gray-300 transition duration-200 hover:border-gray-400 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-300 flex items-center space-x-2 whitespace-nowrap " + className}>
    {children}
  </button>
}