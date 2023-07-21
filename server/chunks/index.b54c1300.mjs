import { defineComponent, ref, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { s as storeToRefs, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = {
  name: "BannerEcosystem",
  props: ["ecosystems"],
  mounted() {
  },
  methods: {
    bannerBgImage(image) {
      return `background-image: url(${image})`;
    },
    fontBox(length) {
      let fontSize;
      if (length <= 2) {
        fontSize = 2.4;
      } else if (length <= 3) {
        fontSize = 1.7;
      } else {
        fontSize = 1;
      }
      return `font-size: ${fontSize}vw;`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-[32vw] bg-no-repeat bg-cover relative",
    style: $options.bannerBgImage($props.ecosystems.ecosystem_banner_image[0].url),
    alt: $props.ecosystems.ecosystem_banner_image[0].name
  }, _attrs))}><div class="absolute bottom-[2vw] w-full"><div class="container mx-auto flex justify-between"><!--[-->`);
  ssrRenderList($props.ecosystems.ecosystem_banner_items, (banner_content, index) => {
    _push(`<div class="box font-gotham-regular text-white"><div id="content-box" style="${ssrRenderStyle($options.fontBox(banner_content.content_box.length))}" class="box__content rounded-full border-white lg:border-4 border-2 mx-auto flex justify-center items-center text-shadow-white">${ssrInterpolate(banner_content.content_box)}</div><div class="box__title text-center max-w-[15vw]">${ssrInterpolate(banner_content.title_box)}</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerEcosystem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "EcosystemIntroduce",
  props: ["ecosystems"],
  mounted() {
  },
  methods: {
    bg_image(image) {
      return `background-image: url(${image})`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1 class="w-[80%] lg:mt-16 mt-5 lg:text-[32px] text-[16px] font-gotham-bold text-blue-violet uppercase text-center mx-auto mb-[14px]">${$props.ecosystems.ecosystem_img_items_01[0].title_page}</h1><span class="w-[80%] mx-auto font-gotham-book lg:text-[16px] text-[12px] text-black block text-center">${ssrInterpolate($props.ecosystems.ecosystem_img_items_01[0].title_description)}</span><img class="lg:w-[1172px] w-[318px] lg:h-[546px] h-[156px] object-contain mt-[7px] mb-[10px] mx-auto"${ssrRenderAttr("src", $props.ecosystems.ecosystem_img_items_01[0].ecosystem_image_block[0].url)} alt="ecosystem"><div class="grid grid-cols-12 gap-4 lg:mt-10 mt-5"><!--[-->`);
  ssrRenderList($props.ecosystems.ecosystem_img_items_02, (type, index) => {
    _push(`<div class="mb:col-span-6 col-span-12 bg-meat-brown w-full h-[152px] rounded-[10px] p-4 mb-[5px]"><h2 class="font-gotham-regular text-blue-violet uppercase text-[28px]">${ssrInterpolate(type.title_page)}</h2><span class="font-gotham-book lg:text-[16px] text-[12px] text-black block">${type.ecosystem_img_items_g[0].description}</span></div>`);
  });
  _push(`<!--]--></div><h1 class="w-fit lg:mt-[70px] mt-[20px] lg:text-[32px] text-[16px] font-gotham-bold text-blue-violet uppercase text-center mx-auto lg:mb-[32px] mb-[14px]">${ssrInterpolate($props.ecosystems.ecosystem_img_items_03[0].title_page)}</h1><img class="lg:w-[1397px] w-[336px] lg:h-[410px] h-[97px] object-contain md:mt-[73px] lg:mt-0 mt-[21px] md:mb-[70px] lg:mb-0 mb-[14px] mx-auto"${ssrRenderAttr("src", $props.ecosystems.ecosystem_img_items_03[0].ecosystem_image_block_03[0].url)} alt="value_system"><span class="mt-4 font-gotham-book lg:text-[16px] text-[12px] text-black block text-center">${ssrInterpolate($props.ecosystems.ecosystem_img_items_03[0].description)}</span><h1 class="w-fit lg:mt-[70px] mt-[20px] lg:text-[32px] text-[16px] font-gotham-bold text-blue-violet uppercase text-center mx-auto mb-[12px]">${ssrInterpolate($props.ecosystems.ecosystem_img_items[0].title_page)}</h1><div class="grid grid-cols-12 gap-4"><!--[-->`);
  ssrRenderList($props.ecosystems.ecosystem_img_items[0].ecosystem_img_items_g, (policy, index) => {
    _push(`<div class="lg:col-span-6 col-span-12 lg:h-[400px] h-[300px] bg-no-repeat bg-cover lg:rounded-[16px] rounded-[5px] relative" alt="important_policy" style="${ssrRenderStyle($options.bg_image(policy.ecosystem_image[0].url))}"><div class="absolute font-gotham-regular lg:left-[20px] left-[30px] lg:right-[20px] right-[30px] lg:top-[30px] top-[30px]"><h3 class="text-spanish-yellow lg:mb-[10px] mb-[2px] lg:text-[28px] text-[12px] uppercase">${ssrInterpolate(policy.title_description)} - <span class="text-white">${ssrInterpolate(policy.title_description_eng)}</span></h3><span class="w-[80%] text-white md:text-sm lg:text-xs text-[10px] block font-gotham-book">${ssrInterpolate(policy.description)}</span></div></div>`);
  });
  _push(`<!--]--></div><h2 class="w-[80%] mx-auto font-gotham-bold lg:text-[16px] text-[12px] text-blue-violet lg:mb-[30px] mb-[10px] text-center mt-[20px] italic">${ssrInterpolate($props.ecosystems.slogan_end)}</h2><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcosystemIntroduce.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "H\u1EC7 sinh th\xE1i Edutalk",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      bodyAttrs: {
        class: "test"
      }
    });
    const store = useFetchStore();
    const { ecosystems } = storeToRefs(store);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerEcosystem = __nuxt_component_0;
      const _component_EcosystemIntroduce = __nuxt_component_1;
      _push(`<!--[--><div>`);
      if (!loading.value) {
        _push(ssrRenderComponent(_component_BannerEcosystem, { ecosystems: unref(ecosystems) }, null, _parent));
      } else {
        _push(`<div class="h-[42vw] bg-deep-purple-20"></div>`);
      }
      _push(`</div><div class="container mx-auto">`);
      if (!loading.value) {
        _push(ssrRenderComponent(_component_EcosystemIntroduce, { ecosystems: unref(ecosystems) }, null, _parent));
      } else {
        _push(`<div class="h-[1000px]"></div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecosystem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.b54c1300.mjs.map
