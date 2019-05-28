<script>

export let meta = { title: 'Need Title', author: { name: 'Author Name' }}

</script>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>{meta.title}</strong> by <a href="https://twitter.com/{meta.author.twitter}">{meta.author.name}</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Built using SveltePress.com.
    </p>
  </div>
</footer>

