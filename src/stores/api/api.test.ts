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

import { writable } from 'svelte/store';

require('isomorphic-fetch');

describe('Reddit API call', () => {
    describe('Make simple call to Reddit API', () => {
        it('simple API call, no variables', async() => {
            const subUrl: string = 'https://www.reddit.com/r/all/top.json?t=today&limit=5';
            const res = await fetch(subUrl);
            console.log(res);
            const subData = await res.json();
            console.log(subData);
            const subLoad = subData.data.children.map((subData: any, index: number) => ({
                id: index + 1,
                title: subData.data.title,
                url: subData.data.url
            }));
            console.log(subLoad);

            expect(res).not.toBeNull();
            expect(subData).not.toBeNull();
            expect(subLoad).not.toBeNull();
        });
    });
});