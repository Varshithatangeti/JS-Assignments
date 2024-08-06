`12.create a react component that uses react suspense for lazy loading`
import React, { lazy, Suspense } from 'react';
const MyLazyComponent = lazy(() => import('./MyComponent'));
const MyComponentWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
};
export default MyComponentWithSuspense;
