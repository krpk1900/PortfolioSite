(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1b7833da",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";o(259)},281:function(t,e,o){var l=o(68)(!1);l.push([t.i,":root{--animate-duration:1000ms}.container{padding:0}h2{font-size:4em;text-align:center}a{text-decoration:none}.right{margin-right:10em}.left{margin-left:10em}.link{font-size:1.4em;text-decoration:none;color:#099e9e;padding:1.2vh;transition:all .3s ease}.link:hover{background-color:#e2d8d8}.leftmost-link{margin-left:auto}.rightmost-link{margin-right:3%}.code-img{width:100%;height:100vh}.title{position:relative;height:90vh}.vue-typer .custom.char{color:#71e9e9;font-weight:700;font-size:6.5vw}.vue-typer .custom.caret{width:0}.title .typing{position:absolute;font-size:4em;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap}img{vertical-align:top}.sns-links{text-align:center}.sns-img{margin:78vh 2px 0;border-radius:10px;transition-duration:.2s}.sns-img:hover{transform:scale(1.1);transition-duration:.2s}.profileLg{height:98vh}.profileLg,.profileXl{background-color:rgba(234,234,243,.98431)}.profileXl{height:86vh}.name{font-size:3vw;font-weight:600;color:#696464}.profile-img{border-radius:50%;border:9px solid #1d7777;display:block;margin:1% auto .5%}.profile-card{display:block;margin:1% auto}.works{height:87vh;background-color:#f8f8ff}.works-item{text-align:center}.works-card{display:block;margin:1% auto}.sekigaemaker-img{border-radius:20px;transition-duration:.2s}.sekigaemaker-img:hover{transform:scale(1.03);transition-duration:.2s}.sekigaemaker-title{font-size:2vw;font-weight:600;color:#696464;margin-top:1%}.sekigaemaker-description{font-size:1em;font-weight:550;color:#696464;margin:0 auto;width:30%}.skills{height:92vh;background-color:rgba(234,234,243,.98431)}.skills-card{display:block;margin:1% auto;padding-bottom:1%}.skills-card-title{font-size:1.7vw;font-weight:550;color:#696464}.skills-item{text-align:center}.historyLg{height:280vh}.historyLg,.historyXl{background-color:#f8f8ff}.historyXl{height:215vh}.opposite{font-size:1.8vw;font-weight:550}.history-card-title{font-size:1.5vw;font-weight:550;margin-left:2%}.history-card-text{font-size:1vw;font-weight:500;padding-left:4%}.history1lg{margin-top:-10%}.history1xl{margin-top:-8%}.history2lg{margin-top:-11%}.history2xl{margin-top:-9%}.history3lg{margin-top:-15%}.history3xl{margin-top:-10%}.history4lg{margin-top:-23%}.history4xl{margin-top:-14%}.history5lg{margin-top:-20%}.history5xl{margin-top:-13%}.history6lg{margin-top:-20%}.history6xl{margin-top:-14%}.history7lg{margin-top:-15%}.history7xl{margin-top:-11%}.history8lg{margin-top:-15%}.history8xl{margin-top:-11%}.footer-item{margin:0 5% 0 auto;color:#099e9e}.div-title{padding:1% 0;color:#23bdbd;font-weight:700;font-size:6vw}.else-padding{padding:4.1em}.fixed-background-img{background-image:url(/code5.jpg);background-attachment:fixed;background-size:cover;background-position:50%}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{padding:0}",""]),t.exports=l},322:function(t,e,o){"use strict";o.r(e);var l={data:function(){return{items:[{color:"red lighten-2",icon:"mdi-star"},{color:"purple darken-1",icon:"mdi-book-variant"},{color:"green lighten-1",icon:"mdi-airballoon"},{color:"indigo",icon:"mdi-buffer"}],isCreated:!1,isFadeInUpProfile1:!1,isFadeInUpProfile2:!1,isFadeInUpWorks1:!1,isFadeInUpSkills1:!1,isFadeInUpSkills2:!1,isFadeInUpSkills3:!1,isFadeInUpHistory1:!1,isFadeInUpHistory2:!1,isFadeInUpHistory3:!1,isFadeInUpHistory4:!1,isFadeInUpHistory5:!1,isFadeInUpHistory6:!1,isFadeInUpHistory7:!1,isFadeInUpHistory8:!1,scrollY:0,innnerHeight:0}},created:function(){window.addEventListener("scroll",this.handleScroll),this.isCreated=!0},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){console.log(this.$vuetify.breakpoint)},methods:{handleScroll:function(){var t,e,o,l,r,n,c,d,v,m,_,y,h,f;this.innnerHeight=window.innerHeight,this.scrollY=window.scrollY,this.$vuetify.breakpoint.lgOnly?(t=140,e=520,o=840,l=1480,r=1650,n=1800,c=2170,d=2300,v=2520,m=2730,_=3070,y=3350,h=3630,f=3850):this.$vuetify.breakpoint.xlOnly?(t=100,e=510,o=900,l=1750,r=1950,n=2130,c=2610,d=2780,v=2960,m=3180,_=3430,y=3700,h=3960,f=4190):(t=140,e=520,o=840,l=1480,r=1650,n=1800,c=2170,d=2300,v=2520,m=2730,_=3070,y=3350,h=3630,f=3850),this.isFadeInUpProfile1||(this.isFadeInUpProfile1=window.scrollY>t),this.isFadeInUpProfile2||(this.isFadeInUpProfile2=window.scrollY>e),this.isFadeInUpWorks1||(this.isFadeInUpWorks1=window.scrollY>o),this.isFadeInUpSkills1||(this.isFadeInUpSkills1=window.scrollY>l),this.isFadeInUpSkills2||(this.isFadeInUpSkills2=window.scrollY>r),this.isFadeInUpSkills3||(this.isFadeInUpSkills3=window.scrollY>n),this.isFadeInUpHistory1||(this.isFadeInUpHistory1=window.scrollY>c),this.isFadeInUpHistory2||(this.isFadeInUpHistory2=window.scrollY>d),this.isFadeInUpHistory3||(this.isFadeInUpHistory3=window.scrollY>v),this.isFadeInUpHistory4||(this.isFadeInUpHistory4=window.scrollY>m),this.isFadeInUpHistory5||(this.isFadeInUpHistory5=window.scrollY>_),this.isFadeInUpHistory6||(this.isFadeInUpHistory6=window.scrollY>y),this.isFadeInUpHistory7||(this.isFadeInUpHistory7=window.scrollY>h),this.isFadeInUpHistory8||(this.isFadeInUpHistory8=window.scrollY>f)}}},r=(o(280),o(66)),n=o(102),c=o.n(n),d=o(278),v=o(254),m=o(317),_=o(326),y=o(327),h=o(318),f=o(319),k=o(320),w=o(323),x=o(321),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{padding:"0"},attrs:{fluid:""}},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-system-bar",{staticStyle:{opacity:"0.95"},attrs:{color:"#fffaf0",app:"",height:"50vh"}},[o("p",[t._v("xs="+t._s(t.$vuetify.breakpoint.xsOnly)+"  sm="+t._s(t.$vuetify.breakpoint.smOnly)+"  md="+t._s(t.$vuetify.breakpoint.mdOnly)+"  lg="+t._s(t.$vuetify.breakpoint.lgOnly)+"  xl="+t._s(t.$vuetify.breakpoint.xlOnly)+"\n        scrollY="+t._s(t.scrollY)+"\n      ")]),t._v(" "),o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#title",expression:"'#title'"}],staticClass:"link leftmost-link",staticStyle:{color:"#099e9e"},attrs:{to:""}},[t._v("Top")]),t._v(" "),o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#profile",expression:"'#profile'"}],staticClass:"link",staticStyle:{color:"#099e9e"},attrs:{to:""}},[t._v("Profile")]),t._v(" "),o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"link",staticStyle:{color:"#099e9e"},attrs:{to:""}},[t._v("Works")]),t._v(" "),o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"link",staticStyle:{color:"#099e9e"},attrs:{to:""}},[t._v("Skills")]),t._v(" "),o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#history",expression:"'#history'"}],staticClass:"link rightmost-link",staticStyle:{color:"#099e9e"},attrs:{to:""}},[t._v("History")])],1)],1),t._v(" "),o("div",{staticClass:"title fixed-background-img",attrs:{id:"title"}},[o("vue-typer",{staticClass:"typing",attrs:{text:"Terai Shogo's Portfolio",repeat:0,"pre-type-delay":100,"type-delay":80}}),t._v(" "),o("div",{staticClass:"sns-links"},[o("a",{attrs:{href:"https://twitter.com/krpk1900_dev",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/twitter.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://qiita.com/krpk1900",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/qiita.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://github.com/krpk1900",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/github.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://note.com/krpk1900",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/note.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://www.wantedly.com/id/krpk1900",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/wantedly.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://www.facebook.com/krpk1900",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/facebook.png",width:"4%"}})]),t._v(" "),o("a",{attrs:{href:"https://connpass.com/user/krpk1900/",target:"_blank"}},[o("img",{staticClass:"sns-img",attrs:{src:"/connpass.png",width:"4%"}})])])],1),t._v(" "),o("div",{class:[{profileLg:t.$vuetify.breakpoint.lgOnly},{profileXl:t.$vuetify.breakpoint.xlOnly}]},[o("h2",{staticClass:"div-title",attrs:{id:"profile"}},[t._v("Profile")]),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"5",xl:"4"}},[t.isFadeInUpProfile1?o("img",{staticClass:"animate__animated profile-img",class:{animate__fadeInUp:t.isFadeInUpProfile1},attrs:{src:"/zoomup.jpg",width:"300vh",height:"300vh"}}):o("div",{staticStyle:{padding:"10em"}}),t._v(" "),t.isFadeInUpProfile1?o("p",{staticClass:"animate__animated text-center name",class:{animate__fadeInUp:t.isFadeInUpProfile1}},[t._v("Terai Shogo")]):o("div",{staticStyle:{padding:"10em"}})])],1),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"7",lg:"5",xl:"4"}},[t.isFadeInUpProfile2?o("v-card",{staticClass:"animate__animated profile-card",class:{animate__fadeInUp:t.isFadeInUpProfile2},attrs:{elevation:"4",width:"85%",rounded:""}},[o("v-card-text",{staticClass:"text-body-1",staticStyle:{"padding-left":"7%"}},[t._v("\n              1995年生まれ富山県出身。"),o("br"),t._v("\n              大阪大学で情報科学を学んだ後、公立中学校で教諭となる。"),o("br"),t._v("\n              現在はWeb開発を学習中。"),o("br"),t._v("\n              趣味はバドミントン・サッカー・将棋・料理など。\n            ")])],1):o("div",{staticStyle:{padding:"5em"}})],1)],1)],1),t._v(" "),o("div",{staticClass:"works",attrs:{id:"works"}},[o("h2",{staticClass:"div-title"},[t._v("Works")]),t._v(" "),o("div",{staticClass:"works-item"},[t.isFadeInUpWorks1?o("div",{staticClass:"animate__animated",class:{animate__fadeInUp:t.isFadeInUpWorks1}},[o("a",{attrs:{href:"https://sekigae.jp/",target:"_blank"}},[o("img",{staticClass:"sekigaemaker-img",attrs:{src:"/sekigae2.png",width:"420vw"}})])]):o("div",{staticStyle:{margin:"30%"}}),t._v(" "),o("a",{attrs:{href:"https://sekigae.jp/",target:"_blank"}},[o("div",{staticClass:"text-center sekigaemaker-title"},[t._v("席替えメーカー")])])])]),t._v(" "),o("div",{staticClass:"skills",attrs:{id:"skills"}},[o("h2",{staticClass:"div-title"},[t._v("Skills")]),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",xs:"3",sm:"12",md:"8",lg:"6",xl:"6"}},[t.isFadeInUpSkills1?o("v-card",{staticClass:"animate__animated skills-card",class:{animate__fadeInUp:t.isFadeInUpSkills1},attrs:{elevation:"4",width:"85%",rounded:""}},[o("v-card-title",{staticClass:"skills-card-title justify-center",staticStyle:{"font-size":"1.7em","font-weight":"550"}},[t._v("今後学習したい")]),t._v(" "),o("div",{staticClass:"skills-item"},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/TypeScript.png",alt:"TypeScript",width:"9%"}},"img",r,!1),l))]}}],null,!1,3443020770)},[t._v(" "),o("span",[t._v("TypeScript")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/React.png",alt:"React",width:"9%"}},"img",r,!1),l))]}}],null,!1,716402690)},[t._v(" "),o("span",[t._v("React")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0.5%"},attrs:{src:"/nextjs.png",alt:"Next.js",width:"11%"}},"img",r,!1),l))]}}],null,!1,3845834783)},[t._v(" "),o("span",[t._v("Next.js")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/sql.png",alt:"SQL",width:"9%"}},"img",r,!1),l))]}}],null,!1,2891554082)},[t._v(" "),o("span",[t._v("SQL")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"1% 1% 0 1%"},attrs:{src:"/aws.png",alt:"AWS",width:"12%"}},"img",r,!1),l))]}}],null,!1,4283923768)},[t._v(" "),o("span",[t._v("AWS")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/webpack.png",alt:"webpack",width:"9%"}},"img",r,!1),l))]}}],null,!1,2610650754)},[t._v(" "),o("span",[t._v("webpack")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"1% 1% 0 1%"},attrs:{src:"/nodejs.png",alt:"Node.js",width:"11%"}},"img",r,!1),l))]}}],null,!1,2803117621)},[t._v(" "),o("span",[t._v("Node.js")])])],1)],1):o("div",{staticStyle:{padding:"5em"}})],1)],1),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"6",xl:"6"}},[t.isFadeInUpSkills2?o("v-card",{staticClass:"animate__animated skills-card",class:{animate__fadeInUp:t.isFadeInUpSkills2},attrs:{elevation:"4",width:"85%",rounded:""}},[o("v-card-title",{staticClass:"skills-card-title justify-center",staticStyle:{"font-size":"1.7em","font-weight":"550"}},[t._v("最近よく使う")]),t._v(" "),o("div",{staticClass:"skills-item"},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/ruby.png",alt:"Ruby",width:"9%"}},"img",r,!1),l))]}}],null,!1,152827332)},[t._v(" "),o("span",[t._v("Ruby")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 2%"},attrs:{src:"/rails.png",alt:"Ruby on Rails",width:"9%"}},"img",r,!1),l))]}}],null,!1,838526938)},[t._v(" "),o("span",[t._v("Ruby on Rails")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 2%"},attrs:{src:"/javascript.svg",alt:"JavaScript",width:"8%"}},"img",r,!1),l))]}}],null,!1,1910799613)},[t._v(" "),o("span",[t._v("JavaScript")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/vue.png",alt:"Vue.js",width:"9%"}},"img",r,!1),l))]}}],null,!1,314065875)},[t._v(" "),o("span",[t._v("Vue.js")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 1% 0 1%"},attrs:{src:"/nuxtjs.svg",alt:"Nuxt.js",width:"11%"}},"img",r,!1),l))]}}],null,!1,2017048076)},[t._v(" "),o("span",[t._v("Nuxt.js")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 2%"},attrs:{src:"/html.png",alt:"HTML",width:"9%"}},"img",r,!1),l))]}}],null,!1,3617057351)},[t._v(" "),o("span",[t._v("HTML")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"recent-skill-img",staticStyle:{margin:"0 5% 0 1%"},attrs:{src:"/css.png",alt:"CSS",width:"8%"}},"img",r,!1),l))]}}],null,!1,4152925125)},[t._v(" "),o("span",[t._v("CSS")])])],1)],1):o("div",{staticStyle:{padding:"5em"}})],1)],1),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"6",xl:"6"}},[t.isFadeInUpSkills3?o("v-card",{staticClass:"animate__animated skills-card",class:{animate__fadeInUp:t.isFadeInUpSkills3},attrs:{elevation:"4",width:"85%",rounded:""}},[o("v-card-title",{staticClass:"skills-card-title justify-center",staticStyle:{"font-size":"1.7em","font-weight":"550"}},[t._v("過去使っていた")]),t._v(" "),o("div",{staticClass:"skills-item"},[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/python.png",alt:"Python",width:"9.5%"}},"img",r,!1),l))]}}],null,!1,2341009369)},[t._v(" "),o("span",[t._v("Python")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 1%"},attrs:{src:"/java.png",alt:"Java",width:"9%"}},"img",r,!1),l))]}}],null,!1,2217795106)},[t._v(" "),o("span",[t._v("Java")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[o("img",t._g(t._b({staticClass:"skill-img",staticStyle:{margin:"0 2% 0 1%"},attrs:{src:"/c.png",alt:"C言語",width:"10%"}},"img",r,!1),l))]}}],null,!1,2746518499)},[t._v(" "),o("span",[t._v("C言語")])])],1)],1):o("div",{staticStyle:{padding:"5em"}})],1)],1)],1),t._v(" "),o("div",{class:[{historyLg:t.$vuetify.breakpoint.lgOnly},{historyXl:t.$vuetify.breakpoint.xlOnly}],attrs:{id:"history"}},[o("h2",{staticClass:"div-title"},[t._v("History")]),t._v(" "),o("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[o("v-timeline-item",{attrs:{color:"orange lighten-1",icon:" mdi-baby-face","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite orange--text",class:[{history1lg:t.$vuetify.breakpoint.lgOnly},{history1xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              1995.9\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory1?o("v-card",{staticClass:"animate__animated right",class:{animate__fadeInRight:t.isFadeInUpHistory1},attrs:{color:"orange lighten-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("富山県で生まれる")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("自然豊かな場所で生まれました。")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"blue lighten-2",icon:"mdi-school","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite blue--text",class:[{history2lg:t.$vuetify.breakpoint.lgOnly},{history2xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2008.4\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory2?o("v-card",{staticClass:"animate__animated left",class:{animate__fadeInLeft:t.isFadeInUpHistory2},attrs:{color:"blue lighten-2",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("中学校に入学")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("自分の生きる姿勢を通して、心に一生残り続けるような"),o("b",[t._v("良い影響を人に与えたい")]),t._v("と考えて、教師を目指すようになりました。")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"pink lighten-2",icon:"mdi-school","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite pink--text",class:[{history3lg:t.$vuetify.breakpoint.lgOnly},{history3xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2011.4\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory3?o("v-card",{staticClass:"animate__animated right",class:{animate__fadeInRight:t.isFadeInUpHistory3},attrs:{color:"pink lighten-2",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("富山東高等学校に入学")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("\n                これまで関心があった教育に加えて、"),o("b",[t._v("学習")]),t._v("に対しても興味を持つようになりました。\n                人が何かを学習するとは一体どのような仕組みなのか、学習の効率を最大化するためにはどのような方法があるのかなどを探求していました。\n              ")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"green lighten-1",icon:"mdi-lightbulb-on","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite green--text",class:[{history4lg:t.$vuetify.breakpoint.lgOnly},{history4xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2015.3\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory4?o("v-card",{staticClass:"animate__animated left",class:{animate__fadeInLeft:t.isFadeInUpHistory4},attrs:{color:"green lighten-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("将棋がきっかけで人工知能に関心を持つ")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("\n                将棋でコンピュータがプロ棋士を超え始めたことを知り、"),o("b",[t._v("コンピュータが自らで学習")]),t._v("していることに衝撃を受けました。\n                そもそもコンピュータが学習するとは一体どういうことなのか、コンピュータはどのような仕組みで学習しているのかなどを詳しく学びたいと思うようになりました。"),o("br"),o("br"),t._v("\n                また、コンピュータの学習を学ぶことで、将来教師になったときに"),o("b",[t._v("人の学習に活かせる")]),t._v("ことがあるのではないかと考えていました。\n              ")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"indigo darken-1",icon:"mdi-school","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite indigo--text",class:[{history5lg:t.$vuetify.breakpoint.lgOnly},{history5xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2016.4\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory5?o("v-card",{staticClass:"animate__animated right",class:{animate__fadeInRight:t.isFadeInUpHistory5},attrs:{color:"indigo darken-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("大阪大学に入学")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("\n                情報科学を学んだ後、教育工学分野における研究を行いました。\n                機械学習を用いて学習者の状態推定を行い、"),o("b",[t._v("コンピュータの学習によって人間の学習を支援する")]),t._v("手法を研究していました。"),o("br"),o("br"),t._v("\n                また、夜間に履修していた教職課程を通して、同年代とは考えられないようなビジョンを持つ多くの人たちと出会うことができました。\n              ")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"purple darken-1",icon:"mdi-city","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite purple--text",class:[{history6lg:t.$vuetify.breakpoint.lgOnly},{history6xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2020.4\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory6?o("v-card",{staticClass:"animate__animated left",class:{animate__fadeInLeft:t.isFadeInUpHistory6},attrs:{color:"purple darken-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("公立中学校教諭に赴任")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("\n                心から尊敬できる教師の方々に囲まれながら働くことができました。\n                しかし、そんな素敵な人たちが様々なものを犠牲にしている現実を知り、"),o("b",[t._v("「この人たちは絶対にこんなに苦しむべき人ではない」")]),t._v("と強く感じました。"),o("br"),o("br"),t._v("\n                既存の仕組みを改善することや、新たな仕組みを作ることによって課題を解決したいと考えるようになりました。\n              ")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"deep-orange lighten-1",icon:"mdi-code-tags","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite deep-orange--text",class:[{history7lg:t.$vuetify.breakpoint.lgOnly},{history7xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2020.9\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory7?o("v-card",{staticClass:"animate__animated right",class:{animate__fadeInRight:t.isFadeInUpHistory7},attrs:{color:"deep-orange lighten-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("Web開発の学習を始める")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[t._v("\n                サービスを開発して多くの人に届けることによって、"),o("b",[t._v("自分が直接出会うことができないような規模の人たちにも価値を提供できる点")]),t._v("に魅力を感じ、\n                これまで学んだ経験がなかった分野であるWeb開発を学習し始めました。\n              ")])])],1):t._e()],1),t._v(" "),o("v-timeline-item",{attrs:{color:"cyan darken-1",icon:"mdi-lightbulb-on","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("div",{staticClass:"opposite cyan--text",class:[{history8lg:t.$vuetify.breakpoint.lgOnly},{history8xl:t.$vuetify.breakpoint.xlOnly}]},[t._v("\n              2021.3\n            ")])]},proxy:!0}])},[t._v(" "),t.isFadeInUpHistory8?o("v-card",{staticClass:"animate__animated left",class:{animate__fadeInLeft:t.isFadeInUpHistory8},attrs:{color:"cyan darken-1",dark:""}},[o("v-card-title",{staticClass:"history-card-title",staticStyle:{"font-size":"1.5em","font-weight":"550"}},[t._v("席替えメーカーを個人開発")]),t._v(" "),o("v-card-text",{staticClass:"white text--primary history-card-text",staticStyle:{"font-size":"1em","font-weight":"500"}},[o("p",{staticStyle:{"padding-top":"3%"}},[o("b",[t._v("業務を改善することで教師の方の力になりたい")]),t._v("と考え、席替えサービスを個人開発しました。\n                ユーザー数は8,000人を超え、実際に現場で働いておられる数多くの教員の方にも使っていただいています。\n              ")])])],1):t._e()],1)],1)],1),t._v(" "),o("v-footer",{attrs:{color:"#fffaf0",height:"50vh"}},[o("div",{staticClass:"footer-item"},[t._v("© 2021 Terai Shogo")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.a,VCardTitle:v.b,VCol:m.a,VContainer:_.a,VFooter:y.a,VRow:h.a,VSystemBar:f.a,VTimeline:k.a,VTimelineItem:w.a,VTooltip:x.a})}}]);