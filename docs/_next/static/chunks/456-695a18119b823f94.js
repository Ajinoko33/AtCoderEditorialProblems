(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{9305:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(3428),o=r(2265),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 000-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"file-search",theme:"outlined"},i=r(6614),l=o.forwardRef(function(e,t){return o.createElement(i.Z,(0,n.Z)({},e,{ref:t,icon:a}))})},9535:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(3428),o=r(2265),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"},i=r(6614),l=o.forwardRef(function(e,t){return o.createElement(i.Z,(0,n.Z)({},e,{ref:t,icon:a}))})},1770:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(7437),o=r(2265);t.default=function({html:e,height:t=null,width:r=null,children:a,dataNtpc:i=""}){return(0,o.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})},[i]),(0,n.jsxs)(n.Fragment,{children:[a,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null]})}},8325:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=r(7437),i=r(2265),l=o(r(8475));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,a.jsx)(l.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=function(...e){if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)}},6691:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=r(7437),i=r(2265),l=o(r(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:o,preview:u,dataLayer:s}=e;void 0===n&&(n=r);let c="dataLayer"!==r?`&l=${r}`:"",f=o?`&gtm_auth=${o}`:"",d=u?`&gtm_preview=${u}&gtm_cookies_win=x`:"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${r}');`}}),(0,a.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${c}${f}${d}`})]})},t.sendGTMEvent=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)}},9994:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(6141),o=r(2265),a=r(4440),i=r.n(a),l=r(4925),u=r(9056),s=r(1479),c=r(9173),f=r(9875),d=r(9426),p=r(3563),h=e=>{let{componentCls:t,bodyBg:r,lightSiderBg:n,lightTriggerBg:o,lightTriggerColor:a}=e;return{[`${t}-sider-light`]:{background:n,[`${t}-sider-trigger`]:{color:a,background:o},[`${t}-sider-zero-width-trigger`]:{color:a,background:o,border:`1px solid ${r}`,borderInlineStart:0}}}};let g=e=>{let{antCls:t,componentCls:r,colorText:n,triggerColor:o,footerBg:a,triggerBg:i,headerHeight:l,headerPadding:u,headerColor:s,footerPadding:c,triggerHeight:f,zeroTriggerHeight:p,zeroTriggerWidth:g,motionDurationMid:m,motionDurationSlow:y,fontSize:b,borderRadius:_,bodyBg:v,headerBg:x,siderBg:w}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:v,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},[`${r}-sider`]:{position:"relative",minWidth:0,background:w,transition:`all ${m}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${t}-menu${t}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:f},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:f,color:o,lineHeight:(0,d.bf)(f),textAlign:"center",background:i,cursor:"pointer",transition:`all ${m}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:l,insetInlineEnd:e.calc(g).mul(-1).equal(),zIndex:1,width:g,height:p,color:o,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:w,borderStartStartRadius:0,borderStartEndRadius:_,borderEndEndRadius:_,borderEndStartRadius:0,cursor:"pointer",transition:`background ${y} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${y}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(g).mul(-1).equal(),borderStartStartRadius:_,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:_}}}}},h(e)),{"&-rtl":{direction:"rtl"}}),[`${r}-header`]:{height:l,padding:u,color:s,lineHeight:(0,d.bf)(l),background:x,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:c,color:n,fontSize:b,background:a},[`${r}-content`]:{flex:"auto",minHeight:0}}};var m=(0,p.I$)("Layout",e=>[g(e)],e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:n,colorText:o,controlHeightSM:a,marginXXS:i,colorTextLightSolid:l,colorBgContainer:u}=e,s=1.25*n;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:`0 ${s}px`,headerColor:o,footerPadding:`${a}px ${s}px`,footerBg:t,siderBg:"#001529",triggerHeight:n+2*i,triggerBg:"#002140",triggerColor:l,zeroTriggerWidth:n,zeroTriggerHeight:n,lightSiderBg:u,lightTriggerBg:u,lightTriggerColor:o}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function b(e){let{suffixCls:t,tagName:r,displayName:n}=e;return e=>o.forwardRef((n,a)=>o.createElement(e,Object.assign({ref:a,suffixCls:t,tagName:r},n)))}let _=o.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:n,className:a,tagName:l}=e,s=y(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:c}=o.useContext(u.E_),f=c("layout",r),[d,p]=m(f),h=n?`${f}-${n}`:f;return d(o.createElement(l,Object.assign({className:i()(r||h,a,p),ref:t},s)))}),v=o.forwardRef((e,t)=>{let{direction:r}=o.useContext(u.E_),[a,d]=o.useState([]),{prefixCls:p,className:h,rootClassName:g,children:b,hasSider:_,tagName:v,style:x}=e,w=y(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),E=(0,l.Z)(w,["suffixCls"]),{getPrefixCls:j,layout:O}=o.useContext(u.E_),S=j("layout",p),P="boolean"==typeof _?_:!!a.length||(0,c.Z)(b).some(e=>e.type===f.Z),[M,R]=m(S),N=i()(S,{[`${S}-has-sider`]:P,[`${S}-rtl`]:"rtl"===r},null==O?void 0:O.className,h,g,R),C=o.useMemo(()=>({siderHook:{addSider:e=>{d(t=>[].concat((0,n.Z)(t),[e]))},removeSider:e=>{d(t=>t.filter(t=>t!==e))}}}),[]);return M(o.createElement(s.V.Provider,{value:C},o.createElement(v,Object.assign({ref:t,className:N,style:Object.assign(Object.assign({},null==O?void 0:O.style),x)},E),b)))}),x=b({tagName:"div",displayName:"Layout"})(v),w=b({suffixCls:"header",tagName:"header",displayName:"Header"})(_),E=b({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(_),j=b({suffixCls:"content",tagName:"main",displayName:"Content"})(_);x.Header=w,x.Footer=E,x.Content=j,x.Sider=f.Z,x._InternalSiderContext=f.D;var O=x},2956:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(2139);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6406:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2139),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3313:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return a},default:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!r[e]:o.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:i}=r;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),i=Number(n.content),l=[];for(let t=0,r=n.previousElementSibling;t<i;t++,r=(null==r?void 0:r.previousElementSibling)||null){var u;(null==r?void 0:null==(u=r.tagName)?void 0:u.toLowerCase())===e&&l.push(r)}let s=t.map(o).filter(e=>{for(let t=0,r=l.length;t<r;t++)if(a(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>r.insertBefore(e,n)),n.content=(i-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(1024)._(r(2265)),o=r(4542),a=r(7434),i=r(1030),l=r(6874),u=r(2956),s=r(6993),c=r(8599),f=r(5291),d=r(6406),p=r(5786),h=r(1414),g=new Set;function m(e,t,r,n,o,i){if(i||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let b=n.default.forwardRef(function(e,t){let r,i;let{href:g,as:b,children:_,prefetch:v=null,passHref:x,replace:w,shallow:E,scroll:j,locale:O,onClick:S,onMouseEnter:P,onTouchStart:M,legacyBehavior:R=!1,...N}=e;r=_,R&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let C=n.default.useContext(s.RouterContext),k=n.default.useContext(c.AppRouterContext),I=null!=C?C:k,L=!C,T=!1!==v,$=null===v?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:A,as:H}=n.default.useMemo(()=>{if(!C){let e=y(g);return{href:e,as:b?y(b):e}}let[e,t]=(0,o.resolveHref)(C,g,!0);return{href:e,as:b?(0,o.resolveHref)(C,b):t||e}},[C,g,b]),z=n.default.useRef(A),B=n.default.useRef(H);R&&(i=n.default.Children.only(r));let U=R?i&&"object"==typeof i&&i.ref:t,[W,q,D]=(0,f.useIntersection)({rootMargin:"200px"}),F=n.default.useCallback(e=>{(B.current!==H||z.current!==A)&&(D(),B.current=H,z.current=A),W(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[H,U,A,D,W]);n.default.useEffect(()=>{I&&q&&T&&m(I,A,H,{locale:O},{kind:$},L)},[H,A,q,O,T,null==C?void 0:C.locale,I,L,$]);let Z={ref:F,onClick(e){R||"function"!=typeof S||S(e),R&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,o,i,l,u,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,o,{shallow:l,locale:s,scroll:e}):t[i?"replace":"push"](o||r,{scroll:e})};c?n.default.startTransition(d):d()}(e,I,A,H,w,E,j,O,L)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),I&&(T||!L)&&m(I,A,H,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:$},L)},onTouchStart(e){R||"function"!=typeof M||M(e),R&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),I&&(T||!L)&&m(I,A,H,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:$},L)}};if((0,l.isAbsoluteUrl)(H))Z.href=H;else if(!R||x||"a"===i.type&&!("href"in i.props)){let e=void 0!==O?O:null==C?void 0:C.locale,t=(null==C?void 0:C.isLocaleDomain)&&(0,d.getDomainLocale)(H,e,null==C?void 0:C.locales,null==C?void 0:C.domainLocales);Z.href=t||(0,p.addBasePath)((0,u.addLocale)(H,e,null==C?void 0:C.defaultLocale))}return R?n.default.cloneElement(i,Z):n.default.createElement("a",{...N,...Z},r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(5770),o=r(1030),a=r(4544),i=r(6874),l=r(2139),u=r(7434),s=r(2360),c=r(6735);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return m},default:function(){return b}});let n=r(1024),o=r(8533),a=n._(r(4887)),i=o._(r(2265)),l=r(3634),u=r(3313),s=r(2185),c=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:s,stylesheets:h}=e,g=r||t;if(g&&f.has(g))return;if(c.has(t)){f.add(g),c.get(t).then(n,s);return}let m=()=>{o&&o(),f.add(g)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(a?(y.innerHTML=a.__html||"",m()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(y.src=t,c.set(t,b)),Object.entries(e))){if(void 0===n||d.includes(r))continue;let e=u.DOMAttributeNames[r]||r.toLowerCase();y.setAttribute(e,n)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),h&&p(h),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:c,stylesheets:d,...p}=e,{updateScripts:g,scripts:m,getIsSsr:y,appDir:b,nonce:_}=(0,i.useContext)(l.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;v.current||(o&&e&&f.has(e)&&o(),v.current=!0)},[o,t,r]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===u?h(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(g?(m[u]=(m[u]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:c,...p}]),g(m)):y&&y()?f.add(t||r):y&&!y()&&h(e)),b){if(d&&d.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return r?(a.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&r&&a.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(2265),o=r(2185),a="function"==typeof IntersectionObserver,i=new Map,l=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2202:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},6993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(1024)._(r(2265)).default.createContext(null)},1030:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return i},formatWithValidation:function(){return l}});let n=r(8533)._(r(5770)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},2360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(7409),o=r(1305)},6735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let n=r(2395),o=r(9935);function a(e,t,r){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},1305:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let n=r(4507),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},7434:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(6874),o=r(7379);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},4544:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},5770:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return a}})},2395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(6874);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),i}}},9935:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(4507),o=r(2202),a=r(5868);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:u}=i(a[1]);return r[e]={pos:l++,repeat:u,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=i(a[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function s(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:a,keyPrefix:l}=e,{key:u,optional:s,repeat:c}=i(n),f=u.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),l?a[f]=""+l+u:a[f]=u;let p=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function c(e,t){let r;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return s({getSafeRouteKey:l,interceptionMarker:r,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return a?s({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let r=c(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7409:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function a(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},6874:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return a},getLocationOrigin:function(){return i},getURL:function(){return l},getDisplayName:function(){return u},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return g},PageNotFoundError:function(){return m},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return _}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},9646:function(e){e.exports={style:{fontFamily:"'__Inter_044b37', '__Inter_Fallback_044b37'",fontStyle:"normal"},className:"__className_044b37"}},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)},8475:function(e,t,r){e.exports=r(5935)}}]);