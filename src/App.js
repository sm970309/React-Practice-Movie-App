import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([[]]);
    const getMovies = async () => {
        const json = await (await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();

    }, [])
    return (
        <div className="App">
            {loading ? <h1>Loading...</h1> : movies.map((movie) => <div key={movie.id}>
               <h2>{movie.title}</h2>
               <img src={movie.medium_cover_image}/>
               <p>{movie.summary}</p>
               <ul>
                   {movie.genres.map((genre,index)=><li key ={index} >{genre}</li>)}
               </ul>
            </div>)}
        </div>
    );

}
export default App;