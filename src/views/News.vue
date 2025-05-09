<template>
  <div id="news">
    <header>
      <h1>Latest News</h1>
      <p>Stay updated with the latest happenings and announcements.</p>
    </header>

    <section>
      <h2>Breaking News</h2>
      <article>
        <h3>New Product Launch</h3>
        <p><time datetime="2025-05-08">May 8, 2025</time> – We are excited to introduce our latest innovation, designed
          to streamline your workflow.</p>
        <a href="news-product-launch.html">Read more</a>
      </article>
    </section>

    <section>
      <h2>Industry Updates</h2>
      <article>
        <h3>Tech Trends 2025</h3>
        <p><time datetime="2025-04-25">April 25, 2025</time> – Discover the latest trends shaping the future of
          technology.</p>
        <a href="news-tech-trends.html">Read more</a>
      </article>
    </section>

    <section>
      <h2>Company Announcements</h2>
      <article>
        <h3>Upcoming Events</h3>
        <p><time datetime="2025-06-15">June 15, 2025</time> – Join us for an exclusive event where we unveil exciting
          new developments.</p>
        <a href="news-events.html">Read more</a>
      </article>
    </section>

    <footer>
      <p>© 2025 Our Company | <a href="contact.html">Contact Us</a></p>
    </footer>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#news {
  header {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: 2.25rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }

    p {
      font-size: 1.125rem;
      color: #eeeeee;
    }
  }

  section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #666;
      padding-bottom: 0.5rem;
      color: #ffffff;
    }

    article {
      background-color: rgba(255, 255, 255, 0.07);
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #ffffff;
      }

      time {
        font-size: 0.9rem;
        display: block;
        margin-bottom: 0.5rem;
        color: #dddddd;
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
        color: #f0f0f0;
      }

      a {
        display: inline-block;
        margin-top: 0.75rem;
        text-decoration: underline;
        font-weight: 600;
        color: #ffffff;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.85;
        }
      }
    }
  }

  footer {
    text-align: center;
    border-top: 1px solid #555;
    padding-top: 2rem;
    color: #cccccc;
    margin-top: 4rem;

    p {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: underline;
      color: #f0f0f0;

      &:hover {
        opacity: 0.8;
        text-decoration: none;
      }
    }
  }
}
</style>