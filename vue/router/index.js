import Vue from 'vue'
import VueRouter from 'vue-router'
import readyForms from '../admin-panel/components/ready-forms/ready-forms.vue'
import createForm from '../admin-panel/components/create-forms/create-form.vue'
import uncheckForms from '../admin-panel/components/uncheck-forms/uncheck-forms.vue'
import admins from '../admin-panel/layout.vue'
import avaliableForms from '../student-panel/components/avaliable-forms/avaliable-forms.vue'
import myForms from '../student-panel/components/my-forms/my-forms.vue'
import notifications from '../student-panel/components/notifications/notifications.vue'
import students from '../student-panel/layout.vue'

import auth from './auth'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/adminpanel',
            name: 'admin',
            component: admins
        },
        {
            path: '/createforms',
            name: 'createforms',
            component: createForm
        },
        {
            path: '/readyforms',
            name: 'readyforms',
            component: readyForms
        },
        {
            path: '/uncheckforms',
            name: 'uncheckfroms',
            component: uncheckForms
        },
        {
            path: '/studentpanel',
            name: 'student',
            component: students
        },
        {
            path: '/myforms',
            name: 'myforms',
            component: myForms
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: notifications
        },
        {
            path: '/avaliableforms',
            name: 'avaliableforms',
            component: avaliableForms
        },
        {
            path: '/user/:id',
            name: 'auth',
            props: true,
            component: auth
        },
    ]
})