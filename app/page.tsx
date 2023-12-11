import Header from '@/app/components/Header'
import Videos from '@/app/components/Videos';

export default function Page() {
  return (
    <div>
      <Header></Header>
      <div className='content p-4 '>
        <Videos></Videos>
      </div >
    </div>
  )
}
