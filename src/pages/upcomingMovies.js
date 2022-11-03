import React, { useState, useEffect } from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import MustWatch from '../components/cardIcons/mustWatch'

const UpcomingMovies = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('discover', getUpcoming)

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
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <MustWatch movie={movie} />
      }}
    />
  );
};
export default UpcomingMovies;