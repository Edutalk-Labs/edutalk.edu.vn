import { defineComponent, useSSRContext, withCtx, renderSlot, ref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, mergeProps, createTextVNode, defineAsyncComponent } from 'vue';
import { u as useHead } from './composables.a8e6231f.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
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

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAtCAYAAABGfP5DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXISURBVHgB7VtdUhtHEO5Zx0Ceso7zznICyAlYHpNQBT6BxAlQToB8AvAJJE4guRKSR4kTWDkBmwPYKE+2cUmdbm0PjJad0QivBHLNVzW1u6Pu+ftmZrt7VgoCFoIvf8W7Y4xSQEhQwWAdxl312/Bfmzwi7tJlR9KAUlcpdSuvIKBSfPw7TtToWUspSIu/ERlnG/sffi/kxXTpUEpLijsjsibygaiK8fnixysa1sQqgNhe3/9wdPeIJA+Jo8g2kXUUQUBluLmIj50kMZSq87bIt0RSDdwkMeq8LQaiKgRCVPeRG+Gzhtw2wA+NQFSlUDteUoBazkue5QJRj4JoCHMiEFUlFGQ+Ygio5bzkCYNAVJUgi85HLELoyq2XPKEbiKoQazfjN8TWwCWjyJda239/PrlX6jXkzq0L7EudB6IqhHo1HI6j8SuwrJScpDuHFzsxO7t7YF9ZweFdND7+8VMaRePcXwIYrt+Mz5lIU+bTny9762pU59AS+UpsAR7ITyz3lkjKtGwgagGgQd+EPCSUGNm8xQ3M+N3ni5fIhkWE4+bzL0RMgUgTgaiKQSSdgtuRbcq7aUJUQXmAoCZkRfSuU9G4+/zX4SU/B6IqhISE2h6iKZF1eY+o0jKhv7H/fi8YE9XCNyRU95QDjsJToPckEFUtfENCKcwBRJUGolYASmESiFoFoIoDUasAhcNA1IogEFUt5j6+8EUgqlrMCrBOw/NYhENJCyeKv7LhkIqkGFYAus2WfFcf2I/yX1XkzHqJjSFbxorahvyAjNMprAYOofxQj9vfsSnRzP+HLj9DHp3IYAbG0YhDSU5iKXSRralRM2x9FYO3Kf68i9IWJQ7RbRmJSayDkPP9L8OMyNLEFgkbknZ/HUYpR9e/gxWGfF3ap5SYUemnBPOoQjCgdvf1A5NFF/7O74jPpz4BxBtMUiGSvtJErSpsk0rIKd0Kw9a3IphaUbYDL5oBb12FiCWkP3L30pO6EnnMbLNMtrcJ+GjAyEsM/UPKK5uJfEo6lPZtS/ti0WP5TNp5CRVAW4oL24bF7OyhHVeUDiy6NUrXDr2a8dwy9E6M/BNH227LMvJa6IdNka8X2qSTRgcNc1zLl7SlRalnaefJrL58NQqNdmG3oLfroWOSWAlRJfVvzuhfQim1/FaTNvaMvLmIwiWQFOH0h+oZ5F/FvBDTUpuOGs2C/plxz155Q/Q56a9xHt3JFZO5b/mNP91qUkpnEV4GIacJxhH7QoDTW96Oh4zeThJztts6WdB9lBU1C0ZfUnn2WlHLWEkabPVpcsjBUrZYVde41/Lm4AwcL9Bz+AaxtJUkYKsvNiqvWeTMlablt4w8VzDyGp4QMLcAfyhkH8McWDZJDNM85w60PXTmNT0XFvr3hZDDZNSh/I9j80S9U0kNIukNLAkPiUw8+sDPA37/0IXfK0wWGz8cOM3gfj+uwA+ZlMXvsXP202AJMIliy2gLHoanfHxx6xw7nOoE/JFBbt32KfVId28ZZLExoStJcL7zIvPd8xCiZnYOqzm/SsFt7MwNOc5IIZ8APVzCORsTZe7PzpdqoUFm2OXwASZyZtynFpkDi7zGf3J9AV+HuQd62WTx1teGu4Fqii/B5rg543ckJSDWnsTQ+qLLjezTM+v1DV3XqrmU31mXnc13MH0uw/U1DPl2SRmZXJlQm0HAMpOJ5FhVekJMlcGD79rWmCwZrz4sYxtEd5wPbU6nOIrXM3Q6xn2roH+MD6i3UEZH2nBg5HHscpfzjDZe4f0Q2CbeOa2nRv6u5B0X5FtYHkLaljre4SJXlnTsFD0GvUSXB6KHfmiV6NfQHWvsoWNblbZfuerDfCBddXDf40K5vZJyWmgPyi6ULFVSYQr5FqcHh7cLXs5917LG3HLaEb3Y0NXQRwCvLfqpUS/Xw++fru9WIvrbUjfXey++V5AZipy1XyR/KPKTIxvMV20s8cEyeZY9BI+joXnxPz7wz+65hkdoAAAAAElFTkSuQmCC";
const active_nav_style = "border-y-[5px] border-y-[5px] border-b-spanish-yellow border-t-blue-violet border-solid";
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const nav_links = ref([
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
    ]);
    async function toHome() {
      await router.push({
        name: "index"
      });
      changeNav();
    }
    async function toNav(name) {
      var _a;
      if (name == "https://tuyendung.edutalk.edu.vn") {
        window.open("https://tuyendung.edutalk.edu.vn", "_blank");
      } else if (name == "contact") {
        (_a = document.getElementById("footer")) == null ? void 0 : _a.scrollIntoView();
      } else {
        await router.push({
          name
        });
        changeNav();
      }
    }
    function changeNav() {
      nav_links.value.forEach((element, index) => {
        let to_route = element.to;
        if (route.name.includes(to_route)) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(ssrRenderComponent(_component_Head, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="lg:flex hidden sticky top-0 z-20 bg-blue-violet"${_scopeId}><div id="headerDesktop" class="container mx-auto"${_scopeId}><div id="header-container" class="flex justify-between items-center h-20 z-20 duration-200"${_scopeId}><img id="logo" class="cursor-pointer duration-500"${ssrRenderAttr("src", _imports_1$1)} width="86" alt="logo-header"${_scopeId}>`);
            if (nav_links.value) {
              _push2(`<ul class="flex justify-between md:text-base text-sm text-white xl:w-2/3 lg:w-2/3 md:w-2/3 w-2/3 h-full"${_scopeId}><!--[-->`);
              ssrRenderList(nav_links.value || [], (nav_link, index) => {
                _push2(`<li class="${ssrRenderClass(`cursor-pointer font-gotham-regular h-full flex items-center justify-center pl-1 pr-2.5 ${nav_link.active && active_nav_style}`)}"${_scopeId}>${ssrInterpolate(nav_link.name)}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></header>`);
          } else {
            return [
              createVNode("header", { class: "lg:flex hidden sticky top-0 z-20 bg-blue-violet" }, [
                createVNode("div", {
                  id: "headerDesktop",
                  class: "container mx-auto"
                }, [
                  createVNode("div", {
                    id: "header-container",
                    class: "flex justify-between items-center h-20 z-20 duration-200"
                  }, [
                    createVNode("img", {
                      id: "logo",
                      class: "cursor-pointer duration-500",
                      src: _imports_1$1,
                      width: "86",
                      alt: "logo-header",
                      onClick: toHome
                    }),
                    nav_links.value ? (openBlock(), createBlock("ul", {
                      key: 0,
                      class: "flex justify-between md:text-base text-sm text-white xl:w-2/3 lg:w-2/3 md:w-2/3 w-2/3 h-full"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(nav_links.value || [], (nav_link, index) => {
                        return openBlock(), createBlock("li", {
                          key: index,
                          class: `cursor-pointer font-gotham-regular h-full flex items-center justify-center pl-1 pr-2.5 ${nav_link.active && active_nav_style}`,
                          onClick: ($event) => toNav(nav_link.to)
                        }, toDisplayString(nav_link.name), 11, ["onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  name: "NavbarMobile",
  setup() {
    const count = ref(0);
    const isSideBar = ref(false);
    return {
      count,
      isSideBar
    };
  },
  mounted() {
  },
  methods: {
    openNavbar() {
      this.isSideBar = true;
    },
    onClickChildNav() {
      this.isSideBar = false;
    },
    toHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
const _imports_0$2 = "" + globalThis.__buildAssetsURL("nav_head.4e44e20e.svg");
const _imports_2$1 = "" + globalThis.__buildAssetsURL("button_navbar_mobile.465bec30.svg");
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Sidebar.01003a33.mjs').then((m) => m.default || m));
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LazySidebar = __nuxt_component_0_lazy;
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="headerMobile" class="lg:hidden flex bg-blue-violet"><div class="container w-webkit h-[78px] flex justify-between items-center"><img${ssrRenderAttr("src", _imports_0$2)} height="25" width="30" alt="nav-header"><img${ssrRenderAttr("src", _imports_1$1)} height="32" width="78" alt="logo-header"></div></div><div id="navbarMobile" class="lg:hidden block fixed z-50 top-96"><img${ssrRenderAttr("src", _imports_2$1)} height="47" width="24" alt="nav-header">`);
  if ($setup.isSideBar) {
    _push(ssrRenderComponent(_component_LazySidebar, {
      onClicked: $options.onClickChildNav,
      isSideBar: $setup.isSideBar
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavbarMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + globalThis.__buildAssetsURL("phone.787f1034.svg");
const _imports_1 = "" + globalThis.__buildAssetsURL("position.405ef4b9.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("footer_yellow.a996ae0d.svg");
const _sfc_main$1 = {
  name: "Footer",
  components: {},
  data() {
    return {
      icons: [
        {
          name: "facebook",
          link: "https://www.facebook.com/edutalk.holding.vn"
        },
        {
          name: "instagram"
        },
        {
          name: "twitter"
        },
        {
          name: "youtube",
          link: "https://www.youtube.com/@EduTalkStudio/videos"
        }
      ]
    };
  },
  props: [],
  created() {
  },
  mounted() {
  },
  methods: {
    toSocial: (link) => {
      link && window.open(link, "_blank");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))}><div class="bg-blue-violet h-[415px] lg:pt-[60px] pt-[24px] relative"><div class="container mx-auto"><div class="lg:grid block grid-cols-12 gap-4"><div class="col-span-6"><h3 class="font-gotham-regular lg:text-base text-[13px] text-spanish-yellow"> C\xF4ng ty C\u1ED5 ph\u1EA7n T\u01B0 v\u1EA5n \u0110\xE1nh gi\xE1 v\xE0 Ph\xE1t<br class="lg:hidden block"> tri\u1EC3n <br class="lg:block hidden">Gi\xE1o d\u1EE5c Edutalk </h3><div class="flex flex-wrap lg:flex-row flex-col mt-[10px]"><div class="lg:hidden flex text-[10px] items-center mb-2"><img class="mr-1 w-[13px] h-[13px]"${ssrRenderAttr("src", _imports_0$1)} alt="phone_icon"><span class="text-white font-gotham-book">1900 4788</span></div><div class="lg:text-sm text-[10px] flex items-center mb-2"><img class="lg:mr-3 mr-1 lg:w-[15px] w-[13px] lg:h-[19px] h-[13px]"${ssrRenderAttr("src", _imports_1)} alt="position_icon"><span class="text-white w-[256px] font-gotham-book">70 \u0111\u01B0\u1EDDng B\u1EDD s\xF4ng S\xE9t, T\xE2n Mai, Ho\xE0ng Mai, H\xE0 N\u1ED9i</span></div><div class="lg:flex hidden text-sm items-center"><img class="mr-3 w-[17px] h-[17px]"${ssrRenderAttr("src", _imports_0$1)} alt="phone_icon"><span class="text-white font-gotham-book">1900 4788</span></div></div><div class="flex flex-row lg:mt-4 mt-2"><!--[-->`);
  ssrRenderList($data.icons, (icon, index) => {
    _push(`<img class="${ssrRenderClass(`icon-social opacity-50 lg:w-[35px] w-[21px] lg:h-[35px] h-[21px] ${icon.name == "youtube" ? "" : "lg:mr-4 mr-[10px]"}`)}"${ssrRenderAttr("src", `/_nuxt/assets/images/icons/${icon.name}.svg`)}${ssrRenderAttr("alt", `${icon.name}_icon`)}>`);
  });
  _push(`<!--]--></div></div><div class="lg:grid hidden grid-cols-6 gap-4 col-span-6 text-white"><div class="col-span-2"><h3 class="font-gotham-regular text-base text-spanish-yellow mb-4"> Trang th\xE0nh vi\xEAn </h3><span class="text-sm w-max font-gotham-book"><a href="https://ieltsmentor.edu.vn/" target="_blank">IELTS Mentor</a><br><a href="https://ecoach.vn/" target="_blank">Ecoach</a></span></div><div class="col-span-2"><h3 class="font-gotham-regular text-base text-spanish-yellow mb-4"> Th\xF4ng tin kh\xE1c </h3><span class="text-sm font-gotham-book"><a href="https://tuyendung.edutalk.edu.vn/" target="_blank">Tuy\u1EC3n d\u1EE5ng</a><br>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/dieu-khoan-su-dung" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng website`);
      } else {
        return [
          createTextVNode("\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng website")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="col-span-2 text-sm font-gotham-book"><div class="mb-2"> Gi\u1EA5y ch\u1EE9ng nh\u1EADn doanh nghi\u1EC7p s\u1ED1: 0108157817,<br>Ng\xE0y c\u1EA5p: 05/02/2018<br></div><div class="mb-1.5"> N\u01A1i c\u1EA5p: SKHDT TP.H\xE0 N\u1ED9i Tr\u1EE5 s\u1EDF ch\xEDnh t\u1EA1i s\u1ED1 258 V\xF5 Ch\xED C\xF4ng, Xu\xE2n La, T\xE2y H\u1ED3, H\xE0 N\u1ED9i;<br></div><div>\u0110i\u1EC7n tho\u1EA1i: 024.38256637</div></div></div><div class="lg:hidden grid grid-cols-4 gap-4 mt-5"><div class="col-span-2"><h3 class="font-gotham-regular text-[13px] text-spanish-yellow mb-1"> Trang th\xE0nh vi\xEAn </h3><div class="text-[10px] font-gotham-book text-white"><span><a href="https://ieltsmentor.edu.vn/" target="_blank">IELTS Mentor</a><span class="ml-8"><a href="https://ecoach.vn/" target="_blank">Ecoach</a></span></span><div class="mt-9"><span>Gi\u1EA5y ch\u1EE9ng nh\u1EADn doanh nghi\u1EC7p<br> s\u1ED1: 0108157817,<br> Ng\xE0y c\u1EA5p: 05/02/2018</span></div></div></div><div class="col-span-2"><h3 class="font-gotham-regular text-[13px] text-spanish-yellow mb-1"> Th\xF4ng tin kh\xE1c </h3><div class="text-[10px] font-gotham-book text-white"><div class="mb-1"><span><a href="https://tuyendung.edutalk.edu.vn/" target="_blank">Tuy\u1EC3n d\u1EE5ng</a><br>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/dieu-khoan-su-dung" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng website`);
      } else {
        return [
          createTextVNode("\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng website")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="mb-2"><span>N\u01A1i c\u1EA5p: SKHDT TP.H\xE0 N\u1ED9i Tr\u1EE5 s\u1EDF ch\xEDnh t\u1EA1i s\u1ED1 258 V\xF5 Ch\xED C\xF4ng, Xu\xE2n La, T\xE2y H\u1ED3, H\xE0 N\u1ED9i;</span></div><div><span>\u0110i\u1EC7n tho\u1EA1i: 024.38256637</span></div></div></div></div></div></div><div class="flex absolute lg:justify-center justify-start items-center bottom-0 w-webkit lg:h-[70px] h-[50px] lg:border-t-[1px] border-t-[1px] border-t-white border-solid"><h3 class="lg:ml-0 ml-6 font-gotham-book lg:text-base text-[10px] text-white"> \xA9 2022 Edutalk. All rights reserved. </h3></div><img class="absolute bottom-0 right-0 md:w-[325px] lg:w-[100px] w-[163px]"${ssrRenderAttr("src", _imports_2)} alt="footer_yellow"></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "layout",
  data() {
    return {
      isPhone: false
    };
  },
  async mounted() {
    await this.chatboxFunction();
    this.isPhone = true;
  },
  methods: {
    chatboxFunction: () => {
      var chatbox = document.getElementById("fb-customer-chat");
      chatbox == null ? void 0 : chatbox.setAttribute("page_id", "101493978748513");
      chatbox == null ? void 0 : chatbox.setAttribute("attribution", "biz_inbox");
      chatbox == null ? void 0 : chatbox.setAttribute("theme_color", "#472F92");
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: "v16.0"
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
          return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }
};
const _imports_0 = "" + globalThis.__buildAssetsURL("phone-white.212d239c.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = _sfc_main$3;
  const _component_NavbarMobile = __nuxt_component_1;
  const _component_Body = Body;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_NavbarMobile, null, null, _parent));
  if ($data.isPhone) {
    _push(`<div class="fixed z-[932] right-[25px] bottom-[95px]"><a href="tel:19004788" class="flex justify-center items-center bg-blue-magenta-violet hover:bg-dark-lavender w-[60px] h-[60px] rounded-full cursor-pointer"><img class="w-[28px]"${ssrRenderAttr("src", _imports_0)} alt="phone-white"></a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div id="fb-root"></div><div id="fb-customer-chat" class="fb-customerchat"></div>`);
  _push(ssrRenderComponent(_component_Body, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.8be0ef28.mjs.map
