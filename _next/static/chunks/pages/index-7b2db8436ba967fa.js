(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6683)}])},6683:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return k}});var t=n(5893),s=n(9008),c=n.n(s),i=(n(5675),n(7160)),o=n.n(i),r=n(3695),d=n.n(r);function l(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:d().Header,children:[(0,t.jsx)("div",{className:d().navItems,children:(0,t.jsx)("span",{children:"Popular"})}),(0,t.jsx)("div",{className:d().navItems,children:(0,t.jsx)("span",{children:"Coming Soon"})}),(0,t.jsx)("div",{className:d().navHead,children:(0,t.jsx)("span",{className:d().navHeading,children:"REDSKULL"})}),(0,t.jsx)("div",{className:d().navItems,children:(0,t.jsx)("span",{children:"Top Rated"})}),(0,t.jsx)("div",{className:d().navItems,children:(0,t.jsx)("span",{children:"In Theaters"})})]}),(0,t.jsxs)("div",{className:d().content,children:[(0,t.jsx)("span",{children:"BINGE everything ..."}),(0,t.jsx)("img",{src:"lottlemovie.gif"})]})]})}var m=n(5939),h=n.n(m),_=n(7294),u=n(2711),p=n.n(u);n(6130);function x(){var e=(0,_.useState)([]),a=e[0],n=e[1],s=(0,_.useState)([]),c=s[0],i=s[1];return(0,_.useEffect)((function(){fetch("https://imdb-api.com/en/API/Top250Movies/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e.items[0].title),n(e.items)})).catch((function(e){console.log(e)})),fetch("https://imdb-api.com/en/API/Top250TVs/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e),i(e.items)})).catch((function(e){console.log(e)}))}),[]),a.length>0?(0,t.jsxs)("div",{className:h().TopRated,"data-aos":"fade-up",children:[(0,t.jsx)("h1",{className:h().title,"data-aos":"fade-up",children:"Top Rated Movies"}),(0,t.jsx)("div",{className:h().container,"data-aos":"fade-up",children:a.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(h().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(h().cardtext),children:e.title})})]},e)}))}),(0,t.jsx)("h1",{className:h().title,"data-aos":"fade-up",children:"Top Rated TV Shows"}),(0,t.jsx)("div",{className:h().container,"data-aos":"fade-up",children:c.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(h().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(h().cardtext),children:e.title})})]},e)}))})]}):(0,t.jsx)("div",{className:h().load,children:"Loading..."})}var f=n(4298),j=n.n(f),g=n(3920),v=n.n(g);function N(){var e=(0,_.useState)([]),a=e[0],n=e[1],s=(0,_.useState)([]),c=s[0],i=s[1];return(0,_.useEffect)((function(){fetch("https://imdb-api.com/en/API/MostPopularMovies/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e.items[0].title),n(e.items)})).catch((function(e){console.log(e)})),fetch("https://imdb-api.com/en/API/MostPopularTVs/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e),i(e.items)})).catch((function(e){console.log(e)}))}),[]),a.length>0?(0,t.jsxs)("div",{className:v().Popular,"data-aos":"fade-up",children:[(0,t.jsx)("h1",{className:v().title,"data-aos":"fade-up",children:"Most Popular Movies"}),(0,t.jsx)("div",{className:v().container,"data-aos":"fade-up",children:a.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(v().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(v().cardtext),children:e.title})})]},e)}))}),(0,t.jsx)("h1",{className:v().title,"data-aos":"fade-up",children:"Most Popular TV Shows"}),(0,t.jsx)("div",{className:v().container,"data-aos":"fade-up",children:c.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(v().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(v().cardtext),children:e.title})})]},e)}))})]}):(0,t.jsx)("div",{className:v().load,children:"Loading..."})}var T=n(49),b=n.n(T);function I(){var e=(0,_.useState)([]),a=e[0],n=e[1];return(0,_.useEffect)((function(){fetch("https://imdb-api.com/en/API/InTheaters/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e.items[0].title),n(e.items)})).catch((function(e){console.log(e)}))}),[]),a.length>0?(0,t.jsxs)("div",{className:b().Theater,"data-aos":"fade-up",children:[(0,t.jsx)("h1",{className:b().title,"data-aos":"fade-up",children:"In Theater Movies"}),(0,t.jsx)("div",{className:b().container,"data-aos":"fade-up",children:a.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(b().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(b().cardtext),children:e.title})})]},e)}))})]}):(0,t.jsx)("div",{className:b().load,children:"Loading..."})}var H=n(8571),y=n.n(H);function P(){var e=(0,_.useState)([]),a=e[0],n=e[1];return(0,_.useEffect)((function(){fetch("https://imdb-api.com/en/API/ComingSoon/k_64lr2b56").then((function(e){return e.json()})).then((function(e){console.log(e.items[0].title),n(e.items)})).catch((function(e){console.log(e)}))}),[]),a.length>0?(0,t.jsxs)("div",{className:y().Coming,"data-aos":"fade-up",children:[(0,t.jsx)("h1",{className:y().title,"data-aos":"fade-up",children:"Coming Soon"}),(0,t.jsx)("div",{className:y().container,"data-aos":"fade-up",children:a.map((function(e){return(0,t.jsxs)("div",{className:"card ".concat(y().card),children:[(0,t.jsx)("img",{src:e.image,loading:"lazy",className:"card-img-top",alt:"..."}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("p",{className:"card-text ".concat(y().cardtext),children:e.title})})]},e)}))})]}):(0,t.jsx)("div",{className:y().load,children:"Loading..."})}function k(){var e=(0,_.useState)(!0),a=e[0],n=e[1];((0,_.useEffect)((function(){p().init({duration:1500}),setInterval((function(){n(!1)}),7e3)}),[]),0==a)&&(document.getElementById("preloader").style.display="none");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:o().preloader,id:"preloader",children:[(0,t.jsx)("img",{src:"lottlemovie.gif"}),(0,t.jsx)("h1",{children:"Waiting for Data..."})]}),(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)(j(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",crossOrigin:"anonymous"}),(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"REDSKULL"}),(0,t.jsx)("meta",{name:"description",content:"By Meer Tarbani"}),(0,t.jsx)("link",{rel:"icon",href:"lottlemovie.png"}),(0,t.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap",rel:"stylesheet"})]}),(0,t.jsx)(l,{}),(0,t.jsx)(N,{}),(0,t.jsx)(P,{}),(0,t.jsx)(I,{}),(0,t.jsx)(x,{})]})]})}},8571:function(e){e.exports={Coming:"Coming_Coming__Jd_ro",title:"Coming_title__pnN0K",container:"Coming_container__mok8e",card:"Coming_card__BSQJ5",load:"Coming_load__psQJw"}},3695:function(e){e.exports={Header:"Header_Header__aK_dx",navHead:"Header_navHead__WzrKE",navHeading:"Header_navHeading__0EWIn",navItems:"Header_navItems__2iJlc",content:"Header_content__eF0vW"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",preloader:"Home_preloader__HDxhp"}},49:function(e){e.exports={Theater:"InTheaters_Theater__XITvS",title:"InTheaters_title__5i8E_",container:"InTheaters_container__4IGaM",card:"InTheaters_card__MRTQq",load:"InTheaters_load__bvScc"}},3920:function(e){e.exports={Popular:"Popular_Popular__vKgsc",title:"Popular_title__m0BOk",container:"Popular_container__8Xnwu",card:"Popular_card__G1hhI",load:"Popular_load__hY9m1"}},5939:function(e){e.exports={TopRated:"TopRated_TopRated__elA1J",title:"TopRated_title__ygcwY",container:"TopRated_container__rs2Qo",card:"TopRated_card__SPWaF",load:"TopRated_load__XsEhh"}}},function(e){e.O(0,[299,774,888,179],(function(){return a=5557,e(e.s=a);var a}));var a=e.O();_N_E=a}]);