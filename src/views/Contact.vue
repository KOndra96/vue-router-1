<template>
    <div id="contact">
        <form @submit.prevent="">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your name here...">

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="example@email.com">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" placeholder="000-000-0000">

            <label for="message">Your message:</label>
            <textarea id="message" placeholder="Type here..."></textarea>

            <fieldset class="buttons">
                <button type="reset">Clear</button>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#contact {
    form {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

        label {
            font-size: 1rem;
            color: #eeeeee;
        }

        input,
        textarea {
            padding: 0.75rem 1rem;
            border: 1px solid #888;
            border-radius: 0.5rem;
            background-color: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            font-size: 1rem;

            &::placeholder {
                color: #ccc;
            }

            &:focus {
                border-color: #ccc;
                outline: none;
                background-color: rgba(255, 255, 255, 0.12);
            }
        }

        textarea {
            min-height: 120px;
            resize: vertical;
        }

        .buttons {
            display: flex;
            gap: 1rem;
            border: none;
            margin: 0;
            margin-top: .75rem;
            padding: 0;
            button {
                width: fit-content;
                padding: 0.6rem 1.25rem;
                border: none;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: 600;
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
}
</style>