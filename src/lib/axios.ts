import axios, { AxiosInstance } from "axios";

const APIInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API as string,
});

const APIMethods = {
  blogs: {
    getMediumData: async () => {
      return await APIInstance.get('/');
    },
  },

};

export default APIMethods;