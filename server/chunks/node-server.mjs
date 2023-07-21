globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"apiBase":"https://api2.edutalk.edu.vn","baseUrl":"http://localhost:3000"},"apiSecret":"https://api2.edutalk.edu.vn"};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/logo.png": {
    "type": "image/png",
    "etag": "\"40fb-adN+PvDVNkrZLy6AtCfVOfBQD8E\"",
    "mtime": "2023-07-20T11:16:12.144Z",
    "size": 16635,
    "path": "../public/logo.png"
  },
  "/_nuxt/banner_new.929b78e2.png": {
    "type": "image/png",
    "etag": "\"82120-02O1zsfovNblEn+78omU2URHzGc\"",
    "mtime": "2023-07-21T01:34:47.345Z",
    "size": 532768,
    "path": "../public/_nuxt/banner_new.929b78e2.png"
  },
  "/_nuxt/baove-1.c3a7fd16.png": {
    "type": "image/png",
    "etag": "\"21ac6-LnzYCheGZtB8zsXs2qNd2p4O5V4\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 137926,
    "path": "../public/_nuxt/baove-1.c3a7fd16.png"
  },
  "/_nuxt/baove-2.2d94ccda.png": {
    "type": "image/png",
    "etag": "\"12a3a-Nu3IsXPaXf9qMxhqzcUy9vr9WVY\"",
    "mtime": "2023-07-21T01:34:47.343Z",
    "size": 76346,
    "path": "../public/_nuxt/baove-2.2d94ccda.png"
  },
  "/_nuxt/button_navbar_mobile.465bec30.svg": {
    "type": "image/svg+xml",
    "etag": "\"75e-Dp4oxVRDGBIUv5TdvCHjP/BsRHI\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 1886,
    "path": "../public/_nuxt/button_navbar_mobile.465bec30.svg"
  },
  "/_nuxt/carousel.0566c1a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"92e-z1Nk3l91DdyBpiJ20hS0572rBvU\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 2350,
    "path": "../public/_nuxt/carousel.0566c1a6.css"
  },
  "/_nuxt/carousel.es.4cc6af6a.js": {
    "type": "application/javascript",
    "etag": "\"2797-Q5fWohEHrvlaRtemfTGZznzfjsU\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 10135,
    "path": "../public/_nuxt/carousel.es.4cc6af6a.js"
  },
  "/_nuxt/composables.b5c0aefc.js": {
    "type": "application/javascript",
    "etag": "\"61-zDyj2FsObAAU0Fj7XBIRDHHpC+s\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 97,
    "path": "../public/_nuxt/composables.b5c0aefc.js"
  },
  "/_nuxt/default.021004d3.js": {
    "type": "application/javascript",
    "etag": "\"3bed-/blFaAZn8sQgX7SZ/Tp0qsFRFzg\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 15341,
    "path": "../public/_nuxt/default.021004d3.js"
  },
  "/_nuxt/default.d13f4a9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-QAQhrNoGI6uR+qj7qNW1Fr6R0LE\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 45,
    "path": "../public/_nuxt/default.d13f4a9b.css"
  },
  "/_nuxt/entry.2f5e2435.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac14-Bv05zmUr9UGo8GkOyx1D/MeVXeo\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 44052,
    "path": "../public/_nuxt/entry.2f5e2435.css"
  },
  "/_nuxt/entry.62437a4a.js": {
    "type": "application/javascript",
    "etag": "\"23da0-Tr4FRlRt6WvMjdUlgrea09gCEtI\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 146848,
    "path": "../public/_nuxt/entry.62437a4a.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.4a5fc8a9.js": {
    "type": "application/javascript",
    "etag": "\"8d4-/AlS0omnTdg//+RTgYtB5qv/aIQ\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 2260,
    "path": "../public/_nuxt/error-404.4a5fc8a9.js"
  },
  "/_nuxt/error-500.a69ac007.js": {
    "type": "application/javascript",
    "etag": "\"77d-iSfS9tg3VzGPCxvAD2vktawKzZ0\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.a69ac007.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.97e9b458.js": {
    "type": "application/javascript",
    "etag": "\"4ad-V1yzBzH8YFAOqnobre4kBD92HM4\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.97e9b458.js"
  },
  "/_nuxt/fetch.e4e39227.js": {
    "type": "application/javascript",
    "etag": "\"8b5-+maWvz0LL99Od3G93vngtoB+zGQ\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 2229,
    "path": "../public/_nuxt/fetch.e4e39227.js"
  },
  "/_nuxt/footer_yellow.a996ae0d.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a3-cT4cFOtsdL/x4rwUbHmHnx2WDNc\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 419,
    "path": "../public/_nuxt/footer_yellow.a996ae0d.svg"
  },
  "/_nuxt/index.035e4280.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e5-u90MPbuCxk6q/pYFSk0En0Mvt5U\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 485,
    "path": "../public/_nuxt/index.035e4280.css"
  },
  "/_nuxt/index.1df03088.js": {
    "type": "application/javascript",
    "etag": "\"2118-uF3m9EIPB/JXrT3XxnVA2GyTGgs\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 8472,
    "path": "../public/_nuxt/index.1df03088.js"
  },
  "/_nuxt/index.2543bb79.js": {
    "type": "application/javascript",
    "etag": "\"3558-gyJxo3NoJIBAq+cOey9WGEMUkss\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 13656,
    "path": "../public/_nuxt/index.2543bb79.js"
  },
  "/_nuxt/index.26f9eab3.js": {
    "type": "application/javascript",
    "etag": "\"2c3f-UkujRbMrGeYUu8uYWoxkHoxH6dA\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 11327,
    "path": "../public/_nuxt/index.26f9eab3.js"
  },
  "/_nuxt/index.38f78f5f.js": {
    "type": "application/javascript",
    "etag": "\"1394-S14OLGB7+gM7cpfJ7Lcv6v6tkoA\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 5012,
    "path": "../public/_nuxt/index.38f78f5f.js"
  },
  "/_nuxt/index.5055d210.js": {
    "type": "application/javascript",
    "etag": "\"2b6f-7rv3jeQfgaZiowULPYnSSqVuWvE\"",
    "mtime": "2023-07-21T01:34:47.345Z",
    "size": 11119,
    "path": "../public/_nuxt/index.5055d210.js"
  },
  "/_nuxt/index.9e542353.js": {
    "type": "application/javascript",
    "etag": "\"1b22-Yyk024+WtE5tF1dgU+ZeYoW8g+E\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 6946,
    "path": "../public/_nuxt/index.9e542353.js"
  },
  "/_nuxt/index.abb9c826.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"254-L54lsXmG6AkbKx0IclBFk+lQQFo\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 596,
    "path": "../public/_nuxt/index.abb9c826.css"
  },
  "/_nuxt/index.d3f7c310.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"486-uM9boNUcC6SkO/k6wkNjsfj2xYo\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 1158,
    "path": "../public/_nuxt/index.d3f7c310.css"
  },
  "/_nuxt/index.ec0af7e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a42-/jnp9WbIK19274nEzUhxyhR4dbo\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 2626,
    "path": "../public/_nuxt/index.ec0af7e5.css"
  },
  "/_nuxt/index.f200da22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"71e-O1ZmKTtmEQP8zsINhRMHh2lGqAQ\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 1822,
    "path": "../public/_nuxt/index.f200da22.css"
  },
  "/_nuxt/nav_head.4e44e20e.svg": {
    "type": "image/svg+xml",
    "etag": "\"23a-t4/ZmuhwNzzZy2GcqMdFGKyc2tI\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 570,
    "path": "../public/_nuxt/nav_head.4e44e20e.svg"
  },
  "/_nuxt/phone-white.212d239c.svg": {
    "type": "image/svg+xml",
    "etag": "\"a9e-F8HynvnYckv+nIyYEj0rO8DnEUs\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 2718,
    "path": "../public/_nuxt/phone-white.212d239c.svg"
  },
  "/_nuxt/phone.787f1034.svg": {
    "type": "image/svg+xml",
    "etag": "\"3d3-fZ4jduhtU/P9Q3r1fUTNcYP73Qk\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 979,
    "path": "../public/_nuxt/phone.787f1034.svg"
  },
  "/_nuxt/position.405ef4b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ff-IUgl3tRzIVgbyCKxRw9XoWWdccQ\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 767,
    "path": "../public/_nuxt/position.405ef4b9.svg"
  },
  "/_nuxt/Sidebar.b5f275d5.js": {
    "type": "application/javascript",
    "etag": "\"a0d-D8OSj6k0/auwYtDR3F92ho/MTwk\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 2573,
    "path": "../public/_nuxt/Sidebar.b5f275d5.js"
  },
  "/_nuxt/v-click-outside.umd.722c79ca.js": {
    "type": "application/javascript",
    "etag": "\"7fd-nHeVuj5rI7u2PZnfcWwT/LPYptI\"",
    "mtime": "2023-07-21T01:34:47.346Z",
    "size": 2045,
    "path": "../public/_nuxt/v-click-outside.umd.722c79ca.js"
  },
  "/_nuxt/_id_.6f0d5a52.js": {
    "type": "application/javascript",
    "etag": "\"cdd-Y/+SrOBQT3HsCHPtBFk+UvZ7/dA\"",
    "mtime": "2023-07-21T01:34:47.344Z",
    "size": 3293,
    "path": "../public/_nuxt/_id_.6f0d5a52.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_uzdJwV = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_uzdJwV, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_uzdJwV, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
