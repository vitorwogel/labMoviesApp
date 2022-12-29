import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetails";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMovies from "./pages/upcomingMovies";
import UpcomingDetails from "./pages/upcomingDetails";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMovies from './pages/popularMovies'
import TvShows from './pages/tvShowsPage'
import TvShow from './pages/showDetails'
import SignIn from "./pages/signInPage";
import SignUp from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/popular" element={<PopularMovies />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tv" element={<TvShows />} />
            <Route path="/tv/:id" element={<TvShow />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="movies/upcoming" element={<UpcomingMovies />} />
            <Route path="/movies/upcoming/:id" element={<UpcomingDetails />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/signUp" element={<SignUp/>} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );