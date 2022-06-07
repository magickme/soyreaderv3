/**
 * This should be called once per Feed component, and pass variables into redditUrl based on user input in order to display different subreddits and filter posts by date range, sorting method and post limit.
 */

require('isomorphic-fetch');
import { writable } from 'svelte/store';
export const fetchedSubreddit = writable([]);

export const fetchSubreddit = async() => {
    const redditUrl: string = 'https://www.reddit.com/r/worldnews/top.json?t=today&limit=5';
    const res = await fetch(redditUrl);
    const redditData: any = await res.json();
    const redditLoad: any = redditData.data.children.map((redditData: any, index: number) => ({
        id: index + 1,
        title: redditData.data.title,
        subreddit_name_prefixed: redditData.data.subreddit_name_prefixed,
        url: redditData.data.url
    }));
    fetchedSubreddit.set(redditLoad);
};
fetchSubreddit();