<template>
    <section id="contact">
        <form @submit.prevent="">
            <label for="name">Name:</label>
            <input type="text" id="name">

            <label for="email">Email:</label>
            <input type="email" id="email">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone">

            <label for="message">Your message:</label>
            <textarea id="message" placeholder="Type here..."></textarea>

            <button type="reset">Clear</button>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#contact {
    max-width: 60rem;
    width: 100%;

    form {
        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-gap: .5rem 1rem;
        
        #message {
            min-height: 5rem;
        }
    }
}
</style>