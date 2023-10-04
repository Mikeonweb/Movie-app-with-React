import {useState, useEffect} from 'react';

import Style from './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// c310a7ae - this is my apikey

// get movie data / link api key
const API_URL = 'https://www.omdbapi.com?apikey=c310a7ae';



const App = () => {

    // this call function fetches the movie using asynchronise(async funtion simply means that it'll take some time to fetch this movies) arrow function
    //the searchMovies will accept title of movie you want to search
    const searchMovies = async (title) => {
        //calling api & waiting response
        const response = await fetch(`${API_URL}&s=${title}`);
        // once response gotten,get data
        const data = await response.json();

        setMovies(data.Search);
        };

    const [movies,setMovies] = useState([]);
    // useState for search bar
    const [searchPreference, setSearchPreference] = useState('')

    useEffect(() => {
        //call the searchMovies funtion inside useEffect,you can put title in the perenthesis to search a particular movie eg 'smallville'
        //this will be default display movie on page load
        searchMovies('game of thrones');
    }, []);

    
    return(
       <div className="app">
            <h1>MovieBox</h1>
            
            <div className="search">
                <input
                    placeholder="find your favourite movies"
                    value={searchPreference}
                    onChange={(e) => setSearchPreference(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchPreference)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}

            
       </div>
    );
}

export default App;