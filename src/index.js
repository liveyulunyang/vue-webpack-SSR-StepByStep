import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/router.js';
import Meta from 'vue-meta'
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})
/*
new Vue({
  el: '#app',
  mounted : function(){
  	console.log('Hello Webpack and Vue !');	 
  },
  router,
  components:{
  	App
  },
  template: '<App />'
});
*/
// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  // create router instance
  const router = createRouter();

  const app = new Vue({
    router,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router };
}