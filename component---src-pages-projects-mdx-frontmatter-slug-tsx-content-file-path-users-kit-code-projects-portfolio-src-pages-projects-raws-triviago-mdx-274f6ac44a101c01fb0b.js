"use strict";(self.webpackChunkkit_s_portfolio=self.webpackChunkkit_s_portfolio||[]).push([[141,660],{6410:function(e,t,n){function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{ah:function(){return c}});var r=n(7294);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=r.createContext({});function c(e){var t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):o(o({},t),e)}),[t,e])}},6524:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var l=n(6410),r=n(7294),a=function(e){return r.createElement("div",{className:"index-module--tableWrapper--f67ff"},r.createElement("table",{className:"index-module--styledTable--59a0b"},r.createElement("thead",null,r.createElement("tr",null,e.headerRow&&e.headerRow.map((function(e){return r.createElement("th",null,e)})))),r.createElement("tbody",null,e.rows&&e.rows.map((function(e){return r.createElement("tr",null,e.map((function(e){return new RegExp("cloudinary").test(e)?r.createElement("td",null,r.createElement("img",{src:e})):r.createElement("td",null,e)})))})),e.tallyRow&&e.tallyRow.map((function(e){return r.createElement("tr",{className:"index-module--activeRow--61881"},e)})))))};function o(e){var t=Object.assign({h3:"h3",p:"p",strong:"strong",code:"code",a:"a",h4:"h4",ul:"ul",li:"li",em:"em",pre:"pre",ol:"ol"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"Project Overview"),"\n",r.createElement(t.p,null,"My friends and I enjoy puzzle hunts and knowing lots of random trivia is usually helpful. This made me think of creating Triviago partly as a training tool, partly as a fun side project, and partly as a way to explore newer frontend technologies."),"\n",r.createElement(t.p,null,"In the end, the game has 3 'game modes':"),"\n",r.createElement(a,{headerRow:["Feeling Lucky","Normal Quiz","Sudden Death"],rows:[["https://res.cloudinary.com/kiittsunne/video/upload/e_loop:10,br_3564k,c_scale,f_gif,h_600,q_100/v1665656903/2022-10-13_18.04.00_n3blah.gif","https://res.cloudinary.com/kiittsunne/video/upload/e_loop:10,br_3564k,c_scale,f_gif,h_600,q_100/v1665656903/2022-10-13_18.03.55_yf0ttb.gif","https://res.cloudinary.com/kiittsunne/video/upload/e_loop:10,br_3564k,c_scale,f_gif,h_600,q_100/v1665656903/2022-10-13_18.03.46_jonlba.gif"],["Slot machine tiles represent themes and 12 questions from each unique theme will be fetched","Choose multiple categories, set difficulty and limit number of questions","Player gets 30 hard questions, 10s to answer each question and lose lives if wrong/ no answer"]]}),"\n",r.createElement("hr"),"\n",r.createElement(t.h3,null,"Developer Installation & Build"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Start Vite Developer Server"),": ",r.createElement(t.code,null,"npm run dev")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Build Production"),": ",r.createElement(t.code,null,"npm run build")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,r.createElement(t.a,{href:"https://vitejs.dev/guide/static-deploy.html#github-pages"},"Deployment Resources"))),"\n",r.createElement("hr"),"\n"," ","\n",r.createElement(t.h3,null,"Retrospective: Process Notes, Key Learning Points, Future Plans"),"\n",r.createElement(t.h4,null,"Process notes:"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"1. ",r.createElement(t.a,{href:"https://www.youtube.com/watch?v=bAJlYgeovlg"},"WDS React/Typescript multiselect component tutorial"))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Followed along and then rebuilt the component from memory/ by feel for this project"),"\n",r.createElement(t.li,null,"Differences:","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"WDS used Bootstrap, I rewrote css using Tailwind."),"\n",r.createElement(t.li,null,"Data types also had to be redefined to accommodate api params submission"),"\n"),"\n"),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"2. ",r.createElement(t.a,{href:"https://www.youtube.com/watch?v=F2JCjVSZlG0"},"FreeCodeCamp React/Typescript quiz app"))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,'Similar to WDS selector tutorial, I originally coded along. Built "Normal Quiz" section from memory/feel.'),"\n",r.createElement(t.li,null,"Differences:","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"FCC used a different trivia api & styled-components."),"\n",r.createElement(t.li,null,"I expanded on the base project with the SlotMachine and SuddenDeath quiz types."),"\n"),"\n"),"\n"),"\n",r.createElement(t.h4,null,"Reverse engineering code:"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"1. ",r.createElement(t.a,{href:"https://medium.com/@victortoschi/how-to-create-a-slot-machine-animation-with-css-and-javascript-9073ab9db9ea"},"Victor Toschi's vanilla DOM-Manipulation slot machine"))),"\n",r.createElement(t.p,null,"I didn't read the Medium article, but focused on his ",r.createElement(t.a,{href:"https://codepen.io/toschivictor/pen/JjNZjEj"},"Codepen"),". Took about 1h to fully understand and test what his JS logic was doing, then rewrote it in React."),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"Learning Points:")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Got familiar with useRef: because my implementation still relies on CSS animations rather than state manipulation, could not rely on ",r.createElement(t.code,null,"useState")," to capture and send information to API function call. Used useRef instead to capture data from DOM without re-rendering."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Challenges: working with HTML DOM Object properties and Typescript was an interesting challenge. Previously without typechecking, I didn't think twice about doing something like the below. But with TS i was more mindful about optionally chaining properties."),"\n"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},'// before:\nonTransitionEnd={() => {\n\n    const last = document.getElementById("doorOne")?.lastChild.id;\n    // `.id` would throw err because it\'s not a guaranteed property\n\n    // setting useRef\n    tagInputs.current.push(`${last}`);\n}}\n\n//after:\nonTransitionEnd={() => {\n\n    const nodes = document.getElementById("doorOne")?.children;\n\n    const last = nodes && nodes[nodes.length - 1]?.id;\n\n    // setting useRef\n    tagInputs.current.push(`${last}`);\n}}\n')),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Key Learning Points")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Practiced TypeScript in a React project"),"\n",r.createElement(t.li,null,"Exposure to useRef use cases"),"\n",r.createElement(t.li,null,"Exposure to TailwindCSS"),"\n",r.createElement(t.li,null,"Learnt deployment process of Vite to github pages"),"\n",r.createElement(t.li,null,"Learnt basic CI/CD with github workflow - auto update production build on git push"),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Future Plans")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Integrate Google Analytics to track user behaviour and display interesting statistics (e.g. like Wordle's summary graph)"),"\n"))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,l.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},8543:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(6524),r=n(7294),a=n(1082),o=n(9541),i=n(1561),c=function(e){var t=e.data,n=e.children,l=t.mdx.frontmatter;return r.createElement(o.Z,null,r.createElement("div",{className:i.YS},r.createElement("div",{className:i.yN},r.createElement("h1",{className:i.TN},r.createElement(a.Link,{to:"/projects"},"projects /"),r.createElement("span",null,l.title," | ",l.byline)),r.createElement("div",{className:i.dz},r.createElement("a",{href:l.github},r.createElement("button",null,"/github")),l.demo&&r.createElement("a",{href:l.demo},r.createElement("button",null,"/demo")))),r.createElement("div",{className:i.d1},n)))};function u(e){return r.createElement(c,e,r.createElement(l.default,e))}},1561:function(e,t,n){n.d(t,{TN:function(){return o},YS:function(){return i},d1:function(){return l},dz:function(){return a},yN:function(){return r}});var l="index-module--body--856a5",r="index-module--frontmatter--0ebd3",a="index-module--referBtns--f8089",o="index-module--title--efed8",i="index-module--wrapper--825f3"}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-tsx-content-file-path-users-kit-code-projects-portfolio-src-pages-projects-raws-triviago-mdx-274f6ac44a101c01fb0b.js.map