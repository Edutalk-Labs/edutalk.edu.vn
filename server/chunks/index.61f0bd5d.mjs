import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useHead } from './composables.a8e6231f.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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

const _imports_0 = "" + globalThis.__buildAssetsURL("baove-1.c3a7fd16.png");
const _imports_1 = "" + globalThis.__buildAssetsURL("baove-2.2d94ccda.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const listImg = ref([
      {
        img: "baove-4.png",
        title: "Edutalk co\u0301 chuy\xEAn gia h\xF4\u0303 tr\u01A1\u0323 t\u01B0 v\xE2\u0301n mi\xEA\u0303n phi\u0301 ca\u0301c kho\u0301 kh\u0103n cu\u0309a HV vi\xEA\u0323c ho\u0323c t\xE2\u0323p va\u0300 thi c\u01B0\u0309.",
        link: "Nh\u1EADn t\u01B0 v\u1EA5n"
      },
      {
        img: "baove-5.png",
        title: "Edutalk t\xF4\u0309 ch\u01B0\u0301c ca\u0301c kho\u0301a ho\u0323c workshop v\xEA\u0300 ph\u01B0\u01A1ng pha\u0301p ho\u0323c."
      }
    ]);
    useHead({
      title: "Ch\xEDnh s\xE1ch b\u1EA3o v\u1EC7",
      meta: [{ name: "description", content: "N\u1EC1n T\u1EA3ng T\xECm Ki\u1EBFm V\xE0 \u0110\u1EB7t L\u1EDBp H\u1ECDc" }],
      bodyAttrs: {
        class: "test"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "baove-container container mx-auto mb-20" }, _attrs))}><h3 class="lg:mt-10 mt-[21px] lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase text-center"> CH\xCDNH S\xC1CH EDUTALK B\u1EA2O V\u1EC6 </h3><p class="text-[1.5rem] font-weight-bold text-center sub-description"> Ch\u01B0\u01A1ng tri\u0300nh chi\u0309 a\u0301p du\u0323ng v\u01A1\u0301i kha\u0301ch ha\u0300ng nh\xE2\u0323n \u0111\u01B0\u01A1\u0323c email Edutalk ba\u0309o v\xEA\u0323 va\u0300 \u0111\u01B0\u01A1\u0323c t\u01B0 v\xE2\u0301n, \u0111\u0103ng ky\u0301 qua t\u01B0 v\xE2\u0301n vi\xEAn to\xE0n qu\u1ED1c Edutalk. </p><div class="content"><img${ssrRenderAttr("src", _imports_0)} alt="baove-1" class="content__img"><div class="content__tvv"><h3 class="lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase">CH\xCDNH S\xC1CH B\u1EA2O H\xC0NH</h3><ul><li> Trong 02 bu\xF4\u0309i ho\u0323c \u0111\xE2\u0300u ti\xEAn n\xEA\u0301u l\u01A1\u0301p kh\xF4ng \u0111u\u0301ng nh\u01B0 M\xF4 ta\u0309 v\xEA\u0300 \u0110i\u0323a \u0111i\xEA\u0309m, Gia\u0309ng vi\xEAn trong H\u01A1\u0323p \u0111\xF4\u0300ng, Edutalk se\u0303 h\xF4\u0303 tr\u01A1\u0323 ho\u0323c vi\xEAn \u0111\xF4\u0309i l\u01A1\u0301p. <br> N\xEA\u0301u l\u01A1\u0301p ti\xEA\u0301p theo v\xE2\u0303n kh\xF4ng \u0111u\u0301ng nh\u01B0 m\xF4 ta\u0309, Kha\u0301ch ha\u0300ng \u0111\u01B0\u01A1\u0323c A\u0301p du\u0323ng ch\u01B0\u01A1ng tri\u0300nh Hoa\u0300n ti\xEA\u0300n 100%. </li><li> T\u01B0\u0300 bu\xF4\u0309i th\u01B0\u0301 03 \u0111\xEA\u0301n h\xEA\u0301t kho\u0301a ho\u0323c, n\xEA\u0301u l\u01A1\u0301p kh\xF4ng \u0111u\u0301ng nh\u01B0 M\xF4 ta\u0309 v\xEA\u0300 \u0110i\u0323a \u0111i\xEA\u0309m va\u0300 Gia\u0309ng vi\xEAn trong H\u01A1\u0323p \u0111\xF4\u0300ng, Trung t\xE2m se\u0303 co\u0301 07 nga\u0300y \u0111\xEA\u0309 s\u01B0\u0309a \u0111\xF4\u0309i \u0111u\u0301ng nh\u01B0 m\xF4 ta\u0309 k\xEA\u0309 t\u01B0\u0300 nga\u0300y nh\xE2\u0323n \u0111\u01B0\u01A1\u0323c th\xF4ng ba\u0301o t\u01B0\u0300 Edutalk. <br> Sau th\u01A1\u0300i gian na\u0300y n\xEA\u0301u trung t\xE2m kh\xF4ng s\u01B0\u0309a \u0111\xF4\u0309i, Kha\u0301ch ha\u0300ng \u0111\u01B0\u01A1\u0323c A\u0301p du\u0323ng ch\u01B0\u01A1ng tri\u0300nh Hoa\u0300n ti\xEA\u0300n 100%. </li><li> Sau kho\u0301a ho\u0323c, chi\u0309 a\u0301p du\u0323ng theo chi\u0301nh sa\u0301ch ba\u0309o ha\u0300nh cu\u0309a trung t\xE2m. </li></ul><a class="message-btn" href="https://m.me/trungtamhotroedutalk" target="_blank" rel="noopener noreferrer"> \u0111\u0103ng k\xFD b\u1EA3o h\xE0nh </a></div></div><div class="content space-top"><img${ssrRenderAttr("src", _imports_1)} alt="baove-1" class="content__img"><div class="content__tvv"><h3 class="lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase">CH\xCDNH S\xC1CH HOA\u0300N TI\xCA\u0300N</h3><ul><li> Ch\u01B0\u01A1ng tri\u0300nh Hoa\u0300n ti\xEA\u0300n 100% - A\u0301p du\u0323ng cho Sa\u0309n ph\xE2\u0309m l\xF4\u0303i <br> \u0110i\xEA\u0300u ki\xEA\u0323n: Theo quy \u0111i\u0323nh \u01A1\u0309 mu\u0323c Ba\u0309o ha\u0300nh <br> Th\u01A1\u0300i gian: Thanh toa\u0301n trong 72 gi\u01A1\u0300 k\xEA\u0309 t\u01B0\u0300 khi \u0111\u01A1n \u0111\xEA\u0300 xu\xE2\u0301t hoa\u0300n ti\xEA\u0300n \u0111\u01B0\u01A1\u0323c Edutalk xa\u0301c nh\xE2\u0323n. <br> Hoa\u0300n ti\xEA\u0300n: 100% gia\u0301 tri\u0323 ho\u0301a \u0111\u01A1n v\u01A1\u0301i ca\u0301c kho\u0301a ho\u0323c ch\u01B0a k\xEA\u0301t thu\u0301c. </li><li> Hoa\u0300n ti\xEA\u0300n do ly\u0301 do ca\u0301 nh\xE2n - A\u0301p du\u0323ng cho Sa\u0309n ph\xE2\u0309m kh\xF4ng l\xF4\u0303i <br> \u0110i\xEA\u0300u ki\xEA\u0323n: B\xEA\u0323nh hi\xEA\u0309m nghe\u0300o thu\xF4\u0323c Danh m\u1EE5c c\xE1c b\u1EC7nh hi\u1EC3m ngh\xE8o K\xE8m theo Ngh\u1ECB \u0111\u1ECBnh s\u1ED1 134/2016/N\u0110-CP <br> Th\u01A1\u0300i gian: Thanh toa\u0301n trong 72 gi\u01A1\u0300 k\xEA\u0309 t\u01B0\u0300 khi \u0111\u01A1n \u0111\xEA\u0300 xu\xE2\u0301t hoa\u0300n ti\xEA\u0300n \u0111\u01B0\u01A1\u0323c Edutalk xa\u0301c nh\xE2\u0323n. <br> Hoa\u0300n ti\xEA\u0300n 100% gia\u0301 tri\u0323 ho\u0301a \u0111\u01A1n v\u01A1\u0301i ca\u0301c kho\u0301a ho\u0323c ch\u01B0a khai gia\u0309ng. </li><li> Hoa\u0300n ti\xEA\u0300n kh\xF4ng ly\u0301 do - A\u0301p du\u0323ng cho Sa\u0309n ph\xE2\u0309m kh\xF4ng l\xF4\u0303i <br> Trong tha\u0301ng mua ha\u0300ng: Phi\u0301 10% gia\u0301 tri\u0323 ho\u0301a \u0111\u01A1n v\u01A1\u0301i ca\u0301c kho\u0301a ho\u0323c ch\u01B0a khai gia\u0309ng. <br> T\u01B0\u0300 tha\u0301ng th\u01B0\u0301 2 t\u01A1\u0301i tha\u0301ng th\u01B0\u0301 12: Phi\u0301 40% gia\u0301 tri\u0323 ho\u0301a \u0111\u01A1n v\u01A1\u0301i ca\u0301c kho\u0301a ho\u0323c ch\u01B0a khai gia\u0309ng. <br> Edutalk chi\u0309 h\xF4\u0303 tr\u01A1\u0323 t\u01B0\u0300 tha\u0301ng \u0111\xE2\u0300u ti\xEAn t\u01A1\u0301i th\u01B0\u0301 12. Sau tha\u0301ng th\u01B0\u0301 12, th\u01B0\u0323c hi\xEA\u0323n theo Chi\u0301nh sa\u0301ch cu\u0309a Trung t\xE2m. <br> Chi\u0301nh sa\u0301ch chi\u0309 a\u0301p du\u0323ng v\u01A1\u0301i ca\u0301c Trung t\xE2m Ielts Mentor, EduCoach, EduTeacher, Keypass </li></ul><a class="message-btn" href="https://m.me/trungtamhotroedutalk" target="_blank" rel="noopener noreferrer"> \u0111\u0103ng k\xFD ho\xE0n ti\u1EC1n </a></div></div><div class="space-top"><h3 class="lg:text-[32px] text-[16px] lg:m-0 mx-auto font-gotham-bold text-blue-violet uppercase text-center"> CH\u01AF\u01A0NG TRI\u0300NH H\xD4\u0303 TR\u01A0\u0323 \u201CHELLO RAINBOW\u201D </h3><div class="list-img"><!--[-->`);
      ssrRenderList(unref(listImg), (item, index) => {
        _push(`<div class="list-img__content"><img class="list-img__img"${ssrRenderAttr("src", `/_nuxt/assets/images/${item.img}`)}${ssrRenderAttr("alt", item.img)}><p class="max-w-[350px]">${ssrInterpolate(item.title)}</p>`);
        if (item.link) {
          _push(`<a class="message-btn" href="https://m.me/trungtamhotroedutalk" target="_blank" rel="noopener noreferrer">${ssrInterpolate(item.link)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chinh-sach-bao-ve/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.61f0bd5d.mjs.map
