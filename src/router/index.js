import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/Home.vue";
import NoteComponent from "@/components/NoteItem.vue";
import ListComponent from "@/components/NoteList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit",
    name: "edit",
    component: NoteComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;