export const state = () => ({
  formData: {
    nome: '',
    email: '',
    whatsapp: '',
    valor: 5000,
  },
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
}

export const getters = {
  nome: (state) => state.formData.nome,
  email: (state) => state.formData.email,
  whatsapp: (state) => state.formData.whatsapp,
  valor: (state) => state.formData.valor,
  formData: (state) => state.formData,
}

export const actions = {
  async sendData(context) {
    try {
      const res = await this.$axios.post('/api/lead', context.getters.formData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
}

export const plugins = []
