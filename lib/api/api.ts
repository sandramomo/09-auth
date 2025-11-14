
import Axios from "axios";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const nextServer = Axios.create({
  baseURL: `${myKey}/api`,
  withCredentials: true,
});
