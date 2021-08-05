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
        <div class="alignBtn">
          <button
            type="button"
            class="btn btn-outline-light"
            @click="acceptCookies"
          >
            Aceitar
          </button>
        </div>
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
                <span class="enfase">simulação de crédito consignado</span> e
                receba nosso contato.
              </p>
              <div class="imagem">
                <img src="@/static/images/phonehand.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!loading && !leadSaved"
          class="col-sm-12 col-md-12 col-lg-6 coluna2"
        >
          <div class="conteudo-coluna2 col-12 px-4 py-2">
            <h2>Consulte as condições de simulação</h2>
            <div class="formulario">
              <p class="labelValor">Digite um valor para simular:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money v-bind="money" id="valor" v-model="valor"></money>
              </div>
              <div class="btnsAdicionar row">
                <button
                  class="adicionar col-xl-3 col-lg-2 col-md-3 col-sm-2"
                  @click="valor += 5000"
                >
                  <span>+</span> <br />
                  5000,00
                </button>
                <button
                  class="adicionar col-xl-3 col-lg-2 col-md-3 col-sm-2"
                  @click="valor += 10000"
                >
                  <span>+</span><br />
                  10.000,00
                </button>
                <button
                  class="adicionar col-xl-3 col-lg-2 col-md-3 col-sm-2"
                  @click="valor += 20000"
                >
                  <span>+</span><br />
                  20.000,00
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
                  v-model="whatsapp"
                  v-mask="'(##) #####-####'"
                  placeholder="Whatsapp*"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group" label-for="input-2">
                <b-form-input
                  id="input3"
                  v-model="email"
                  placeholder="E-mail*"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                v-model="permiteContato"
                name="checkbox-1"
                size="md"
              >
                Sim, aceito ser contatado por meio desses dados.
              </b-form-checkbox>
              <div class="wrapper-button">
                <b-button
                  :disabled="!permiteContato || !isFormValid"
                  class="botao"
                  @click="sendData"
                >
                  Simule aqui
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 coluna3">
          <!---v-if="!loading && leadSaved" --->
          <div class="conteudo-coluna3 col-12 px-4 py-2">
            <h2>Verifique as condições</h2>
            <div class="formulario formulario2">
              <p class="labelValor">Valor simulado:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money v-bind="money" id="valor" v-model="valor"></money>
              </div>
              <div class="btnsAdicionar row">
                <button class="adicionar" @click="valor += 1000">
                  <span>+</span><br />
                  1000,00
                </button>
                <button class="adicionar" @click="valor += 10000">
                  <span>+</span><br />
                  10.000,00
                </button>
                <button class="adicionar" @click="valor += 20000">
                  <span>+</span><br />
                  20.000,00
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
            <p class="paragrafo">
              Os valores simulados são aproximados, entre em contato com um
              atendente para saber as taxas e tarifas exatas.
            </p>
          </div>
        </div>
        <div
          v-if="loading"
          class="
            d-flex
            col-12
            flex-column
            align-items-center
            justify-content-center
          "
        >
          <loading-progress
            :indeterminate="true"
            size="100"
            rotate
            fill-duration="2"
            rotation-duration="1"
          />
          obtendo valores
        </div>
      </div>
    </div>
    <footer><p>2021 © Copyright</p></footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { Money } from 'v-money'
