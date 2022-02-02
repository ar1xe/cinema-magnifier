import axios from "axios";

const BASE_URL = "http://localhost:3333/";

interface Note {
  note: string;
}

export const AddNoteActorsServices = () => {
  return {
    addNoteActor: async function (element: Note) {
      try {
        return await axios.post(BASE_URL + "notes", { element });
      } catch (error) {
        console.log(error);
        return await Promise.reject(error);
      }
    },
  };
};
