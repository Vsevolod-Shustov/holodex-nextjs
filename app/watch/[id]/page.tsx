export default function Page({ params }: { params: { id: string } }) {

  return (
    <div className="video relative w-full" style={{ height: "100vh" }}>
      <iframe className="absolute w-full h-full" width="1280" height="720" src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}