import * as yup from 'yup'

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
    isFormValid() {
      const schema = yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().email().required(),
        whatsapp: yup.string().min(15).required(),
        valor: yup.number().required(),
      })

      return schema.isValidSync({
        nome: this.nome,
        email: this.email,
        whatsapp: this.whatsapp,
        valor: this.valor,
      })
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
  font-style: italic;
  color: #52595a;
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
  #input1::placeholder {
    font-size: 18px !important;
  }
  #input2::placeholder {
    font-size: 18px !important;
  }
  #input3::placeholder {
    font-size: 18px !important;
  }
  .conteudo-coluna3 {
    margin-top: 16vh !important;
    max-width: 65% !important;
  }
  .footer {
    margin-top: 0 !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .conteudo-coluna2 {
    padding-right: 0 !important;
  }
  .labelValor {
    font-size: 20px !important;
  }
  .adicionar span {
    font-size: 32px !important;
  }
  .adicionar {
    min-width: 135px !important;
    font-size: 23px !important;
  }
  .form-control {
    width: 425px !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .cookies-container {
    min-height: 20vh !important;
  }
  .cookies-container button {
    align-self: center;
  }
  .conteudo-coluna1 {
    margin-top: 17vh !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    padding: 0 24px !important;
  }
  .chamada {
    font-size: 43px !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .enfase {
    font-size: 43px !important;
  }
  .imagem {
    margin: 10px 0 0 0 !important;
    align-self: center !important;
  }
  .imagem img {
    width: 320px !important;
    height: 278px !important;
  }
  .conteudo-coluna2 {
    margin-top: 5vh !important;
  }
  h2 {
    font-size: 43px !important;
  }
  .labelValor {
    font-size: 20px !important;
  }
  .btnsAdicionar {
    max-width: 550px !important;
  }
  .form-control {
    width: 550px !important;
    height: 40px !important;
  }
  #input1::placeholder,
  #input2::placeholder,
  #input3::placeholder {
    font-size: 20px !important;
  }
  .custom-control-label {
    font-size: 20px !important;
  }
  .conteudo-coluna3 {
    margin-top: 10vh !important;
  }
  .conteudo-coluna3 .simulacao span {
    font-size: 28px !important;
  }
  footer {
    margin-top: 5vh;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .cookies-container {
    min-height: 180px !important;
  }
  .cookies-container button {
    align-self: center;
  }
  .conteudo-coluna1 {
    margin-top: 17vh !important;
    padding: 0 !important;
  }
  .conteudo-coluna2 {
    margin-top: 5vh !important;
    padding: 0 !important;
  }
  .chamada {
    font-size: 38px !important;
    text-align: left !important;
  }
  .enfase {
    font-size: 38px !important;
  }
  .imagem {
    margin: 10px 0 0 0 !important;
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .imagem img {
    width: 223px !important;
    height: 193px !important;
  }
  h2 {
    font-size: 36px !important;
    width: 400px !important;
  }
  .labelValor {
    font-size: 20px !important;
  }
  .adicionar span {
    font-size: 30px !important;
  }
  .adicionar {
    max-width: 150px !important;
    font-size: 25px !important;
  }
  .form-control {
    width: 500px !important;
    height: 40px !important;
  }
  #input1::placeholder,
  #input2::placeholder,
  #input3::placeholder {
    font-size: 20px !important;
  }
  .custom-control-label {
    font-size: 20px !important;
  }
  .conteudo-coluna3 {
    margin-top: 10vh !important;
  }
  .conteudo-coluna3 h2 {
    width: 100% !important;
    text-align: center !important;
  }
  .conteudo-coluna3 h3 {
    font-size: 32px !important;
  }
  .conteudo-coluna3 .simulacao {
    max-height: 120px !important;
  }
  .conteudo-coluna3 .simulacao span {
    font-size: 26px !important;
  }
  footer {
    margin-top: 5vh;
  }
}
@media (max-width: 576px) {
  .cookies-container {
    min-height: 180px !important;
  }
  .cookies-content {
    margin: 0 40px !important;
    padding: 15px 0 !important;
  }
  .cookies-content p {
    padding: 0 !important;
  }
  .cookies-container button {
    align-self: center;
  }
  .conteudo-coluna1 {
    margin-top: 15vh !important;
    padding: 0 !important;
  }
  .conteudo-coluna2 {
    margin-top: 8vh !important;
    padding: 0 20px !important;
  }
  .chamada {
    font-size: 34px !important;
    text-align: center !important;
  }
  .enfase {
    font-size: 34px !important;
  }
  .imagem {
    margin: 10px 0 0 0 !important;
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .imagem img {
    width: 223px !important;
    height: 193px !important;
  }
  h2 {
    font-size: 32px !important;
    max-width: 100% !important;
    word-wrap: normal !important;
  }
  .labelValor {
    margin-top: 15px !important;
  }
  .btnsAdicionar {
    justify-content: space-around !important;
    align-items: center !important;
    margin: 10px 0 !important;
  }
  .adicionar span {
    font-size: 28px !important;
  }
  .adicionar {
    width: 180px !important;
    height: 80px !important;
    margin: 10px 5px !important;
    font-size: 26px !important;
  }
  .form-control {
    margin-top: 25px !important;
    max-width: 100% !important;
  }
  .conteudo-coluna3 {
    margin-top: 10vh !important;
  }
  .conteudo-coluna3 h3 {
    font-size: 30px !important;
  }
  .conteudo-coluna3 .simulacao {
    max-height: 100px !important;
    height: 100% !important;
    flex-direction: row !important;
    justify-content: space-evenly !important;
  }
  .conteudo-coluna3 .simulacao span {
    font-size: 26px !important;
  }
  footer {
    margin-top: 5vh;
  }
}
.fundo {
  background-color: #fff;
}
.cookies-container {
  z-index: 1000;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #383f36;
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
}
.cookies-content {
  text-align: center;
  padding: 15px;
  margin: 0 90px;
}
.alignBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cookies-container button {
  width: 150px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background-color: #87c544;
  border-radius: 6px;
}
.cookies-content p a {
  color: #87c544;
  text-decoration: none;
}
.linha1 {
  min-height: 85vh;
}
.coluna1 {
  display: flex;
  flex-direction: column;
}
.conteudo-coluna1 {
  margin-top: 20vh;
}
.chamada {
  font-size: 48px;
  font-weight: 600;
}
.enfase {
  color: #87c544;
  font-weight: 700;
  font-size: 48px;
}
.imagem {
  margin-left: 24px;
  margin-top: -40px;
}
.coluna2 {
  background: transparent;
}
.conteudo-coluna2 {
  margin-top: 20vh;
}
h2 {
  font-size: 40px;
  font-weight: 600;
  text-align: left;
  width: 460px;
}
.labelValor {
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 15px;
}
span {
  font-size: 36px;
  font-weight: 600;
}
.inputValor {
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
}
#valor {
  font-weight: 600;
  font-size: 36px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: left;
  min-width: 150px;
  max-width: 325px;
  margin-left: 20px;
}
#valor:focus-visible {
  outline: none !important;
}
.btnsAdicionar {
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0;
}
.adicionar span {
  font-size: 40px;
  font-weight: 700;
}
.adicionar {
  min-width: 150px;
  max-width: 200px;
  height: 90px;
  padding-bottom: 10px;
  border: 2px solid #52595a !important;
  border-radius: 10px;
  background-color: transparent;
  font-size: 25px;
  font-weight: 600;
}
.adicionar:hover {
  background-color: #87c544;
  font-weight: 600;
  border: 1px solid #87c544 !important;
  color: #fff;
}
.form-control {
  width: 450px;
  height: 35px;
  padding: 2px;
  font-size: 18px;
  background-color: transparent !important;
  border: none !important;
  border-radius: 0;
  border-bottom: 2px solid #52595a !important;
}
.form-control:focus {
  border-bottom: 2px solid #87c544 !important;
  box-shadow: inherit !important;
}
.form-group {
  margin-bottom: 15px;
}
#input1::placeholder,
#input2::placeholder,
#input3::placeholder {
  font-size: 18px;
  font-weight: 600;
  color: #52595a;
}
.custom-control-label {
  font-size: 18px;
  font-weight: 600;
}
.custom-control.custom-checkbox.b-custom-control-md {
  margin: 30px 0;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #87c544;
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
  width: 200px;
  height: 60px;
  color: #fff;
  font-size: 30px !important;
  font-weight: 600;
  background: #87c544;
  border: none;
  border-radius: 6px;
  margin-bottom: 5px;
}
.btn.btn-secondary:active {
  background-color: #63972b !important;
}
.btn.btn-secondary:focus {
  box-shadow: none;
  outline: none;
}
.btn.btn-secondary:focus-visible {
  outline: none;
}
.vue-progress-path .progress {
  stroke: #87c544;
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
  border-radius: 6px;
}
.simulacao span {
  font-size: 29px;
  font-weight: bold;
}
.coluna3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.conteudo-coluna3 {
  margin-top: 11vh;
  width: 100%;
}
.conteudo-coluna3 h2 {
  width: 100%;
  text-align: center;
}
.conteudo-coluna3 h3 {
  font-size: 34px;
  font-weight: 600 !important;
}
.conteudo-coluna3 .paragrafo {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
}
.formulario2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formulario2 .inputValor {
  width: 300px;
}
.formulario2 .inputValor input {
  text-align: right !important;
}
footer {
  width: 100%;
  height: 80px;
  margin-top: 8vh;
  background-color: #323c32;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer p {
  font-size: 22px;
  width: 100%;
  margin: 0;
  color: #87c544;
}
</style>
