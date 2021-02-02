export const state = () => ({
  message: {
    type: '',
    msg: '',
    show: false
  }

  // usuario: {}
})

export const mutations = {
  SET_ALERT_MESSAGE(state, val) {
    state.message.msg = val.msg
    state.message.type = val.type
    state.message.show = val.show
  },
  SET_CLEAN(state) {
    state.message.msg = ''
    state.message.type = 'info'
    state.message.show = false
  },
}

export const actions = {
  setAlertMessage({
    commit
  }, msg) {
    commit('SET_ALERT_MESSAGE', msg);
  },
  setClean({
    commit
  }) {
    commit('SET_CLEAN');
  }
}
