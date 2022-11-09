"use strict";(self.webpackChunkkit_s_portfolio=self.webpackChunkkit_s_portfolio||[]).push([[628],{6410:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{ah:function(){return i}});var a=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=a.createContext({});function i(e){var t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):s(s({},t),e)}),[t,e])}},2287:function(e,t,n){n.r(t);var r=n(6410),a=n(7294),l=n(841);function s(e){var t=Object.assign({h3:"h3",p:"p",a:"a",strong:"strong",code:"code",pre:"pre"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"Project Overview and Features"),"\n",a.createElement(t.p,null,"The 2022 Conference on ",a.createElement(t.a,{href:"https://2022.emnlp.org/"},"Empirical Methods in Natural Language Processing")," (EMNLP2022) released their list of accepted works in early November. Unfortunately, the list of 1381 accepted submissions was published in the form of an Excel file which was difficult to peruse and filter."),"\n",a.createElement(l.Z,{src:"https://res.cloudinary.com/kiittsunne/image/upload/v1668015830/website/acadex-excel.png",maxWidth:"600px"}),"\n",a.createElement(t.p,null,"I created a simple desktop web app to display the contents of this excel file, and also implemented features to support searching and filtering of submissions, as well as 'bookmarking' submissions of particular interest to users."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"The abstracts of each submission was displayed in a popover modal.")),"\n",a.createElement(l.Z,{src:"https://res.cloudinary.com/kiittsunne/video/upload/c_scale,q_100,w_600,e_loop:50/v1666514028/website/acadex-modal_a0tc26.gif",maxWidth:"600px"}),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"Searching and filtering were implemented through the use of simple React ",a.createElement(t.code,null,"useState"),"\nhooks, and basic JS array filtering methods."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Search by Title or Author:")),"\n",a.createElement(l.Z,{src:"https://res.cloudinary.com/kiittsunne/video/upload/c_scale,q_100,w_600,e_loop:50/v1666514028/website/acadex-search_hdyyxk.gif",maxWidth:"600px"}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Multi-Filter submission by track, submission type, and/or acceptance status:")),"\n",a.createElement(l.Z,{src:"https://res.cloudinary.com/kiittsunne/video/upload/c_scale,q_100,w_600,e_loop:50/v1666514028/website/acadex-filter_ofzthc.gif",maxWidth:"600px"}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Code for handling multiple optional filters:")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-typescript"},"function handleFilter() {\n  let tracks: string[] = [];\n  let types: string[] = [];\n  let status: string[] = [];\n\n  if (selectedTrack.length) {\n    tracks = selectedTrack.map((el: { label: string; value: string }) => {\n      return el.value;\n    });\n  }\n  if (selectedSubType.length) {\n    types = selectedSubType.map((el: { label: string; value: string }) => {\n      return el.value;\n    });\n  }\n  if (selectedAccStatus.length) {\n    status = selectedAccStatus.map((el: { label: string; value: string }) => {\n      return el.value;\n    });\n  }\n\n  setData((prev) => {\n    return prev.filter((el: dataProps) => {\n      let hasTracks =\n        el.Track && tracks.length ? tracks.includes(el.Track) : true;\n      let hasTypes =\n        el.Submission_Type && types.length\n          ? types.includes(el.Submission_Type)\n          : true;\n      let hasStatus =\n        el.Acceptance_Status && status.length\n          ? status.includes(el.Acceptance_Status)\n          : true;\n      let result = hasTracks && hasTypes && hasStatus;\n      return result;\n    });\n  });\n}\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Persisting bookmarked submissions in LocalStorage:")),"\n",a.createElement(l.Z,{src:"https://res.cloudinary.com/kiittsunne/video/upload/c_scale,q_100,w_600,e_loop:50/v1666514028/website/acadex-persistent_save_hoz3cw.gif",maxWidth:"600px"}),"\n",a.createElement("br"))}t.default=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(s,e)):s(e)}},841:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),a=function(e){var t=e.src,n=e.alt,a=e.maxWidth;return r.createElement("div",{className:"index-module--wrapper--8497f",style:{maxWidth:a}},r.createElement("img",{src:t,alt:n}))}}}]);
//# sourceMappingURL=component---src-pages-projects-raws-acadex-mdx-d530ac9db111024bed72.js.map