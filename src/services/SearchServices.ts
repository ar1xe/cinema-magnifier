import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const URL_SEARCH_PEOPLE = "search/person";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

export default class SearchServices {
  static async getPeopleSearch(page: number) {
    try {
      const response = await axios.get(
        BASE_URL + URL_SEARCH_PEOPLE + API_KEY + "&page=" + `${page}`
      );
      return await Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      return await Promise.reject(error);
    }
  }
}
