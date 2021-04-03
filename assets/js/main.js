

const About = {
    template: '#about',
    name: 'About',
    data() {
        return {
            display : true,
        }
    }
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


/**
 RESPONSIVE LAYOUT
                **/
window.addEventListener('load', function () {
    if(window.matchMedia("(max-width:400px)").matches) {
        if(window.location.href.indexOf('link')){
        var elem = document.querySelectorAll('.namelink');
        elem.forEach(function (name) {

                name.textContent = '';

        });
        document.getElementById("btn-github").removeChild(document.getElementById("github-text"));
        }
    }
    if(window.matchMedia("(min-width:400px)").matches && window.matchMedia("(max-width:768px)").matches){
        document.getElementById("github-text").style.paddingRight = '20px';
    }
    if(window.matchMedia("(min-width:768px)").matches && window.matchMedia("(max-width:1024px)").matches){
        document.getElementById("github-text").style.paddingRight = '20px';
    }
});
