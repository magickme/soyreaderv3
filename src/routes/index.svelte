<script>
    import Search from './components/search/search.svelte';
    import Feed from './components/feed/feed.svelte';
    import Footer from './components/footer/footer.svelte';
    import { fetchedSubreddit } from '../stores/api/api.js';
    let filteredPosts = 
</script>

<svelte:head>
    <title>Soyreader</title>
</svelte:head>

<br /><Search />

<br />

<Feed 
    redditpost={fetchedSubreddit}
/>

<br /><Footer />
