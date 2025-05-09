<template>
    <div id="gallery">
        <header>
            <h1>Gallery</h1>
            <p>Explore our collection of stunning images.</p>
        </header>

        <section>
            <h2>Featured Photos</h2>
            <figure>
                <img src="https://i.postimg.cc/6pqRV8p5/sunset.jpg" alt="Beautiful landscape at sunset">
                <figcaption>Sunset over the mountains</figcaption>
            </figure>
            <figure>
                <img src="https://i.postimg.cc/QdYvDZwy/beach.jpg" alt="Serene beach view with palm trees">
                <figcaption>Relaxing beach escape</figcaption>
            </figure>
        </section>

        <section>
            <h2>Our Work</h2>
            <article>
                <figure>
                    <img src="https://i.postimg.cc/g2WqJ7Vn/webdesign.jpg" alt="Modern website design concept">
                    <figcaption>Innovative web design</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                    <img src="https://i.postimg.cc/4N7Y3QNH/branding.jpg" alt="Creative branding and logo design">
                    <figcaption>Brand identity creation</figcaption>
                </figure>
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
#gallery {
    header {
        text-align: center;
        margin-bottom: 2.5rem;

        h1 {
            font-size: 2.25rem;
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

        figure {
            margin: 1.5rem 1rem;
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 0.75rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            text-align: center;
            max-width: 300px;
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(1.03);
            }

            img {
                max-width: 100%;
                border-radius: 0.4rem;
                display: block;
                margin-bottom: 0.5rem;
            }

            figcaption {
                font-size: 1rem;
                color: #f0f0f0;
            }
        }

        article {
            display: inline-block;
            vertical-align: top;
            margin-right: 1rem;
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
                text-decoration: none;
                opacity: 0.85;
            }
        }
    }
}
</style>