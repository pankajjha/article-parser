import { extract } from './index.js';

(async () => {
    let url_array = [
        "https://www.nytimes.com/live/2022/04/11/world/ukraine-russia-war-news",
        "https://www.nytimes.com/2022/04/10/world/asia/ukraine-draft-dodgers.html",
        "https://www.nytimes.com/2022/04/10/world/europe/volunteer-bus-drivers-refugees-ukraine.html",
        "https://www.nytimes.com/2022/04/10/business/mackenzie-scott-charity.html",
        "https://www.newsbreak.com/news/2568434970324/mcconnell-if-republicans-retake-congress-we-ll-make-sure-joe-biden-is-a-moderate",
        "https://www.newsbreak.com/news/2568400383005/china-makes-semi-secret-delivery-of-missiles-to-serbia",
        "https://www.newsbreak.com/news/2568670605874/scottie-scheffler-wins-2022-masters-the-first-major-of-his-career-following-dominant-performance",
        "https://www.newsbreak.com/news/2568539873358/biden-expected-to-announce-new-gun-regulation-eyes-new-atf-nominee",
        "https://www.bbc.com/sport/football/60970965",
        "https://www.bbc.com/sport/golf/61061626"
];
    let all_start_time = new Date();
    for (const url of url_array) {
        let start_time = new Date();
        let articleData = await extract(url);
        let end_time = new Date();
        let time_taken = end_time - start_time;
        console.log(`Time taken: ${time_taken}  URL: ${url}  Title: ${articleData.title}`);
    }
    let all_end_time = new Date();
    console.log(`Total time: ${all_end_time - all_start_time}`);
    
})();
