
export const GifGridItem = ({title, url, id}) => {

  return (
    <div id={`div_${id}`} className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
