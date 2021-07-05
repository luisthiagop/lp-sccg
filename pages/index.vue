<template>
  <div class="fundo">
    <Header></Header>
    <div v-if="!acceptedCookies" class="cookies-container px-lg-5">
      <div
        class="
          cookies-content
          w-100
          d-flex
          flex-column flex-lg-row
          justify-content-lg-between
        "
      >
        <p style="text-align: left" class="px-5">
          Conforme a
          <a
            href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            >Lei Geral de Proteção de Dados</a
          >, precisamos de sua autorização para utilizar os cookies do navegador
          e o armazenamento local. Eventualmente utilizamos esses recursos para
          otimizar a experiência no nosso site.
        </p>
        <button
          type="button"
          class="btn btn-outline-light"
          @click="acceptCookies"
        >
          ACEITAR
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row linha1">
        <div
          v-if="!loading && !leadSaved"
          class="col-sm-12 col-md-12 col-lg-6 coluna1"
        >
          <div class="row px-3">
            <div class="conteudo-coluna1 col-12 px-0">
              <p class="chamada col-lg-11 col-md-12 px-0 px-md-4">
                Faça aqui sua
                <span class="enfase">simulação de crédito</span> consignado e
                receba nosso contato.
              </p>
              <div class="imagem">
                <img src="@/static/images/smartphone.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!loading && !leadSaved"
          class="col-sm-12 col-md-12 col-lg-6 coluna2"
        >
          <div class="conteudo-coluna2 col-12 px-4 py-2">
            <h2>Consulte as condições sa simulação</h2>
            <div class="formulario">
              <p class="labelValor">Digite um valor para simular:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money v-bind="money" id="valor" v-model="valor"></money>
              </div>
              <div class="btnsAdicionar">
                <button class="adicionar" @click="valor += 5000">
                  +<br />
                  5000,00
                </button>
                <button class="adicionar" @click="valor += 10000">
                  +<br />
                  10.000,00
                </button>
                <button class="adicionar" @click="valor += 20000">
                  + 20.000,00
                </button>
              </div>
              <b-form-group id="input-group" label-for="input-2">
                <b-form-input
                  id="input1"
                  v-model="nome"
                  placeholder="Nome*"
                  :required="true"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group" label-for="input-2">
                <b-form-input
                  id="input2"
                  v-model="email"
                  placeholder="E-mail*"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group" label-for="input-2">
                <b-form-input
                  id="input3"
                  v-model="whatsapp"
                  v-mask="'(##) #####-####'"
                  placeholder="Whatsapp*"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                v-model="permiteContato"
                name="checkbox-1"
                size="sm"
              >
                Sim, aceito ser contatado por meio desses dados.
              </b-form-checkbox>
              <div class="wrapper-button">
                <b-button
                  :disabled="!permiteContato"
                  class="botao"
                  @click="sendData"
                >
                  Simular
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!loading && leadSaved"
          class="col-sm-12 col-md-12 col-lg-12 coluna3"
        >
          <div class="conteudo-coluna3 col-12 px-4 py-2">
            <h2>Verifique as condições</h2>
            <div class="formulario">
              <p class="labelValor">Valor simulado:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money v-bind="money" id="valor" v-model="valor"></money>
              </div>
              <div class="btnsAdicionar">
                <button class="adicionar" @click="valor += 1000">
                  +<br />
                  1000,00
                </button>
                <button class="adicionar" @click="valor += 10000">
                  +<br />
                  10.000,00
                </button>
                <button class="adicionar" @click="valor += 20000">
                  + 20.000,00
                </button>
              </div>
            </div>
            <h3 style="text-align: center">Parcelas:</h3>
            <div class="row d-flex justify-content-center">
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 12 x </span>
                <br />
                <span>{{ simulacao(12) | currency }} </span>
              </div>
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 24 x </span>
                <br />

                <span>{{ simulacao(24) | currency }} </span>
              </div>
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 36 x </span>
                <br />

                <span>{{ simulacao(36) | currency }} </span>
              </div>
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 48 x </span>
                <br />

                <span>{{ simulacao(48) | currency }} </span>
              </div>
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 60 x </span>
                <br />

                <span>{{ simulacao(60) | currency }} </span>
              </div>
              <div class="simulacao col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <span> 120 x </span>
                <br />

                <span>{{ simulacao(120) | currency }} </span>
              </div>
            </div>
            <p style="text-align: center; margin-top: 10px">
              Os valores simulados são aproximados, entre em contato com um
              atendente para saber as taxas e tarifas exatas.
            </p>
          </div>
        </div>
        <div
          v-if="loading"
          class="d-flex col-12 align-items-center justify-content-center"
        >
          <loading-progress
            :indeterminate="true"
            size="100"
            rotate
            fill-duration="2"
            rotation-duration="1"
          />
        </div>
      </div>
    </div>
    <footer><p>2021 © Copyright</p></footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { Money } from 'v-money'

