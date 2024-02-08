import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let apiUrl = '';
                if (searchQuery) {
                    apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=9b6ecd3e72ca170064c048d4ea07a095&query=${searchQuery}&page=${page}`;
                } else {
                    apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=9b6ecd3e72ca170064c048d4ea07a095&page=${page}`;
                }
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMovies(prevMovies => (page === 1 ? data.results : [...prevMovies, ...data.results]));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery, page]);

    return (
        <div className="movie-list-container">
            <Slider dots={true} infinite={false} slidesToShow={4} slidesToScroll={3}>
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item px-1">
                        <a href={`/pelicula/${movie.id}`}>
                            <img className='poster2' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slide;
