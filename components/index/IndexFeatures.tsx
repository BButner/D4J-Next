import Icon from '@mdi/react'
import { mdiRocketLaunch, mdiCogs } from '@mdi/js'
import { ReactorLogoSVG } from 'components/misc/ReactorLogoSVG'
import { FunctionComponent } from 'react'
import styles from './IndexFeatures.module.sass'

export const IndexFeatures: FunctionComponent = () => {
  return (
    <section>
      <div className="md:w-full lg:flex xl:w-4/5 lg:justify-between m-auto space-y-10 lg:space-y-0">
        <div className={styles.column}>
          <ReactorLogoSVG />
          <h1>Reactive</h1>
          <p>
            Discord4J is a reactive interface for the official <a href="https://discordapp.com/">Discord </a>
            API designed using <a href="https://www.reactivemanifesto.org/">reactive principles </a> 
            using the <a href="https://projectreactor.io/">Reactor framework</a> for an asynchronous and non-blocking API.
          </p>
        </div>
        <div className={styles.column}>
          <Icon path={mdiCogs} size={4} />
          <h1>Modular</h1>
          <p>
          Built from the ground up with a focus on modularity, Discord4J allows for extreme customizability and 
          flexibility in how you use the library.
          </p>
        </div>
        <div className={styles.column}>
          <Icon path={mdiRocketLaunch} size={4} />
          <h1>Performant</h1>
          <p>
            Written in Java 8 and built on top of <a href="https://github.com/netty/netty">Netty</a>
            , Discord4J offers a fast, functional, and completely non-blocking API with lazy processing included.
          </p>
        </div>
      </div>
    </section>
  )
}