export default {
  components: { Money, Header },
  data() {
    return {
      permiteContato: true,
      novoValor: 0,
      taxa: 0.0113,
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
        masked: false,
      },
      leadSaved: false,
      erro: false,
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    acceptedCookies() {
      return this.$store.getters.acceptedCookies
    },
    nome: {
      get() {
        return this.$store.state.formData.nome
      },
      set(value) {
        this.$store.commit('updateNome', value)
      },
    },
    email: {
      get() {
        return this.$store.state.formData.email
      },
      set(value) {
        this.$store.commit('updateEmail', value)
      },
    },
    whatsapp: {
      get() {
        return this.$store.state.formData.whatsapp
      },
      set(value) {
        this.$store.commit('updateWhatsapp', value)
      },
    },
    valor: {
      get() {
        return this.$store.state.formData.valor
      },
      set(value) {
        this.$store.commit('updateValor', value)
      },
    },
    simulacao12() {
      return this.simulacao(12)
    },
  },
  watch: {
    valor() {
      if (this.valor > 9999999.99) {
        this.valor = 0
      }
    },
  },
  mounted() {
    this.$store.dispatch('getLSAcceptedCookies')
  },
  methods: {
    async sendData() {
      try {
        await this.$store.dispatch('sendData')
        this.leadSaved = true
      } catch (err) {
        this.erro = true
      }
    },
    acceptCookies() {
      this.$store.dispatch('acceptCookie')
    },
    simulacao(parcelas) {
      return (
        (this.valor * (Math.pow(1 + this.taxa, parcelas) * this.taxa)) /
        (Math.pow(1 + this.taxa, parcelas) - 1)
      ).toFixed(2)
    },
  },
}
</script>

