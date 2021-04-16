import Icon from '@mdi/react'
import { mdiChevronDown } from '@mdi/js'
import { LogoTextSVG } from 'components/misc/LogoTextSVG'
import { FunctionComponent } from 'react'

export const IndexSplash: FunctionComponent = () => {
  return (
    <section style={{ backgroundImage: 'url("/background.svg")' }}>
      <div className="w-4/5 m-auto space-y-8">
        <div className="flex items-center justify-center w-full space-x-8">
          <img src="/logos/logo.svg" className="w-16 lg:w-48" />
          <LogoTextSVG className="h-20 lg:h-32 w-auto" />
        </div>
        <h1 className="text-xl font-bold">A JVM-based REST/WS wrapper for the official <a href="https://discordapp.com/developers/docs/intro">Discord Bot API</a>, written in Java.</h1>
        <button aria-label="Get Started" className="flex items-center space-x-4 bg-green-500 hover:bg-green-600 transition duration-200 m-auto text-white p-3 rounded-lg focus:ring-4 ring-green-400 focus:outline-none text-2xl">
          <Icon path={mdiChevronDown} size={1.5} />
          <p>Get Started</p>
        </button>
      </div>
    </section>
  )
}