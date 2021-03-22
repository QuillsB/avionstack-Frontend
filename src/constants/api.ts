import dotenv from 'dotenv';

dotenv.config();

let baseUrl = 'http://api.aviationstack.com/v1';
let apiKey = '';

if (process.env.REACT_APP_API_KEY) {
  apiKey = process.env.REACT_APP_API_KEY;
}

export {
  baseUrl,
  apiKey,
}
