import { createRouter, createWebHistory } from 'vue-router'
let subject = "chinese"
let history = createWebHistory()
let routes = [
    {
        path: '/',
        name: 'Home',
        component: './App.vue'
    }, 
    {
        path: `/${subject}`,
        redirect:  `/${subject}/textbook`,
        name: 'Subject',
        component: './components/Dashboard.vue',
        chirdren:[
            {
                path: 'textbook',
                name: 'TextBook',
                component: './components/textbook.vue',

            },
            {
                path: 'pdf',
                name: 'Pdf',
                component: './components/pdf.vue',

            },
            {
                path: 'video',
                name: 'Video',
                component: './components/video.vue',

            },
            {
                path: 'reason',
                name: 'Reason',
                component: './components/reason.vue',

            },
            {
                path: 'features',
                name: 'Features',
                component: './components/features.vue',

            },
            {
                path: 'media',
                name: 'Media',
                component: './components/media.vue',

            },
        ]
        }, 
]

export default createRouter({ history, routes })