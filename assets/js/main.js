
const data = [
    { id: 1, title: "Che Guevara Cover", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/cover/cheguevara2.png'},
            { id: 2, url: 'assets/img/design/cover/cheguevara1.png'}
        ]
    },
    { id: 2, title: "Page 500 for virtualmuseum.fr", type:'design', tech:'Krita', img: [
            { id: 1, url: 'assets/img/design/painting/vm1.jpg'}
        ]
    },
    { id: 2, title: "Page 400 for virtualmuseum.fr", type:'design', tech:'Krita', img: [
            { id: 1, url: 'assets/img/design/painting/vm2.jpg'},
            { id: 2, url: 'assets/img/design/painting/vm22.jpg'}
        ]
    },
    { id: 3, title: "Cover - Street Tag", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/cover/jutax.png'},
            { id: 2, url: 'assets/img/design/cover/jutaxpres.png'}
        ]
    },
    { id: 4, title: "Cover - Venom", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/cover/venum.jpg'},
            { id: 2, url: 'assets/img/design/cover/venumpres.jpg'}
        ]
    },
    { id: 5, title: "Tukey Logo", type:'design', tech:'Krita, Photoshop', img: [
            { id: 1, url: 'assets/img/design/painting/tukey.png'}
        ]
    },
    { id: 6, title: "Virtual Museum Logo", type:'design', tech:'Illustrator', img: [
            { id: 1, url: 'assets/img/design/painting/logovm.png'}
        ]
    },
    { id: 7, title: "Avatar hologram", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/visual/presentation.png'},
            { id: 2, url: 'assets/img/design/visual/holo1.png'}
        ]
    },
    { id: 8, title: "Base", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/visual/base1.jpg'},
            { id: 2, url: 'assets/img/design/visual/base2.jpg'}
        ]
    },
    { id: 9, title: "GLEG - Logo", type:'design', tech:'Krita, Photoshop', img: [
            { id: 1, url: 'assets/img/design/painting/gleg.png'},
            { id: 2, url: 'assets/img/design/painting/gleg2.jpg'},
            { id: 3, url: 'assets/img/design/painting/gleg3.jpg'}
        ]
    },
    { id: 10, title: "Smoke Love", type:'design', tech:'Krita', img: [
            { id: 1, url: 'assets/img/design/painting/smoke.jpg'}
        ]
    },
    { id: 11, title: "Nude Illustration", type:'design', tech:'Krita, Photoshop', img: [
            { id: 1, url: 'assets/img/design/painting/lau.png'},
            { id: 2, url: 'assets/img/design/painting/lau2.png'},
        ]
    },
    { id: 12, title: "Olympic Games Poster", type:'design', tech:'Photoshop', img: [
            { id: 1, url: 'assets/img/design/visual/jo24.png'},
            { id: 2, url: 'assets/img/design/visual/jo24pres.png'},
        ]
    },
    { id: 13, title: "AF1 Cookie", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/af1_cookie.jpg'},
            { id: 2, url: 'assets/img/custom/afi_cookie2.jpg'},
            { id: 3, url: 'assets/img/custom/af1_cookie3.jpg'},
            { id: 4, url: 'assets/img/custom/afi1_cookie4.jpg'},
        ]
    },
    { id: 14, title: "AF1 x Supreme x LV", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/af1lv.jpg'},
            { id: 2, url: 'assets/img/custom/af1lv1.jpg'},
            { id: 3, url: 'assets/img/custom/af1lv2.jpg'},
            { id: 4, url: 'assets/img/custom/af1lv3.jpg'},
            { id: 5, url: 'assets/img/custom/af1lv4.jpg'},
        ]
    },
    { id: 15, title: "AF1 Road Repairs", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/af1bande.jpg'},
            { id: 2, url: 'assets/img/custom/af1bande2.jpg'},
            { id: 3, url: 'assets/img/custom/af1bande3.jpg'}
        ]
    },
    { id: 16, title: "AJ1 AC Milan Red 2020", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/aj1.jpg'}
        ]
    },
    { id: 17, title: "Reebok Classic 'Aqua Leather' ", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/reebok1.jpg'},
            { id: 2, url: 'assets/img/custom/reebok2.jpg'},
            { id: 2, url: 'assets/img/custom/reebok3.jpg'}
        ]
    },
    { id: 18, title: "AF1 for rapper Noirmate", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/noirmate.jpg'},
            { id: 2, url: 'assets/img/custom/noirmate2.jpg'}
        ]
    },
    { id: 19, title: "AF1 Sharingan", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/af1sharingan1.jpg'},
            { id: 2, url: 'assets/img/custom/af1sharingan2.jpg'}
        ]
    },
    { id: 20, title: "Adidas Stan Smith Flowers", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/adidas-flower.png'},
            { id: 2, url: 'assets/img/custom/adidas_flower2.jpg'}
        ]
    },
    { id: 21, title: "Adidas Thunder", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/adidas1.jpg'},
            { id: 2, url: 'assets/img/custom/adidas2.jpg'},
            { id: 3, url: 'assets/img/custom/adidas3.jpg'}
        ]
    },
    { id: 22, title: "Custom no brand", type:'custom', img: [
            { id: 1, url: 'assets/img/custom/custom_firename.jpg'},
            { id: 2, url: 'assets/img/custom/custom_firename2.jpg'}
        ]
    },
    { id: 23, title: "Milka Prototype", description:"Figma project", langage:'', type:'webapp', tech:'Figma', url: 'https://www.figma.com/proto/5GoBicFq5aqfHZ9BzqEptA/Milka?node-id=1%3A2&scaling=scale-down&page-id=0%3A1', urlGit:'https://www.figma.com/file/5GoBicFq5aqfHZ9BzqEptA/Milka', img: 'assets/img/custom/custom_firename.jpg'},
    { id: 24, title: "PortFolio for Solveig Esper", description:"Solveig Esper's portfolio", langage:'PHP, JS, HTML, CSS', type:'webapp', tech:'Slim 4, Twig, PHPMailer, ORM Eloquent, Boostrap, PHPDotenv, Slim/CSRF', url: 'http://solveigesper.fr', urlGit:'https://github.com/anthopernot/Site-Web-Solveig-Esper', img: 'assets/img/custom/custom_firename.jpg'},
    { id: 25, title: "CrazyCharlyDay", description:"IUT Nancy C. Competition - Management Site for La Grande ??picerie", type:'webapp', langage:'JS, PHP, HTML, CSS', tech:'Slim 4, Twig, PHPMailer, ORM Eloquent, Boostrap, PHPDotenv, Slim/CSRF', url: 'https://jules-sayer.com/projects/ccd', urlGit:'https://github.com/anthopernot/CrazyCharlyDay', img: 'assets/img/custom/custom_firename.jpg'},
    { id: 26, title: "Mod'Art", description:"Lucie Sandner's end-of-year project website", type:'webapp', langage:'JS, HTML, CSS', tech:'Boostrap', url: 'http://mod-art.totoprnt.fr', urlGit:'https://github.com/anthopernot/Mod-Art', img: 'assets/img/custom/custom_firename.jpg'},
    { id: 27, title: "MyWishList", description:"List management site at will", type:'webapp', langage:'PHP, JS, HTML, CSS', tech:'Slim 4, Twig, ORM Eloquent, Boostrap, Slim/Flash, Slim/CSRF', url: 'http://mywishlist.totoprnt.fr', urlGit:'https://github.com/anthopernot/MyWishList', img: 'assets/img/custom/custom_firename.jpg'},
    { id: 28, title: "GraVTunes", description:"Custom vinyl creator online with audio library manager", type:'webapp', langage:'JS, PHP, HTML, CSS', tech:'Slim 4, Twig, Braintree Paypal, PHPMailer, ORM Eloquent, Boostrap, PHPDotenv, Slim/CSRF', url: 'gravtunes.jules-sayer.com', urlGit:'https://github.com/anthopernot/GraVTunes', img: 'assets/img/webapp/gravtunes.jpg'},

];





