<style>
* {
  font-family: 'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: normal;
}
@media (min-width: 1200px) {
  h2 {
    font-size: 38px !important;
  }
  .labelValor {
    font-size: 20px !important;
  }
  .inputValor span {
    font-size: 38px !important;
  }
  #valor {
    font-size: 38px !important;
  }
  .form-group {
    margin-bottom: 25px !important;
  }
  #input1::placeholder {
    font-size: 18px !important;
  }
  #input2::placeholder {
    font-size: 18px !important;
  }
  #input3::placeholder {
    font-size: 18px !important;
  }
  .custom-control-label {
    font-size: 16px !important;
  }
  .botao {
    font-size: 22px !important;
  }
  .footer {
    margin-top: 0 !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .cookies-container {
    min-height: 20vh !important;
  }
  .conteudo-coluna1 {
    margin-top: 15vh !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .chamada {
    text-align: center;
    font-size: 40px !important;
  }
  .enfase {
    font-size: 40px !important;
  }
  .conteudo-coluna2 {
    margin-top: 5vh !important;
  }
  .conteudo-coluna3 {
    margin-top: 10vh !important;
  }
  footer {
    margin-top: 5vh;
  }
}
@media (max-width: 767.98px) {
  .cookies-container {
    min-height: 180px !important;
  }
  .conteudo-coluna1 {
    margin-top: 15vh !important;
  }
  .conteudo-coluna2 {
    margin-top: 5vh !important;
  }
  .conteudo-coluna3 {
    margin-top: 10vh !important;
  }
  .logo {
    text-align: center !important;
  }
  .subtitulo {
    text-align: center !important;
  }
  .legenda {
    text-align: center !important;
  }
  .chamada {
    font-size: 36px !important;
    text-align: center !important;
  }
  .enfase {
    font-size: 36px !important;
  }
  footer {
    margin-top: 5vh;
  }
}
.fundo {
  background-color: #f8f9f7;
}
.cookies-container {
  z-index: 1000;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: rgba(44, 152, 93, 0.76);
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.cookies-content {
  text-align: center;
  padding: 15px;
}
.btn-cookies {
  width: 150px;
  height: 35px;
  font-weight: 500;
  border: none;
  color: #343a40;
  border-radius: 4px;
}
.cookies-content p a {
  color: #fff;
  text-decoration: underline;
}
.linha1 {
  min-height: 85vh;
}
.coluna1 {
  display: flex;
  flex-direction: column;
}
.conteudo-coluna1 {
  margin-top: 15vh;
  margin-right: 20%;
}
.chamada {
  font-size: 55px;
  font-weight: 300;
  color: #757575;
}
.enfase {
  color: #3fa110;
  font-size: 55px;
}
.imagem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  padding-right: 65px;
}
.imagem img {
  width: 250px;
  height: 250px;
}
.coluna2 {
  background: transparent;
}
.coluna3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.conteudo-coluna2 {
  margin-top: 15vh;
  margin-right: 20%;
}
.conteudo-coluna3 {
  margin-top: 11vh;
}
h2 {
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  color: #3fa110;
}
.labelValor {
  color: #5a645b;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 15px;
}
span {
  font-size: 36px;
  font-weight: 400;
  color: #757575;
}
.inputValor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
#valor {
  color: #323c32;
  font-weight: 400;
  font-size: 36px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: right;
  min-width: 150px;
  max-width: 325px;
}
#valor:focus-visible {
  outline: none !important;
}
.btnsAdicionar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
.adicionar {
  border: 1px solid #bbb !important;
  background-color: transparent;
  color: #757575;
  font-size: 18px;
  width: 100px;
  padding: 10px !important;
  border-radius: 4px;
  font-weight: bold;
  margin: 0 0 15px 10px;
  -webkit-box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);
}
.adicionar:hover {
  background-color: #3fa110;
  font-weight: bold;
  border: 1px solid #3fa110 !important;
  color: #fff;
}
.form-control {
  height: 35px;
  padding: 2px;
  font-size: 18px;
  background-color: transparent !important;
  border: none !important;
  border-radius: 0;
  border-bottom: 1px solid #cdd3cd !important;
}
.form-control:focus {
  border-bottom: 2px solid #3fa110 !important;
  box-shadow: inherit !important;
}
.form-group {
  margin-bottom: 15px;
}
#input1::placeholder {
  font-size: 16px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif !important;
  color: #757575;
}
#input2::placeholder {
  font-size: 16px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif !important;
  color: #757575;
}
#input3::placeholder {
  font-size: 16px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif !important;
  color: #757575;
}
.custom-control-label {
  font-size: 14px;
  font-weight: 400;
  color: #5a645b;
}
.custom-control.custom-checkbox.b-custom-control-sm {
  margin-bottom: 15px;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #3fa110;
  box-shadow: inherit !important;
  border: inherit !important;
}
.wrapper-button {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn.btn-secondary {
  width: 150px;
  height: 45px;
  color: #fff;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 400;
  background: #3fa110;
  border: none;
  border-radius: 6px;
  margin-bottom: 5px;
}
.btn.btn-secondary:active {
  background-color: #003b1a !important;
}
.btn.btn-secondary:focus {
  box-shadow: none;
  outline: none;
}
.btn.btn-secondary:focus-visible {
  outline: none;
}

.simulacao {
  background: transparent;
  height: 150px;
  padding: 15px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  border: 2px solid #3fa110;
  border-radius: 4px;
}

.simulacao span {
  color: #757575;
  font-size: 29px;
  font-weight: bold;
}
footer {
  width: 100%;
  height: 80px;
  margin-top: 8vh;
  background-color: #323c32;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer p {
  width: 100%;
  margin: 0;
}
.vue-progress-path .progress {
  stroke: #3fa110;
}
</style>
