<template>
    <div id="homepage">
        <header>
      <div class="logo">
        <h1>Random Web</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="hero">
        <h2>Welcome to Random Web</h2>
        <p>
          Discover a world of unexpected content, from intriguing articles to
          inspiring visuals. Your adventure begins here.
        </p>
      </section>

      <section id="about">
        <article>
          <h3>About Us</h3>
          <p>
            Random Web is built for those who seek delightfully random and
            diverse content. Our mission is to curate and deliver unique insights
            and creative expressions that inspire and entertain.
          </p>
        </article>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Curated Articles</li>
          <li>Inspiring Videos</li>
          <li>Photo Galleries</li>
          <li>Interactive Forums</li>
        </ul>
      </section>

      <section id="news">
        <h2>Latest News</h2>
        <article>
          <h3>Breaking Story</h3>
          <time datetime="2025-05-08">May 8, 2025</time>
          <p>
            Stay updated with the latest trends and stories happening around
            the globe. Dive into comprehensive reports and analyses that bring
            the truth into light.
          </p>
          <a href="#">Read more</a>
        </article>
        <article>
          <h3>Community Spotlight</h3>
          <time datetime="2025-05-07">May 7, 2025</time>
          <p>
            Every week, we highlight inspiring contributions from members of our
            journey. See how unique voices continue to redefine creativity.
          </p>
          <a href="#">Read more</a>
        </article>
      </section>
    </main>

    <aside>
      <h2>Subscribe to Our Newsletter</h2>
      <form action="#" method="post">
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />
        <button type="submit">Subscribe</button>
      </form>
    </aside>

    <footer>
      <p>&copy; 2025 Random Web. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    
</style>