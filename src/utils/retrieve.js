// utils -> retrieve

//import axios from 'axios'
import logger from './logger.js';
import { request } from 'undici';

import { getRequestOptions } from '../config.js'

export default async (url) => {
  const {
    statusCode,
    headers,
    trailers,
    body
  } = await request(url);
  return await body.text();
};
