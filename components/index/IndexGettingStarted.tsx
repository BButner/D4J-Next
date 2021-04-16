import { FunctionComponent } from 'react'
import { CodePreviewTable } from './CodePreview'

export const IndexGettingStarted: FunctionComponent = () => {
  return (
    <section>
      <div className="flex w-4/5 justify-around m-auto">
        <div className="space-y-8 w-1/2">
          <h2 className="text-3xl font-bold">Getting Started</h2>
          <p className="text-left">
            Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the modules list.
            <br/>
            <br/>
            To interact with all facets of the Discord API built on top of all the other modules, import the core module into your favourite dependency manager (see the example configurations).
          </p>
        </div>
        <div className="space-y-8 w-1/2">
          <h2 className="text-3xl font-bold">Configuration</h2>
          <CodePreviewTable />
        </div>
      </div>
    </section>
  )
}