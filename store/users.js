export const state = () => ({
  users: [],
  showDialogCodePhone: false


})

export const mutations = {
  SET_USERS(state, user) {
    // state.users.push({user}) varios valores
    state.users = user
    // console.log(state.users);

  },
  SET_SHOW_DIALOG_CODE(state, show) {
    state.showDialogCodePhone = show
  },
  SET_CLEAN(state, snack) {
    state.users = []
  }
}

export const actions = {
  setClean({
    commit
  }) {
    commit('SET_CLEAN')
  },
  setUsers({
    commit
  }, user) {
    commit('SET_USERS', user)
  },
  setShowDialogCodePhone({
    commit
  }, show) {
    commit('SET_SHOW_DIALOG_CODE', show)
  }
}
