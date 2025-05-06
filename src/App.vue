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
  gap: 1rem;

  margin-bottom: 2rem;

  box-shadow: 0 0.04rem var(--nav-color);

  font-size: 1.5rem;

  background-color: var(--dark-gray);

  a {
    padding: .75rem 1.5rem;

    font-weight: 700;
    text-decoration: none;

    color: var(--light-gray);

    transition: color .25s ease-in-out;

    &.router-link-active {
      color: var(--nav-color);
    }
  }
}
</style>
