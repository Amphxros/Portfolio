(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"003a":function(t,a,e){},"0835":function(t,a,e){},"1ba2":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Resume")]),e("div",{staticClass:"paragraph"},[t._v(" I'm "),e("strong",[t._v("Amparo Rubio")]),t._v(", a game developer near graduating currently living in Madrid, Spain. "),e("br"),t._v("I've been creating games and game dev tools for over 5 years with various technologies and different coding languages. I'm especially comfortable with "),e("b",[t._v(" Unity, C++ and C#")]),t._v(", but I have experience with quite a lot of different technologies. One of my strongest skills is teamwork and planning, as I've used agile methodologies for all of the projects I've participated in. I'm really comfortable with Scrum and Kanban. "),e("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[e("a",{staticClass:"download-link",attrs:{href:"d/Amparo_Rubio_Bellon_-_Unity_Developer.pdf",target:"_blank"}},[e("i",{staticClass:"fa fa-download fa-lg fa-fw"}),t._v(" Descargar como PDF ᴇꜱ")]),e("div",{staticStyle:{clear:"both"}})])]),e("div",{staticClass:"photo"},[e("img",{attrs:{src:"img/avatar.png"}})]),e("div",{staticStyle:{clear:"both"}}),e("div",{staticClass:"full-content"},[e("h2",[t._v("Languages and tools")]),e("div",{staticClass:"skill-set"},[e("h3",[t._v("Programming languages")]),e("div",{staticClass:"skill-set"},[e("div",{staticClass:"skill"},[e("b",[t._v("C#")])]),e("div",{staticClass:"skill"},[e("b",[t._v("C++")])]),e("div",{staticClass:"skill"},[t._v("C")])]),e("div",{staticClass:"skill-set"},[e("div",{staticClass:"skill"},[t._v("Java")]),e("div",{staticClass:"skill"},[t._v("Python")]),e("div",{staticClass:"skill"},[t._v("Lua")])])]),e("div",{staticClass:"skill-set"},[e("h3",[t._v("Gamedev")]),e("div",{staticClass:"skill"},[t._v("Unity 3D")]),e("div",{staticClass:"skill"},[t._v("Photoshop")]),e("div",{staticClass:"skill"},[t._v("Asesprite")])]),e("div",{staticClass:"skill-set"},[e("h3",[t._v("Tools & Frameworks")]),e("div",{staticClass:"skill"},[t._v("GIT")]),e("div",{staticClass:"skill"},[t._v("Visual Studio")]),e("div",{staticClass:"skill"},[t._v("Trello/JIRA")])]),e("div",{staticStyle:{clear:"both"}}),e("h2",[t._v("Experience")]),e("h3",[t._v("🤖 Rockbotic")]),e("h4",[t._v("(2023 - currently)")]),e("h4",[t._v("Robotic teacher")]),e("div",[t._v("Teaching robotic and programming in different schools using different technologies such as arduino, scratch, bitcode... ")]),e("h2",[t._v("Education")]),e("h3",[t._v("Complutense Unversity of Madrid ")]),e("h4",[t._v("(2017-currently)")]),e("h4",[t._v("Game programming degree")]),e("div",[t._v("Game development degree where I made some games and gamedev tools ")]),e("h3",[t._v("🤖 Rockbotic formation bootcamp")]),e("h4",[t._v("(2023)")]),e("h4",[t._v("Robotic teacher preparation")]),e("div",[t._v("Preparation for learning technologies and how to teach kids robotic in a educative way ")]),e("h3",[t._v("Narratech")]),e("h4",[t._v("(2021)")]),e("h4",[t._v(" Quality Assurance and testing in videogames")]),e("div",[t._v("Intesive preparation in collaboration with some game studios and the game development master course to testing their games")]),e("h2",[t._v("Languages")]),e("h3",[t._v("Spanish")]),e("div",[t._v("It's my native language ")]),e("h3",[t._v("English")]),e("div",[t._v("I don't have a certification yet but I took a language inmersion program during all the high school ")]),e("h3",[t._v("French")]),e("div",[t._v(" In a really basic level because I took some classes when I was in high school ")]),e("div",[e("h2",[t._v("About my hobbies")]),t._v(" Besides playing videogames and making them I have a few more hobbies "),e("div",{staticClass:"full-content"},[t._v("I love to read books 📚, my favourite author is Murakami also I love fantasy and manga.")]),e("div",{staticClass:"full-content"},[t._v("I love to watch series 📺, usually animation ones because is really a beautiful media.")]),e("div",{staticClass:"full-content"},[t._v("I like drawing ✏️, since I was little I drew all the time, currently I am drawing in digital with my graphic tablet.")]),e("div",{staticClass:"full-content"},[t._v("I love cooking 🍳, I like to try new recipes and I love to eat, also I think to fully understand different cultures you have to try their food.")]),e("div",{staticClass:"full-content"},[t._v('I love to build things 🔨 , last year I moved to an old house (my current home) and I\'m "repairing" it and making it look cute')])])])])}],s=e("2b0e"),o=s["a"].extend({name:"Resume",components:{}}),r=o,l=(e("e23e"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,"0e1bd4c7",null);a["default"]=c.exports},"1e66":function(t,a,e){"use strict";var i=e("dec8"),n=e.n(i);n.a},"27bb":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"projects-list"},[t._l(t.projects,(function(a){return[e("div",{key:a.id,staticClass:"project-item",class:{wide:a.isWide,high:a.isHigh},on:{click:function(e){return t.showDetails(a)}}},[e("div",{staticClass:"project-item-image",style:{"background-image":"url("+a.iconUrl+")"}}),e("div",{staticClass:"title-bar",style:{"background-color":a.accentColor+"DD"}},[e("div",{staticClass:"title-text"},[t._v(" "+t._s(a.name)+" ")])])])]}))],2),e("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(a){t.showPopup=!1}}})],1)},n=[],s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[t.visible?e("div",[e("div",{staticClass:"overlay"}),e("div",{staticClass:"dialog",style:{"background-color":t.color}},[e("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),e("div",{staticClass:"dialog-close",on:{click:function(a){return t.$emit("close")}}},[e("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),e("div",{staticClass:"dialog-content"},[e("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),e("div",{staticClass:"dialog-bottom"},[e("a",{staticClass:"dialog-close-button",on:{click:function(a){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},r=[],l=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,g=(e("1e66"),e("2877")),h=Object(g["a"])(c,o,r,!1,null,"e66acff8",null),u=h.exports,d=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),p=d,v=(e("5935"),Object(g["a"])(p,i,n,!1,null,"190958aa",null));a["a"]=v.exports},3599:function(t,a,e){"use strict";var i=e("da77"),n=e.n(i);n.a},"416f":function(t,a,e){},"4d97":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Games")]),e("div",{staticStyle:{"margin-bottom":"30px"}}),e("ProjectsList",{attrs:{projects:t.projects}}),t._m(0)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"margin-top":"20px"}},[t._v(" There is more to see on "),e("a",{attrs:{target:"_blank",href:"https://amphxros.itch.io/"}},[t._v("my itchio")])])}],s=e("2b0e"),o=e("27bb"),r=e("983d"),l=[new r["a"]("project-1","Nonograms","img/projects/project-2-icon.png",'\n    <div class="paragraph">\n     <strong>Nonograms</strong> is a mobile game made in <b>Android Studio (Java)</b> replicating the original game.\n    \n     Currently on progress. \n     <div class="paragraph">\n    <u><b> Main features :</b></u>\n     <ul>\n     <li><u> Ad </u> integration: Banner and rewarded ads</li>\n     <li><u> Notification </u> integration</li>\n     <li>Custom <u>palettes</u></li>\n     <li>Encripted saving data</li>\n     <li>Loaded and procedural levels </li>\n     <li>Sensor integration: Using <u>accelerometer</u> to suffle in random levels</li>\n   \n     </ul>\n\n </div>   \n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/project-2-icon.png"/>\n        <img class="pc-screenshot" src="img/projects/nonograms_palettes.png"/>\n        <img class="pc-screenshot" src="img/projects/nonograms_frog.png"/>\n        <img class="pc-screenshot" src="img/projects/shop.png"/>\n    </div>\n    \n    <div class="notice">\n       You can see the source code in <a href="https://github.com/Amphxros/VDM" target="_blank">github</a>.\n    </div>\n \n    ',"#344E41",!0,!0),new r["a"]("project-2","3 Horas","img/projects/project-1-icon.png",'\n    <div class="paragraph">\n        <strong>3 Horas</strong> is unity game made during the SGDIII game jam where you recruit humans to fight robots.\n        <br/>Image by <a target="_blank" href="https://img.itch.zone/aW1hZ2UvMTIxMjc4NS83MDc2Nzg2LnBuZw==/original/WUvZ0Q.png">Amparo Rubio</a>.\n    </div>\n\n\n    <div class="paragraph">\n    <div class="notice">\n       You can play it on <a href="https://blackgamesdev.itch.io/3-horas" target="_blank">itch.io</a>.\n    </div>\n    <div class="paragraph center">\n    <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMTIxMjc4NS83MDc2Nzg3LnBuZw==/original/SAB46w.png"  />\n    <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMTIxMjc4NS83MDc2Nzg5LnBuZw==/original/0sDJxS.png" />\n    <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMTIxMjc4NS83MDc2Nzg4LnBuZw==/original/JALRK6.png" />\n    </div>\n    ',"#5a78af"),new r["a"]("project-8","100 seconds in the sea","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n        <strong>100 seconds in the sea</strong> is an unity game made during the indie spain game jam where you have to survive 100 seconds avoiding sea creatures, similar to disc room.\n        \n        <p>It\'s my first almost solo developing (I was with my partner who didn\'t know anything about unity).</p>\n        <br/>Image by me</a>.\n        <div class="paragraph center">    \n        <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMTY4MDA4NS8xMDEyODg3Mi5qcGc=/original/Nit%2F6I.jpg"  />\n        <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMTY4MDA4NS8xMDEyODg3My5qcGc=/original/G11V22.jpg.jpg"  />\n        </div>\n    </div>\n\n\n    <div class="paragraph">\n    <div class="notice">\n       You can play it on <a href="https://amphxros.itch.io/100-seconds-in-the-sea" target="_blank">itch.io</a>.\n    </div>\n    ',"#0298aa"),new r["a"]("project-3","Fighter Traighter","img/projects/project-3-icon.png",'\n    <div class="paragraph">\n        <strong>Fighter Traighter</strong> is an arcade fighter made with <b>SDL2, Box2D and C++</b>.\n        <br/>Image by <a target="_blank"> me</a>.\n    </div>\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li><u>ecs system</u></li>\n        <li>Handling multiple controllers (gamepads)</li>\n        <li>Very basic AI</li>\n        </ul>\n    </div>\n\n    \n    <div class="paragraph">\n        <div class="notice">\n        You can <u>download</u> the game on <a href="https://amphxros.itch.io/fighter-traighter" target="_blank">itch.io</a> or in the <a href="https://moruyankiifighter.github.io/FighterTraighter/" target="_blank">webpage</a>.\n        Source code is available on <a href="https://github.com/MoruyankiiFighter/FighterTraighter" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    \n    </div>\n    ',"#383838"),new r["a"]("project-4","APTA","img/projects/project-4-icon.png",'\n    <div class="paragraph">\n    <strong>APTA</strong> is a serious game about encouraging women to study computer science by showing real representation and questioning stereotypes made with Unity.\n    </div>\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNzQzMjg3LzQyNDIzODcucG5n/original/cn%2BMt2.png" alt="Eugeneable Screenshot" />\n        <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNzQzMjg3LzQyNDIzODgucG5n/original/nvfGGG.png" alt="Eugeneable Screenshot" />\n        <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNzQzMjg3LzQyNDIzOTIucG5n/original/WrH22x.png" alt="Eugeneable Screenshot" />\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n    Windows and Linux build available on <a href="https://amphxros.itch.io/apta" target="_blank">itch.io</a>.\n    </div>\n</div>\n  ',"#e80fb7")],c=s["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),g=c,h=e("2877"),u=Object(h["a"])(g,i,n,!1,null,null,null);a["default"]=u.exports},"4e63":function(t,a,e){"use strict";var i=e("e9cc"),n=e.n(i);n.a},5866:function(t,a,e){"use strict";var i=e("003a"),n=e.n(i);n.a},5935:function(t,a,e){"use strict";var i=e("416f"),n=e.n(i);n.a},"7c58":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Engines and tools")]),e("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" And here are tools, engines and in general, anything that is not a game. ")]),e("ProjectsList",{attrs:{projects:t.projects}})],1)},n=[],s=e("2b0e"),o=e("27bb"),r=e("983d"),l=[new r["a"]("project-7","Aegis Engine","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n      <strong>Aegis Engine</strong> is the biggest project I\'ve worked on.\n      It\'s a custom 3D engine built from the ground up available on Windows and Linux.\n      It\'s written on C++ and LUA. Users are able to write the game on LUA in a similar way it\'s on Unity and they are able to make their games with the assets they desire.\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Handling multilingual comunication (C++ to Lua)</li>\n            <li>Creation of games using just Lua</li>\n            \n            </ul>\n\n            <div class="notice">\n            Source code available on <a href="https://github.com/Proyecto3Grupo02/Aegis" target="_blank">Github</a>.\n            </div>\n        </div>\n    ',"#115210",!0,!0),new r["a"]("project-11","Unity Telemetry System","img/projects/project-11-icon.png",'\n    <div class="paragraph">\n    Custom telemetry system made for any system but mainly Unity.\n    It\'s imported through a .dll file to your project and it\'s able to send data to many different endpoints.\n    \n    <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Persistence of events along the time</li>\n           \n            </ul>\n        </div>\n\n    <div class="notice">\n    Source code available on <a href="https://github.com/Agusmoure/Telemetry" target="_blank">Github</a>.\n    </div>\n\n    ',"#111121",!1,!1),new r["a"]("project-10","TASK","img/projects/project-11-icon.png",'\n    <div class="paragraph">\n      <strong> TASK </strong> is a unity tool for recording and replaying input in the editor in a similar way to a TAS.\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Custom input system for keyboard and gamepads</li>\n            <li>Serialiation of input along the time</li>\n            <li> </li>\n            </ul>\n        </div>\n         <div class="notice">\n    Source code available on <a href="https://github.com/Amphxros/TASK" target="_blank">Github</a>.\n    </div>\n    ',"#111121",!1,!1),new r["a"]("project-8","Trails","img/projects/project-11-icon.png",'\n    <div class="paragraph">\n      <strong>Trail </strong> is a unity tool for creating behaviour trees using a visual editor in Unity.\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>using existing trees as subtrees</li>\n            \n            </ul>\n        </div>\n    ',"#111121",!1,!1)],c=s["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),g=c,h=e("2877"),u=Object(h["a"])(g,i,n,!1,null,null,null);a["default"]=u.exports},"8cdb":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"http-404"},[t._v("404 Sorry not found 🙈")])},n=[],s=(e("4e63"),e("2877")),o={},r=Object(s["a"])(o,i,n,!1,null,"0525996e",null);a["default"]=r.exports},"983d":function(t,a,e){"use strict";var i=function(){function t(t,a,e,i,n,s,o){void 0===n&&(n="#000000"),void 0===s&&(s=!1),void 0===o&&(o=!1),this.id=t,this.name=a,this.htmlDescription=i,this.iconUrl=e,this.isHigh=s,this.isWide=o,this.accentColor=n}return t}();a["a"]=i},b8fa:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Let's get in touch")]),e("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),e("br"),t._v("Feel free to contact me about any opportunity, or just to chat about cooking, kittens or anything else.")]),e("ul",[e("li",[e("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),e("a",{attrs:{href:"mailto:ampxrubio@gmail.com",target:"_blank"}},[t._v("ampxrubio@gmail.com")])]),e("li",[e("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),e("a",{attrs:{href:"https://www.linkedin.com/in/amparo-rubio-bellon/",target:"_blank"}},[t._v("linkedin.com/amparo-rubio-bellon")])]),e("li",[e("i",{staticClass:"fa fa-github fa-lg fa-fw"}),e("a",{attrs:{href:"https://github.com/amphxros",target:"_blank"}},[t._v("github.com/amphxros")])]),e("li",[e("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),e("a",{attrs:{href:"https://amphxros.itch.io/",target:"_blank"}},[t._v("amphxros.itch.io")])])])])}],s=(e("3599"),e("2877")),o={},r=Object(s["a"])(o,i,n,!1,null,"705f3282",null);a["default"]=r.exports},da77:function(t,a,e){},dec8:function(t,a,e){},e23e:function(t,a,e){"use strict";var i=e("0835"),n=e.n(i);n.a},e9cc:function(t,a,e){},f820:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"margin-bottom":"80px"}},[e("h1",[t._v("Hello world!")]),e("div",{staticClass:"paragraph"},[t._m(0),e("div",{staticStyle:{"margin-top":"10px"}},[t._v(" In my free time I like to play videogames,play board games too, watching animation series and paint")]),e("div",{staticStyle:{"margin-top":"20px"}},[t._v("I've worked on "),e("router-link",{attrs:{to:"/game-projects"}},[t._v("games")]),t._v(", on "),e("router-link",{attrs:{to:"/other-projects"}},[t._v(" tools")]),t._v(", and took part in a few game jams as well.Check my "),e("router-link",{attrs:{to:"/resume"}},[t._v("resume")]),t._v("to know more about")],1),e("div",{staticStyle:{"margin-top":"40px"}},[t._v("I'm "),e("strong",[t._v("currently looking for a job")]),t._v(" as a game programmer or tool programmer. You can reach me at "),e("a",{attrs:{href:"mailto:ampxrubio@gmail.com"}},[t._v("ampxrubio@gmail.com")]),t._v(" or "),e("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(".")],1)]),t._m(1),e("div",{staticStyle:{clear:"both"}})])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" My name is "),e("b",[t._v(" Amparo Rubio ")]),t._v(", game programming student currently finishing it's Bachelor's degree at Complutense University of Madrid. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"photo"},[e("img",{attrs:{src:"img/avatar.png",alt:"Avatar of John"}})])}],s=(e("5866"),e("2877")),o={},r=Object(s["a"])(o,i,n,!1,null,"1e3d289e",null);a["default"]=r.exports}}]);
//# sourceMappingURL=about.5f254e18.js.map