import{a as ee,A as m,r as u,B as p,C as L,D as x,b as be,E as xe,G as ye,H as K,I as q,J as fe,F as we}from"./entry.62437a4a.js";/**
 * Vue 3 Carousel 0.2.16
 * (c) 2023
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},me={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},throttle:{default:g.throttle,type:Number},snapAlign:{default:g.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function _e({config:e,slidesCount:n}){const{snapAlign:a,wrapAround:r,itemsToShow:i=1}=e;if(r)return Math.max(n-1,0);let l;switch(a){case"start":l=n-i;break;case"end":l=n-1;break;case"center":case"center-odd":l=n-Math.ceil((i-.5)/2);break;case"center-even":l=n-Math.ceil(i/2);break;default:l=0;break}return Math.max(l,0)}function Te({config:e,slidesCount:n}){const{wrapAround:a,snapAlign:r,itemsToShow:i=1}=e;let l=0;if(a||i>n)return l;switch(r){case"start":l=0;break;case"end":l=i-1;break;case"center":case"center-odd":l=Math.floor((i-1)/2);break;case"center-even":l=Math.floor((i-2)/2);break;default:l=0;break}return l}function Q({val:e,max:n,min:a}){return n<a?e:Math.min(Math.max(e,a),n)}function ke({config:e,currentSlide:n,slidesCount:a}){const{snapAlign:r,wrapAround:i,itemsToShow:l=1}=e;let c=n;switch(r){case"center":case"center-odd":c-=(l-1)/2;break;case"center-even":c-=(l-2)/2;break;case"end":c-=l-1;break}return i?c:Q({val:c,max:a-l,min:0})}function pe(e){return e?e.reduce((n,a)=>{var r;return a.type===we?[...n,...pe(a.children)]:((r=a.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...n,a]:n},[]):[]}function V({val:e,max:n,min:a=0}){return e>n?V({val:e-(n+1),max:n,min:a}):e<a?V({val:e+(n+1),max:n,min:a}):e}function Ae(e,n){let a;return n?function(...r){const i=this;a||(e.apply(i,r),a=!0,setTimeout(()=>a=!1,n))}:e}function Ce(e,n){let a;return function(...r){a&&clearTimeout(a),a=setTimeout(()=>{e(...r),a=null},n)}}var Me=ee({name:"ARIA",setup(){const e=m("currentSlide",u(0)),n=m("slidesCount",u(0));return()=>p("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${n.value}`)}}),Ie=ee({name:"Carousel",props:me,setup(e,{slots:n,emit:a,expose:r}){var i;const l=u(null),c=u([]),h=u(0),d=u(0);let b=u({}),y=Object.assign({},g);const o=L(Object.assign({},y)),s=u((i=e.modelValue)!==null&&i!==void 0?i:0),w=u(0),O=u(0),A=u(0),E=u(0);let C,$;x("config",o),x("slidesCount",d),x("currentSlide",s),x("maxSlide",A),x("minSlide",E),x("slideWidth",h);function z(){const t=Object.assign(Object.assign({},e),e.settings);b=u(Object.assign({},t.breakpoints)),y=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),te(y)}function j(){if(!Object.keys(b.value).length)return;const t=Object.keys(b.value).map(v=>Number(v)).sort((v,k)=>+k-+v);let f=Object.assign({},y);t.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(f=Object.assign(Object.assign({},f),b.value[v]),!0):!1),te(f)}function te(t){Object.entries(t).forEach(([f,v])=>o[f]=v)}const ne=Ce(()=>{j(),N(),D()},16);function D(){if(!l.value)return;const t=l.value.getBoundingClientRect();h.value=t.width/o.itemsToShow}function N(){d.value<=0||(O.value=Math.ceil((d.value-1)/2),A.value=_e({config:o,slidesCount:d.value}),E.value=Te({config:o,slidesCount:d.value}),o.wrapAround||(s.value=Q({val:s.value,max:A.value,min:E.value})))}be(()=>{xe(()=>setTimeout(()=>{j(),N(),D(),a("init")},16)),ie(),window.addEventListener("resize",ne,{passive:!0})}),ye(()=>{$&&clearTimeout($),C&&clearInterval(C),window.removeEventListener("resize",ne,{passive:!0})});let S=!1;const B={x:0,y:0},P={x:0,y:0},_=L({x:0,y:0}),X=u(!1),ge=()=>{X.value=!0},he=()=>{X.value=!1};function ae(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(S=t.type==="touchstart",S||t.preventDefault(),!(!S&&t.button!==0||M.value)&&(B.x=S?t.touches[0].clientX:t.clientX,B.y=S?t.touches[0].clientY:t.clientY,document.addEventListener(S?"touchmove":"mousemove",le,!0),document.addEventListener(S?"touchend":"mouseup",oe,!0)))}const le=Ae(t=>{P.x=S?t.touches[0].clientX:t.clientX,P.y=S?t.touches[0].clientY:t.clientY;const f=P.x-B.x,v=P.y-B.y;_.y=v,_.x=f},o.throttle);function oe(){const t=o.dir==="rtl"?-1:1,f=Math.sign(_.x)*.4,v=Math.round(_.x/h.value+f)*t;if(v&&!S){const k=U=>{U.stopPropagation(),window.removeEventListener("click",k,!0)};window.addEventListener("click",k,!0)}T(s.value-v),_.x=0,_.y=0,document.removeEventListener(S?"touchmove":"mousemove",le,!0),document.removeEventListener(S?"touchend":"mouseup",oe,!0)}function ie(){!o.autoplay||o.autoplay<=0||(C=setInterval(()=>{o.pauseAutoplayOnHover&&X.value||R()},o.autoplay))}function re(){C&&(clearInterval(C),C=null),ie()}const M=u(!1);function T(t){const f=o.wrapAround?t:Q({val:t,max:A.value,min:E.value});s.value===f||M.value||(a("slide-start",{slidingToIndex:t,currentSlideIndex:s.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!0,w.value=s.value,s.value=f,$=setTimeout(()=>{if(o.wrapAround){const v=V({val:f,max:A.value,min:0});v!==s.value&&(s.value=v,a("loop",{currentSlideIndex:s.value,slidingToIndex:t}))}a("update:modelValue",s.value),a("slide-end",{currentSlideIndex:s.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!1,re()},o.transition))}function R(){T(s.value+o.itemsToScroll)}function H(){T(s.value-o.itemsToScroll)}const se={slideTo:T,next:R,prev:H};x("nav",se),x("isSliding",M);const ue=K(()=>ke({config:o,currentSlide:s.value,slidesCount:d.value}));x("slidesToScroll",ue);const Se=K(()=>{const t=o.dir==="rtl"?-1:1,f=ue.value*h.value*t;return{transform:`translateX(${_.x-f}px)`,transition:`${M.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${d.value*h.value}px`:"",width:"100%"}});function ce(){z(),j(),N(),D(),re()}Object.keys(me).forEach(t=>{["modelValue"].includes(t)||q(()=>e[t],ce)}),q(()=>e.modelValue,t=>{t!==s.value&&T(Number(t))}),q(d,N),z();const de={config:o,slidesCount:d,slideWidth:h,next:R,prev:H,slideTo:T,currentSlide:s,maxSlide:A,minSlide:E,middleSlide:O};r({updateBreakpointsConfigs:j,updateSlidesData:N,updateSlideWidth:D,initDefaultConfigs:z,restartCarousel:ce,slideTo:T,next:R,prev:H,nav:se,data:de});const W=n.default||n.slides,Y=n.addons,ve=L(de);return()=>{const t=pe(W==null?void 0:W(ve)),f=(Y==null?void 0:Y(ve))||[];t.forEach((F,G)=>F.props.index=G);let v=t;if(o.wrapAround){const F=t.map((J,I)=>fe(J,{index:-t.length+I,isClone:!0,key:`clone-before-${I}`})),G=t.map((J,I)=>fe(J,{index:t.length+I,isClone:!0,key:`clone-after-${I}`}));v=[...F,...t,...G]}c.value=t,d.value=Math.max(t.length,1);const k=p("ol",{class:"carousel__track",style:Se.value,onMousedownCapture:o.mouseDrag?ae:null,onTouchstartPassiveCapture:o.touchDrag?ae:null},v),U=p("div",{class:"carousel__viewport"},k);return p("section",{ref:l,class:{carousel:!0,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:ge,onMouseleave:he},[U,f,p(Me)])}}});const Ee={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},Z=e=>{const n=e.name;if(!n||typeof n!="string")return;const a=Ee[n],r=p("path",{d:a}),i=e.title||n,l=p("title",i);return p("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:i},[l,r])};Z.props={name:String,title:String};const Le=(e,{slots:n,attrs:a})=>{const{next:r,prev:i}=n||{},l=m("config",L(Object.assign({},g))),c=m("maxSlide",u(1)),h=m("minSlide",u(1)),d=m("currentSlide",u(1)),b=m("nav",{}),{dir:y,wrapAround:o}=l,s=y==="rtl",w=p("button",{type:"button",class:["carousel__prev",!o&&d.value<=h.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:b.prev},(i==null?void 0:i())||p(Z,{name:s?"arrowRight":"arrowLeft"})),O=p("button",{type:"button",class:["carousel__next",!o&&d.value>=c.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:b.next},(r==null?void 0:r())||p(Z,{name:s?"arrowLeft":"arrowRight"}));return[w,O]},Oe=()=>{const e=m("maxSlide",u(1)),n=m("minSlide",u(1)),a=m("currentSlide",u(1)),r=m("nav",{}),i=c=>V({val:a.value,max:e.value,min:0})===c,l=[];for(let c=n.value;c<e.value+1;c++){const h=p("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(c)},"aria-label":`Navigate to slide ${c+1}`,onClick:()=>r.slideTo(c)}),d=p("li",{class:"carousel__pagination-item",key:c},h);l.push(d)}return p("ol",{class:"carousel__pagination"},l)};var je=ee({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const a=m("config",L(Object.assign({},g))),r=m("currentSlide",u(0)),i=m("slidesToScroll",u(0)),l=m("slideWidth",u(0)),c=m("isSliding",u(!1)),h=K(()=>({width:l.value?`${l.value}px`:"100%"})),d=()=>e.index===r.value,b=()=>e.index===r.value-1,y=()=>e.index===r.value+1,o=()=>{const s=Math.floor(i.value),w=Math.ceil(i.value+a.itemsToShow-1);return e.index>=s&&e.index<=w};return()=>{var s;return p("li",{style:h.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":d(),"carousel__slide--prev":b(),"carousel__slide--next":y(),"carousel__slide--sliding":c.value},"aria-hidden":!o()},(s=n.default)===null||s===void 0?void 0:s.call(n))}}});export{Ie as C,Le as N,Oe as P,je as S};
