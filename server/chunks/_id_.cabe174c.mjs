import { u as useHead } from './composables.a8e6231f.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { u as useFetchStore } from './fetch.16d8e39d.mjs';
import { s as storeToRefs } from './server.mjs';
import { useRoute, useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
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
    const store = useFetchStore();
    const { detail, events, news_update } = storeToRefs(store);
    const relates = ref([]);
    function bg_image(image) {
      return `background-image: url(${image})`;
    }
    function detailNew(tab_name) {
      router.push({
        path: "" + tab_name,
        query: { type: route.query.type }
      });
    }
    useHead({
      title: "Chi ti\u1EBFt tin t\u1EE9c",
      meta: [{ name: "description", content: "N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc" }],
      bodyAttrs: {
        class: "test"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto"><div class="mx-auto lg:pt-[63px] pt-10"><h3 class="font-gotham-bold lg:text-[32px] text-[14px] text-blue-violet">${ssrInterpolate(unref(route).query.type == "new" ? (_a = unref(detail)) == null ? void 0 : _a.title : (_b = unref(detail)) == null ? void 0 : _b.name)}</h3><h4 class="mt-[6px] font-gotham-light lg:text-base text-[8px] text-dark-silver"> \u0110\u0103ng ng\xE0y: ${ssrInterpolate(unref(route).query.type == "new" ? (_c = unref(detail)) == null ? void 0 : _c.created_at : (_d = unref(detail)) == null ? void 0 : _d.start_date)}</h4><div class="ql-editor">${unref(route).query.type == `new` ? unref(detail).content : unref(detail).description}</div></div><h1 class="w-fit lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase">${ssrInterpolate((unref(route).query.type == "new" ? "Tin" : "S\u1EF1 ki\u1EC7n") + " li\xEAn quan")}</h1><div class="news mt-[14px] lg:mb-[30px] mb-[20px] flex">`);
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
            ssrRenderList(relates.value, (relate, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-full flex flex-col mr-3 cursor-pointer"${_scopeId2}><div class="rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover" style="${ssrRenderStyle(bg_image((relate == null ? void 0 : relate.image) ? relate == null ? void 0 : relate.image : "/_nuxt/assets/images/default.jpg"))}"${_scopeId2}><div class="lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start"${_scopeId2}><span class="font-gotham-book text-spanish-yellow text-base"${_scopeId2}>${ssrInterpolate(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name)}</span></div></div><div class="lg:hidden block text-start"${_scopeId2}><h4 class="font-gotham-book text-[14px] text-blue-violet mt-[9px]"${_scopeId2}>${ssrInterpolate(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name)}</h4><span class="block font-gotham-book text-[12px] text-black mt-[5px]"${_scopeId2}>${ssrInterpolate(relate == null ? void 0 : relate.short_description)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => detailNew(relate == null ? void 0 : relate.id),
                        class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                      }, [
                        createVNode("div", {
                          class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                          style: bg_image((relate == null ? void 0 : relate.image) ? relate == null ? void 0 : relate.image : "/_nuxt/assets/images/default.jpg")
                        }, [
                          createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                            createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name), 1)
                          ])
                        ], 4),
                        createVNode("div", { class: "lg:hidden block text-start" }, [
                          createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name), 1),
                          createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(relate == null ? void 0 : relate.short_description), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(relates.value, (relate, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      onClick: ($event) => detailNew(relate == null ? void 0 : relate.id),
                      class: "w-full h-full flex flex-col mr-3 cursor-pointer"
                    }, [
                      createVNode("div", {
                        class: "rounded-[12px] lg:h-[420px] mb:h-[200px] h-[125px] relative bg-cover",
                        style: bg_image((relate == null ? void 0 : relate.image) ? relate == null ? void 0 : relate.image : "/_nuxt/assets/images/default.jpg")
                      }, [
                        createVNode("div", { class: "lg:flex hidden w-full h-[92px] bg-blue-violet absolute left-0 bottom-[30px] opacity-80 items-center px-4 text-start" }, [
                          createVNode("span", { class: "font-gotham-book text-spanish-yellow text-base" }, toDisplayString(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name), 1)
                        ])
                      ], 4),
                      createVNode("div", { class: "lg:hidden block text-start" }, [
                        createVNode("h4", { class: "font-gotham-book text-[14px] text-blue-violet mt-[9px]" }, toDisplayString(unref(route).query.type == "new" ? relate == null ? void 0 : relate.title : relate == null ? void 0 : relate.name), 1),
                        createVNode("span", { class: "block font-gotham-book text-[12px] text-black mt-[5px]" }, toDisplayString(relate == null ? void 0 : relate.short_description), 1)
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.cabe174c.mjs.map
