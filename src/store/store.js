import Vue from 'vue'
import Vuex from 'vuex'
import { getCOMPINFO, getKrxData, getSIlQuarter } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    isAgreeCertification: false,
    isUserType: false,
    isSelectedCompanyModal: false,
    company: '',
    job: '',
    companyType: '',
    seq: '',
    code: '',
    name: '',
    COMP_DATAP: '',
    flag: true
  },
  getters: {
    getCompCode (state) {
      return state.code
    },
    getCompSeq (state) {
      return state.seq
    }
  },
  mutations: {
    setIsAgreeCertification (state, data) {
      state.isAgreeCertification = data
    },
    setIsUserType (state, data) {
      state.isUserType = data
    },
    setCompany (state, data) {
      state.company = data
    },
    setJob (state, data) {
      state.job = data
    },
    setIsSelectedCompany (state, data) {
      state.isSelectedCompanyModal = data
    },
    setCompanyType (state, data) {
      state.companyType = data
    },
    SET_DATA (state, payload) {
      if (state.flag) {
        state.seq = payload.COMP_SEQ
        state.name = payload.COMP_NAME
        state.code = payload.COMP_CODE
        state.flag = false
      }
    }
  },
  actions: {
    async SET_INFO ({ commit }, url) {
      const res = await getCOMPINFO(url)
      commit('SET_DATA', res.data[0])
      return res.data[0]
    },
    async GET_KRX (context, payload) {
      const res = await getKrxData(payload)
      return res.data[0]
    },
    async GET_SILQ (context, payload) {
      const res = await getSIlQuarter(payload)
      console.log(res, 'test')
      return res.data
    }
  }
})
