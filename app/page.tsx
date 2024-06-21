import Header from '@/app/components/Header'
import VideoGrid from '@/app/components/VideoGrid';

export default function Page() {
  return (
    <div>
      <Header></Header>
      <div className='content p-4 '>
        <VideoGrid></VideoGrid>
      </div >
    </div>
  )
}
