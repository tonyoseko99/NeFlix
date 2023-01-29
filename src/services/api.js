import axios from "axios";

const instance = axios.create({
  baseURL: "https://imdb-api.com/API/",
});

export default instance;

// GET movies by title
export const getMoviesByTitle = (title) => {
  return instance.get(`Title/${process.env.REACT_APP_API_KEY}/${title}`);
};

// GET movies by id
export const getMoviesById = (id) => {
  return instance.get(`Title/${process.env.REACT_APP_API_KEY}/${id}`);
};

// GET movies by genre
export const getMoviesByGenre = (genre) => {
  return instance.get(`Genre/${process.env.REACT_APP_API_KEY}/${genre}`);
};

// GET movies by actor
export const getMoviesByActor = (actor) => {
  return instance.get(`Actor/${process.env.REACT_APP_API_KEY}/${actor}`);
};

// GET movies by director
export const getMoviesByDirector = (director) => {
  return instance.get(`Director/${process.env.REACT_APP_API_KEY}/${director}`);
};
