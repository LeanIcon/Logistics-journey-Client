import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => [
        ..._routes, 
        {
            name: 'home',
            path: '/',
            component: '~/pages/index.vue',
        }, 
        {
            name: 'features',
            path: '/features',
            component: '~/pages/features.vue',
        }, 
        {
            name: 'resources',
            path: '/resources',
            component: '~/pages/resources.vue',
        }, 
        {
            name: 'about-us',
            path: '/about-us',
            component: '~/pages/about-us.vue',
        }, 
        {
            name: 'contact',
            path: '/contact',
            component: '~/pages/contact.vue',
        },
        {
            name: 'demo',
            path: '/demo',
            component: '~/pages/Request_demo.vue',
        }

    ],
};