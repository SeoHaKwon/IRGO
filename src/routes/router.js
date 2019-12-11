import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Announcement from '../views/Announcement.vue'
import AnnouncementView from '../views/AnnouncementView.vue'
import Schedule from '../views/Schedule.vue'
import ScheduleView from '../views/ScheduleView.vue'
import News from '../views/News.vue'
import NewsView from '../views/NewsView.vue'
import Finance from '../views/Finance.vue'
import Status from '../views/Status.vue'
import Disclosure from '../views/Disclosure.vue'
import Report from '../views/Report.vue'
import Contact from '../views/Contact.vue'
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
            path: '/newsView',
            name: 'newsView',
            component: NewsView
        },
        {
            path: '/financial',
            name: 'financial',
            component: Finance
        },
        {
            path: '/status',
            name: 'status',
            component: Status
        },
        {
            path: '/disclosure',
            name: 'disclosure',
            component: Disclosure
        },
        {
            path: '/report',
            name: 'report',
            component: Report
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/scheduleView',
            name: 'scheduleView',
            component: ScheduleView
        },
        {
            path: '/announcementView',
            name: 'announcementView',
            component: AnnouncementView
        }
    ]
})