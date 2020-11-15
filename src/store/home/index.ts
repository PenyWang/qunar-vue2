import state from './state'
import mutations from './mutations'

export default {
  state,
  actions: {
    changeCity(context: any, payload: any) {
      context.commit('changeCity', payload)
    }
  },
  getters: {
    completeLocal(state: any){
      return '中国' + state.curCity
    }
  },
  mutations,
}