export const state = () => ({
  formData: {
    nome: '',
    email: '',
    whatsapp: '',
    valor: 5000,
  },
  loading: false,
})

export const mutations = {
  updateNome(state, value) {
    state.formData.nome = value
  },
  updateEmail(state, value) {
    state.formData.email = value
  },
  updateWhatsapp(state, value) {
    state.formData.whatsapp = value
  },
  updateValor(state, value) {
    state.formData.valor = value
  },
  changeLoading(state, value) {
    state.loading = value
  },
}

export const getters = {
  nome: (state) => state.formData.nome,
  email: (state) => state.formData.email,
  whatsapp: (state) => state.formData.whatsapp,
  valor: (state) => state.formData.valor,
  formData: (state) => state.formData,
  loading: (state) => state.loading,
}

export const actions = {
  async sendData(context) {
    try {
      context.commit('changeLoading', true)
      const res = await this.$axios.post(
        'https://api.simulacredcg.com.br/wp-json/api/lead',
        context.getters.formData
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    } finally {
      context.commit('changeLoading', false)
    }
  },
}

export const plugins = []
