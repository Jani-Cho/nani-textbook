import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import './style.css'
import App from './views/Home.vue'

import SideBar from './components/sidebar.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')