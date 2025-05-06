<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link to="/todolist">To-Do List</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
nav {
  display: flex;
  gap: 3rem;

  margin-bottom: 1rem;

  font-size: 1.5rem;

  background-color: var(--dark-gray);

  a {
    font-weight: 700;
    text-decoration: none;

    color: var(--light-gray);

    transition: color .15s ease-in-out;

    &.router-link-active {
      color: lightblue;
    }
  }
}
</style>
