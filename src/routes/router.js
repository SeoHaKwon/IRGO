import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Announcement from '../views/Announcement.vue'
import Schedule from '../views/Schedule.vue'
import News from '../views/News.vue'
import Finance from '../views/Finance.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule
        },
        {
            path: '/announcement',
            name: 'announcement',
            component: Announcement
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/financial',
            name: 'financial',
            component: Finance
        }
    ]
})