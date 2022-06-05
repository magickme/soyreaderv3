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