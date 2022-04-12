import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);


    return (
        <div className={styles.container}>
            {loading ? <h1 className={styles.loader}>Loading...</h1> :
                <div>
                    <h1>
                        {movie.title}({movie.year})
                    </h1>
                    <p><a href={movie.url}>Click here to Download!</a></p>
                    <img src={movie.medium_cover_image} />
                    <p>
                        <strong>Runtime: {movie.runtime}</strong>
                        <br></br>
                        <strong>Rating: {movie.rating}</strong>
                    </p>
                    <p>{movie.description_full}</p>
                    <button>
                        <Link to={'/'} style={{ textDecoration: 'none' ,color:'white'}}>Go Back</Link>
                    </button>

                </div>

            }



        </div>
    )

}
export default Detail;