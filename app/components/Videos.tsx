'use client';

import { useState, useEffect } from 'react'
import VideoGrid from '@/app/components/VideoGrid';

//import { liveData } from '@/app/lib/data';
import { getLiveData } from '@/app/lib/actions';
//const liveData = await getLiveData("Nijisanji")


export default function Videos() {
  const [liveData, setLiveData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getLiveData("Nijisanji")
      setLiveData(data)
    }

    getData()
  }, [])
  return (
    <>
      <VideoGrid videos={liveData}></VideoGrid>
    </>
  )
}