import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_BASE || process.env.NEXT_PUBLIC_API_BASE,
});

const clientAuthed = axios.create({
  baseURL: process.env.API_BASE || process.env.NEXT_PUBLIC_API_BASE,
  headers: {
    withCredentials: true,
    'Access-Control-Allow-Credentials': true,
  }
});

export default client;
export {
  clientAuthed
};
