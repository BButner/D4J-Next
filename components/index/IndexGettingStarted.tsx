import { FunctionComponent } from 'react'
import { CodePreviewTable } from './CodePreview'

export const IndexGettingStarted: FunctionComponent = () => {
  return (
    <section>
      <div className="lg:flex w-4/5 justify-around m-auto space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="space-y-8 w-4/5 lg:w-1/2 xl:w-1/3 m-auto lg:m-0">
          <h2 className="text-3xl font-bold">Getting Started</h2>
          <p className="text-left">
            Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the modules list.
            <br/>
            <br/>
            To interact with all facets of the Discord API built on top of all the other modules, import the core module into your favourite dependency manager (see the example configurations).
          </p>
        </div>
        <div className="space-y-8 space-4/5 lg:w-1/2 m-auto lg:m-0">
          <h2 className="text-3xl font-bold">Configuration</h2>
          <CodePreviewTable />
        </div>
      </div>
    </section>
  )
}