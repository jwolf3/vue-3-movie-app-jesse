(function(e){function t(t){for(var c,a,r=t[0],s=t[1],v=t[2],l=0,u=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,v||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],c=!0,r=1;r<i.length;r++){var s=i[r];0!==n[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var c={},n={app:0},o=[];function a(t){if(c[t])return c[t].exports;var i=c[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=c,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(i,c,function(t){return e[t]}.bind(null,c));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var v=0;v<r.length;v++)t(r[v]);var b=s;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1341:function(e,t,i){"use strict";i("19bc")},"19bc":function(e,t,i){},"26f7":function(e,t,i){"use strict";i("3a57")},3409:function(e,t,i){"use strict";i("5214")},"36e4":function(e,t,i){"use strict";i("4f7d")},"3a57":function(e,t,i){},4752:function(e,t,i){"use strict";i("5405")},"4d33":function(e,t,i){},"4f7d":function(e,t,i){},5214:function(e,t,i){},5405:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var c=i("7a23");function n(e,t,i,n,o,a){var r=Object(c["z"])("Header"),s=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(r),Object(c["i"])(s)],64)}Object(c["v"])("data-v-31e5ac4d");var o={id:"nav"},a=Object(c["h"])("Home"),r=Object(c["h"])(" | "),s=Object(c["h"])("Favorite Movies");function v(e,t,i,n,v,b){var l=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("header",null,[Object(c["g"])("div",o,[Object(c["i"])(l,{to:"/"},{default:Object(c["F"])((function(){return[a]})),_:1}),r,Object(c["i"])(l,{to:"/favorites"},{default:Object(c["F"])((function(){return[s]})),_:1})])])}Object(c["t"])();var b={};i("26f7");b.render=v,b.__scopeId="data-v-31e5ac4d";var l=b,u={name:"App",components:{Header:l}};i("1341");u.render=n;var f=u,j=i("6c02");Object(c["v"])("data-v-6e32de7c");var O={class:"container"},p={class:"movieUl"};function d(e,t,i,n,o,a){var r=Object(c["z"])("MovieFilters"),s=Object(c["z"])("Movies"),v=Object(c["z"])("PageSwitcher");return Object(c["s"])(),Object(c["f"])("div",O,[Object(c["i"])(r,{movies:o.filmsNumberTwo.results,onEmitFilterMoviesGenre:a.filterMoviesGenre,onEmitLoadMovies:a.loadMovies},null,8,["movies","onEmitFilterMoviesGenre","onEmitLoadMovies"]),Object(c["g"])("div",p,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.movies.results,(function(e){return Object(c["s"])(),Object(c["d"])(s,{key:e.id,onClick:function(t){return a.getMovieInfo(e.id)},movie:e,onEmitFavoriteMovie:a.FavoriteMovie,allfavoriteMovies:o.allfavoriteMovies},null,8,["onClick","movie","onEmitFavoriteMovie","allfavoriteMovies"])})),128))]),Object(c["i"])(v,{pageNum:i.pageNum},null,8,["pageNum"])])}Object(c["t"])();i("159b"),i("b64b"),i("c740"),i("07ac");var m=i("260b"),g=(i("66ce"),{apiKey:"AIzaSyD0EHzZ-q0A_uWPAPrnt4Lk44JEknng4DA",authDomain:"vue-movie-app-jesse.firebaseapp.com",projectId:"vue-movie-app-jesse",storageBucket:"vue-movie-app-jesse.appspot.com",messagingSenderId:"49467615402",appId:"1:49467615402:web:e385a1bc03ea2994ffc8d3"}),h=m["a"].initializeApp(g),y=h,M=i("bc3a"),k=i.n(M),F=k.a.create({baseURL:"https://api.themoviedb.org/3/movie",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),I={getPopularMoviePage:function(e){return F.get("/popular?api_key=04c35731a5ee918f014970082a0088b1&page="+e)},getMovie:function(e){return F.get("/"+e+"?api_key=04c35731a5ee918f014970082a0088b1")}};Object(c["v"])("data-v-8318e5d4");var _={class:"movieLi"},w={class:"movieTitle"},A={class:"genreUl"},G={key:0},S={key:1},C={key:2},D={key:3},N={key:4},P={key:5},B={key:6},E={key:7},T={key:8},x={key:9},z={key:10},q={key:11},H={key:12},L={key:13},U={key:14},W={key:15},$={key:16},V={key:17},J={key:18},R={class:"imgDiv"},K=["src","alt"],Z={class:"svgDiv"},Q={class:"movieDescription"};function X(e,t,i,n,o,a){var r=this,s=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["d"])(s,{class:"movie-link",to:{name:"MovieDetails",params:{id:i.movie.id}}},{default:Object(c["F"])((function(){return[Object(c["g"])("div",_,[Object(c["g"])("h2",w,Object(c["B"])(i.movie.title),1),Object(c["g"])("ul",A,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(i.movie.genre_ids,(function(e){return Object(c["s"])(),Object(c["f"])("li",{class:"genreLi",key:e},[28==e?(Object(c["s"])(),Object(c["f"])("p",G,"Action")):Object(c["e"])("",!0),12==e?(Object(c["s"])(),Object(c["f"])("p",S,"Adventure ")):Object(c["e"])("",!0),16==e?(Object(c["s"])(),Object(c["f"])("p",C,"Animation")):Object(c["e"])("",!0),35==e?(Object(c["s"])(),Object(c["f"])("p",D,"Comedy")):Object(c["e"])("",!0),80==e?(Object(c["s"])(),Object(c["f"])("p",N,"Crime")):Object(c["e"])("",!0),99==e?(Object(c["s"])(),Object(c["f"])("p",P,"Documentary")):Object(c["e"])("",!0),18==e?(Object(c["s"])(),Object(c["f"])("p",B,"Drama")):Object(c["e"])("",!0),10751==e?(Object(c["s"])(),Object(c["f"])("p",E,"Family")):Object(c["e"])("",!0),14==e?(Object(c["s"])(),Object(c["f"])("p",T,"Fantasy")):Object(c["e"])("",!0),36==e?(Object(c["s"])(),Object(c["f"])("p",x,"History")):Object(c["e"])("",!0),27==e?(Object(c["s"])(),Object(c["f"])("p",z,"Horror")):Object(c["e"])("",!0),10402==e?(Object(c["s"])(),Object(c["f"])("p",q,"Music")):Object(c["e"])("",!0),9648==e?(Object(c["s"])(),Object(c["f"])("p",H,"Mystery")):Object(c["e"])("",!0),10749==e?(Object(c["s"])(),Object(c["f"])("p",L,"Romance")):Object(c["e"])("",!0),878==e?(Object(c["s"])(),Object(c["f"])("p",U,"Science Fiction")):Object(c["e"])("",!0),10770==e?(Object(c["s"])(),Object(c["f"])("p",W,"TV Movie ")):Object(c["e"])("",!0),53==e?(Object(c["s"])(),Object(c["f"])("p",$,"Thriller")):Object(c["e"])("",!0),10752==e?(Object(c["s"])(),Object(c["f"])("p",V,"War")):Object(c["e"])("",!0),37==e?(Object(c["s"])(),Object(c["f"])("p",J,"Western")):Object(c["e"])("",!0)])})),128))]),Object(c["g"])("div",R,[Object(c["g"])("img",{class:"movieImage",src:o.img_path+i.movie.poster_path,alt:i.movie.title},null,8,K),Object(c["g"])("div",Z,[(Object(c["s"])(),Object(c["f"])("svg",{class:Object(c["o"])(["favoriteSVG",{favoriteSVGActive:r.allfavoriteMovies.some((function(e){return e.id==i.movie.id}))}]),viewBox:"0 -28 512.00002 512",xmlns:"http://www.w3.org/2000/svg"},[Object(c["g"])("path",{d:"m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0",onClick:t[0]||(t[0]=Object(c["G"])((function(e){return a.emitFavoriteMovie(i.movie)}),["prevent"]))})],2))])]),Object(c["g"])("p",Q,Object(c["B"])(i.movie.overview),1)])]})),_:1},8,["to"])}Object(c["t"])();var Y={name:"Movies",props:{movie:{type:Object,required:!0},allfavoriteMovies:{type:Array,required:!1}},data:function(){return{img_path:"https://image.tmdb.org/t/p/w780/"}},methods:{emitFavoriteMovie:function(e){this.$emit("emitFavoriteMovie",e)}}};i("6e1a");Y.render=X,Y.__scopeId="data-v-8318e5d4";var ee=Y;Object(c["v"])("data-v-1267346e");var te={class:"pageSwitcher"},ie=Object(c["g"])("i",{class:"fas fa-minus-square"},null,-1),ce={class:"currentPageNumber"},ne=Object(c["g"])("i",{class:"fas fa-plus-square"},null,-1);function oe(e,t,i,n,o,a){var r=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("div",te,[1!=i.pageNum?(Object(c["s"])(),Object(c["d"])(r,{key:0,to:{name:"Home",query:{page:i.pageNum-1}},rel:"prev",onClick:a.pageScrollUp,class:"pageButton"},{default:Object(c["F"])((function(){return[ie]})),_:1},8,["to","onClick"])):Object(c["e"])("",!0),Object(c["g"])("span",ce,Object(c["B"])(i.pageNum),1),Object(c["i"])(r,{to:{name:"Home",query:{page:i.pageNum+1}},rel:"next",onClick:a.pageScrollUp,class:"pageButton"},{default:Object(c["F"])((function(){return[ne]})),_:1},8,["to","onClick"])])}Object(c["t"])();i("a9e3");var ae={name:"PageSwitcher",props:{pageNum:{type:Number,required:!0}},methods:{pageScrollUp:function(){window.scrollTo({top:0,behavior:"smooth"})}}};i("68f6");ae.render=oe,ae.__scopeId="data-v-1267346e";var re=ae;Object(c["v"])("data-v-9a360d9a");var se={class:"GenreFiltersDiv",ref:"parentDiv"},ve=["onClick"],be={key:0},le={key:1},ue={key:2},fe={key:3},je={key:4},Oe={key:5},pe={key:6},de={key:7},me={key:8},ge={key:9},he={key:10},ye={key:11},Me={key:12},ke={key:13},Fe={key:14},Ie={key:15},_e={key:16},we={key:17},Ae={key:18},Ge=Object(c["g"])("hr",null,null,-1);function Se(e,t,i,n,o,a){return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",se,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.uniqueGenres,(function(e,t){return Object(c["s"])(),Object(c["f"])("button",{class:"GenreFilterButton",key:t,onClick:function(i){return a.emitFilterMoviesGenre(e,t)}},[28==e?(Object(c["s"])(),Object(c["f"])("span",be,"Action")):Object(c["e"])("",!0),12==e?(Object(c["s"])(),Object(c["f"])("span",le,"Adventure ")):Object(c["e"])("",!0),16==e?(Object(c["s"])(),Object(c["f"])("span",ue,"Animation")):Object(c["e"])("",!0),35==e?(Object(c["s"])(),Object(c["f"])("span",fe,"Comedy")):Object(c["e"])("",!0),80==e?(Object(c["s"])(),Object(c["f"])("span",je,"Crime")):Object(c["e"])("",!0),99==e?(Object(c["s"])(),Object(c["f"])("span",Oe,"Documentary")):Object(c["e"])("",!0),18==e?(Object(c["s"])(),Object(c["f"])("span",pe,"Drama")):Object(c["e"])("",!0),10751==e?(Object(c["s"])(),Object(c["f"])("span",de,"Family")):Object(c["e"])("",!0),14==e?(Object(c["s"])(),Object(c["f"])("span",me,"Fantasy")):Object(c["e"])("",!0),36==e?(Object(c["s"])(),Object(c["f"])("span",ge,"History")):Object(c["e"])("",!0),27==e?(Object(c["s"])(),Object(c["f"])("span",he,"Horror")):Object(c["e"])("",!0),10402==e?(Object(c["s"])(),Object(c["f"])("span",ye,"Music")):Object(c["e"])("",!0),9648==e?(Object(c["s"])(),Object(c["f"])("span",Me,"Mystery")):Object(c["e"])("",!0),10749==e?(Object(c["s"])(),Object(c["f"])("span",ke,"Romance")):Object(c["e"])("",!0),878==e?(Object(c["s"])(),Object(c["f"])("span",Fe,"Science Fiction")):Object(c["e"])("",!0),10770==e?(Object(c["s"])(),Object(c["f"])("span",Ie,"TV Movie ")):Object(c["e"])("",!0),53==e?(Object(c["s"])(),Object(c["f"])("span",_e,"Thriller")):Object(c["e"])("",!0),10752==e?(Object(c["s"])(),Object(c["f"])("span",we,"War")):Object(c["e"])("",!0),37==e?(Object(c["s"])(),Object(c["f"])("span",Ae,"Western")):Object(c["e"])("",!0)],8,ve)})),128))],512),Ge],64)}Object(c["t"])();var Ce=i("2909"),De=(i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("d81d"),i("99af"),{name:"MovieFilters",props:["movies"],emits:["emitFilterMoviesGenre","emitLoadMovies"],data:function(){return{uniqueGenres:[]}},beforeUpdate:function(){this.getAllGenres(),this.resetActiveFilter()},methods:{getAllGenres:function(){var e=this.movies,t=Object(Ce["a"])(new Set(e.map((function(e){return e.genre_ids})))),i=[].concat.apply([],t);this.uniqueGenres=Object(Ce["a"])(new Set(i))},emitFilterMoviesGenre:function(e,t){var i=this.$refs.parentDiv,c=i.children[t];c.classList.contains("active")?(this.resetActiveFilter(),this.$emit("emitLoadMovies")):(this.resetActiveFilter(),c.classList.add("active")),this.$emit("emitFilterMoviesGenre",e)},resetActiveFilter:function(){var e=this.$refs.parentDiv;e.children.forEach((function(e){e.classList.remove("active")}))}}});i("5eeb");De.render=Se,De.__scopeId="data-v-9a360d9a";var Ne=De,Pe={name:"Home",props:["pageNum"],components:{Movies:ee,PageSwitcher:re,MovieFilters:Ne},data:function(){return{movies:"",filmsNumberTwo:[],allfavoriteMovies:[],allKeys:"",movieID:"",movieInfo:""}},created:function(){var e=this;Object(c["E"])((function(){e.loadMovies()}))},methods:{loadMovies:function(){var e=this;I.getPopularMoviePage(this.pageNum).then((function(t){e.movies=t.data})).catch((function(e){alert(e)})),I.getPopularMoviePage(this.pageNum).then((function(t){e.filmsNumberTwo=t.data})).catch((function(e){alert(e)}));var t=y.database().ref("favMovies");t.on("value",(function(t){var i=t.val(),c=[];null==i?e.allfavoriteMovies=[]:(Object.keys(i).forEach((function(e){c.push(i[e])})),e.allfavoriteMovies=c)}))},getMovieInfo:function(e){var t=this;I.getMovie(e).then((function(e){t.movieInfo=e.data})).catch((function(e){alert(e)}))},FavoriteMovie:function(e){var t=this,i=y.database().ref("favMovies");if(this.allfavoriteMovies.some((function(t){return t.id==e.id}))){var c=this.allfavoriteMovies.findIndex((function(t){return t.id===e.id}));i.on("value",(function(e){var i=e.val();null!=i&&(t.allkeys=Object.keys(i)[c])})),y.database().ref("favMovies/"+this.allkeys).remove()}else i.push(e)},filterMoviesGenre:function(e){var t=[];this.filmsNumberTwo.results.forEach((function(i){var c=i.genre_ids;Object.values(c).indexOf(e)>-1&&t.push(i)})),this.movies.results=t}}};i("3409");Pe.render=d,Pe.__scopeId="data-v-6e32de7c";var Be=Pe;Object(c["v"])("data-v-ca8e63dc");var Ee={class:"container"},Te={key:0,class:"movieUl"},xe={key:1},ze=Object(c["g"])("h2",null,"No Favorite movies yet...",-1),qe=[ze];function He(e,t,i,n,o,a){var r=Object(c["z"])("Movies");return Object(c["s"])(),Object(c["f"])("div",Ee,[0!==o.allfavoriteMovies.length?(Object(c["s"])(),Object(c["f"])("div",Te,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.allfavoriteMovies,(function(e){return Object(c["s"])(),Object(c["d"])(r,{key:e.id,onClick:Object(c["G"])((function(t){return a.getMovieInfo(e.id)}),["prevent"]),movie:e,onEmitFavoriteMovie:a.FavoriteMovie,allfavoriteMovies:o.allfavoriteMovies},null,8,["onClick","movie","onEmitFavoriteMovie","allfavoriteMovies"])})),128))])):(Object(c["s"])(),Object(c["f"])("div",xe,qe))])}Object(c["t"])();var Le={name:"FavoriteMovies",components:{Movies:ee},data:function(){return{allfavoriteMovies:[],movieID:"",movieInfo:""}},created:function(){this.loadMovies()},methods:{loadMovies:function(){var e=this,t=y.database().ref("favMovies");t.on("value",(function(t){var i=t.val(),c=[];null!==i&&Object.keys(i).forEach((function(e){c.push(i[e])})),e.allfavoriteMovies=c}))},getMovieInfo:function(e){var t=this;I.getMovie(e).then((function(e){t.movieInfo=e.data})).catch((function(e){alert(e)}))},FavoriteMovie:function(e){var t=this,i=y.database().ref("favMovies");if(this.allfavoriteMovies.some((function(t){return t.id==e.id}))){var c=this.allfavoriteMovies.findIndex((function(t){return t.id===e.id}));i.on("value",(function(e){var i=e.val();null!=i&&(t.allkeys=Object.keys(i)[c])})),y.database().ref("favMovies/"+this.allkeys).remove()}}}};i("36e4");Le.render=He,Le.__scopeId="data-v-ca8e63dc";var Ue=Le;i("b0c0");Object(c["v"])("data-v-166ef383");var We={key:0,class:"movieInformation"},$e={class:"movieInfoText"},Ve={class:"movieTitle"},Je={class:"ulGenres"},Re=Object(c["g"])("hr",null,null,-1),Ke=Object(c["g"])("h2",null,"Overview",-1),Ze={key:0,class:"budget"},Qe=Object(c["g"])("h2",null,"Budget",-1),Xe=Object(c["g"])("h2",null,"Vote average",-1),Ye=Object(c["g"])("h2",null,"Movie time",-1),et=["src","alt"];function tt(e,t,i,n,o,a){return o.movieInfo?(Object(c["s"])(),Object(c["f"])("div",We,[Object(c["g"])("div",$e,[Object(c["g"])("h1",Ve,Object(c["B"])(o.movieInfo.title),1),Object(c["g"])("ul",Je,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.movieInfo.genres,(function(e){return Object(c["s"])(),Object(c["f"])("li",{class:"liGenre",key:e.id},Object(c["B"])(e.name),1)})),128))]),Re,Ke,Object(c["g"])("p",null,Object(c["B"])(o.movieInfo.overview),1),0!=o.movieInfo.budget?(Object(c["s"])(),Object(c["f"])("div",Ze,[Qe,Object(c["g"])("p",null,"$ "+Object(c["B"])(a.numberWithCommas(o.movieInfo.budget)),1)])):Object(c["e"])("",!0),Xe,Object(c["g"])("p",null,Object(c["B"])(o.movieInfo.vote_average)+" / 10",1),Ye,Object(c["g"])("p",null,Object(c["B"])(o.movieInfo.runtime)+" minutes",1)]),Object(c["g"])("img",{class:"movieImg",src:o.img_path+o.movieInfo.poster_path,alt:o.movieInfo.title},null,8,et)])):Object(c["e"])("",!0)}Object(c["t"])();i("ac1f"),i("5319"),i("25f0");var it={name:"MovieDetails",props:["id"],data:function(){return{movieInfo:null,img_path:"https://image.tmdb.org/t/p/w1280/"}},created:function(){var e=this;I.getMovie(this.id).then((function(t){e.movieInfo=t.data,console.log(e.movieInfo)})).catch((function(e){console.log(e)}))},methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")}}};i("4752");it.render=tt,it.__scopeId="data-v-166ef383";var ct=it,nt=[{path:"/",name:"Home",component:Be,props:function(e){return{pageNum:parseInt(e.query.page)||1}}},{path:"/movie/:id",name:"MovieDetails",props:!0,component:ct},{path:"/favorites",name:"FavoriteMovies",component:Ue}],ot=Object(j["a"])({history:Object(j["b"])("/"),routes:nt}),at=ot;Object(c["c"])(f).use(at).mount("#app")},"5eeb":function(e,t,i){"use strict";i("4d33")},"68f6":function(e,t,i){"use strict";i("b24c")},"6e1a":function(e,t,i){"use strict";i("d5da")},b24c:function(e,t,i){},d5da:function(e,t,i){}});
//# sourceMappingURL=app.bde67aa9.js.map