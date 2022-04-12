/**
 * Article parser
 * @ndaidong
 **/

import {
  isString
} from 'bellajs'

import isValidUrl from './utils/isValidUrl.js'
import isHTMLString from './utils/isHTMLString.js'

import retrieve from './utils/retrieve.js'

import parseFromHtml from './utils/parseFromHtml.js'

export const extract = async (input) => {
  if (!isString(input)) {
    throw new Error('Input must be a string')
  }
  if (isHTMLString(input)) {
    return parseFromHtml(input)
  }

  if (!isValidUrl(input)) {
    throw new Error('Input must be a valid URL')
  }
  let download_start = Date.now();
  const html = await retrieve(input);
  let download_end = Date.now();
  if (!html) {
    return null
  }
  let parse_start = Date.now();
  let result = await parseFromHtml(html, input);
  let parse_end = Date.now();
  let download_time = download_end - download_start;
  let parse_time = parse_end - parse_start;
  result.download_time=download_time;
  result.parse_time=parse_time;
  return Promise.resolve(result);
}

export * from './config.js';
