export const login = (username, password) => {
    return fetch('/api/users?action=authenticate', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies'
    ).then(res => res.json());
};

export const getMovie = () => {
    return fetch(
        '/api/movies/:id'
    ).then(res => res.json())
}

export const getUpcoming = () => {
    return fetch(
        '/api/movies/tmdb/upcoming'
    ).then(res => res.json())
}

export const getPopularMovies = () => {
    return fetch(
        '/api/movies/tmdb/popular'
    ).then(res => res.json())
}

export const getTvShows = () => {
    return fetch(
        '/api/tv'
    ).then(res => res.json())
}

export const getTvShow = () => {
    return fetch(
        '/api/tv/:id'
    ).then(res => res.json())
}

export const getGenres = () => {
    return fetch(
        '/api/genres'
    ).then(res => res.json())
}

export const getMovieReviews = () => {
    return fetch(
        '/api/movies/:id/reviews'
    ).then(res => res.json())
}

export const getMovieImages = () => {
    return fetch(
        '/api/movies/:id/images'
    ).then(res => res.json())
}

export const getShowImages = () => {
    return fetch(
        '/api/tv/:id/images'
    ).then(res => res.json())
}

/*
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};
*/