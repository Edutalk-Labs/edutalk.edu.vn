import{u as M}from"./fetch.e4e39227.js";import{a as C,s as D,b as P,o as m,e as f,f as t,u as i,r as k,w,x as $,F as S,h as L,c as F,m as E,t as _,j as At,y as Tt,z as Et}from"./entry.62437a4a.js";import{S as q,C as I,P as St}from"./carousel.es.4cc6af6a.js";import{u as jt}from"./composables.b5c0aefc.js";const Ht=t("div",{class:"iframe-container youtube-container"},[t("iframe",{id:"player",src:`https://www.youtube.com/embed/b_1o1KuwdU8\r
      ?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=b_1o1KuwdU8`,allowfullscreen:"",allowtransparency:"",allow:"autoplay"})],-1),Ct=["src"],Bt=["src"],Nt=C({__name:"BannerHome",setup(B){const p=M(),{home_page:c}=D(p),{fetchHome:a}=p;return P(async()=>{await a()}),(u,l)=>{var b,v,A,d,g,o;return m(),f("div",null,[Ht,t("img",{class:"w-full object-cover h-[30vw] lg:block hidden",src:`${(b=i(c))!=null&&b.image_history_desktop?(A=(v=i(c))==null?void 0:v.image_history_desktop[0])==null?void 0:A.url:""}`,alt:"banner_history"},null,8,Ct),t("img",{class:"w-webkit lg:hidden block",src:`${(d=i(c))!=null&&d.image_history_mobile?(o=(g=i(c))==null?void 0:g.image_history_mobile[0])==null?void 0:o.url:""}`,alt:"banner_history_mob"},null,8,Bt)])}}});const Lt={class:"mx-auto lg:w-fit w-[70%] lg:mt-[58px] mt-5 lg:text-[32px] text-[16px] font-gotham-bold text-blue-violet uppercase text-center"},Mt=["innerHTML"],Dt={class:"serie-system mt-[10px] flex"},Pt={class:"py-[10px] card-block-system w-inherit xl:h-[110px] lg:h-[90px] mb:h-[70px] h-[45px] xl:w-[110px] lg:w-[90px] mb:w-[70px] w-[45px] mr-4 border border-dark-silver border-solid lg:rounded-[10px] rounded-[8px] flex justify-center items-center"},Ut=["src","alt"],Ft={class:"lg:w-8/12 w-[80%] absolute lg:bottom-[40px] bottom-[5px] lg:left-[75px] left-0 lg:right-none lg:right-[unset] right-0 mx-auto"},qt={class:"lg:text-[28px] text-[12px] font-gotham-regular text-white"},It={class:"block font-gotham-book lg:text-[16px] text-[10px] text-white mt-[7px]"},Vt=C({__name:"SeriesSystem",setup(B){const p=M(),{home_page:c}=D(p),{fetchHome:a}=p;P(()=>{a()});const u=k({itemsToShow:3,snapAlign:"center",wrapAround:!0,autoplay:2500,pauseAutoplayOnHover:!0}),l=k({430:{itemsToShow:3,snapAlign:"center"},768:{itemsToShow:5,snapAlign:"center"},1440:{itemsToShow:5.5,snapAlign:"start"},1024:{itemsToShow:4.5,snapAlign:"start"}});function b(v){return`background-image: url(${v})`}return(v,A)=>{var d,g;return m(),f(S,null,[t("h1",Lt,[t("p",{innerHTML:(d=i(c))==null?void 0:d.home_partner_title},null,8,Mt)]),t("div",Dt,[w(i(I),{settings:u.value,breakpoints:l.value},{default:$(()=>{var o;return[(m(!0),f(S,null,L((o=i(c))==null?void 0:o.home_img_items_01,(r,N)=>(m(),F(i(q),{key:N},{default:$(()=>{var y,x;return[t("div",Pt,[t("img",{class:"h-full",src:`${(y=r==null?void 0:r.home_image_block_01[0])==null?void 0:y.url}`,alt:`${(x=r==null?void 0:r.home_image_block_01[0])==null?void 0:x.name}`},null,8,Ut)])]}),_:2},1024))),128))]}),_:1},8,["settings","breakpoints"])]),(m(!0),f(S,null,L((g=i(c))==null?void 0:g.home_img_items_02,(o,r)=>(m(),f("div",{class:"lg:mt-[40px] mt-6 lg:h-[500px] h-[200px] relative lg:rounded-[20px] rounded-[10px] bg-cover",key:r,style:E(b(o.home_image_block_02[0].url))},[t("div",Ft,[t("h1",qt,_(o.title_page),1),t("span",It,_(o.description),1)])],4))),128))],64)}}});const zt=t("h1",{class:"w-fit lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase"}," \u0110\u1ED1i t\xE1c chi\u1EBFn l\u01B0\u1EE3c ",-1),Kt={key:0,class:"lg:grid hidden flip-card-ecosystem mt-[10px] partner gap-4"},Ot=["src"],Rt={class:"bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center px-7"},Wt=["src"],Gt={class:"font-gotham-book lg:text-[24px] text-[16px] text-white mt-[70px]"},Jt={class:"font-gotham-book lg:text-[14px] text-[12px] text-white mt-[7px]"},Qt=["src"],Xt={class:"bg-blue-violet-opacity w-full h-full rounded-[16px] md:flex-row flex-col justify-center flex items-center pl-5 pr-5"},Yt=["src"],Zt={class:"flex flex-col lg:ml-[50px] ml-[20px]"},te={class:"font-gotham-book lg:text-[24px] text-[16px] text-white"},ee={class:"font-gotham-book lg:text-[14px] text-[12px] text-white mt-[7px]"},oe={class:"partner-item grid grid-cols-6 gap-4"},se=["src"],le={class:"bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center"},ie=["src"],ce={class:"flex flex-col xxl:px-4 px-2"},ne={class:"font-gotham-book text-[20px] text-white mt-[20px] text-center"},ae={class:"font-gotham-book text-[12px] text-white mt-[7px]"},re=["src"],_e={class:"bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center"},ue=["src"],me={class:"flex flex-col xxl:px-4 px-2"},xe={class:"font-gotham-book text-[20px] text-white mt-[20px] text-center"},de={class:"font-gotham-book text-[12px] text-white mt-[7px]"},he={class:"partner-ship lg:hidden block mt-[14px]"},pe=["onClick"],ge=["src","alt"],fe=["alt"],be={class:"bg-blue-violet-opacity w-full h-[246px] rounded-[5px] flex flex-col items-center justify-center px-7"},ve=["src","alt"],ke={class:"font-gotham-book text-[12px] text-white mt-[10px]"},we={class:"font-gotham-book text-[10px] text-white mt-[6px]"},ye=C({__name:"Partnership",setup(B){const p=M(),{home_page:c}=D(p),a=k([]),u=k([]),l=k([]),b=k({itemsToShow:1.2,snapAlign:"start",autoplay:2500,pauseAutoplayOnHover:!0}),v=k(!0),A=k({768:{itemsToShow:1.2,snapAlign:"start"},1024:{itemsToShow:2,snapAlign:"start"},1440:{itemsToShow:3,snapAlign:"start"},1920:{itemsToShow:3,snapAlign:"start"},2560:{itemsToShow:4,snapAlign:"start"}}),{fetchHome:d}=p;P(async()=>{var n;await d(),v.value=!1;for(let s=1;s<=c.value.home_img_items_03.length;s++)(n=document.querySelector(`.flip-card-inner-${s}`))==null||n.classList.toggle("inner-card");const x=window.matchMedia("(min-width: 768.5px)");c.value.home_img_items_03.forEach(s=>{let h=s.home_image_block_03[0].url;o(h,(j,T)=>{T.naturalHeight>=1.3*T.naturalWidth?a.value.push(s):T.naturalWidth>=1.3*T.naturalHeight?u.value.push(s):l.value.push(s)})}),x.matches&&await g()});async function g(){await a.value.sort(()=>.5-Math.random()),await u.value.sort(()=>.5-Math.random()),await l.value.sort(()=>.5-Math.random()),setTimeout(()=>{g()},7e3)}function o(x,n){const s=new Image;s.onload=()=>n(null,s),s.onerror=h=>n(h),s.src=x}function r(x,n){var h,j;let s=document.querySelectorAll(".flip-card-inner")[x];n?(h=s==null?void 0:s.classList)==null||h.toggle("tranform-partner-x"):(j=s==null?void 0:s.classList)==null||j.toggle("tranform-partner-y")}function N(x){document.querySelectorAll(`.flip-card-inner-${x}`).forEach(s=>{var h;(h=s==null?void 0:s.classList)==null||h.toggle("tranform-partner-y")})}function y(x){return`background-image: url(${x})`}return(x,n)=>{var s,h,j,T,V,z,K,O,R,W,G,J,Q,X,Y,Z,tt,et,ot,st,lt,it,ct,nt,at,rt,_t,ut,mt,xt,dt,ht;return m(),f(S,null,[zt,v.value?At("",!0):(m(),f("div",Kt,[t("div",{onClick:n[0]||(n[0]=H=>r(0)),class:"partner-item flip-card-inner cursor-pointer"},[t("img",{class:"flip-card-front object-cover rounded-[16px] w-full h-full",src:`${(h=(s=a.value[0])==null?void 0:s.home_image_block_03[0])==null?void 0:h.url}`,alt:"partner_1"},null,8,Ot),t("div",{class:"flip-card-back rounded-[16px]",style:E(y((T=(j=a.value[0])==null?void 0:j.home_image_block_03[0])==null?void 0:T.url))},[t("div",Rt,[t("img",{class:"object-cover lg:w-[238px] w-[200px] lg:h-[238px] h-[200px]",src:`${(z=(V=a.value[0])==null?void 0:V.home_image_logo_block_03[0])==null?void 0:z.url}`,alt:"partner_1_logo"},null,8,Wt),t("h1",Gt,_((K=a.value[0])==null?void 0:K.title_description),1),t("div",Jt,_((O=a.value[0])==null?void 0:O.description),1)])],4)]),t("div",{onClick:n[1]||(n[1]=H=>r(1,!0)),class:"partner-item flip-card-inner cursor-pointer"},[t("img",{class:"flip-card-front object-cover rounded-[16px] w-full h-full",src:`${(W=(R=u.value[0])==null?void 0:R.home_image_block_03[0])==null?void 0:W.url}`,alt:"partner_2"},null,8,Qt),t("div",{class:"flip-card-back-x flip-card-back rounded-[16px]",style:E(y((J=(G=u.value[0])==null?void 0:G.home_image_block_03[0])==null?void 0:J.url))},[t("div",Xt,[t("img",{class:"object-cover xxl:w-[238px] lg:w-[300px] w-[200px] lg:h-[300px] xxl:h-[238px] h-[200px]",src:`${(X=(Q=u.value[0])==null?void 0:Q.home_image_logo_block_03[0])==null?void 0:X.url}`,alt:"partner_1_logo"},null,8,Yt),t("div",Zt,[t("h1",te,_((Y=u.value[0])==null?void 0:Y.title_description),1),t("div",ee,_((Z=u.value[0])==null?void 0:Z.description),1)])])],4)]),t("div",oe,[t("div",{onClick:n[2]||(n[2]=H=>r(2)),class:"col-span-3 flip-card-inner cursor-pointer"},[t("img",{class:"flip-card-front object-cover rounded-[16px] h-full",src:`${(et=(tt=l.value[0])==null?void 0:tt.home_image_block_03[0])==null?void 0:et.url}`,alt:"partner_3"},null,8,se),t("div",{class:"flip-card-back rounded-[16px]",style:E(y((st=(ot=l.value[0])==null?void 0:ot.home_image_block_03[0])==null?void 0:st.url))},[t("div",le,[t("img",{class:"object-cover xxl:w-[150px] md:w-[100px] w-[80px] xxl:h-[150px] md:h-[100px] h-[80px]",src:`${(it=(lt=l.value[0])==null?void 0:lt.home_image_logo_block_03[0])==null?void 0:it.url}`,alt:"partner_1_logo"},null,8,ie),t("div",ce,[t("h1",ne,_((ct=l.value[0])==null?void 0:ct.title_description),1),t("div",ae,_((nt=l.value[0])==null?void 0:nt.description),1)])])],4)]),t("div",{onClick:n[3]||(n[3]=H=>r(3)),class:"col-span-3 flip-card-inner cursor-pointer"},[t("img",{class:"flip-card-front object-cover rounded-[16px] h-full",src:`${(rt=(at=l.value[1])==null?void 0:at.home_image_block_03[0])==null?void 0:rt.url}`,alt:"partner_4"},null,8,re),t("div",{class:"flip-card-back rounded-[16px]",style:E(y((ut=(_t=l.value[1])==null?void 0:_t.home_image_block_03[0])==null?void 0:ut.url))},[t("div",_e,[t("img",{class:"object-cover xxl:w-[150px] md:w-[100px] w-[80px] xxl:h-[150px] md:h-[100px] h-[80px]",src:`${(xt=(mt=l.value[1])==null?void 0:mt.home_image_logo_block_03[0])==null?void 0:xt.url}`,alt:"partner_1_logo"},null,8,ue),t("div",me,[t("h1",xe,_((dt=l.value[1])==null?void 0:dt.title_description),1),t("div",de,_((ht=l.value[1])==null?void 0:ht.description),1)])])],4)])])])),t("div",he,[w(i(I),{settings:b.value,breakpoints:A.value},{addons:$(()=>[w(i(St))]),default:$(()=>{var H,pt;return[(m(!0),f(S,null,L((H=i(c))!=null&&H.home_img_items_03?(pt=i(c))==null?void 0:pt.home_img_items_03:[],(e,U)=>(m(),F(i(q),{key:U},{default:$(()=>{var gt,ft,bt,vt,kt,wt,yt,$t;return[t("div",{onClick:Le=>N(U+1),class:Tt(`flip-card-inner-${U+1} cursor-pointer w-full mr-3`)},[t("img",{class:"flip-card-front object-cover rounded-[5px] w-full h-[246px]",src:(gt=e==null?void 0:e.home_image_block_03[0])==null?void 0:gt.url,alt:(ft=e==null?void 0:e.home_image_block_03[0])==null?void 0:ft.url},null,8,ge),t("div",{class:"flip-card-back rounded-[5px] bg-cover",style:E(y((bt=e==null?void 0:e.home_image_block_03[0])==null?void 0:bt.url)),alt:(vt=e==null?void 0:e.home_image_block_03[0])==null?void 0:vt.name},[t("div",be,[t("img",{class:"object-cover w-[99px] h-[99px]",src:(kt=e==null?void 0:e.home_image_logo_block_03[0])==null?void 0:kt.url,alt:(wt=e==null?void 0:e.home_image_logo_block_03[0])==null?void 0:wt.url},null,8,ve),t("h1",ke,_(e==null?void 0:e.title_description),1),t("div",we,_(((yt=e==null?void 0:e.description)==null?void 0:yt.length)>100?(($t=e==null?void 0:e.description)==null?void 0:$t.slice(0,100))+"....":e==null?void 0:e.description),1)])],12,fe)],10,pe)]}),_:2},1024))),128))]}),_:1},8,["settings","breakpoints"])])],64)}}});const $e=t("h1",{class:"w-fit lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase"}," TIN M\u1EDAI C\u1EACP NH\u1EACT ",-1),Se={class:"update-news mt-[14px] lg:mb-[30px] mb-[20px] flex"},Ae=["onClick"],Te={class:"lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start"},Ee={class:"font-gotham-book text-spanish-yellow text-base"},je={class:"lg:hidden block text-start"},He={class:"font-gotham-book text-[14px] text-blue-violet mt-[9px]"},Ce={class:"block font-gotham-book text-[12px] text-black mt-[5px]"},Be=C({__name:"NewsUpdate",setup(B){const p=Et(),c=M(),{news_update:a}=D(c),u=k({itemsToShow:1.2,snapAlign:"start",autoplay:2500,pauseAutoplayOnHover:!0}),l=k({768:{itemsToShow:1.2,snapAlign:"start"},1024:{itemsToShow:2,snapAlign:"start"},1440:{itemsToShow:3,snapAlign:"start"},1920:{itemsToShow:3,snapAlign:"start"},2560:{itemsToShow:4,snapAlign:"start"}});function b(d){return`background-image: url(${d})`}const{getNewUpdate:v}=c;P(()=>{v()});function A(d,g){p.push({path:"news/"+d,query:{type:g}})}return(d,g)=>(m(),f(S,null,[$e,t("div",Se,[w(i(I),{settings:u.value,breakpoints:l.value},{addons:$(()=>[w(i(St))]),default:$(()=>[(m(!0),f(S,null,L(i(a),(o,r)=>(m(),F(i(q),{key:r},{default:$(()=>[t("div",{onClick:N=>A(o==null?void 0:o.id,"new"),class:"w-full h-full flex flex-col mr-3 cursor-pointer"},[t("div",{class:"rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",style:E(b(o==null?void 0:o.image))},[t("div",Te,[t("span",Ee,_(o==null?void 0:o.title),1)])],4),t("div",je,[t("h4",He,_(o==null?void 0:o.title),1),t("span",Ce,_(o==null?void 0:o.short_description),1)])],8,Ae)]),_:2},1024))),128))]),_:1},8,["settings","breakpoints"])])],64))}});const Ne={class:"container mx-auto"},Fe=C({__name:"index",setup(B){return jt({title:"Trang ch\u1EE7 Edutalk",meta:[{name:"description",content:"N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc"}],bodyAttrs:{class:"test"}}),(p,c)=>{const a=Nt,u=Vt,l=ye,b=Be;return m(),f(S,null,[w(a),t("div",Ne,[w(u),w(l),w(b)])],64)}}});export{Fe as default};