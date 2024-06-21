'use client';

import VideoCard from "@/app/components/VideoCard";
import { Video } from "@/app/types/video";
import { useLiveData } from '@/app/hooks/useLiveData';

export default function VideoGrid() {
  const { liveData, isPending } = useLiveData()

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {liveData?.map((video: Video) => <VideoCard key={video.id} video={video}></VideoCard>)}
    </div>
  )
}