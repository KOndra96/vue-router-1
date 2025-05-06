import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import ToDoList from "../views/ToDoList.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/news", name: "News", component: News },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/todolist", name: "ToDoList", component: ToDoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
