
import Axios from "axios";

const myKey = process.env.NEXT_PUBLIC_API_URL;

export const nextServer = Axios.create({
  baseURL: `${myKey}/api`,
  withCredentials: true,
});
