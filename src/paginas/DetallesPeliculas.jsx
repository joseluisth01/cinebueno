import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const DetallesPeliculas = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9b6ecd3e72ca170064c048d4ea07a095`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPelicula(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    // Función para calcular las estrellas
    const calcularEstrellas = (valoracion) => {
        const numEstrellas = Math.round(valoracion / 2);
        return '★'.repeat(numEstrellas) + '☆'.repeat(5 - numEstrellas);
    };

    const handleReservar = (event) => {
        alert('RESERVA REALIZADA CORRECTAMENTE');
    };

    const handleFavoritoClick = () => {
        setFavorito(!favorito);
    };

    if (!pelicula) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="detalles-container">
            <br />
            <div className="detalles" style={{ display: 'flex', alignItems: 'center' }}>
                <img className="poster3" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} style={{ marginRight: '20px' }} />
                <div className="informacion">
                    <p className='mb-6 ml-5'><strong>Duración: </strong> {pelicula.runtime} minutos</p>
                    <p className='mb-6 ml-5'><strong>Género: </strong> {pelicula.genres.map(genre => genre.name).join(', ')}</p>
                    <p className='mb-6 ml-5'><strong>Idioma: </strong> {pelicula.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
                    <p className='mb-6 ml-5'><strong>Recaudación: </strong> ${pelicula.revenue.toLocaleString()}</p>
                    <p className='mb-6 ml-5'><strong>Valoración: </strong> {calcularEstrellas(pelicula.vote_average)}</p>
                    <p className='mb-6 ml-5'><strong>Descripción: </strong> {pelicula.overview}</p>
                    <p className='mb-6 ml-5'><strong>Año de lanzamiento: </strong> {pelicula.release_date}</p>
                    <br />
                    <div className='info2'>
                        <a href="#openModal" className='buttoncargar2'>RESERVAR</a><span>         </span>
                        <a href="#openModal2" className='buttoncargar2'>FAVORITOS <span role="img" aria-label="favorito" onClick={handleFavoritoClick}>
                            {favorito ? "⭐" : "☆"}
                        </span></a>
                    </div>

                </div>
            </div>

            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#close" className="close">X</a>
                    <h1 className='titulo5'>Reservar película {pelicula.title}:</h1>
                    <form onSubmit={handleReservar}>
                        <div className="form-group">
                            <label className='titulo5' htmlFor="nombre">Nombre: </label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className="form-group">
                            <label className='titulo5' htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label className='titulo5' htmlFor="cantidad">Nº de tickets: </label>
                            <input type="number" id="cantidad" name="cantidad" min="1" required />
                        </div>
                        <button type="submit" className='buttoncargar'>Reservar</button>
                    </form>
                </div>
            </div>
            {favorito ? (
                <div id="openModal2" className="modalDialog">
                    <div>
                        <a href="#close" className="close">X</a>
                        <h1 className='titulo5'>Película {pelicula.title} eliminada de favoritos</h1>
                        <button type="button" onClick={() => {
                            setFavorito(false);
                            window.location.href = '#close';
                        }} className='buttoncargar'>Aceptar</button>
                    </div>
                </div>
            ) : (
                <div id="openModal2" className="modalDialog">
                    <div>
                        <a href="#close" className="close">X</a>
                        <h1 className='titulo5'>Película {pelicula.title} añadida a favoritos</h1>
                        <button type="button" onClick={() => {
                            setFavorito(true);
                            window.location.href = '#close';
                        }} className='buttoncargar'>Aceptar</button>
                    </div>
                </div>
            )}

            <br />
        </div>
    );
}

export default DetallesPeliculas;
