
import Axios from "axios";

export const nextServer = Axios.create({
  baseURL: 'https://09-auth-indol-eta.vercel.app/api',
  withCredentials: true,
});
