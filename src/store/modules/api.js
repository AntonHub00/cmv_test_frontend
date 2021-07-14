import Vue from 'vue'

const state = {
	clients: [],
}

const mutations = {
	SET_CLIENTS: (state, data) => (state.clients = data),
}

const actions = {
	fetchClients: async ({ commit }) => {
		try {
			const response = await Vue.axios({ method: 'get', url: 'get-clients' })
			commit('SET_CLIENTS', response.data)
		} catch (error) {
			console.log(error)
		}
	},
}

const getters = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}
