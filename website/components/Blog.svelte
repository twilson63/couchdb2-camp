<script>
import { format } from 'date-fns'
import Footer from './Footer.svelte'
import { sortBy, prop } from 'ramda'

export let meta
export let articles 

let sorted = sortBy(prop('order'))(articles)

</script>
<style>
  .post {
    margin-bottom: 1.5rem;
  } 
  .section {
    padding: 1.5rem;
  }
</style>
<svelte:head>
  <link rel="stylesheet" href="/global.css">
</svelte:head>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {meta.title}  
      </h1>
      <h2 class="subtitle">
        {meta.description}
      </h2>
    </div>
  </div>
</section>
<!-- author info -->
<section class="section">
  <div class="container">
    <h3 class="subtitle">About the Author</h3>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src={meta.author.avatar} alt={meta.author.name} />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{meta.author.name}</strong> <small>{meta.author.twitter}</small>
            <br>
            {meta.author.bio}
          </p>
        </div>
      </div>
    </article>
  </div>
</section>
<section class="section">
  <div class="container">
    <ul>
    {#each sorted as article}
      <li>
        <article class="media post">
          <div class="media-content">
            <div class="content">
              <a href="/{article.ID}"><h3 class="title has-text-primary">{article.title}</h3></a>
              <p>{article.description}</p>
            </div>
          </div>
          <div class="media-right">
            <p class="date">{format(article.date, 'MM/DD/YYYY')}</p>
          </div>
        </article>
      </li>
    {/each}
    </ul>
  </div>
</section>
<Footer {meta} />
