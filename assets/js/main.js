

const About = {
    template: '#about',
    name: 'About'
}

const Portfolio = {
    template: '#portfolio',
    name: 'PortFolio'
}

const Digital = {
    template: '#digital',
    name: 'Digital'
}

const Design = {
    template: '#design',
    name: 'Design'
}

const Custom = {
    template: '#custom',
    name: 'Custom'
}

const WebApp = {
    template: '#webapp',
    name: 'WebApp'
}

const Link = {
    template: '#link',
    name: 'Link'
}

const router = new VueRouter({
    routes: [
        { path: '/', component: Portfolio},
        { path: '/about', component: About, name:'About'},
        { path: '/portfolio', component: Portfolio, name:'PortFolio'},
        { path: '/portfolio/digital', component: Digital, name:'Digital'},
        { path: '/portfolio/design', component: Design, name:'Design'},
        { path: '/portfolio/custom', component: Custom, name:'Custom'},
        { path: '/portfolio/webapp', component: WebApp, name:'WebApp'},
        { path: '/link', component: Link, name:'Link'}
    ]
})

const vue = new Vue({
    router
}).$mount('#app');