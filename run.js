import { setRequestOptions, extract } from './index.js';

// test
const url_1 = 'https://www.newsbreak.com/news/2521982066231/uk-weather-news-live-heavy-rain-to-lash-flood-hit-towns-as-200-warnings-in-place-and-30-000-without-power';
const url_2 = 'https://www.newsbreak.com/news/2522075079359/how-new-drills-emphasis-on-individuals-is-driving-hitting-development';
const url_3 = 'https://www.dkpittsburghsports.com/2022/02/21/pirates-hitting-prospects-news-mlb-tucker-martin-chandler-minor-league-camp-ajs';
const url_4 = 'https://www.newsbreak.com/news/2529387822318/dr-ngozi-ezike-steps-down-as-head-of-the-illinois-department-of-public-health-it-has-been-the-honor-of-a-lifetime';
const url_5 = 'https://www.nytimes.com/2022/03/07/opinion/sway-kara-swisher-clint-watts.html';
const url_6 = 'https://the-ken.com/story/buybacks-bring-back-esop-lustre-but-all-that-glitters-isnt-gold/';
const url_7 = 'https://www.bbc.com/turkce/live/haberler-turkiye-56635939';
const url_8 = 'https://www.newsbreak.com/news/2529408106347/dr-ngozi-ezike-steps-down-as-head-of-the-illinois-department-of-public-health-it-has-been-the-honor-of-a-lifetime';

setRequestOptions({
  timeout: 1000*10, // 1 minute
  maxRedirects:2
});
//var start_time = new Date();
extract(url_8).then((article) => {
  console.log(article);
}).catch((err) => {
    console.log(err.toString());
})