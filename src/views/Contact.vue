<template>
    <section id="contact">
        <form>
            <label for="name">Name</label>
            <input type="text" id="name">

            <label for="email">Email</label>
            <input type="email" id="email">

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone">

            <label for="message">Your message</label>
            <textarea id="message" placeholder="Type here..."></textarea>

            <button type="reset">Remove all</button>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
form {
    display: grid;
}
</style>