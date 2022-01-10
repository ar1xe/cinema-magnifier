import axios from "axios";

const BASE_URL = "http://localhost:3333/";

interface User {
  email: string;
  password: string;
  confirm: string;
  nickname: string;
  prefix: string;
  phone: string;
  agreement: boolean;
}

export const RegisrationServices = () => {
  return {
    registrationUser: async function (element: User) {
      try {
        return await axios.post(BASE_URL + "registration", {
          element,
        });
      } catch (error) {
        console.log(error);
        return await Promise.reject(error);
      }
    },
    authorizationUser: async function (element: {
      password: string;
      remember: boolean;
      username: string;
    }) {
      try {
        const response = await axios.post(BASE_URL + "authorization", {
          element,
        });
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        return await Promise.reject(error);
      }
    },
  };
};
