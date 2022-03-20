import {React, useState, useEffect} from 'react';
import './styles.css';
import '../../global.css';

import Nav from '../../components/Nav';
import Card from '../../components/Card';

export default function Home(){

    const [movies, setMovies] = useState([]);    

    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=71250f9e7330bae3ff534e70614dcccc')
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])

    return(
        <>
           <Nav/>

           <div className='container_cards'>
            {movies.map(movie => {
                return(
                    <Card 
                    key = {movie.id}
                    poster = {`${image_path}${movie.poster_path}`}
                    >
                    </Card>
                )  
                })
            }
               
           </div>
        </>
    );
}