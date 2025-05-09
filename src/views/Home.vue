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
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="example@email.com" />
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
#homepage {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    .logo h1 {
      font-size: 2rem;
      margin: 0;
      color: #ffffff;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      padding: 0;
      margin: 0;

      li a {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  main {
    section {
      margin-bottom: 3rem;

      &#hero {
        text-align: center;
        padding: 3rem 2rem;
        border-radius: 0.75rem;
        background-color: rgba(255, 255, 255, 0.1); // Brightened bg
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #f5f5f5;
        }
      }

      &#about article {
        background-color: rgba(255, 255, 255, 0.08);
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }

        p {
          line-height: 1.6;
          color: #f0f0f0;
        }
      }

      &#services {
        h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        ul {
          list-style: disc inside;
          padding-left: 1rem;

          li {
            margin-bottom: 0.5rem;
            color: #f9f9f9;
          }
        }
      }

      &#news {
        h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        article {
          margin-bottom: 2rem;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          background-color: rgba(255, 255, 255, 0.07);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

          h3 {
            font-size: 1.375rem;
            margin-bottom: 0.5rem;
            color: #ffffff;
          }

          time {
            display: block;
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #e0e0e0;
          }

          p {
            line-height: 1.6;
            color: #f0f0f0;
          }

          a {
            display: inline-block;
            margin-top: 0.75rem;
            font-weight: 600;
            text-decoration: underline;
            color: #ffffff;

            &:hover {
              opacity: 0.85;
            }
          }
        }
      }
    }
  }

  aside {
    background-color: rgba(255, 255, 255, 0.06);
    padding: 2rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    color: #ffffff;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input[type="email"] {
        padding: 0.75rem;
        border: 1px solid #999;
        background-color: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        border-radius: 0.375rem;
        font-size: 1rem;

        &::placeholder {
          color: #ccc;
        }
      }

      button {
        padding: 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
        background-color: rgba(255, 255, 255, 0.15);
        color: #ffffff;

        &:hover {
          background-color: rgba(255, 255, 255, 0.25);
        }
      }
    }
  }

  footer {
    margin-top: 4rem;
    text-align: center;
    border-top: 1px solid #666;
    padding-top: 1.5rem;
    color: #dddddd;

    p {
      margin-bottom: 0.5rem;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;

      li a {
        text-decoration: underline;
        color: #f1f1f1;

        &:hover {
          text-decoration: none;
          opacity: 0.85;
        }
      }
    }
  }
}
</style>