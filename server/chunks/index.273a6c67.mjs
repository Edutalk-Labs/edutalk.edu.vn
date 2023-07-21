import { useSSRContext, defineComponent, unref, ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useFetchStore } from './fetch.16d8e39d.mjs';
import { s as storeToRefs } from './server.mjs';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { useRouter } from 'vue-router';
import { u as useHead } from './composables.a8e6231f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BannerHome",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFetchStore();
    const { home_page } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="iframe-container youtube-container"><iframe id="player" src="https://www.youtube.com/embed/b_1o1KuwdU8
      ?rel=0&amp;modestbranding=1&amp;autohide=1&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=b_1o1KuwdU8" allowfullscreen allowtransparency allow="autoplay"></iframe></div><img class="w-full object-cover h-[30vw] lg:block hidden"${ssrRenderAttr("src", `${((_a = unref(home_page)) == null ? void 0 : _a.image_history_desktop) ? (_c = (_b = unref(home_page)) == null ? void 0 : _b.image_history_desktop[0]) == null ? void 0 : _c.url : ""}`)} alt="banner_history"><img class="w-webkit lg:hidden block"${ssrRenderAttr("src", `${((_d = unref(home_page)) == null ? void 0 : _d.image_history_mobile) ? (_f = (_e = unref(home_page)) == null ? void 0 : _e.image_history_mobile[0]) == null ? void 0 : _f.url : ""}`)} alt="banner_history_mob"></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerHome.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SeriesSystem",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFetchStore();
    const { home_page } = storeToRefs(store);
    const settings = ref({
      itemsToShow: 3,
      snapAlign: "center",
      wrapAround: true,
      autoplay: 2500,
      pauseAutoplayOnHover: true
    });
    const breakpoints = ref({
      430: {
        itemsToShow: 3,
        snapAlign: "center"
      },
      768: {
        itemsToShow: 5,
        snapAlign: "center"
      },
      1440: {
        itemsToShow: 5.5,
        snapAlign: "start"
      },
      1024: {
        itemsToShow: 4.5,
        snapAlign: "start"
      }
    });
    function bannerBgImage(image) {
      return `background-image: url(${image})`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[--><h1 class="mx-auto lg:w-fit w-[70%] lg:mt-[58px] mt-5 lg:text-[32px] text-[16px] font-gotham-bold text-blue-violet uppercase text-center"><p>${(_a = unref(home_page)) == null ? void 0 : _a.home_partner_title}</p></h1><div class="serie-system mt-[10px] flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        settings: settings.value,
        breakpoints: breakpoints.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = unref(home_page)) == null ? void 0 : _a2.home_img_items_01, (system, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c, _d;
                  if (_push3) {
                    _push3(`<div class="py-[10px] card-block-system w-inherit xl:h-[110px] lg:h-[90px] mb:h-[70px] h-[45px] xl:w-[110px] lg:w-[90px] mb:w-[70px] w-[45px] mr-4 border border-dark-silver border-solid lg:rounded-[10px] rounded-[8px] flex justify-center items-center"${_scopeId2}><img class="h-full"${ssrRenderAttr("src", `${(_a3 = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _a3.url}`)}${ssrRenderAttr("alt", `${(_b3 = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _b3.name}`)}${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-[10px] card-block-system w-inherit xl:h-[110px] lg:h-[90px] mb:h-[70px] h-[45px] xl:w-[110px] lg:w-[90px] mb:w-[70px] w-[45px] mr-4 border border-dark-silver border-solid lg:rounded-[10px] rounded-[8px] flex justify-center items-center" }, [
                        createVNode("img", {
                          class: "h-full",
                          src: `${(_c = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _c.url}`,
                          alt: `${(_d = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _d.name}`
                        }, null, 8, ["src", "alt"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(home_page)) == null ? void 0 : _b2.home_img_items_01, (system, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => {
                    var _a3, _b3;
                    return [
                      createVNode("div", { class: "py-[10px] card-block-system w-inherit xl:h-[110px] lg:h-[90px] mb:h-[70px] h-[45px] xl:w-[110px] lg:w-[90px] mb:w-[70px] w-[45px] mr-4 border border-dark-silver border-solid lg:rounded-[10px] rounded-[8px] flex justify-center items-center" }, [
                        createVNode("img", {
                          class: "h-full",
                          src: `${(_a3 = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _a3.url}`,
                          alt: `${(_b3 = system == null ? void 0 : system.home_image_block_01[0]) == null ? void 0 : _b3.name}`
                        }, null, 8, ["src", "alt"])
                      ])
                    ];
                  }),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList((_b = unref(home_page)) == null ? void 0 : _b.home_img_items_02, (item, index) => {
        _push(`<div class="lg:mt-[40px] mt-6 lg:h-[500px] h-[200px] relative lg:rounded-[20px] rounded-[10px] bg-cover" style="${ssrRenderStyle(bannerBgImage(item.home_image_block_02[0].url))}"><div class="lg:w-8/12 w-[80%] absolute lg:bottom-[40px] bottom-[5px] lg:left-[75px] left-0 lg:right-none lg:right-[unset] right-0 mx-auto"><h1 class="lg:text-[28px] text-[12px] font-gotham-regular text-white">${ssrInterpolate(item.title_page)}</h1><span class="block font-gotham-book lg:text-[16px] text-[10px] text-white mt-[7px]">${ssrInterpolate(item.description)}</span></div></div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SeriesSystem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Partnership",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFetchStore();
    const { home_page } = storeToRefs(store);
    const partner_1 = ref([]);
    const partner_2 = ref([]);
    const partner_3 = ref([]);
    const settings = ref({
      itemsToShow: 1.2,
      snapAlign: "start",
      autoplay: 2500,
      pauseAutoplayOnHover: true
    });
    const loading = ref(true);
    const breakpoints = ref({
      768: {
        itemsToShow: 1.2,
        snapAlign: "start"
      },
      1024: {
        itemsToShow: 2,
        snapAlign: "start"
      },
      1440: {
        itemsToShow: 3,
        snapAlign: "start"
      },
      1920: {
        itemsToShow: 3,
        snapAlign: "start"
      },
      2560: {
        itemsToShow: 4,
        snapAlign: "start"
      }
    });
    function clickSLipMobile(index) {
      let flipCardInner = document.querySelectorAll(
        `.flip-card-inner-${index}`
      );
      flipCardInner.forEach((flipCard) => {
        var _a;
        (_a = flipCard == null ? void 0 : flipCard.classList) == null ? void 0 : _a.toggle("tranform-partner-y");
      });
    }
    function bannerBgImage(image) {
      return `background-image: url(${image})`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
      _push(`<!--[--><h1 class="w-fit lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase"> \u0110\u1ED1i t\xE1c chi\u1EBFn l\u01B0\u1EE3c </h1>`);
      if (!loading.value) {
        _push(`<div class="lg:grid hidden flip-card-ecosystem mt-[10px] partner gap-4"><div class="partner-item flip-card-inner cursor-pointer"><img class="flip-card-front object-cover rounded-[16px] w-full h-full"${ssrRenderAttr("src", `${(_b = (_a = partner_1.value[0]) == null ? void 0 : _a.home_image_block_03[0]) == null ? void 0 : _b.url}`)} alt="partner_1"><div class="flip-card-back rounded-[16px]" style="${ssrRenderStyle(bannerBgImage((_d = (_c = partner_1.value[0]) == null ? void 0 : _c.home_image_block_03[0]) == null ? void 0 : _d.url))}"><div class="bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center px-7"><img class="object-cover lg:w-[238px] w-[200px] lg:h-[238px] h-[200px]"${ssrRenderAttr("src", `${(_f = (_e = partner_1.value[0]) == null ? void 0 : _e.home_image_logo_block_03[0]) == null ? void 0 : _f.url}`)} alt="partner_1_logo"><h1 class="font-gotham-book lg:text-[24px] text-[16px] text-white mt-[70px]">${ssrInterpolate((_g = partner_1.value[0]) == null ? void 0 : _g.title_description)}</h1><div class="font-gotham-book lg:text-[14px] text-[12px] text-white mt-[7px]">${ssrInterpolate((_h = partner_1.value[0]) == null ? void 0 : _h.description)}</div></div></div></div><div class="partner-item flip-card-inner cursor-pointer"><img class="flip-card-front object-cover rounded-[16px] w-full h-full"${ssrRenderAttr("src", `${(_j = (_i = partner_2.value[0]) == null ? void 0 : _i.home_image_block_03[0]) == null ? void 0 : _j.url}`)} alt="partner_2"><div class="flip-card-back-x flip-card-back rounded-[16px]" style="${ssrRenderStyle(bannerBgImage((_l = (_k = partner_2.value[0]) == null ? void 0 : _k.home_image_block_03[0]) == null ? void 0 : _l.url))}"><div class="bg-blue-violet-opacity w-full h-full rounded-[16px] md:flex-row flex-col justify-center flex items-center pl-5 pr-5"><img class="object-cover xxl:w-[238px] lg:w-[300px] w-[200px] lg:h-[300px] xxl:h-[238px] h-[200px]"${ssrRenderAttr("src", `${(_n = (_m = partner_2.value[0]) == null ? void 0 : _m.home_image_logo_block_03[0]) == null ? void 0 : _n.url}`)} alt="partner_1_logo"><div class="flex flex-col lg:ml-[50px] ml-[20px]"><h1 class="font-gotham-book lg:text-[24px] text-[16px] text-white">${ssrInterpolate((_o = partner_2.value[0]) == null ? void 0 : _o.title_description)}</h1><div class="font-gotham-book lg:text-[14px] text-[12px] text-white mt-[7px]">${ssrInterpolate((_p = partner_2.value[0]) == null ? void 0 : _p.description)}</div></div></div></div></div><div class="partner-item grid grid-cols-6 gap-4"><div class="col-span-3 flip-card-inner cursor-pointer"><img class="flip-card-front object-cover rounded-[16px] h-full"${ssrRenderAttr("src", `${(_r = (_q = partner_3.value[0]) == null ? void 0 : _q.home_image_block_03[0]) == null ? void 0 : _r.url}`)} alt="partner_3"><div class="flip-card-back rounded-[16px]" style="${ssrRenderStyle(bannerBgImage((_t = (_s = partner_3.value[0]) == null ? void 0 : _s.home_image_block_03[0]) == null ? void 0 : _t.url))}"><div class="bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center"><img class="object-cover xxl:w-[150px] md:w-[100px] w-[80px] xxl:h-[150px] md:h-[100px] h-[80px]"${ssrRenderAttr("src", `${(_v = (_u = partner_3.value[0]) == null ? void 0 : _u.home_image_logo_block_03[0]) == null ? void 0 : _v.url}`)} alt="partner_1_logo"><div class="flex flex-col xxl:px-4 px-2"><h1 class="font-gotham-book text-[20px] text-white mt-[20px] text-center">${ssrInterpolate((_w = partner_3.value[0]) == null ? void 0 : _w.title_description)}</h1><div class="font-gotham-book text-[12px] text-white mt-[7px]">${ssrInterpolate((_x = partner_3.value[0]) == null ? void 0 : _x.description)}</div></div></div></div></div><div class="col-span-3 flip-card-inner cursor-pointer"><img class="flip-card-front object-cover rounded-[16px] h-full"${ssrRenderAttr("src", `${(_z = (_y = partner_3.value[1]) == null ? void 0 : _y.home_image_block_03[0]) == null ? void 0 : _z.url}`)} alt="partner_4"><div class="flip-card-back rounded-[16px]" style="${ssrRenderStyle(bannerBgImage((_B = (_A = partner_3.value[1]) == null ? void 0 : _A.home_image_block_03[0]) == null ? void 0 : _B.url))}"><div class="bg-blue-violet-opacity w-full h-full rounded-[16px] flex flex-col items-center justify-center"><img class="object-cover xxl:w-[150px] md:w-[100px] w-[80px] xxl:h-[150px] md:h-[100px] h-[80px]"${ssrRenderAttr("src", `${(_D = (_C = partner_3.value[1]) == null ? void 0 : _C.home_image_logo_block_03[0]) == null ? void 0 : _D.url}`)} alt="partner_1_logo"><div class="flex flex-col xxl:px-4 px-2"><h1 class="font-gotham-book text-[20px] text-white mt-[20px] text-center">${ssrInterpolate((_E = partner_3.value[1]) == null ? void 0 : _E.title_description)}</h1><div class="font-gotham-book text-[12px] text-white mt-[7px]">${ssrInterpolate((_F = partner_3.value[1]) == null ? void 0 : _F.description)}</div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="partner-ship lg:hidden block mt-[14px]">`);
      _push(ssrRenderComponent(unref(Carousel), {
        settings: settings.value,
        breakpoints: breakpoints.value
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(((_a2 = unref(home_page)) == null ? void 0 : _a2.home_img_items_03) ? (_b2 = unref(home_page)) == null ? void 0 : _b2.home_img_items_03 : [], (partner, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(`flip-card-inner-${index + 1} cursor-pointer w-full mr-3`)}"${_scopeId2}><img class="flip-card-front object-cover rounded-[5px] w-full h-[246px]"${ssrRenderAttr("src", (_a3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _a3.url)}${ssrRenderAttr("alt", (_b3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _b3.url)}${_scopeId2}><div class="flip-card-back rounded-[5px] bg-cover" style="${ssrRenderStyle(bannerBgImage((_c3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _c3.url))}"${ssrRenderAttr("alt", (_d3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _d3.name)}${_scopeId2}><div class="bg-blue-violet-opacity w-full h-[246px] rounded-[5px] flex flex-col items-center justify-center px-7"${_scopeId2}><img class="object-cover w-[99px] h-[99px]"${ssrRenderAttr("src", (_e2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _e2.url)}${ssrRenderAttr("alt", (_f2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _f2.url)}${_scopeId2}><h1 class="font-gotham-book text-[12px] text-white mt-[10px]"${_scopeId2}>${ssrInterpolate(partner == null ? void 0 : partner.title_description)}</h1><div class="font-gotham-book text-[10px] text-white mt-[6px]"${_scopeId2}>${ssrInterpolate(((_g2 = partner == null ? void 0 : partner.description) == null ? void 0 : _g2.length) > 100 ? ((_h2 = partner == null ? void 0 : partner.description) == null ? void 0 : _h2.slice(0, 100)) + "...." : partner == null ? void 0 : partner.description)}</div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => clickSLipMobile(index + 1),
                        class: `flip-card-inner-${index + 1} cursor-pointer w-full mr-3`
                      }, [
                        createVNode("img", {
                          class: "flip-card-front object-cover rounded-[5px] w-full h-[246px]",
                          src: (_i2 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _i2.url,
                          alt: (_j2 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _j2.url
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", {
                          class: "flip-card-back rounded-[5px] bg-cover",
                          style: bannerBgImage((_k2 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _k2.url),
                          alt: (_l2 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _l2.name
                        }, [
                          createVNode("div", { class: "bg-blue-violet-opacity w-full h-[246px] rounded-[5px] flex flex-col items-center justify-center px-7" }, [
                            createVNode("img", {
                              class: "object-cover w-[99px] h-[99px]",
                              src: (_m2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _m2.url,
                              alt: (_n2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _n2.url
                            }, null, 8, ["src", "alt"]),
                            createVNode("h1", { class: "font-gotham-book text-[12px] text-white mt-[10px]" }, toDisplayString(partner == null ? void 0 : partner.title_description), 1),
                            createVNode("div", { class: "font-gotham-book text-[10px] text-white mt-[6px]" }, toDisplayString(((_o2 = partner == null ? void 0 : partner.description) == null ? void 0 : _o2.length) > 100 ? ((_p2 = partner == null ? void 0 : partner.description) == null ? void 0 : _p2.slice(0, 100)) + "...." : partner == null ? void 0 : partner.description), 1)
                          ])
                        ], 12, ["alt"])
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(((_c2 = unref(home_page)) == null ? void 0 : _c2.home_img_items_03) ? (_d2 = unref(home_page)) == null ? void 0 : _d2.home_img_items_03 : [], (partner, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => {
                    var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2;
                    return [
                      createVNode("div", {
                        onClick: ($event) => clickSLipMobile(index + 1),
                        class: `flip-card-inner-${index + 1} cursor-pointer w-full mr-3`
                      }, [
                        createVNode("img", {
                          class: "flip-card-front object-cover rounded-[5px] w-full h-[246px]",
                          src: (_a3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _a3.url,
                          alt: (_b3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _b3.url
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", {
                          class: "flip-card-back rounded-[5px] bg-cover",
                          style: bannerBgImage((_c3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _c3.url),
                          alt: (_d3 = partner == null ? void 0 : partner.home_image_block_03[0]) == null ? void 0 : _d3.name
                        }, [
                          createVNode("div", { class: "bg-blue-violet-opacity w-full h-[246px] rounded-[5px] flex flex-col items-center justify-center px-7" }, [
                            createVNode("img", {
                              class: "object-cover w-[99px] h-[99px]",
                              src: (_e2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _e2.url,
                              alt: (_f2 = partner == null ? void 0 : partner.home_image_logo_block_03[0]) == null ? void 0 : _f2.url
                            }, null, 8, ["src", "alt"]),
                            createVNode("h1", { class: "font-gotham-book text-[12px] text-white mt-[10px]" }, toDisplayString(partner == null ? void 0 : partner.title_description), 1),
                            createVNode("div", { class: "font-gotham-book text-[10px] text-white mt-[6px]" }, toDisplayString(((_g2 = partner == null ? void 0 : partner.description) == null ? void 0 : _g2.length) > 100 ? ((_h2 = partner == null ? void 0 : partner.description) == null ? void 0 : _h2.slice(0, 100)) + "...." : partner == null ? void 0 : partner.description), 1)
                          ])
                        ], 12, ["alt"])
                      ], 10, ["onClick"])
                    ];
                  }),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partnership.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NewsUpdate",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const store = useFetchStore();
    const { news_update } = storeToRefs(store);
    const settings = ref({
      itemsToShow: 1.2,
      snapAlign: "start",
      autoplay: 2500,
      pauseAutoplayOnHover: true
    });
    const breakpoints = ref({
      768: {
        itemsToShow: 1.2,
        snapAlign: "start"
      },
      1024: {
        itemsToShow: 2,
        snapAlign: "start"
      },
      1440: {
        itemsToShow: 3,
        snapAlign: "start"
      },
      1920: {
        itemsToShow: 3,
        snapAlign: "start"
      },
      2560: {
        itemsToShow: 4,
        snapAlign: "start"
      }
    });
    function bg_image(image) {
      return `background-image: url(${image})`;
    }
    function detailNew(tab_name, type) {
      router.push({
        path: "news/" + tab_name,
        query: { type }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="w-fit lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase"> TIN M\u1EDAI C\u1EACP NH\u1EACT </h1><div class="update-news mt-[14px] lg:mb-[30px] mb-[20px] flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        settings: settings.value,
        breakpoints: breakpoints.value
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(news_update), (new_update, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-full flex flex-col mr-3 cursor-pointer"${_scopeId2}><div class="rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover" style="${ssrRenderStyle(bg_image(new_update == null ? void 0 : new_update.image))}"${_scopeId2}><div class="lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start"${_scopeId2}><span class="font-gotham-book text-spanish-yellow text-base"${_scopeId2}>${ssrInterpolate(new_update == null ? void 0 : new_update.title)}</span></div></div><div class="lg:hidden block text-start"${_scopeId2}><h4 class="font-gotham-book text-[14px] text-blue-violet mt-[9px]"${_scopeId2}>${ssrInterpolate(new_update == null ? void 0 : new_update.title)}</h4><span class="block font-gotham-book text-[12px] text-black mt-[5px]"${_scopeId2}>${ssrInterpolate(new_update == null ? void 0 : new_update.short_description)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => detailNew(new_update == null ? void 0 : new_update.id, "new"),
                        class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                      }, [
                        createVNode("div", {
                          class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                          style: bg_image(new_update == null ? void 0 : new_update.image)
                        }, [
                          createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                            createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(new_update == null ? void 0 : new_update.title), 1)
                          ])
                        ], 4),
                        createVNode("div", { class: "lg:hidden block text-start" }, [
                          createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(new_update == null ? void 0 : new_update.title), 1),
                          createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(new_update == null ? void 0 : new_update.short_description), 1)
                        ])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(news_update), (new_update, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      onClick: ($event) => detailNew(new_update == null ? void 0 : new_update.id, "new"),
                      class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                    }, [
                      createVNode("div", {
                        class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                        style: bg_image(new_update == null ? void 0 : new_update.image)
                      }, [
                        createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                          createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(new_update == null ? void 0 : new_update.title), 1)
                        ])
                      ], 4),
                      createVNode("div", { class: "lg:hidden block text-start" }, [
                        createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(new_update == null ? void 0 : new_update.title), 1),
                        createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(new_update == null ? void 0 : new_update.short_description), 1)
                      ])
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsUpdate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Trang ch\u1EE7 Edutalk",
      meta: [{ name: "description", content: "N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc" }],
      bodyAttrs: {
        class: "test"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerHome = _sfc_main$4;
      const _component_SeriesSystem = _sfc_main$3;
      const _component_Partnership = _sfc_main$2;
      const _component_NewsUpdate = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BannerHome, null, null, _parent));
      _push(`<div class="container mx-auto">`);
      _push(ssrRenderComponent(_component_SeriesSystem, null, null, _parent));
      _push(ssrRenderComponent(_component_Partnership, null, null, _parent));
      _push(ssrRenderComponent(_component_NewsUpdate, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.273a6c67.mjs.map
