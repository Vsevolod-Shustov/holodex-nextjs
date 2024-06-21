'use client';

import { useState, useEffect } from 'react'
import { useAtom } from 'jotai';
import VideoGrid from '@/app/components/VideoGrid';

import { queryOrgAtom } from '@/app/atoms/queryOrgAtom';
import { getLiveData } from '@/app/lib/actions';


export default function Videos() {
  const [org] = useAtom(queryOrgAtom);
  const [liveData, setLiveData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getLiveData(org)
      setLiveData(data)
    }

    getData()
  }, [org])
  return (
    <>
      <VideoGrid videos={liveData}></VideoGrid>
    </>
  )
}