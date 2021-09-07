(function(e){function a(a){for(var o,s,i=a[0],u=a[1],d=a[2],c=0,h=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(a);while(h.length)h.shift()();return n.push.apply(n,d||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(n.splice(a--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},n=[];function s(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(t,o,function(a){return e[a]}.bind(null,o));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/Jeopardy_Game/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var l=u;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("TakeHome")],1)},n=[],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"wrapper"},[t("header",[t("h1",{staticClass:"title"},[e._v("Jeopardy!")]),t("div",{staticClass:"score"},[e._v(" score: "),t("span",{staticClass:"number"},[e._v("$"+e._s(e.totalScore))])])]),t("div",{staticClass:"container"},e._l(e.categories,(function(a,o){return t("Category",{key:o,staticClass:"category",attrs:{name:a,items:e.getQuestionByCategory(a)},on:{openQuestion:e.openQuestion}})})),1),t("div",{staticClass:"question-board",class:{isQuestionOpen:e.isQuestionOpen}},[t("div",{staticClass:"question-box"},[t("h2",{staticClass:"question"},[e._v(e._s(e.question))]),t("div",{staticClass:"answers"},[e._l(e.answers,(function(a,o){return t("label",{key:o,staticClass:"answer-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.preAnswer,expression:"preAnswer"}],attrs:{type:"radio",id:a},domProps:{value:a,checked:e._q(e.preAnswer,a)},on:{change:function(t){e.preAnswer=a}}}),t("span",{staticClass:"container"},[e._v(e._s(a))]),t("span",{staticClass:"checkmark"})])})),t("button",{on:{click:function(a){return e.submitAnswer()}}},[e._v("Answer")])],2)])]),t("div",{staticClass:"result-board",class:{isResultOpen:e.isResultOpen}},[t("div",{staticClass:"info"},[t("div",{staticClass:"status",class:{pass:e.valid}},[t("i",{staticClass:"far fa-smile"}),t("h3",[e._v("Good Job!")])]),t("div",{staticClass:"status",class:{fail:!e.valid}},[t("i",{staticClass:"far fa-frown"}),t("h3",[e._v("Incorrect")])]),t("div",{staticClass:"question"},[e._v(e._s(this.question))]),t("div",{staticClass:"answer"},[e._v(" Answer is: "),t("span",{staticClass:"hightlight"},[e._v(e._s(this.answer))])])])])])},i=[],u=(t("4de4"),t("d81d"),t("5530")),d=(t("99af"),t("7db0"),t("caad"),t("fb6a"),t("d3b7"),t("6062"),t("2532"),t("3ca3"),t("ddb0"),t("2909")),l=t("7842"),c=["Febtober!","I'm Batman","I don't know where it went, I'm confused.","Threeve. A combination of 3 and 5 and you wagered Texas."],h=function(e){var a=parseInt(800*Math.random()),t=new Promise((function(t){return setTimeout((function(){return t(e)}),a)}));return t},y={computed:{categories:function(){return Object(d["a"])(new Set(l.map((function(e){var a=e.category;return a})))).slice(0,5)}},methods:{checkAnswer:function(e,a){var t=l.find((function(a){return a.question===e}));return!!t&&h(t.answer===a)},fetchQuestions:function(){var e=this,a=l.filter((function(a){var t=a.category;return e.categories.includes(t)})).map((function(e){var a=e.category,t=e.value,o=e.question,r=e.answer;return{category:a,value:t,question:o,answers:[].concat(c,[r])}}));return h(a)}}},w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"category"},[t("div",{staticClass:"name"},[e._v(e._s(e.name))]),t("ul",{staticClass:"cards"},e._l(e.items,(function(a,o){return t("li",{key:o},[t("div",{staticClass:"card-inner",class:{hidden:a.flag},on:{click:function(t){return e.openQuestion(a)}}},[t("div",{staticClass:"card-front"},[e._v(e._s(a.value))]),t("div",{staticClass:"card-back"},[e._v(e._s(a.value))])])])})),0)])},p=[],m={name:"Category",props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]}}},methods:{openQuestion:function(e){this.$emit("openQuestion",e)}}},f=m,v=(t("c751"),t("2877")),b=Object(v["a"])(f,w,p,!1,null,null,null),_=b.exports,g={name:"TakeHome",mixins:[y],components:{Category:_},data:function(){return{data:[],isQuestionOpen:!1,question:"",preAnswer:"",answers:[],answer:"",valid:!1,isResultOpen:!1,totalScore:0,score:""}},created:function(){var e=this;this.fetchQuestions().then((function(a){e.data=a.map((function(e){return Object(u["a"])(Object(u["a"])({},e),{},{flag:!1})}))}))},methods:{getQuestionByCategory:function(e){return this.data.filter((function(a){return a.category===e}))},openQuestion:function(e){this.isQuestionOpen=!0,this.question=e.question,this.score=e.value,this.answers=e.answers;var a=this.answers;this.answer=a[a.length-1],e.flag=!0},submitAnswer:function(){var e=this.score.substring(1),a=parseInt(e);this.isQuestionOpen=!1,this.isResultOpen=!0,this.preAnswer===this.answer?(this.valid=!0,this.totalScore+=a):(this.valid=!1,this.totalScore-=a,this.totalScore<=0&&(this.totalScore=0)),this.closeResult(),this.preAnswer=""},closeResult:function(){var e=this;setTimeout((function(){e.isResultOpen=!1}),2e3)}}},S=g,T=(t("abc2"),Object(v["a"])(S,s,i,!1,null,"34e92cbb",null)),E=T.exports,A={name:"App",components:{TakeHome:E}},C=A,O=(t("5c0b"),Object(v["a"])(C,r,n,!1,null,null,null)),q=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var o=t("9c0c"),r=t.n(o);r.a},7842:function(e){e.exports=JSON.parse('[{"category":"\\"I\\" LADS","air_date":"2000-12-18","question":"\'This punk rock hitmaker heard here has had numerous hits on both sides of the Atlantic\'","value":"$100","answer":"Billy Idol","round":"Jeopardy!","show_number":"3751"},{"category":"\\"I\\" LADS","air_date":"2000-12-18","question":"\'Czar at 17, he was famous for extraordinary sadism & cruelty, even as a boy\'","value":"$200","answer":"Ivan the Terrible","round":"Jeopardy!","show_number":"3751"},{"category":"\\"I\\" LADS","air_date":"2000-12-18","question":"\'Nudge, nudge, wink, wink!  This man seen here starred on a classic British comedy show\'","value":"$300","answer":"Eric Idle","round":"Jeopardy!","show_number":"3751"},{"category":"\\"I\\" LADS","air_date":"2000-12-18","question":"\'His is the first & longest book of the Bible\'s major prophets\'","value":"$400","answer":"Isaiah","round":"Jeopardy!","show_number":"3751"},{"category":"\\"I\\" LADS","air_date":"2000-12-18","question":"\'This auto exec\'s autobiography is one of the bestselling nonfiction works in publishing history\'","value":"$500","answer":"Lee Iacocca","round":"Jeopardy!","show_number":"3751"},{"category":"1994 FILMS","air_date":"2000-07-19","question":"\'Quentin Tarantino directed this film & also had a bit role as Jimmy of Toluca Lake\'","value":"$100","answer":"Pulp Fiction","round":"Jeopardy!","show_number":"3673"},{"category":"1994 FILMS","air_date":"2000-07-19","question":"\'As mad bomber Howard Payne in this film, Dennis Hopper planted a bomb on an L.A. area transit bus\'","value":"$200","answer":"Speed","round":"Jeopardy!","show_number":"3673"},{"category":"1994 FILMS","air_date":"2000-07-19","question":"\'Jean Vander Pyl, who played Wilma in the original cartoon series, played Mrs. Feldspar in this movie adaptation\'","value":"$300","answer":"The Flintstones","round":"Jeopardy!","show_number":"3673"},{"category":"1994 FILMS","air_date":"2000-07-19","question":"\'Containing the hit \\"Can You Feel The Love Tonight\\", it was Disney\'s first animated feature not based on an existing story\'","value":"$400","answer":"The Lion King","round":"Jeopardy!","show_number":"3673"},{"category":"1994 FILMS","air_date":"2000-07-19","question":"\'In this film Martin Scorsese says the TV audience wants \\"To  watch the money\\"\'","value":"$800","answer":"Quiz Show","round":"Jeopardy!","show_number":"3673"},{"category":"ARCHITECTS","air_date":"2000-07-19","question":"\'Minoru Yamasaki reached new heights with this New York City complex\'","value":"$100","answer":"World Trade Center","round":"Jeopardy!","show_number":"3673"},{"category":"ARCHITECTS","air_date":"2000-07-19","question":"\'William Pereira erected his Transamerica \\"Pyramid\\" in this city\'","value":"$200","answer":"San Francisco","round":"Jeopardy!","show_number":"3673"},{"category":"ARCHITECTS","air_date":"2000-07-19","question":"\'Charles Bulfinch, who contributed to the Capitol in Washington, D.C., designed this city\'s state house on Beacon Hill\'","value":"$300","answer":"Boston","round":"Jeopardy!","show_number":"3673"},{"category":"ARCHITECTS","air_date":"2000-07-19","question":"\'Dallas-Fort Worth Airport architect Gyo Obata helped design this Smithsonian museum\'","value":"$400","answer":"Air & Space Museum","round":"Jeopardy!","show_number":"3673"},{"category":"ARCHITECTS","air_date":"2000-07-19","question":"\'Louis Skidmore designed the secret atomic site that became this Tennessee town\'","value":"$500","answer":"Oak Ridge","round":"Jeopardy!","show_number":"3673"},{"category":"BACKWORDS","air_date":"2000-12-18","question":"\'We\'ll look smart in these vehicles that returned to London in 1999\'","value":"$100","answer":"Trams (smart)","round":"Jeopardy!","show_number":"3751"},{"category":"BACKWORDS","air_date":"2000-12-18","question":"\'Ed leaves pools of water on the carpet when he comes in from sailing this boat\'","value":"$200","answer":"Sloop (pools)","round":"Jeopardy!","show_number":"3751"},{"category":"BACKWORDS","air_date":"2000-12-18","question":"\'You\'d be naive to think you can make bottled water that\'s more popular than this\'","value":"$300","answer":"Evian (naive)","round":"Jeopardy!","show_number":"3751"},{"category":"BACKWORDS","air_date":"2000-12-18","question":"\'Aye, lass, I\'ll wed thee ere this has dried on the fields\'","value":"$400","answer":"Dew (wed)","round":"Jeopardy!","show_number":"3751"},{"category":"BACKWORDS","air_date":"2000-12-18","question":"\'You know so much about policy, you qualify as this\'","value":"$500","answer":"Wonk (know)","round":"Jeopardy!","show_number":"3751"},{"category":"FLAGS OF THE WORLD","air_date":"2000-07-19","question":"\'It\'s the kingdom whose flag is seen here (Union Jack)\'","value":"$100","answer":"Great Britain/England","round":"Jeopardy!","show_number":"3673"},{"category":"FLAGS OF THE WORLD","air_date":"2000-07-19","question":"\'Seen here is the flag of this nation (the home of Bollywood)\'","value":"$200","answer":"India","round":"Jeopardy!","show_number":"3673"},{"category":"FLAGS OF THE WORLD","air_date":"2000-07-19","question":"\'Andy Garcia is a native of this country whose flag is seen here\'","value":"$300","answer":"Cuba","round":"Jeopardy!","show_number":"3673"},{"category":"FLAGS OF THE WORLD","air_date":"2000-07-19","question":"\'In the 1990s, this nation whose flag is seen here moved its seat of government to a different city\'","value":"$400","answer":"Germany","round":"Jeopardy!","show_number":"3673"},{"category":"FLAGS OF THE WORLD","air_date":"2000-07-19","question":"\'This Mediterranean country whose flag is seen here is \\"The Word\\"\'","value":"$500","answer":"Greece","round":"Jeopardy!","show_number":"3673"},{"category":"FOREWORDS","air_date":"2000-12-18","question":"\'\\"Conrad begins (and ends) Marlow\'s journey... on the Thames, on the yawl, Nellie\\", says the foreword to this novel\'","value":"$100","answer":"Heart of Darkness","round":"Jeopardy!","show_number":"3751"},{"category":"FOREWORDS","air_date":"2000-12-18","question":"\'Part 2 \\"is Lilliput in reverse, but...also offers some of\\" his \\"fiercest assaults upon the behavior of\\" his countrymen\'","value":"$200","answer":"Jonathan Swift","round":"Jeopardy!","show_number":"3751"},{"category":"FOREWORDS","air_date":"2000-12-18","question":"\'She said that her husband Frank O\'Connor was the fuel that kept her spirited while she wrote \\"The Fountainhead\\"\'","value":"$300","answer":"Ayn Rand","round":"Jeopardy!","show_number":"3751"},{"category":"FOREWORDS","air_date":"2000-12-18","question":"\'One edition calls this Darwin opus one of \\"the most readable and approachable\\" of revolutionary scientific works\'","value":"$400","answer":"The Origin of Species","round":"Jeopardy!","show_number":"3751"},{"category":"GENERAL SCIENCE","air_date":"2000-07-19","question":"\'This white, glossy coating on your teeth is the hardest substance in the human body\'","value":"$100","answer":"Enamel","round":"Jeopardy!","show_number":"3673"},{"category":"GENERAL SCIENCE","air_date":"2000-07-19","question":"\'The time it takes for 50% of the atoms to decay in a radioactive substance is called this\'","value":"$200","answer":"Half-life","round":"Jeopardy!","show_number":"3673"},{"category":"GENERAL SCIENCE","air_date":"2000-07-19","question":"\'While compounds of this element are added to table salt, in its pure form it\'s quite poisonous\'","value":"$300","answer":"Iodine","round":"Jeopardy!","show_number":"3673"},{"category":"GENERAL SCIENCE","air_date":"2000-07-19","question":"\'The \\"super\\" class of these stars, the largest known, includes Antares & Betelgeuse\'","value":"$400","answer":"Red giants","round":"Jeopardy!","show_number":"3673"},{"category":"GENERAL SCIENCE","air_date":"2000-07-19","question":"\'On the pH scale, a pH of 7 indicates this type of solution\'","value":"$500","answer":"Neutral","round":"Jeopardy!","show_number":"3673"},{"category":"GETTING POSSESSIVE","air_date":"2000-07-19","question":"\'This bovine took the rap for the disastrous fire of October 8, 1871\'","value":"$100","answer":"Mrs. O\\\\\'Leary\\\\\'s cow","round":"Jeopardy!","show_number":"3673"},{"category":"GETTING POSSESSIVE","air_date":"2000-07-19","question":"\'At 14,140 feet, this Rocky Mountain peak discovered in 1806 is one of Colorado\'s highest\'","value":"$200","answer":"Pike\\\\\'s Peak","round":"Jeopardy!","show_number":"3673"},{"category":"GETTING POSSESSIVE","air_date":"2000-07-19","question":"\'While one creation slept, God took this to make Eve\'","value":"$300","answer":"Adam\\\\\'s rib","round":"Jeopardy!","show_number":"3673"},{"category":"GETTING POSSESSIVE","air_date":"2000-07-19","question":"\'You\'ll find this triangular island about 4 miles off the southeast coast of Massachusetts\'","value":"$400","answer":"Martha\\\\\'s Vineyard","round":"Jeopardy!","show_number":"3673"},{"category":"GETTING POSSESSIVE","air_date":"2000-07-19","question":"\'In Exodus, this was thrown down before Pharaoh at Moses\' instruction\'","value":"$500","answer":"Aaron\\\\\'s rod (turned into a snake)","round":"Jeopardy!","show_number":"3673"},{"category":"ROYAL FEMALE NICKNAMES","air_date":"2000-12-18","question":"\'Prime Minister Tony Blair dubbed her \\"The People\'s Princess\\"\'","value":"$100","answer":"Princess Diana","round":"Jeopardy!","show_number":"3751"},{"category":"ROYAL FEMALE NICKNAMES","air_date":"2000-12-18","question":"\'She was \\"The Untamed Heifer\\" & \\"The Virgin Queen\\"\'","value":"$200","answer":"Elizabeth I","round":"Jeopardy!","show_number":"3751"},{"category":"ROYAL FEMALE NICKNAMES","air_date":"2000-12-18","question":"\'Mark Antony called her \\"The Queen of Queens\\"\'","value":"$300","answer":"Cleopatra","round":"Jeopardy!","show_number":"3751"},{"category":"ROYAL FEMALE NICKNAMES","air_date":"2000-12-18","question":"\'The 19th century\'s \\"Widow of Windsor\\"\'","value":"$400","answer":"Queen Victoria","round":"Jeopardy!","show_number":"3751"},{"category":"ROYAL FEMALE NICKNAMES","air_date":"2000-12-18","question":"\'\\"The Catholic\\" of 15th century Spain\'","value":"$500","answer":"Queen Isabella","round":"Jeopardy!","show_number":"3751"},{"category":"THE EYES HAVE IT","air_date":"2000-07-19","question":"\'A student, or a minor in Roman law\'","value":"$100","answer":"Pupil","round":"Jeopardy!","show_number":"3673"},{"category":"THE EYES HAVE IT","air_date":"2000-07-19","question":"\'A blow with a whip\'","value":"$200","answer":"Lash","round":"Jeopardy!","show_number":"3673"},{"category":"THE EYES HAVE IT","air_date":"2000-07-19","question":"\'A hollow area that holds a light bulb\'","value":"$300","answer":"Socket","round":"Jeopardy!","show_number":"3673"},{"category":"THE EYES HAVE IT","air_date":"2000-07-19","question":"\'Flower seen here (that fits the category)\'","value":"$400","answer":"Iris","round":"Jeopardy!","show_number":"3673"},{"category":"THE EYES HAVE IT","air_date":"2000-07-19","question":"\'People say these are what you need to make it in Hollywood\'","value":"$500","answer":"Contacts","round":"Jeopardy!","show_number":"3673"},{"category":"TRAVEL & TOURISM","air_date":"2000-12-18","question":"\'The Cinderella Castle Mystery Tour is a highlight of this Asian city\'s Disneyland\'","value":"$100","answer":"Tokyo","round":"Jeopardy!","show_number":"3751"},{"category":"TRAVEL & TOURISM","air_date":"2000-12-18","question":"\'The home of silk merchant Jim Thompson, who disappeared in 1967, is a tourist attraction in this Thai city\'","value":"$200","answer":"Bangkok","round":"Jeopardy!","show_number":"3751"},{"category":"TRAVEL & TOURISM","air_date":"2000-12-18","question":"\'We\'re not stringing you along: this capital of the Czech Republic is famous for its puppet theatres\'","value":"$300","answer":"Prague","round":"Jeopardy!","show_number":"3751"},{"category":"TRAVEL & TOURISM","air_date":"2000-12-18","question":"\'Jomo Kenyatta International Airport serves this world capital\'","value":"$500","answer":"Nairobi, Kenya","round":"Jeopardy!","show_number":"3751"},{"category":"TRAVEL & TOURISM","air_date":"2000-12-18","question":"\'Andrea Palladio\'s 1554 book on \\"The Antiquities of\\" this city was the standard guidebook for some 200 years\'","value":"$500","answer":"Rome","round":"Jeopardy!","show_number":"3751"},{"category":"TV ACTORS & ROLES","air_date":"2000-12-18","question":"\'Once Tommy Mullaney on \\"L.A. Law\\", John Spencer now plays White House chief of staff Leo McGarry on this series\'","value":"$100","answer":"The West Wing","round":"Jeopardy!","show_number":"3751"},{"category":"TV ACTORS & ROLES","air_date":"2000-12-18","question":"\'Barbra Streisand knows he played Lt. Col. Bill \\"Raider\\" Kelly on \\"Pensacola: Wings of Gold\\"\'","value":"$200","answer":"James Brolin","round":"Jeopardy!","show_number":"3751"},{"category":"TV ACTORS & ROLES","air_date":"2000-12-18","question":"\'(Hi, I\'m Wallace Langham)  I played Don Kirshner in VH1\'s TV movie about this quartet who sang \\"Daydream Believer\\"\'","value":"$300","answer":"The Monkees","round":"Jeopardy!","show_number":"3751"},{"category":"TV ACTORS & ROLES","air_date":"2000-12-18","question":"\'Teri Hatcher looked \\"shipshape\\" as one of the singing \\"mermaids\\" who jumped on board this cruisin\' series in 1985\'","value":"$400","answer":"The Love Boat","round":"Jeopardy!","show_number":"3751"},{"category":"TV ACTORS & ROLES","air_date":"2000-12-18","question":"\'On \\"Saturday Night Live\\", he\'s famous for playing Craig the Cheerleader, Janet Reno & moi\'","value":"$500","answer":"Will Ferrell","round":"Jeopardy!","show_number":"3751"}]')},"8ad7":function(e,a,t){},"8cc3":function(e,a,t){},"9c0c":function(e,a,t){},abc2:function(e,a,t){"use strict";var o=t("8cc3"),r=t.n(o);r.a},c751:function(e,a,t){"use strict";var o=t("8ad7"),r=t.n(o);r.a}});
//# sourceMappingURL=app.9c583d30.js.map