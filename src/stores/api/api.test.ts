/**
 * Describe general functionality.
 * 
 * Through TDD, we are going to develop an API call to Reddit that fetches
 * data from specific subreddits and lists them on the front page. Data we want
 * includes:
 * - id
 * - post title
 * - name of subreddit
 * Customers should also, somewhere, be able to input data to manipulate the API
 * call. Conditions should include:
 * - sub [subreddit name]
 * - sort [top, all, new, hot]
 * - time [today, week, month, year, all]
 * - limit [number to fetch - 5 or 10]
 */

require('isomorphic-fetch');
import { writable } from 'svelte/store';

describe('Reddit API call', () => {
    describe('Make simple call to Reddit API', () => {
        it('simple API call, no variables', async() => {
            const redditUrl: string = 'https://www.reddit.com/r/all/top.json?t=today&limit=5';
            const res = await fetch(redditUrl);
            const redditData: any = await res.json();
            const redditLoad: any = redditData.data.children.map((redditData: any, index: number) => ({
                id: index + 1,
                title: redditData.data.title,
                subreddit_name_prefixed: redditData.data.subreddit_name_prefixed,
                url: redditData.data.url
            }));

            expect(res).not.toBeNull();
            expect(redditData).not.toBeNull();
            expect(redditLoad).not.toBeNull();
        });
    });
});