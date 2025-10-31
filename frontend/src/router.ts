import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ShowListView from "./views/ShowListView.vue";
import AdminHome from "./views/admin/AdminHome.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/shows",
        name: "show-list",
        component: ShowListView,
    },
    {
        path: "/admin",
        name: "admin-home",
        component: AdminHome,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;