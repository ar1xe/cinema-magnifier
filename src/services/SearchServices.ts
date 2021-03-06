import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const URL_SEARCH_PEOPLE = "search/person";
const URL_SEARCH_MOVIE = "search/movie";
const API_KEY = "cc05b5a727e14d0c6339bc25125883bd";

export default class SearchServices {
  static async getPeopleSearch(page: number, query: string) {
    try {
      const response = await axios.get(BASE_URL + URL_SEARCH_PEOPLE, {
        params: {
          api_key: API_KEY,
          page,
          query,
        },
      });
      return await Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      return await Promise.reject(error);
    }
  }

  static async getMoviesSearch(page: number, query: string) {
    try {
      const response = await axios.get(BASE_URL + URL_SEARCH_MOVIE, {
        params: {
          api_key: API_KEY,
          page,
          query,
        },
      });
      return await Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      return await Promise.reject(error);
    }
  }
}
