import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { s as storeToRefs, _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables.a8e6231f.mjs';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { useRouter } from 'vue-router';
import { u as useFetchStore } from './fetch.16d8e39d.mjs';
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

const _sfc_main$1 = {
  name: "BannerNew"
};
const _imports_0 = "" + globalThis.__buildAssetsURL("banner_new.929b78e2.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><img class="w-full h-[32vw] object-cover"${ssrRenderAttr("src", _imports_0)} alt="banner_new"></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerNew.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFetchStore();
    const { news_highlight, news_normal, events } = storeToRefs(store);
    const router = useRouter();
    const active = ref({ talk_about: true, event: false });
    const settings = ref({
      itemsToShow: 2,
      snapAlign: "start",
      autoplay: 2500,
      pauseAutoplayOnHover: true
    });
    const breakpoints = ref({
      768: {
        itemsToShow: 2,
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
    function detailNew(tab_name, type) {
      router.push({
        path: "news/" + tab_name,
        query: { type }
      });
    }
    function bg_image(image) {
      return `background-image: url(${image})`;
    }
    useHead({
      title: "Tin t\u1EE9c Edutalk",
      meta: [{ name: "description", content: "N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc" }],
      bodyAttrs: {
        class: "test"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
      const _component_BannerNew = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BannerNew, null, null, _parent));
      _push(`<div class="lg:flex hidden container mx-auto my-[30px]"><div class="${ssrRenderClass(`cursor-pointer flex justify-center text-center items-center
     w-1/2 h-[56px] xxl:text-[24px] text-[20px] font-gotham-bold text-blue-violet shadow-2xl ${active.value.talk_about ? "active-navbar" : ""}`)}"> Truy\u1EC1n th\xF4ng n\xF3i v\u1EC1 Edutalk </div><div class="${ssrRenderClass(`cursor-pointer flex justify-center text-center items-center
     w-1/2 h-[56px] xxl:text-[24px] text-[20px] font-gotham-bold text-blue-violet shadow-2xl ${active.value.event ? "active-navbar" : ""}`)}"> S\u1EF1 ki\u1EC7n </div></div><div class="lg:block hidden container mx-auto">`);
      if (active.value.talk_about) {
        _push(`<div><div class="grid grid-cols-12 gap-4 mb-[61px]"><div class="lg:col-span-8 col-span-12 cursor-pointer"><img class="w-full object-cover h-[505px] rounded-[17px]"${ssrRenderAttr("src", `${((_a = unref(news_highlight)[0]) == null ? void 0 : _a.image) ? (_b = unref(news_highlight)[0]) == null ? void 0 : _b.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"><h3 class="mt-[12px] font-gotham-regular text-[16px] text-blue-violet">${ssrInterpolate((_c = unref(news_highlight)[0]) == null ? void 0 : _c.title)}</h3><h4 class="mt-[6px] font-gotham-light text-[14px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_d = unref(news_highlight)[0]) == null ? void 0 : _d.created_at)}</h4><h4 class="mt-[5px] font-gotham-book text-[14px] text-black">${ssrInterpolate((_e = unref(news_highlight)[0]) == null ? void 0 : _e.short_description)}</h4></div><div class="lg:col-span-4 col-span-12 cursor-pointer"><img class="w-full object-cover h-[505px] rounded-[17px]"${ssrRenderAttr("src", `${((_f = unref(news_highlight)[1]) == null ? void 0 : _f.image) ? (_g = unref(news_highlight)[1]) == null ? void 0 : _g.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_two"><h3 class="mt-[12px] font-gotham-bold text-[16px] text-blue-violet">${ssrInterpolate((_h = unref(news_highlight)[1]) == null ? void 0 : _h.title)}</h3><h4 class="font-gotham-light text-[14px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_i = unref(news_highlight)[1]) == null ? void 0 : _i.created_at)}</h4><h4 class="mt-[5px] font-gotham-book text-[14px] text-black">${ssrInterpolate((_j = unref(news_highlight)[1]) == null ? void 0 : _j.short_description)}</h4></div></div><div class="news mt-[60px] mb-[30px] flex">`);
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
              ssrRenderList(unref(news_normal), (new_normal, index) => {
                _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full h-full flex flex-col mr-3 cursor-pointer"${_scopeId2}><div class="rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover" style="${ssrRenderStyle(bg_image((new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg"))}"${_scopeId2}><div class="lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start"${_scopeId2}><span class="font-gotham-book text-spanish-yellow text-base"${_scopeId2}>${ssrInterpolate(new_normal == null ? void 0 : new_normal.title)}</span></div></div><div class="lg:hidden block text-start"${_scopeId2}><h4 class="font-gotham-book text-[14px] text-blue-violet mt-[9px]"${_scopeId2}>${ssrInterpolate(new_normal == null ? void 0 : new_normal.title)}</h4><span class="block font-gotham-book text-[12px] text-black mt-[5px]"${_scopeId2}>${ssrInterpolate(new_normal == null ? void 0 : new_normal.short_description)}</span></div></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          onClick: ($event) => detailNew(new_normal == null ? void 0 : new_normal.id, "new"),
                          class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                        }, [
                          createVNode("div", {
                            class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                            style: bg_image((new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg")
                          }, [
                            createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                              createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1)
                            ])
                          ], 4),
                          createVNode("div", { class: "lg:hidden block text-start" }, [
                            createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1),
                            createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(new_normal == null ? void 0 : new_normal.short_description), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(news_normal), (new_normal, index) => {
                  return openBlock(), createBlock(unref(Slide), { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        onClick: ($event) => detailNew(new_normal == null ? void 0 : new_normal.id, "new"),
                        class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                      }, [
                        createVNode("div", {
                          class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                          style: bg_image((new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg")
                        }, [
                          createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                            createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1)
                          ])
                        ], 4),
                        createVNode("div", { class: "lg:hidden block text-start" }, [
                          createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1),
                          createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(new_normal == null ? void 0 : new_normal.short_description), 1)
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (active.value.event) {
        _push(`<div><div class="grid grid-cols-12 gap-4 mb-[61px]"><div class="lg:col-span-8 col-span-12 cursor-pointer"><img class="w-full object-cover h-[505px] rounded-[17px]"${ssrRenderAttr("src", `${((_k = unref(events)[0]) == null ? void 0 : _k.image) ? (_l = unref(events)[0]) == null ? void 0 : _l.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"><h3 class="mt-[12px] font-gotham-regular text-[16px] text-blue-violet">${ssrInterpolate((_m = unref(events)[0]) == null ? void 0 : _m.name)}</h3><h4 class="mt-[6px] font-gotham-light text-[14px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_n = unref(events)[0]) == null ? void 0 : _n.start_date)}</h4><h4 class="mt-[5px] font-gotham-book text-[14px] text-black">${ssrInterpolate((_o = unref(events)[0]) == null ? void 0 : _o.short_description)}</h4></div><div class="lg:col-span-4 col-span-12 cursor-pointer"><img class="w-full object-cover h-[505px] rounded-[17px]"${ssrRenderAttr("src", `${((_p = unref(events)[1]) == null ? void 0 : _p.image) ? (_q = unref(events)[1]) == null ? void 0 : _q.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_two"><h3 class="mt-[12px] font-gotham-bold text-[16px] text-blue-violet">${ssrInterpolate((_r = unref(events)[1]) == null ? void 0 : _r.name)}</h3><h4 class="font-gotham-light text-[14px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_s = unref(events)[1]) == null ? void 0 : _s.start_date)}</h4><h4 class="mt-[5px] font-gotham-book text-[14px] text-black">${ssrInterpolate((_t = unref(events)[1]) == null ? void 0 : _t.short_description)}</h4></div></div><div class="news mt-[60px] mb-[30px] flex">`);
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
              ssrRenderList(unref(events), (event, index) => {
                _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full h-full flex flex-col mr-3 cursor-pointer"${_scopeId2}><div class="rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover" style="${ssrRenderStyle(bg_image((event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg"))}"${_scopeId2}><div class="lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start"${_scopeId2}><span class="font-gotham-book text-spanish-yellow text-base"${_scopeId2}>${ssrInterpolate(event == null ? void 0 : event.name)}</span></div></div><div class="lg:hidden block text-start"${_scopeId2}><h4 class="font-gotham-book text-[14px] text-blue-violet mt-[9px]"${_scopeId2}>${ssrInterpolate(event == null ? void 0 : event.name)}</h4><span class="block font-gotham-book text-[12px] text-black mt-[5px]"${_scopeId2}>${ssrInterpolate(event == null ? void 0 : event.short_description)}</span></div></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          onClick: ($event) => detailNew(event == null ? void 0 : event.id, "new"),
                          class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                        }, [
                          createVNode("div", {
                            class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                            style: bg_image((event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg")
                          }, [
                            createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                              createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(event == null ? void 0 : event.name), 1)
                            ])
                          ], 4),
                          createVNode("div", { class: "lg:hidden block text-start" }, [
                            createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(event == null ? void 0 : event.name), 1),
                            createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(event == null ? void 0 : event.short_description), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(events), (event, index) => {
                  return openBlock(), createBlock(unref(Slide), { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        onClick: ($event) => detailNew(event == null ? void 0 : event.id, "new"),
                        class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                      }, [
                        createVNode("div", {
                          class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                          style: bg_image((event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg")
                        }, [
                          createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                            createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(event == null ? void 0 : event.name), 1)
                          ])
                        ], 4),
                        createVNode("div", { class: "lg:hidden block text-start" }, [
                          createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(event == null ? void 0 : event.name), 1),
                          createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(event == null ? void 0 : event.short_description), 1)
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:hidden block"><div class="container mx-auto"><h4 class="text-base text-blue-violet font-gotham-bold uppercase text-center mt-[22px] mb-[19px]"> TRUY\u1EC0N TH\xD4NG N\xD3I V\u1EC0 EDUTALK </h4><div class="cursor-pointer"><img class="w-full object-cover h-[212px] rounded-[5px]"${ssrRenderAttr("src", `${((_u = unref(news_highlight)[0]) == null ? void 0 : _u.image) ? (_v = unref(news_highlight)[0]) == null ? void 0 : _v.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"><h3 class="mt-[10px] font-gotham-regular text-sm text-blue-violet">${ssrInterpolate((_w = unref(news_highlight)[0]) == null ? void 0 : _w.title)}</h3><h4 class="mt-[5px] font-gotham-light text-[8px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_x = unref(news_highlight)[0]) == null ? void 0 : _x.created_at)}</h4><h4 class="mt-[5px] mb-[40px] font-gotham-book text-xs text-black">${ssrInterpolate((_y = unref(news_highlight)[0]) == null ? void 0 : _y.short_description)}</h4></div></div><div class="bg-deep-purple py-[15px]"><div class="news container mx-auto">`);
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
            ssrRenderList(unref(news_normal), (new_normal, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mr-[10px] text-start cursor-pointer"${_scopeId2}><img class="w-full object-cover h-[100px] rounded-[5px]"${ssrRenderAttr("src", `${(new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"${_scopeId2}><h3 class="mt-[5px] font-gotham-regular text-[10px] text-blue-violet"${_scopeId2}>${ssrInterpolate(new_normal == null ? void 0 : new_normal.title)}</h3><h4 class="mt-[10px] font-gotham-book text-[8px] text-black block text-justify"${_scopeId2}>${ssrInterpolate(new_normal == null ? void 0 : new_normal.short_description)}</h4></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => detailNew(new_normal == null ? void 0 : new_normal.id, "new"),
                        class: "mr-[10px] text-start cursor-pointer"
                      }, [
                        createVNode("img", {
                          class: "w-full object-cover h-[100px] rounded-[5px]",
                          src: `${(new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg"}`,
                          alt: "new_one"
                        }, null, 8, ["src"]),
                        createVNode("h3", { class: "mt-[5px] font-gotham-regular text-[10px] text-blue-violet" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1),
                        createVNode("h4", { class: "mt-[10px] font-gotham-book text-[8px] text-black block text-justify" }, toDisplayString(new_normal == null ? void 0 : new_normal.short_description), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(news_normal), (new_normal, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      onClick: ($event) => detailNew(new_normal == null ? void 0 : new_normal.id, "new"),
                      class: "mr-[10px] text-start cursor-pointer"
                    }, [
                      createVNode("img", {
                        class: "w-full object-cover h-[100px] rounded-[5px]",
                        src: `${(new_normal == null ? void 0 : new_normal.avatar) ? new_normal == null ? void 0 : new_normal.avatar : "/_nuxt/assets/images/default.jpg"}`,
                        alt: "new_one"
                      }, null, 8, ["src"]),
                      createVNode("h3", { class: "mt-[5px] font-gotham-regular text-[10px] text-blue-violet" }, toDisplayString(new_normal == null ? void 0 : new_normal.title), 1),
                      createVNode("h4", { class: "mt-[10px] font-gotham-book text-[8px] text-black block text-justify" }, toDisplayString(new_normal == null ? void 0 : new_normal.short_description), 1)
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
      _push(`</div></div></div><div class="lg:hidden block"><div class="container mx-auto"><h4 class="text-base text-blue-violet font-gotham-bold uppercase text-center mt-[22px] mb-[19px]"> S\u1EF0 KI\u1EC6N </h4><div class="cursor-pointer"><img class="w-full object-cover h-[212px] rounded-[5px]"${ssrRenderAttr("src", `${((_z = unref(events)[0]) == null ? void 0 : _z.image) ? (_A = unref(events)[0]) == null ? void 0 : _A.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"><h3 class="mt-[10px] font-gotham-regular text-sm text-blue-violet">${ssrInterpolate((_B = unref(events)[0]) == null ? void 0 : _B.name)}</h3><h4 class="mt-[5px] font-gotham-light text-[8px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate((_C = unref(events)[0]) == null ? void 0 : _C.start_date)}</h4><h4 class="mt-[5px] mb-[40px] font-gotham-book text-xs text-black">${ssrInterpolate((_D = unref(events)[0]) == null ? void 0 : _D.short_description)}</h4></div></div><div class="bg-deep-purple py-[15px]"><div class="news container mx-auto">`);
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
            ssrRenderList(unref(events), (event, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full mr-[10px] text-start cursor-pointer"${_scopeId2}><img class="w-full object-cover h-[100px] rounded-[5px]"${ssrRenderAttr("src", `${(event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg"}`)} alt="new_one"${_scopeId2}><h3 class="mt-[5px] font-gotham-regular text-[10px] text-blue-violet"${_scopeId2}>${ssrInterpolate(event == null ? void 0 : event.name)}</h3><h4 class="mt-[10px] font-gotham-book text-[8px] text-black block text-justify"${_scopeId2}>${ssrInterpolate(event == null ? void 0 : event.short_description)}</h4></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => detailNew(event == null ? void 0 : event.id, "event"),
                        class: "w-full mr-[10px] text-start cursor-pointer"
                      }, [
                        createVNode("img", {
                          class: "w-full object-cover h-[100px] rounded-[5px]",
                          src: `${(event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg"}`,
                          alt: "new_one"
                        }, null, 8, ["src"]),
                        createVNode("h3", { class: "mt-[5px] font-gotham-regular text-[10px] text-blue-violet" }, toDisplayString(event == null ? void 0 : event.name), 1),
                        createVNode("h4", { class: "mt-[10px] font-gotham-book text-[8px] text-black block text-justify" }, toDisplayString(event == null ? void 0 : event.short_description), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(events), (event, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      onClick: ($event) => detailNew(event == null ? void 0 : event.id, "event"),
                      class: "w-full mr-[10px] text-start cursor-pointer"
                    }, [
                      createVNode("img", {
                        class: "w-full object-cover h-[100px] rounded-[5px]",
                        src: `${(event == null ? void 0 : event.image) ? event == null ? void 0 : event.image : "/_nuxt/assets/images/default.jpg"}`,
                        alt: "new_one"
                      }, null, 8, ["src"]),
                      createVNode("h3", { class: "mt-[5px] font-gotham-regular text-[10px] text-blue-violet" }, toDisplayString(event == null ? void 0 : event.name), 1),
                      createVNode("h4", { class: "mt-[10px] font-gotham-book text-[8px] text-black block text-justify" }, toDisplayString(event == null ? void 0 : event.short_description), 1)
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
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.f3923501.mjs.map
