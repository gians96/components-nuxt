export const state = () => ({
  drawer: false,
  
  // usuario: {}
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
    console.log(state);
  },
  drawerss(state, val) {
    state.drawer = val
  }
}

