import { Suspense } from 'react';
import Header from '@/app/components/Header'
import VideoGrid from '@/app/components/VideoGrid';

import { liveData } from './lib/data';

//let data = await liveData;

export default function Page() {
  // console.log("home: ");
  // console.log(data[0])
  //let data = liveData;
  return (
    <div>
      <Header></Header>
      <div className='content p-4 '>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <VideoGrid videos={liveData}></VideoGrid>
        </Suspense>
      </div >
    </div>
  )
}
