<template>
    <div id="about">
        <header>
            <h1>About Us</h1>
        </header>

        <section>
            <h2>Our Mission</h2>
            <p>We strive to provide the best solutions tailored to our customers' needs. Our commitment to quality and
                innovation drives everything we do.</p>
        </section>

        <section>
            <h2>Our Team</h2>
            <article>
                <h3>John Doe - CEO</h3>
                <p>With over 20 years of experience, John leads our company with vision and dedication.</p>
            </article>
            <article>
                <h3>Jane Smith - CTO</h3>
                <p>Jane is the tech mastermind ensuring our products stay ahead of the curve.</p>
            </article>
        </section>

        <section>
            <h2>Our History</h2>
            <p>Founded in 2010, we've grown from a small startup to a leading industry player.</p>
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
#about {
    header {
        text-align: center;
        margin-bottom: 2.5rem;

        h1 {
            font-size: 2.25rem;
            color: #ffffff;
        }
    }

    section {
        margin-bottom: 2.5rem;

        h2 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #666;
            padding-bottom: 0.5rem;
            color: #ffffff;
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
            color: #f0f0f0;
            background-color: rgba(255, 255, 255, 0.06);
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        article {
            background-color: rgba(255, 255, 255, 0.07);
            padding: 1.25rem;
            border-radius: 0.5rem;
            margin-top: 1.25rem;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

            h3 {
                font-size: 1.375rem;
                margin-bottom: 0.5rem;
                color: #ffffff;
            }

            p {
                color: #eeeeee;
                margin: 0;
                padding: 0;
                background: none;
                box-shadow: none;
            }
        }
    }

    footer {
        text-align: center;
        border-top: 1px solid #555;
        padding-top: 2rem;
        color: #cccccc;
        margin-top: 3rem;

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