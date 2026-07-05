import axios from 'axios';

const baseURL = 'https://6a4987b4a033dcb98d65693d.mockapi.io';


export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Set a timeout of 5 seconds
});