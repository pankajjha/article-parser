// utils -> extractMetaData
import { DOMParser } from 'linkedom'

/**
 * @param html {string}
 * @returns {{image: string, author: string, amphtml: string, description: string, keywords: string, canonical: string, source: string, published: string, title: string, url: string, shortlink: string}}
 */
export default (html) => {
  const entry = {
    url: '',
    shortlink: '',
    amphtml: '',
    canonical: '',
    title: '',
    description: '',
    keywords: '',
    image: '',
    author: '',
    source: '',
    published: ''
  }

  const sourceAttrs = [
    'application-name',
    'og:site_name',
    'twitter:site',
    'dc.title'
  ]
  const urlAttrs = [
    'og:url',
    'twitter:url'
  ]
  const titleAttrs = [
    'title',
    'og:title',
    'twitter:title'
  ]
  const descriptionAttrs = [
    'description',
    'og:description',
    'twitter:description'
  ]
  const keywordAttrs = [
    'news_keywords',
  ]
  const imageAttrs = [
    'og:image',
    'twitter:image',
    'twitter:image:src'
  ]
  const authorAttrs = [
    'author',
    'creator',
    'og:creator',
    'article:author',
    'twitter:creator',
    'dc.creator'
  ]
  const publishedTimeAttrs = [
    'article:published_time',
    'article:modified_time',
    'og:updated_time'
  ]

  const document = new DOMParser().parseFromString(html, 'text/html')
  entry.title = document.querySelector('head > title')?.innerText

  Array.from(document.getElementsByTagName('link')).forEach(node => {
    const rel = node.getAttribute('rel')
    const href = node.getAttribute('href')
    if (rel && href) entry[rel] = href
  })

  Array.from(document.getElementsByTagName('meta')).forEach(node => {
    const content = node.getAttribute('content')
    const property = node.getAttribute('property')?.toLowerCase()
    const name = node.getAttribute('name')?.toLowerCase()
  
    if (sourceAttrs.includes(property) || sourceAttrs.includes(name)) {
      entry.source = content
    }
    if (urlAttrs.includes(property) || urlAttrs.includes(name)) {
      entry.url = content
    }
    if (titleAttrs.includes(property) || titleAttrs.includes(name)) {
      entry.title = content
    }
    if (descriptionAttrs.includes(property) || descriptionAttrs.includes(name)) {
      entry.description = content
    }
    if (keywordAttrs.includes(property) || keywordAttrs.includes(name)) {
      entry.keywords = content
    }
    if (imageAttrs.includes(property) || imageAttrs.includes(name)) {
      entry.image = content
    }
    if (authorAttrs.includes(property) || authorAttrs.includes(name)) {
      entry.author = content
    }
    if (publishedTimeAttrs.includes(property) || publishedTimeAttrs.includes(name)) {
      entry.published = content
    }
  })

  return entry
}