const About = {
    template: '#about',
    name: 'About',
    data() {
        return {
            display : true,
        }
    }
};

const Portfolio = {
    template: '#portfolio',
    name: 'PortFolio'
};

const Digital = {
    template: '#digital',
    name: 'Digital'
};

const Design = {
    template: '#design',
    name: 'Design',
    data: () => {
        return {
            design:data
        }
    },
    computed: {
        designTab(){
            let design = [];
            for(let i = 0 ; i < data.length; i++){
                if(data[i].type === 'design'){
                    design.push(data[i]);
                }
            }
            return design;
        }
    }
};




const Custom = {
    template: '#custom',
    name: 'Custom',
    data: () => {
        return {
            custom:data
        }
    },
    computed: {
        customTab(){
            let design = [];
            for(let i = 0 ; i < data.length; i++){
                if(data[i].type === 'custom'){
                    design.push(data[i]);
                }
            }
            return design;
        }
    }
};

const WebApp = {
    template: '#webapp',
    name: 'WebApp',
    data: () => {
        return {
            webapp:data
        }
    },
    computed: {
        webappTab(){
            let design = [];
            for(let i = 0 ; i < data.length; i++){
                if(data[i].type === 'webapp'){
                    design.push(data[i]);
                }
            }
            return design;
        }
    }
};

const Link = {
    template: '#link',
    name: 'Link'
};

const Content = {
    template : "#content",
    name: 'Content',
    methods:{
        completelyContent: function(link){
            document.getElementById("imageContent").src = link;
            document.getElementById("imageModal").src = link;
        },
        openModal: function(){
            document.getElementById("my-modal").style.display = "inline-flex";
            document.body.style.overflow = "hidden";
        },
        closeModal: function(){
            document.getElementById("my-modal").style.display = "none";
            document.body.style.overflow = "auto";
            //document.querySelector(".modal-body").removeChild(  document.querySelector(".my-slides") );
        }
    }
};

const router = new VueRouter({
    routes: [
        { path: '/', component: Portfolio},
        { path: '/about', component: About, name:'About'},
        { path: '/portfolio', component: Portfolio, name:'PortFolio'},
        { path: '/portfolio/digital', component: Digital, name:'Digital'},
        { path: '/portfolio/design', component: Design, name:'Design'},
        { path: '/portfolio/custom', component: Custom, name:'Custom'},
        { path: '/portfolio/webapp', component: WebApp, name:'WebApp'},
        { path: '/portfolio/content/:userId/:type/:imgTab', component: Content, name:'Content'},
        { path: '/link', component: Link, name:'Link'}
    ]
});

const vue = new Vue({
    router
}).$mount('#app');
