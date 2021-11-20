import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const MOVIES = "movie/top_rated";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

export default class StartPageServices {
  static async getMovies(page: number) {
    try {
      const response = await axios.get(
        BASE_URL + MOVIES + API_KEY + "&page=" + `${page}`
      );
      return await Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      return await Promise.reject(error);
    }
  }
}
