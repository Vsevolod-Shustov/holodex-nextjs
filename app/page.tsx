import { Suspense } from 'react';
import VideoGrid from '@/app/components/VideoGrid';

import { liveData, getLiveData } from './lib/data';

//let data = await liveData;

export default function Page() {
  // console.log("home: ");
  // console.log(data[0])
  return (
    <>
      <div>home</div>
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <VideoGrid videos={getLiveData}></VideoGrid>
      </Suspense>
    </>
  )
}
