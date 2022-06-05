require('isomorphic-fetch');
import { writable } from 'svelte/store';
export const fetchedSubreddit = writable([]);

export const fetchSubreddit = async() => {
    const redditUrl: string = 'https://www.reddit.com/r/all/top.json?t=today&limit=5';
    const res = await fetch(redditUrl);
    const redditData = await res.json();
    const redditLoad = redditData.data.children.map((redditData: any, index: number) => ({
        id: index + 1,
        title: redditData.data.title,
        subreddit_name_prefixed: redditData.data.subreddit_name_prefixed,
        url: redditData.data.url
    }));
    fetchedSubreddit.set(redditLoad);
};