import { ComponentType } from 'react'
import { Suspense } from 'react'
import Preloader from '../Components/common/Preloader/Preloader'

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }
}

export default withSuspense
