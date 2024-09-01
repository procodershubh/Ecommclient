import React from 'react';
import React, { Suspense } from 'react';
import Myfirst from './module/component/Myfirst';

const Myfirst = React.lazy(() => import('./module/component/Myfirst'));


function Lazyload() {
  return (
    <div className='container mt-5'>
    <h1>Lazy Loading Example</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Myfirst/>
    </Suspense>
  </div>
  )
}

export default Lazyload