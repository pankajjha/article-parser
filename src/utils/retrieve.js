// utils -> retrieve

import axios from 'axios'
import needle from 'needle';

import logger from './logger.js'

import { getRequestOptions } from '../config.js'

export default async (url) => {
  try {
    const response = await needle('get',url);

    // const contentType = res.headers['content-type'] || ''
    // if (!contentType || !contentType.includes('text/html')) {
    //   logger.error(`Content type must be "text/html", not "${contentType}"`)
    //   return null
    // }
    // console.log(response.body);
    // let html = await res.text();
    return response.body;
  } catch (err) {
    logger.error(err.message || err)
    return null
  }
}
