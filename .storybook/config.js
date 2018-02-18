import { configure } from '@storybook/vue'
import Vue from 'vue';
import Vuex from 'vuex'
// automatically import all files ending in *.stories.js
Vue.use(Vuex)

const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
