import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { defineComponent, ref, unref, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveDirective } from 'vue';
import { s as storeToRefs, _ as _export_sfc } from './server.mjs';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import vClickOutside from 'click-outside-vue3';
import { u as useHead } from './composables.a8e6231f.mjs';
import { u as useFetchStore } from './fetch.16d8e39d.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
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

const _sfc_main$4 = {
  name: "BannerPeople",
  props: ["people"],
  mounted() {
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  _push(`<div${ssrRenderAttrs(_attrs)}><img class="w-webkit h-[35vw]"${ssrRenderAttr("src", `${(_b = (_a = $props.people) == null ? void 0 : _a.banner_items[0]) == null ? void 0 : _b.url}`)} alt="banner_people"></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerPeople.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  name: "LeaderShipEdutalk",
  components: {
    Carousel,
    Slide,
    Pagination
  },
  props: ["people"],
  mounted() {
    for (let index = 1; index <= this.people.leader_edutalk_items.length; index++) {
      document.querySelectorAll(`.flip-card-inner-${index}`).forEach((element) => {
        element == null ? void 0 : element.classList.toggle("inner-card");
      });
    }
  },
  data() {
    return {
      settings: {
        itemsToShow: 1.3,
        snapAlign: "start",
        wrapAround: true,
        autoplay: 2500,
        pauseAutoplayOnHover: true
      },
      breakpoints: {
        768: {
          itemsToShow: 2.5,
          snapAlign: "start"
        },
        1024: {
          itemsToShow: 2.5,
          snapAlign: "start"
        },
        1440: {
          itemsToShow: 4,
          snapAlign: "start"
        },
        1920: {
          itemsToShow: 4,
          snapAlign: "start"
        },
        2560: {
          itemsToShow: 4,
          snapAlign: "start"
        }
      }
    };
  },
  methods: {
    bannerBgImage(image) {
      return `background-image: url(${image})`;
    },
    clickSLip(index) {
      let flipCardInner = document.querySelectorAll(
        `.flip-card-inner-${index}`
      );
      flipCardInner.forEach((flipCard) => {
        var _a;
        (_a = flipCard == null ? void 0 : flipCard.classList) == null ? void 0 : _a.toggle("tranform-partner-y");
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_pagination = resolveComponent("pagination");
  _push(`<!--[--><h1 class="w-fit lg:mt-[60px] mt-[22px] lg:text-[32px] text-base font-gotham-bold text-blue-violet uppercase lg:mx-0 mx-auto"> BAN L\xC3NH \u0110\u1EA0O </h1><div class="leader-ship mt-[19px] flex">`);
  _push(ssrRenderComponent(_component_carousel, {
    settings: $data.settings,
    breakpoints: $data.breakpoints
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.people.leader_edutalk_items, (leader, index) => {
          _push2(ssrRenderComponent(_component_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d, _e, _f;
              if (_push3) {
                _push3(`<div class="${ssrRenderClass(`flip-card-inner-${index + 1} lg:w-[95%] w-full relative rounded-[12px] py-[5px] cursor-pointer mr-4`)}"${_scopeId2}><div class="flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]" style="${ssrRenderStyle($options.bannerBgImage((_a = leader == null ? void 0 : leader.avata_leader[0]) == null ? void 0 : _a.url))}"${ssrRenderAttr("alt", leader == null ? void 0 : leader.name_leader)}${_scopeId2}><div class="absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 lg:pl-[14px] pl-[9px]"${_scopeId2}><div class="flex flex-col h-full justify-center"${_scopeId2}><h2 class="font-gotham-bold text-blue-violet lg:text-xl text-[18px] lg:text-center text-start uppercase"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.name_leader)}</h2><h3 class="font-gotham-book text-blue-violet lg:text-xl text-[18px] lg:text-center text-start"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.level)}</h3></div></div></div><div class="flip-card-back rounded-[12px] shadow-2xl lg:px-[43px] px-[33px] pt-[14px] text-start"${_scopeId2}><h2 class="font-gotham-bold text-blue-violet lg:text-xl text-[14px] uppercase"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.name_leader)}</h2><h3 class="font-gotham-book text-blue-violet lg:text-xl text-[14px]"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.level)}</h3><div class="lg:w-[265px] w-[200px] h-[2px] bg-blue-violet mt-3 mb-4"${_scopeId2}></div><span class="font-gotham-book lg:text-base text-[12px] block"${_scopeId2}>${ssrInterpolate(((_b = leader == null ? void 0 : leader.description) == null ? void 0 : _b.length) > 200 ? ((_c = leader == null ? void 0 : leader.description) == null ? void 0 : _c.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: ($event) => $options.clickSLip(index + 1),
                    class: `flip-card-inner-${index + 1} lg:w-[95%] w-full relative rounded-[12px] py-[5px] cursor-pointer mr-4`
                  }, [
                    createVNode("div", {
                      class: "flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]",
                      style: $options.bannerBgImage((_d = leader == null ? void 0 : leader.avata_leader[0]) == null ? void 0 : _d.url),
                      alt: leader == null ? void 0 : leader.name_leader
                    }, [
                      createVNode("div", { class: "absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 lg:pl-[14px] pl-[9px]" }, [
                        createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                          createVNode("h2", { class: "font-gotham-bold text-blue-violet lg:text-xl text-[18px] lg:text-center text-start uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_leader), 1),
                          createVNode("h3", { class: "font-gotham-book text-blue-violet lg:text-xl text-[18px] lg:text-center text-start" }, toDisplayString(leader == null ? void 0 : leader.level), 1)
                        ])
                      ])
                    ], 12, ["alt"]),
                    createVNode("div", { class: "flip-card-back rounded-[12px] shadow-2xl lg:px-[43px] px-[33px] pt-[14px] text-start" }, [
                      createVNode("h2", { class: "font-gotham-bold text-blue-violet lg:text-xl text-[14px] uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_leader), 1),
                      createVNode("h3", { class: "font-gotham-book text-blue-violet lg:text-xl text-[14px]" }, toDisplayString(leader == null ? void 0 : leader.level), 1),
                      createVNode("div", { class: "lg:w-[265px] w-[200px] h-[2px] bg-blue-violet mt-3 mb-4" }),
                      createVNode("span", { class: "font-gotham-book lg:text-base text-[12px] block" }, toDisplayString(((_e = leader == null ? void 0 : leader.description) == null ? void 0 : _e.length) > 200 ? ((_f = leader == null ? void 0 : leader.description) == null ? void 0 : _f.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description), 1)
                    ])
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
          (openBlock(true), createBlock(Fragment, null, renderList($props.people.leader_edutalk_items, (leader, index) => {
            return openBlock(), createBlock(_component_slide, { key: index }, {
              default: withCtx(() => {
                var _a, _b, _c;
                return [
                  createVNode("div", {
                    onClick: ($event) => $options.clickSLip(index + 1),
                    class: `flip-card-inner-${index + 1} lg:w-[95%] w-full relative rounded-[12px] py-[5px] cursor-pointer mr-4`
                  }, [
                    createVNode("div", {
                      class: "flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]",
                      style: $options.bannerBgImage((_a = leader == null ? void 0 : leader.avata_leader[0]) == null ? void 0 : _a.url),
                      alt: leader == null ? void 0 : leader.name_leader
                    }, [
                      createVNode("div", { class: "absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 lg:pl-[14px] pl-[9px]" }, [
                        createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                          createVNode("h2", { class: "font-gotham-bold text-blue-violet lg:text-xl text-[18px] lg:text-center text-start uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_leader), 1),
                          createVNode("h3", { class: "font-gotham-book text-blue-violet lg:text-xl text-[18px] lg:text-center text-start" }, toDisplayString(leader == null ? void 0 : leader.level), 1)
                        ])
                      ])
                    ], 12, ["alt"]),
                    createVNode("div", { class: "flip-card-back rounded-[12px] shadow-2xl lg:px-[43px] px-[33px] pt-[14px] text-start" }, [
                      createVNode("h2", { class: "font-gotham-bold text-blue-violet lg:text-xl text-[14px] uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_leader), 1),
                      createVNode("h3", { class: "font-gotham-book text-blue-violet lg:text-xl text-[14px]" }, toDisplayString(leader == null ? void 0 : leader.level), 1),
                      createVNode("div", { class: "lg:w-[265px] w-[200px] h-[2px] bg-blue-violet mt-3 mb-4" }),
                      createVNode("span", { class: "font-gotham-book lg:text-base text-[12px] block" }, toDisplayString(((_b = leader == null ? void 0 : leader.description) == null ? void 0 : _b.length) > 200 ? ((_c = leader == null ? void 0 : leader.description) == null ? void 0 : _c.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description), 1)
                    ])
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeaderShipEdutalk.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: { Carousel, Slide, Pagination, Navigation },
  name: "TeamEdutalk",
  props: ["people"],
  data() {
    return {
      isDetail: false,
      outSide: false,
      detail_member: {},
      leader_ships_mobile: [],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
        autoplay: 2500,
        pauseAutoplayOnHover: true
      },
      breakpoints: {
        768: {
          itemsToShow: 1,
          snapAlign: "start"
        },
        1024: {
          itemsToShow: 2.5,
          snapAlign: "start"
        },
        1440: {
          itemsToShow: 4,
          snapAlign: "start"
        },
        1920: {
          itemsToShow: 4,
          snapAlign: "start"
        },
        2560: {
          itemsToShow: 4,
          snapAlign: "start"
        }
      }
    };
  },
  methods: {
    onClickOutside(event) {
      this.isDetail = false;
      this.outSide = true;
    },
    detailMember(item) {
      if (!this.outSide) {
        this.isDetail = true;
        this.detail_member = item;
      }
      this.outSide = false;
    },
    bannerBgImage(image) {
      return `background-image: url(${image})`;
    },
    clickSLip(index) {
      let flipCardInner = document.querySelectorAll(
        `.flip-card-team-inner-${index}`
      );
      flipCardInner.forEach((flipCard) => {
        var _a;
        (_a = flipCard == null ? void 0 : flipCard.classList) == null ? void 0 : _a.toggle("tranform-partner-y");
      });
    }
  },
  mounted() {
    let button_crs = document.querySelectorAll(".carousel__icon title");
    button_crs == null ? void 0 : button_crs.forEach((element) => {
      element.remove();
    });
    let arr_person = [];
    this.people.personnel_edutalk_items.forEach((person, index) => {
      if (arr_person.length == 3) {
        arr_person.push(person);
        this.leader_ships_mobile.push(arr_person);
        arr_person = [];
      } else {
        arr_person.push(person);
        if (index + 1 == this.people.personnel_edutalk_items.length) {
          this.leader_ships_mobile.push(arr_person);
        }
      }
    });
    for (let index = 1; index <= this.people.personnel_edutalk_items.length; index++) {
      document.querySelectorAll(`.flip-card-team-inner-${index}`).forEach((element) => {
        element == null ? void 0 : element.classList.toggle("inner-card");
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e;
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_navigation = resolveComponent("navigation");
  const _component_Icon = resolveComponent("Icon");
  const _component_pagination = resolveComponent("pagination");
  const _directive_click_outside = resolveDirective("click-outside");
  _push(`<!--[--><h1 class="w-fit mt-[22px] lg:text-[32px] text-base font-gotham-bold text-blue-violet uppercase lg:mx-0 mx-auto"> \u0110\u1ED8I NG\u0168 EDUTALK </h1><div class="lg:flex hidden team-member mt-[19px] mb-[52px]">`);
  _push(ssrRenderComponent(_component_carousel, {
    settings: $data.settings,
    breakpoints: $data.breakpoints
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_navigation, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_navigation)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.people.personnel_edutalk_items, (leader, index) => {
          _push2(ssrRenderComponent(_component_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a2, _b2, _c2, _d2, _e2, _f;
              if (_push3) {
                _push3(`<div class="${ssrRenderClass(`flip-card-team-inner-${index + 1} w-[95%] relative rounded-[12px] py-[5px] cursor-pointer`)}"${_scopeId2}><div class="flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]" style="${ssrRenderStyle($options.bannerBgImage((_a2 = leader == null ? void 0 : leader.avata_personnel[0]) == null ? void 0 : _a2.url))}"${ssrRenderAttr("alt", leader == null ? void 0 : leader.name_personnel)}${_scopeId2}><div class="absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 pl-[14px]"${_scopeId2}><div class="flex flex-col h-full justify-center"${_scopeId2}><h2 class="font-gotham-bold text-blue-violet text-xl uppercase"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.name_personnel)}</h2><h3 class="font-gotham-book text-blue-violet text-xl"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.level)}</h3></div></div></div><div class="flip-card-back rounded-[12px] shadow-2xl px-[33px] pt-[14px] text-start"${_scopeId2}><h2 class="font-gotham-bold text-blue-violet text-xl uppercase"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.name_personnel)}</h2><h3 class="font-gotham-book text-blue-violet text-xl"${_scopeId2}>${ssrInterpolate(leader == null ? void 0 : leader.level)}</h3><div class="w-[265px] h-[2px] bg-blue-violet mt-3 mb-4"${_scopeId2}></div><span class="font-gotham-book text-base"${_scopeId2}>${ssrInterpolate(((_b2 = leader == null ? void 0 : leader.description) == null ? void 0 : _b2.length) > 200 ? ((_c2 = leader == null ? void 0 : leader.description) == null ? void 0 : _c2.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: ($event) => $options.clickSLip(index + 1),
                    class: `flip-card-team-inner-${index + 1} w-[95%] relative rounded-[12px] py-[5px] cursor-pointer`
                  }, [
                    createVNode("div", {
                      class: "flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]",
                      style: $options.bannerBgImage((_d2 = leader == null ? void 0 : leader.avata_personnel[0]) == null ? void 0 : _d2.url),
                      alt: leader == null ? void 0 : leader.name_personnel
                    }, [
                      createVNode("div", { class: "absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 pl-[14px]" }, [
                        createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                          createVNode("h2", { class: "font-gotham-bold text-blue-violet text-xl uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_personnel), 1),
                          createVNode("h3", { class: "font-gotham-book text-blue-violet text-xl" }, toDisplayString(leader == null ? void 0 : leader.level), 1)
                        ])
                      ])
                    ], 12, ["alt"]),
                    createVNode("div", { class: "flip-card-back rounded-[12px] shadow-2xl px-[33px] pt-[14px] text-start" }, [
                      createVNode("h2", { class: "font-gotham-bold text-blue-violet text-xl uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_personnel), 1),
                      createVNode("h3", { class: "font-gotham-book text-blue-violet text-xl" }, toDisplayString(leader == null ? void 0 : leader.level), 1),
                      createVNode("div", { class: "w-[265px] h-[2px] bg-blue-violet mt-3 mb-4" }),
                      createVNode("span", { class: "font-gotham-book text-base" }, toDisplayString(((_e2 = leader == null ? void 0 : leader.description) == null ? void 0 : _e2.length) > 200 ? ((_f = leader == null ? void 0 : leader.description) == null ? void 0 : _f.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description), 1)
                    ])
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
          (openBlock(true), createBlock(Fragment, null, renderList($props.people.personnel_edutalk_items, (leader, index) => {
            return openBlock(), createBlock(_component_slide, { key: index }, {
              default: withCtx(() => {
                var _a2, _b2, _c2;
                return [
                  createVNode("div", {
                    onClick: ($event) => $options.clickSLip(index + 1),
                    class: `flip-card-team-inner-${index + 1} w-[95%] relative rounded-[12px] py-[5px] cursor-pointer`
                  }, [
                    createVNode("div", {
                      class: "flip-card-front relative w-full 2xl:h-[400px] xxl:h-[360px] lg:h-[360px] h-[300px] bg-no-repeat bg-cover rounded-[12px]",
                      style: $options.bannerBgImage((_a2 = leader == null ? void 0 : leader.avata_personnel[0]) == null ? void 0 : _a2.url),
                      alt: leader == null ? void 0 : leader.name_personnel
                    }, [
                      createVNode("div", { class: "absolute w-full h-[90px] rounded-b-[12px] left-0 bottom-0 bg-white-opacity-0.7 pl-[14px]" }, [
                        createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                          createVNode("h2", { class: "font-gotham-bold text-blue-violet text-xl uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_personnel), 1),
                          createVNode("h3", { class: "font-gotham-book text-blue-violet text-xl" }, toDisplayString(leader == null ? void 0 : leader.level), 1)
                        ])
                      ])
                    ], 12, ["alt"]),
                    createVNode("div", { class: "flip-card-back rounded-[12px] shadow-2xl px-[33px] pt-[14px] text-start" }, [
                      createVNode("h2", { class: "font-gotham-bold text-blue-violet text-xl uppercase" }, toDisplayString(leader == null ? void 0 : leader.name_personnel), 1),
                      createVNode("h3", { class: "font-gotham-book text-blue-violet text-xl" }, toDisplayString(leader == null ? void 0 : leader.level), 1),
                      createVNode("div", { class: "w-[265px] h-[2px] bg-blue-violet mt-3 mb-4" }),
                      createVNode("span", { class: "font-gotham-book text-base" }, toDisplayString(((_b2 = leader == null ? void 0 : leader.description) == null ? void 0 : _b2.length) > 200 ? ((_c2 = leader == null ? void 0 : leader.description) == null ? void 0 : _c2.slice(0, 200)) + "...." : leader == null ? void 0 : leader.description), 1)
                    ])
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
  _push(`</div><div class="lg:hidden relative mx-[-24px] mb-[20px]">`);
  if ($data.isDetail) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute bg-white w-4/5 h-[320px] z-[1] inset-0 m-auto px-[31px] pt-[31px] pb-[11px] rounded-[5px]" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, $options.onClickOutside)))}>`);
    _push(ssrRenderComponent(_component_Icon, {
      onClick: ($event) => $data.isDetail = false,
      class: "absolute right-[31px] top-[20px]",
      name: "material-symbols:close"
    }, null, _parent));
    _push(`<h2 class="font-gotham-bold text-blue-violet text-[14px] uppercase">${ssrInterpolate($data.detail_member.name_personnel)}</h2><h3 class="font-gotham-book text-blue-violet text-[14px]">${ssrInterpolate($data.detail_member.level)}</h3><div class="w-5/6 h-[2px] bg-blue-violet mt-2 mb-2"></div><span class="font-gotham-book text-[11px]">${ssrInterpolate(((_b = (_a = $data.detail_member) == null ? void 0 : _a.description) == null ? void 0 : _b.length) > 300 ? ((_d = (_c = $data.detail_member) == null ? void 0 : _c.description) == null ? void 0 : _d.slice(0, 300)) + "...." : (_e = $data.detail_member) == null ? void 0 : _e.description)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(`bg-deep-purple pb-5 ${$data.isDetail && "opacity-50"}`)}"><div class="container pt-[20px] team-member">`);
  _push(ssrRenderComponent(_component_carousel, {
    settings: $data.settings,
    breakpoints: $data.breakpoints
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.leader_ships_mobile, (leader, index) => {
          _push2(ssrRenderComponent(_component_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="grid grid-cols-8 gap-4 w-full mr-2"${_scopeId2}><!--[-->`);
                ssrRenderList(leader, (leader_each, index2) => {
                  _push3(`<div class="col-span-4"${_scopeId2}><div class="relative mb:h-[350px] h-[200px] bg-cover rounded-[5px]" style="${ssrRenderStyle($options.bannerBgImage(leader_each == null ? void 0 : leader_each.avata_personnel[0].url))}"${ssrRenderAttr("alt", leader_each == null ? void 0 : leader_each.name_personnel)}${_scopeId2}><div class="absolute w-full h-[47px] rounded-b-[5px] left-0 bottom-0 bg-white-opacity-0.7 pl-[6px]"${_scopeId2}><div class="flex flex-col h-full justify-center"${_scopeId2}><h2 class="font-gotham-bold text-blue-violet text-[10px] text-start uppercase"${_scopeId2}>${ssrInterpolate(leader_each == null ? void 0 : leader_each.name_personnel)}</h2><h3 class="font-gotham-book text-blue-violet text-[10px] text-start"${_scopeId2}>${ssrInterpolate(leader_each.level)}</h3></div></div></div></div>`);
                });
                _push3(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "grid grid-cols-8 gap-4 w-full mr-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(leader, (leader_each, index2) => {
                      return openBlock(), createBlock("div", {
                        onClick: ($event) => $options.detailMember(leader_each),
                        key: index2,
                        class: "col-span-4"
                      }, [
                        createVNode("div", {
                          class: "relative mb:h-[350px] h-[200px] bg-cover rounded-[5px]",
                          style: $options.bannerBgImage(leader_each == null ? void 0 : leader_each.avata_personnel[0].url),
                          alt: leader_each == null ? void 0 : leader_each.name_personnel
                        }, [
                          createVNode("div", { class: "absolute w-full h-[47px] rounded-b-[5px] left-0 bottom-0 bg-white-opacity-0.7 pl-[6px]" }, [
                            createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                              createVNode("h2", { class: "font-gotham-bold text-blue-violet text-[10px] text-start uppercase" }, toDisplayString(leader_each == null ? void 0 : leader_each.name_personnel), 1),
                              createVNode("h3", { class: "font-gotham-book text-blue-violet text-[10px] text-start" }, toDisplayString(leader_each.level), 1)
                            ])
                          ])
                        ], 12, ["alt"])
                      ], 8, ["onClick"]);
                    }), 128))
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.leader_ships_mobile, (leader, index) => {
            return openBlock(), createBlock(_component_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "grid grid-cols-8 gap-4 w-full mr-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(leader, (leader_each, index2) => {
                    return openBlock(), createBlock("div", {
                      onClick: ($event) => $options.detailMember(leader_each),
                      key: index2,
                      class: "col-span-4"
                    }, [
                      createVNode("div", {
                        class: "relative mb:h-[350px] h-[200px] bg-cover rounded-[5px]",
                        style: $options.bannerBgImage(leader_each == null ? void 0 : leader_each.avata_personnel[0].url),
                        alt: leader_each == null ? void 0 : leader_each.name_personnel
                      }, [
                        createVNode("div", { class: "absolute w-full h-[47px] rounded-b-[5px] left-0 bottom-0 bg-white-opacity-0.7 pl-[6px]" }, [
                          createVNode("div", { class: "flex flex-col h-full justify-center" }, [
                            createVNode("h2", { class: "font-gotham-bold text-blue-violet text-[10px] text-start uppercase" }, toDisplayString(leader_each == null ? void 0 : leader_each.name_personnel), 1),
                            createVNode("h3", { class: "font-gotham-book text-blue-violet text-[10px] text-start" }, toDisplayString(leader_each.level), 1)
                          ])
                        ])
                      ], 12, ["alt"])
                    ], 8, ["onClick"]);
                  }), 128))
                ])
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamEdutalk.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "JourneysEdutalk",
  props: ["people"],
  mounted() {
  },
  methods: {
    GFG_Fun(url) {
      var VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      return url.match(VID_REGEX)[1];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-4 lg:mb-16 mb-[15px]" }, _attrs))}><div id="youtube" class="lg:col-span-7 col-span-12 lg:h-[518px] mb:h-[300px] h-[180px]"><iframe width="560" height="315"${ssrRenderAttr("src", `${$props.people.url_video}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=${$options.GFG_Fun($props.people.url_video)}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="lg:col-span-5 col-span-12 lg:pt-10 pt-0 lg:pl-[56px] pl-0"><h3 class="lg:text-[30px] text-[14px] font-gotham-regular text-blue-violet lg:mb-10 mb-[5px]">${ssrInterpolate($props.people.title_video)}</h3><span class="font-gotham-book lg:text-[16px] text-[12px] block text-justify">${ssrInterpolate($props.people.des_video)}</span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JourneysEdutalk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFetchStore();
    const { people } = storeToRefs(store);
    const loading = ref(true);
    useHead({
      title: "Con ng\u01B0\u1EDDi Edutalk",
      meta: [{ name: "description", content: "N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc" }],
      bodyAttrs: {
        class: "test"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerPeople = __nuxt_component_0;
      const _component_LeaderShipEdutalk = __nuxt_component_1;
      const _component_TeamEdutalk = __nuxt_component_2;
      const _component_JourneysEdutalk = __nuxt_component_3;
      if (!unref(loading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_BannerPeople, { people: unref(people) }, null, _parent));
        _push(`<div class="container mx-auto">`);
        _push(ssrRenderComponent(_component_LeaderShipEdutalk, { people: unref(people) }, null, _parent));
        _push(ssrRenderComponent(_component_TeamEdutalk, { people: unref(people) }, null, _parent));
        _push(ssrRenderComponent(_component_JourneysEdutalk, { people: unref(people) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[40vw] bg-deep-purple-20" }, _attrs))}></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people-edutalk/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.9946357f.mjs.map
