import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_BASE || process.env.NEXT_PUBLIC_API_BASE,
});

export default client;
