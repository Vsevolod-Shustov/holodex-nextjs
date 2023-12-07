import { Suspense } from 'react';
import VideoGrid from '@/app/components/VideoGrid';

import { liveData } from './lib/data';

//let data = await liveData;

export default function Page() {
  // console.log("home: ");
  // console.log(data[0])
  //let data = liveData;
  return (
    <>
      <div>home</div>
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <VideoGrid videos={liveData}></VideoGrid>
      </Suspense>
    </>
  )
}
