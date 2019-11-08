import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {
		isAgreeCertification: false,
		isUserType: false,
		isSelectedCompanyModal: false,
		company: '',
		job: '',
		companyType: ''
	},
	mutations: {
		setIsAgreeCertification(state, data) {
			state.isAgreeCertification = data;
		},
		setIsUserType(state, data) {
			state.isUserType = data;
		},
		setCompany(state, data) {
			console.log(data);
			state.company = data;
		},
		setJob(state, data) {
			state.job = data;
		},
		setIsSelectedCompany(state, data) {
			state.isSelectedCompanyModal = data;
		},
		setCompanyType(state, data) {
			state.companyType = data;
		}
	},
	actions: {

}
})
