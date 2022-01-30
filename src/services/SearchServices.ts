import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const URL_SEARCH_PEOPLE = "search/person";
const API_KEY = "cc05b5a727e14d0c6339bc25125883bd";

// https://api.themoviedb.org/3/search/person?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

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
}
