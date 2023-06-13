import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PageNotFound from "../views/PageNotFound.vue";
import Zaxcom from "../views/Zaxcom.vue";
import SoundDevices from "../views/SoundDevices.vue";
import Ktek from "../views/Ktek.vue";
import Contact from "../views/Contact.vue";
import Fun from "../views/Fun.vue";
import Fun2 from "../views/Fun2.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact,
    },
    {
        path: '/zaxcom',
        name: "Zaxcom",
        component: Zaxcom,
    },
    {
        path: '/sounddevices',
        name: "SoundDevices",
        component: SoundDevices,
    },     {
        path: '/ktek',
        name: "Ktek",
        component: Ktek,
    },
    {
        path: '/fun',
        name: "Fun",
        component: Fun,
    },
    {
        path: '/fun2',
        name: "Fun2",
        component: Fun2,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router