import { IndexFeatures } from 'components/index/IndexFeatures'
import { IndexGettingStarted } from 'components/index/IndexGettingStarted'
import { IndexSplash } from 'components/index/IndexSplash'
import { FunctionComponent } from 'react'

const index: FunctionComponent = () => {
  return (
    <main>
      <IndexSplash />
      <IndexFeatures />
      <IndexGettingStarted />
    </main>
  )
}

export default index