import axios from "axios";

// Get API key from .env file
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: "https://imdb-api.com/en/API/",
});

export default instance;

// GET top 250 movies
export const getTop250Movies = () => {
  return instance.get(`Top250Movies/${API_KEY}`);
};

// GET movies by title
export const getMoviesByTitle = (title) => {
  return instance.get(`Title/${API_KEY}/${title}`);
};

// GET movies by id
export const getMoviesById = (id) => {
  return instance.get(`Title/${API_KEY}/${id}`);
};

// GET movies by genre
export const getMoviesByGenre = (genre) => {
  return instance.get(`Genre/${API_KEY}/${genre}`);
};

// GET movies by actor
export const getMoviesByActor = (actor) => {
  return instance.get(`Actor/${API_KEY}/${actor}`);
};

// GET movies by director
export const getMoviesByDirector = (director) => {
  return instance.get(`Director/${API_KEY}/${director}`);
};
