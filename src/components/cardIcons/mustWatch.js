import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const MustWatch = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleMustWatch = (e) => {
      e.preventDefault();
      // context.addMustWatch(movie);
    };
  
    return (
      <IconButton aria-label="add to favorites" onClick={handleMustWatch}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default MustWatch;