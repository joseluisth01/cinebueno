import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleFavorite } from '../store/favoritesSlice';

const DetallesPeliculas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleFavoritoClick = () => {
    dispatch(toggleFavorite(pelicula.id));
    setFavorito(!favorito);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="detalles-container">
      <h2>{pelicula.title}</h2>
      <p>{pelicula.overview}</p>
      <button onClick={handleFavoritoClick}>
        {favorito || favorites.includes(pelicula.id) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default DetallesPeliculas;
