const state = {
  type: 'tag'
}
const getters = {}
const mutations = {
  setNavType(state,palyload) {
    state.type = palyload
  }
}
const actions = {
  setNavType({commit},palyload) {
    commit('setNavType',palyload)
  }
}

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}