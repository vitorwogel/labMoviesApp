import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const PopularMovies = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default PopularMovies;