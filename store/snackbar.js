export const state = () => ({
  message: '',
  type: '',
})

export const mutations = {
  SET_SNACK(state, snack) {
    state.message = snack.message
    state.type = snack.type
  },
  SET_CLEAN(state, snack) {
    state.message = ''
    state.type = 'info'
  }
}

export const actions = {
  setClean({
    commit
  }) {
    commit('SET_CLEAN');
  }
}
