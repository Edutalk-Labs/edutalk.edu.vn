import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import vClickOutside from 'click-outside-vue3';
import { resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  directives: {
    clickOutside: vClickOutside.directive
  },
  name: "Sidebar",
  components: {},
  data() {
    return {
      active_link: "/",
      nav_links: [
        {
          to: "index",
          name: "Trang ch\u1EE7",
          active: true
        },
        {
          to: "ecosystem",
          name: "H\u1EC7 sinh th\xE1i",
          active: false
        },
        {
          to: "people-edutalk",
          name: "Ng\u01B0\u1EDDi Edutalk",
          active: false
        },
        {
          to: "news",
          name: "Tin t\u1EE9c & S\u1EF1 ki\u1EC7n",
          active: false
        },
        {
          to: "https://tuyendung.edutalk.edu.vn",
          name: "Tuy\u1EC3n d\u1EE5ng",
          active: false
        },
        {
          to: "contact",
          name: "Li\xEAn h\u1EC7",
          active: false
        }
      ],
      icons: [
        {
          name: "facebook"
        },
        {
          name: "instagram"
        },
        {
          name: "twitter"
        },
        {
          name: "youtube"
        }
      ]
    };
  },
  props: ["isSideBar"],
  created() {
  },
  mounted() {
  },
  computed: {},
  methods: {
    checkRouteInclude(nav_current) {
      var _a;
      return (_a = this.$route.name) == null ? void 0 : _a.toString().includes(nav_current);
    },
    onClickOutside(event) {
      this.$emit("clicked");
    },
    toRouteNav(name_route) {
      var _a;
      this.active_link = name_route;
      if (name_route !== "https://tuyendung.edutalk.edu.vn") {
        this.$emit("clicked");
      }
      if (name_route == "contact") {
        (_a = document.getElementById("footer")) == null ? void 0 : _a.scrollIntoView();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_click_outside = resolveDirective("click-outside");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed z-auto inset-0 lg:hidden" id="headlessui-dialog-6" role="dialog" aria-modal="true" data-headlessui-state="open"><div class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" id="headlessui-dialog-overlay-8" aria-hidden="true" data-headlessui-state="open"></div><div${ssrRenderAttrs(mergeProps({ class: "fixed w-[280px] h-full max-w-xs bg-blue-violet shadow-lg border-r-[1px] border-r-white border-solid" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, $options.onClickOutside)))}><ul class="mt-[78px] font-gotham-book text-white text-[16px]"><!--[-->`);
  ssrRenderList($data.nav_links, (nav_link, index) => {
    _push(`<li class="${ssrRenderClass(`flex items-center h-[61px] ${$options.checkRouteInclude(nav_link.to) ? "bg-deep-purple-20" : ""} ${nav_link.to == "contact" ? "" : ""}`)}">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "ml-[24px]",
      to: `${nav_link.to == `index` ? `/` : nav_link.to == "contact" ? "" : nav_link.to}`,
      rel: nav_link.to,
      target: `${nav_link.to == "https://tuyendung.edutalk.edu.vn" ? `_blank` : ""}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(nav_link.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(nav_link.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--><div class="absolute bottom-[70px]"><li class="flex flex-row mt-[21px] ml-[24px]"><!--[-->`);
  ssrRenderList($data.icons, (icon, index) => {
    _push(`<img class="${ssrRenderClass(`w-[31px] h-[31px] ${icon.name == "youtube" ? "" : "mr-3"}`)}"${ssrRenderAttr("src", `/_nuxt/assets/images/icons/${icon.name}.svg`)}${ssrRenderAttr("alt", `${icon.name}_icon`)}>`);
  });
  _push(`<!--]--></li></div></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Sidebar as default };
//# sourceMappingURL=Sidebar.01003a33.mjs.map
