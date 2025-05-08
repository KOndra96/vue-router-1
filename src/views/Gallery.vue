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
figure img {
    max-width: 100%;
}
</style>