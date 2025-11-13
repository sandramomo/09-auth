
import Axios from "axios";

export const nextServer = Axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});
