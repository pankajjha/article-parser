import { extract } from './index.js';

// test
const url_1 = 'https://www.newsbreak.com/news/2521982066231/uk-weather-news-live-heavy-rain-to-lash-flood-hit-towns-as-200-warnings-in-place-and-30-000-without-power';
const url_2 = 'https://www.newsbreak.com/news/2522075079359/how-new-drills-emphasis-on-individuals-is-driving-hitting-development';
const url_3 = 'https://www.dkpittsburghsports.com/2022/02/21/pirates-hitting-prospects-news-mlb-tucker-martin-chandler-minor-league-camp-ajs';

extract(url_1).then((article) => {
  console.log(article)
}).catch((err) => {
    console.log('parse_error')
})