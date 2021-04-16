import { FunctionComponent } from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiDiscord } from '@mdi/js'
import { NavbarLink } from './NavbarLink'
import { NavbarButton } from './NavbarButton'

export const NavbarLinks: FunctionComponent = () => {
  return (
    <div className="lg:h-full lg:flex items-center lg:space-x-4 space-y-4 lg:space-y-0">
      <div className="lg:flex lg:h-full space-y-4 lg:space-y-0">
        <NavbarLink title="Documentation" href="https://docs.discord4j.com" />
        <NavbarLink title="Blog" href="/blog" />
      </div>
      <NavbarButton className="m-auto">
        <Icon path={mdiGithub} size={0.8} />
        <p>View Source</p>
      </NavbarButton>
      <NavbarButton className="text-blurple m-auto">
        <Icon path={mdiDiscord} size={0.7} />
        <p>Discord Server</p>
      </NavbarButton>
    </div>
  )
}