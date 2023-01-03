import React from "react";
import { getTvShows } from "../api/movie-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TvShows = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tv', getTvShows)

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
      title='Discover TV Shows'
      movies={movies}
    />
  );
};
export default TvShows;