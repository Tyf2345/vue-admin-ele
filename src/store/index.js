import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import settings from './modules/settings'
import navType from './modules/navType'
const store  = new Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    settings,
    navType
  },
  plugins:[createPersistedState()]
})
export default store
