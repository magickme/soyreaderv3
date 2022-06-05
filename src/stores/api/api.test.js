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

const sum = require('./api');

describe('Reddit API call', () => {

    it('adds 1+2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
});