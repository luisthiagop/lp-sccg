export const state = () => ({
  formData: {
    nome: '',
    cpf: '',
    email: '',
    whatsapp: '',
    valor: 5000,
  },
  loading: false,
  acceptedCookies: false,
})

export const mutations = {
  updateNome(state, value) {
    state.formData.nome = value
  },
  updateCpf(state, value) {
    state.formData.cpf = value
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
  ACCEPT_COOKIES(state, val) {
    state.acceptedCookies = val
  },
}

export const getters = {
  nome: (state) => state.formData.nome,
  cpf: (state) => state.formData.cpf,
  email: (state) => state.formData.email,
  whatsapp: (state) => state.formData.whatsapp,
  valor: (state) => state.formData.valor,
  formData: (state) => state.formData,
  loading: (state) => state.loading,
  acceptedCookies: (state) => state.acceptedCookies,
}

export const actions = {
  async sendData(context) {
    try {
      context.commit('changeLoading', true)
      const res = await this.$axios.post(
        'https://157.245.216.29:1337/leads',
        context.getters.formData
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    } finally {
      context.commit('changeLoading', false)
    }
  },
  acceptCookie(context) {
    context.commit('ACCEPT_COOKIES', true)
    localStorage.setItem('acceptedCookie', true)
  },
  async getLSAcceptedCookies(context) {
    try {
      const val = await localStorage.getItem('acceptedCookie')
      context.commit('ACCEPT_COOKIES', val)
    } catch (err) {
      context.commit('ACCEPT_COOKIES', false)
    }
  },
}

export const plugins = []
