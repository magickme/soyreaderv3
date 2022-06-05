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
    describe('Define and set default value of variables', () => {
        it('defines subreddit', () => {
            let subreddit = 'all';
        });
        it('defines sort order', () => {
            let sort = 'top';
        });
        it('defines timeframe', () => {
            let time = 'today';
        });
        it('defines limit', () => {
            let limit = 5;
        });
    });
    describe('Make simple call to Reddit API', () => {
        it('make async call, without variables, test that it responds', async() => {
            const url = 'https://www.reddit.com/r/all/top.json?t=today&limit=5';
            const res = await fetch(url);
            console.log(res);
            expect(res).not.toBeNull();
        });
    });
});




/*

 it('Define URL', () => {
            const url: string = `
                    https: //www.reddit.com/r/${sub}/${sort}.json?t=${time}&limit=${limit}`;
                })
            });

            export const subreddit = writable([]);

            export const fetchSubreddit = async(sub, sort, time, limit) => {
                const url = `https://www.reddit.com/r/${sub}/${sort}.json?t=${time}&limit=${limit}`;
                const res = await fetch(url);
                const data = await res.json();
                const loadedSubreddit = data.data.children.map((data, index) => ({
                    id: index + 1,
                    title: data.data.title,
                    author: data.data.author,
                    thumbnail: data.data.thumbnail,
                    selftext: data.data.selftext,
                    subreddit_name_prefixed: data.data.subreddit_name_prefixed,
                    url: data.data.url
                }));
                subreddit.set(loadedSubreddit);
            };
            fetchSubreddit("linux", "top", "today", 100);

*/