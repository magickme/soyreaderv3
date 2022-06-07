<script>
    export let redditpost;
    import DelSub from '../buttons/delSub/delSub.svelte';
    /* let subreddit = "r/all";
    let post = "Thick Face, Black Heart: Path to thriving, winning & succeeding, Chin-Ning Chu"; */
    let url = "https://www.reddit.com/";
    let sort = "Top";

</script>

<section aria-label="subreddit-feed" role="feed">
    <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 dark:text-gray-400">{sort}</span>
            <DelSub />
        </div>

        <div class="mt-2">
            <!-- <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{redditpost.subreddit_name_prefixed}</p> -->
            <p class="mt-2 text-gray-600 dark:text-gray-300">{redditpost.title}</p>
        </div>

        <div class="flex items-center justify-between mt-4">
            <a href={url} class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Read more</a>
        </div>
    </div>
</section>

<style>
    section {
        background-color: whitesmoke;
    }
</style>