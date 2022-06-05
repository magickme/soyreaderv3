<script>
    let src = "/wojak.png";
</script>

<svelte:head>
    <title>About Soyreader</title>
</svelte:head>

<div role="article" id="about-page" aria-label="about-page">
    <img {src} alt="Soydev" />

    <h1>About Soyreader</h1><br />

    <p>Soyreader is an app for aggregating subreddits in text-based feeds, based on the old AggReddit app which has disappeared.</p><br />
    
    <p>Dedicated to Soydevs everywhere.</p><br />
</div>

<style>
    h1 {
        font-size: 2em;
    }
    #about-page {
        color: white;
        text-align: center;
        padding: 20px 0 0 0;
        margin: 0 auto;
        display: block;
        max-width: 300px;
    }
</style>