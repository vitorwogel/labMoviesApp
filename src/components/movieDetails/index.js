import React, {useState} from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.name == null ? (movie.runtime) : movie.episode_run_time} min.`} />
        <Chip
          icon={movie.name == null ? (<MonetizationIcon />) : null}
          label={movie.name == null ? (`${movie.revenue.toLocaleString()}`) : `Seasons: ${movie.number_of_seasons}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.name == null ? (movie.release_date) : movie.first_air_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        { movie.name == null ? (
        movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))) : <Chip label={movie.origin_country} sx={chip} />
        }
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails ;