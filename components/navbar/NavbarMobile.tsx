import { FunctionComponent } from 'react'
import styles from './NavbarMobile.module.sass'
import { Popover, Transition } from '@headlessui/react'
import { NavbarLinks } from './NavbarLinks'
import clsx from 'clsx'

export const NavbarMobile: FunctionComponent = () => {
  return (
    <nav className="h-full lg:hidden">
      <Popover>
        {({ open }) => {
          return <>
            <Popover.Button
              className={clsx(
                styles.hamburger,
                open ? styles['hamburger-active'] : ''
              )}
              aria-label="Open Navigation"
            >
              <div className={styles['burger-line']} />
              <div className={styles['burger-line']} />
              <div className={styles['burger-line']} />
            </Popover.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel static className="absolute top-16 right-0 w-screen bg-white shadow-xl py-4">
                <NavbarLinks />
              </Popover.Panel>
            </Transition>
          </>
        }}
      </Popover>
    </nav>
  )
}