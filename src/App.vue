<template>
  <nav :class="{ active: isNavigationOpen }">
    <button id="menu-button" @click="toggleNavigation" :class="{ active: isNavigationOpen }">☰</button>
    <transition-group name="fade" mode="out-in" appear>
      <router-link to="/" v-if="isNavigationOpen || !isSmallScreen">Home</router-link>
      <router-link to="/about" v-if="isNavigationOpen || !isSmallScreen">About</router-link>
      <router-link to="/news" v-if="isNavigationOpen || !isSmallScreen">News</router-link>
      <router-link to="/gallery" v-if="isNavigationOpen || !isSmallScreen">Gallery</router-link>
      <router-link to="/contact" v-if="isNavigationOpen || !isSmallScreen">Contact Us</router-link>
      <router-link to="/todolist" v-if="isNavigationOpen || !isSmallScreen">To-Do List</router-link>
    </transition-group>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref } from 'vue';

const isNavigationOpen = ref(true);

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value;
}


import { onMounted, onUnmounted } from 'vue';
const isSmallScreen = ref(window.innerWidth < 460);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 460;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 60rem;
  width: 100%;

  margin-bottom: 2rem;

  box-shadow: 0 0.04rem var(--nav-color);

  font-size: clamp(1rem, 1.25rem, 1.5rem);

  background-color: var(--dark-gray);

  #menu-button {
    align-self: flex-start;

    margin-left: 1rem;
    margin-bottom: .6rem;

    padding: .75rem 2rem;

    border: none;
    border-radius: .25rem;

    font-size: 2rem;

    transition: background-color .15s ease-in-out, color .15s ease-in-out;

    &.active {
      background-color: var(--nav-color);
      color: var(--dark-gray);
    }

  }

  a {
    padding: .6rem 1.5rem;

    font-weight: 700;
    text-decoration: none;

    color: var(--light-gray);

    transition: color .25s ease-in-out;

    &.router-link-active {
      color: var(--nav-color);
    }
  }
}

@media screen and (min-width: 460px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    #menu-button {
      display: none;
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease-in-out, transform .25s ease-in-out;
}
</style>
