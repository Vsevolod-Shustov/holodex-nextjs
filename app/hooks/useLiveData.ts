import { useState, useEffect, useTransition } from 'react'
import { getLiveData } from '@/app/lib/actions';

import { useAtom } from 'jotai';
import { queryOrgAtom } from '@/app/atoms/queryOrgAtom';

import { Video } from '@/app/types/video';


export function useLiveData() {
  const [org] = useAtom(queryOrgAtom);
  const [liveData, setLiveData] = useState<Array<Video> | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const getData = async () => {
        const data = await getLiveData(org)
        setLiveData(data)
      }

      getData()
    })
  }, [org])

  return { liveData, isPending };
}