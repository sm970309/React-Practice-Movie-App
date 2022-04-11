function Movie({coverImg,title,summary,genres}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} />
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => <li key={index} >{genre}</li>)}
            </ul>
        </div>)
}
export default Movie;