(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1960:function(e,r,n){Promise.resolve().then(n.bind(n,2273)),Promise.resolve().then(n.bind(n,6614)),Promise.resolve().then(n.t.bind(n,9646,23)),Promise.resolve().then(n.bind(n,3651)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.bind(n,367))},2273:function(e,r,n){"use strict";n.r(r),n.d(r,{Space:function(){return t.Z}});var t=n(1351)},3651:function(e,r,n){"use strict";n.r(r),n.d(r,{Header:function(){return x}});var t=n(7437),l=n(1396),o=n.n(l);let i=()=>(0,t.jsx)(o(),{href:"/",className:"font-bold no-underline text-black",children:"AtCoder Editorial Problems"});var c=n(8863),s=n(9305),a=n(9447),u=n(9535),d=n(2048),f=n(4033);let h=[{label:(0,t.jsx)(o(),{href:"/",children:"問題検索"}),key:"top",icon:(0,t.jsx)(s.Z,{})},{label:(0,t.jsx)(o(),{href:"/help",children:"ヘルプ"}),key:"help",icon:(0,t.jsx)(a.Z,{})},{label:"リンク",key:"links",icon:(0,t.jsx)(u.Z,{}),children:[{label:(0,t.jsx)(c.Sr,{href:"https://atcoder.jp/",children:"AtCoder"}),key:"atcoder"},{label:(0,t.jsx)(c.Sr,{href:"https://twitter.com/Ajinoko33",children:"@Ajinoko33"}),key:"twitter"}]}],b=()=>{var e;let r=null!==(e=(0,f.useSelectedLayoutSegment)())&&void 0!==e?e:"top";return(0,t.jsx)(d.Z,{mode:"horizontal",items:h,selectedKeys:[r],className:"bg-transparent border-0"})},x=()=>(0,t.jsxs)("nav",{className:"flex items-center px-4 border-b-[#0505050F] border-b-2",children:[(0,t.jsx)("div",{className:"flex-none mr-4",children:(0,t.jsx)(i,{})}),(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsx)(b,{})})]})},8863:function(e,r,n){"use strict";n.d(r,{x0:function(){return d},Sr:function(){return b},rK:function(){return p},Vb:function(){return x},Fx:function(){return C}});var t=n(7437),l=n(7584),o=n(2939);let i="#0000004a",c="#1677ff",s={fontSize:"12px"},a="h-[8.5px] transition-colors duration-300",u=e=>{let{sortOrder:r}=e,n="".concat(a," ").concat("ascend"===r?"":"table-column-sorter-inactive"),u="".concat(a," ").concat("descend"===r?"":"table-column-sorter-inactive"),d={...s,color:"ascend"===r?c:i},f={...s,color:"descend"===r?c:i};return(0,t.jsxs)("span",{className:"inline-flex flex-col justify-center cursor-pointer",children:[(0,t.jsx)(l.Z,{className:n,style:d}),(0,t.jsx)(o.Z,{className:u,style:f})]})},d=e=>{let{title:r,sortOrder:n,onClick:l}=e;return(0,t.jsxs)("div",{className:"flex basis-auto cursor-pointer table-column-sorters",onClick:l,children:[(0,t.jsx)("span",{className:"grow shrink font-semibold text-black/[.88]",children:r}),(0,t.jsx)(u,{sortOrder:n})]})};var f=n(1769),h=n(1351);let b=e=>{let{href:r,iconSize:n="normal",children:l}=e;return(0,t.jsxs)(h.Z,{children:[(0,t.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:l}),"none"!==n&&(0,t.jsx)(f.Z,{style:{color:"#4B5563",fontSize:"small"===n?"12px":void 0}})]})};n(2265);let x=e=>Math.round(e>=400?e:400/Math.exp(1-e/400)),y=["Black","Grey","Brown","Green","Cyan","Blue","Yellow","Orange","Red"],C=e=>{let r=Math.min(Math.floor(e/400),y.length-2);return y[r+1]},m={difficultyBlackColor:"#404040",difficultyGreyColor:"#808080",difficultyBrownColor:"#804000",difficultyGreenColor:"#008000",difficultyCyanColor:"#00C0C0",difficultyBlueColor:"#0000FF",difficultyYellowColor:"#C0C000",difficultyOrangeColor:"#FF8000",difficultyRedColor:"#FF0000"},j=e=>{switch(e){case"Black":return m.difficultyBlackColor;case"Grey":return m.difficultyGreyColor;case"Brown":return m.difficultyBrownColor;case"Green":return m.difficultyGreenColor;case"Cyan":return m.difficultyCyanColor;case"Blue":return m.difficultyBlueColor;case"Yellow":return m.difficultyYellowColor;case"Orange":return m.difficultyOrangeColor;case"Red":return m.difficultyRedColor}},g=e=>{switch(e){case"Bronze":return{base:"#965C2C",highlight:"#FFDABD"};case"Silver":return{base:"#808080",highlight:"#FFFFFF"};case"Gold":return{base:"#FFD700",highlight:"#FFFFFF"}}},k=(e,r)=>{if("Bronze"===e||"Silver"===e||"Gold"===e){let r=g(e);return{borderColor:r.base,background:"linear-gradient(to right,         ".concat(r.base,", ").concat(r.highlight,", ").concat(r.base,")")}}{let n=j(e);return{borderColor:n,background:"border-box linear-gradient(to top,         ".concat(n," ").concat(100*r,"%,         rgba(0,0,0,0) ").concat(100*r,"%)")}}},p=e=>{let{color:r,rating:n}=e,l=k(r,n>=3200?1:n%400/400);return(0,t.jsx)("span",{className:"inline-block align-sub rounded-full border border-solid w-3.5 h-3.5 bg-origin-border",style:l})}},367:function(e,r,n){"use strict";n.r(r);var t=n(7437),l=n(9426),o=n(4033),i=n(2265);r.default=e=>{let{children:r}=e,n=i.useMemo(()=>(0,l.Df)(),[]),c=i.useRef(!1);return(0,o.useServerInsertedHTML)(()=>{if(!c.current)return c.current=!0,(0,t.jsx)("style",{id:"antd",dangerouslySetInnerHTML:{__html:(0,l.EN)(n,!0)}})}),(0,t.jsx)(l.V9,{cache:n,children:r})}},3385:function(){}},function(e){e.O(0,[383,789,390,971,938,744],function(){return e(e.s=1960)}),_N_E=e.O()}]);