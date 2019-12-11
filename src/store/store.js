import Vue from 'vue'
import Vuex from 'vuex'
import { getAPIData } from '../api'

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
    flag: true,
    type: '',
    mainColor: '',
    logo: '',
    banner: '',
    qaType: '',
    isIPO: ''
  },
  getters: {
    getCompCode (state) {
      return state.code
    },
    getCompSeq (state) {
      return state.seq
    },
    getCompName (state) {
      return state.name
    },
    getCompType (state) {
      return state.type
    },
    getMainColor (state) {
      return state.mainColor
    },
    getLogo (state) {
      return state.logo
    },
    getBanner (state) {
      return state.banner
    },
    getQaType (state) {
      return state.qaType
    },
    getIsIPO (state) {
      return state.isIPO
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
        state.mainColor = payload.IRPAGE_MAIN_COLOR
        state.logo = payload.IRPAGE_LOGO
        state.banner = payload.IRPAGE_MAIN_IMG
        state.qaType = payload.IRPAGE_QNA_YN
        state.isIPO = payload.COMP_TYPE
        state.flag = false
      }
    }
  },
  actions: {
    async SET_INFO ({ commit }, url) {
      let param = {
        data: url,
        url: 'getSettingInfo'
      }
      const res = await getAPIData(param)
      commit('SET_DATA', res.data[0])
      return res.data[0]
    },
    async GET_KRX (context, payload) {
      let param = {
        data: payload,
        url: 'getKrxXMLData'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_SILQ (context, payload) {
      let param = {
        data: payload,
        url: 'getSilQuarter'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_SILJ (context, payload) {
      let param = {
        data: payload,
        url: 'getPerformance'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_IPOJ (context, payload) {
      let param = {
        data: payload,
        url: 'getIPOperform'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_FAQ (context, payload) {
      let param = {
        data: payload,
        url: 'getFAQ'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_IRNEWS (context, payload) {
      let param = {
        data: payload,
        url: 'getIrNews'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_MREPORT (context, payload) {
      let param = {
        data: payload,
        url: 'getManagementReport'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_FINANCE (context, payload) {
      let param = {
        data: payload,
        url: 'getFinancialStatements'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_DIS (context, payload) {
      let param = {
        data: payload,
        url: 'getDisclosure'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_SHOLDER (context, payload) {
      let param = {
        data: payload,
        url: 'getShareHolder'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_DIVI (context, payload) {
      let param = {
        data: payload,
        url: 'getDividend'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_CONTACT (context, payload) {
      let param = {
        data: payload,
        url: 'getContactLink'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_SCH (context, payload) {
      let param = {
        data: payload,
        url: 'getComeSchedule'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_COMINFO (context, payload) {
      let param = {
        data: payload,
        url: 'getCompInfo'
      }
      const res = await getAPIData(param)
      return res.data
    },
    async GET_IPO (context, payload) {
      let param = {
        data: payload,
        url: 'getIPOprocess'
      }
      const res = await getAPIData(param)
      return res.data
    }
  }
})
