

const About = {
    template: '#about',
    name: 'About'
};

const Portfolio = {
    template: '#portfolio',
    name: 'PortFolio'
};

const Link = {
    template: '#link',
    name: 'Link'
};

const router = new VueRouter({
    routes: [
        { path: '/', component: Portfolio},
        { path: '/about', component: About, name:'About'},
        { path: '/portfolio', component: Portfolio, name:'PortFolio'},
        { path: '/link', component: Link, name:'Link'}
    ]
});

const vue = new Vue({
    router
}).$mount('#app');