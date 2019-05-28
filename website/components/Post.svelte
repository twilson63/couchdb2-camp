<script>
import { onMount } from 'svelte'
export let meta
export let article

onMount(async () => {
    var url = "https://stream.mux.com/"+ article.video +".m3u8";
    // HLS.js-specific setup code
    if (Hls.isSupported()) {
      var video = document.getElementById("myVideo");
      var hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    }   
  })  

</script>
<svelte:head>
  <link rel="stylesheet" href="/global.css">
</svelte:head>
<section class="section">
  <div class="container video-container">
    <a href="/"><h1 class="title is-primary">{article.title}</h1></a>
    <h2 class="subtitle"></h2>
    {#if article.video}
    <video id="myVideo" controls>
    </video>
    {@html `
      <script>
      function ready() {
        if (Hls.isSupported()) {
          var video = document.getElementById("myVideo");
          var hls = new Hls();
          hls.loadSource("${`https://stream.mux.com/${article.video}.m3u8`}");
          hls.attachMedia(video);
        }
      }
      document.addEventListener("DOMContentLoaded", ready);
      </script>   
    `}
   {:else}
     <div class="content">
       {@html article.content}  
     </div>
   {/if}
 </div>
  
</section>
<style>
  video {
    height: 75%;
    width:  75%;
  }
  .video-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

