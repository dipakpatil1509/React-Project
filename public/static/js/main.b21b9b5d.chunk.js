(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{21:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(4),c=a.n(r),o=(a(26),a(11)),i=a(12),l=a(19),m=a(16),u=a(33),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={NewsImgUrl:[],NewsLinks:["https://newsapi.org/v2/top-headlines?country=us&apiKey=a37eb51fc6db489f859a65597f2a5fe4","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a37eb51fc6db489f859a65597f2a5fe4","https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=a37eb51fc6db489f859a65597f2a5fe4","https://newsapi.org/v2/top-headlines?q=trump&apiKey=a37eb51fc6db489f859a65597f2a5fe4"],NewsHeading:["Top headlines in the US","Top headlines from BBC News","Top business headlines from Germany","Top headlines about Trump"],index:0,totalItems:4},e.handleChange=function(){var t=e.state.index;(t+=1)>e.state.totalItems-1&&(t=0),e.setState({index:t}),document.documentElement.scrollTop=0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.NewsLinks.forEach((function(t,a){fetch(t).then((function(e){return e.json()})).then((function(t){var n=e.state.NewsImgUrl;n[a]=t.articles,e.setState({NewsImgUrl:n})}))}))}},{key:"render",value:function(){var e=this,t=this.state.NewsImgUrl,a=t!==[]?t.map((function(t,a){var n=t.map((function(e){return s.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 NewsImg",key:Math.random()},s.a.createElement("figure",null,s.a.createElement("img",{src:e.urlToImage,alt:e.title.slice(0,50)+"..."})))}));return s.a.createElement(u.a.Item,{className:"carouselDiv",key:a},s.a.createElement("div",{className:"Heading"},s.a.createElement("h1",{style:{display:"table"}},e.state.NewsHeading[a]),s.a.createElement("button",{className:"btn btn-primary changeButton",onClick:e.handleChange},"Change")),s.a.createElement("div",{className:"ImagesGrid container",align:"center"},s.a.createElement("div",{className:"row"},n)))})):s.a.createElement("h1",null,"Loading Data...");return s.a.createElement("div",{className:"container"},s.a.createElement(u.a,{activeIndex:this.state.index,slide:!1,interval:null,controls:!1,indicators:!1,touch:!1},a))}}]),a}(s.a.Component);a(29);var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b21b9b5d.chunk.js.map