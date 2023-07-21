import { d as defineStore, a as useRuntimeConfig } from './server.mjs';

const ECOSYSTEM = "/get-edutalk-option?template=ecosystem";
const HOME_PAGE = "/get-edutalk-option?template=home-page";
const CONTACT = "/get-edutalk-option?template=contact";
const NEW_HIGHLIGHT = "/get-news-highlight";
const NEW_NORMAL = "/get-news-limit";
const EVENTS = "/get-event";
const NEWS_BY_ID = "/get-news-by-id";
const EVENT_BY_ID = "/get-event-by-id";
const NEWS_UPDATE = "/get-news";
const PEOPLE = "/get-edutalk-option?template=peopleinedutalk";
const useFetchStore = defineStore("fetch", {
  state: () => ({
    ecosystems: {},
    home_page: {},
    news_highlight: {},
    news_normal: {},
    detail: {},
    contact: {},
    events: {},
    news_update: {},
    people: {}
  }),
  actions: {
    async fetchEcosystems() {
      try {
        const config = useRuntimeConfig();
        await $fetch(ECOSYSTEM, { baseURL: config.public.apiBase }).then((response) => {
          this.ecosystems = response;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async fetchHome() {
      try {
        const config = useRuntimeConfig();
        await $fetch(HOME_PAGE, { baseURL: config.public.apiBase }).then((response) => {
          console.log(response, "home_page");
          this.home_page = response;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.log(err, "home_page");
        console.error(err);
      }
    },
    async fetchContact() {
      try {
        const config = useRuntimeConfig();
        await $fetch(CONTACT, { baseURL: config.public.apiBase }).then((response) => {
          this.contact = response;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async fetchNewsHighlight() {
      try {
        const config = useRuntimeConfig();
        await $fetch(NEW_HIGHLIGHT, { baseURL: config.public.apiBase }).then((response) => {
          this.news_highlight = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async fetchNewsNormal() {
      try {
        const config = useRuntimeConfig();
        await $fetch(NEW_NORMAL, { baseURL: config.public.apiBase }).then((response) => {
          this.news_normal = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async fetchEvents(payload) {
      try {
        const config = useRuntimeConfig();
        await $fetch(EVENTS, { baseURL: config.public.apiBase, query: payload }).then((response) => {
          this.events = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async getNewsById(payload) {
      try {
        this.detail = {};
        const config = useRuntimeConfig();
        await $fetch(NEWS_BY_ID, {
          baseURL: config.public.apiBase,
          query: payload
        }).then((response) => {
          this.detail = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async getEventById(payload) {
      try {
        this.detail = {};
        const config = useRuntimeConfig();
        await $fetch(EVENT_BY_ID, {
          baseURL: config.public.apiBase,
          query: payload
        }).then((response) => {
          this.detail = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async getNewUpdate() {
      try {
        const config = useRuntimeConfig();
        await $fetch(NEWS_UPDATE, {
          baseURL: config.public.apiBase,
          query: { limit: 10 }
        }).then((response) => {
          this.news_update = response.data;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    },
    async fetchPeople() {
      try {
        const config = useRuntimeConfig();
        await $fetch(PEOPLE, { baseURL: config.public.apiBase }).then((response) => {
          this.people = response;
        }).catch((error) => {
          throw error;
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
});

export { useFetchStore as u };
//# sourceMappingURL=fetch.16d8e39d.mjs.map
