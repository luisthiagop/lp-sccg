<template>
  <div class="fundo">
    <div class="cookies-container">
      <div class="cookies-content">
        <p>
          Conforme a
          <a
            href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            >Lei Geral de Proteção de Dados</a
          >, é necessário aceitar o uso de cookies para personalizar a
          experiência no site.
        </p>
        <button class="btn-cookies">Aceitar cookies</button>
      </div>
    </div>
    <div class="container">
      <div class="row linha1">
        <div class="col-sm-12 col-md-12 col-lg-6 coluna1">
          <div class="row px-3">
            <div class="conteudo-coluna1 col-12 px-0">
              <div class="logo">
                <img
                  src="@/static/images/SimulaCred.svg"
                  alt="Logo SimulaCred"
                />
              </div>
              <p class="subtitulo mt-4">Crédito rápido e fácil.</p>
              <p class="legenda mt-4 col-lg-8 col-md-8 px-0">
                Com a nossa empresa, fazer um empréstimo é muito simples.
                Contamos com métodos que facilitam esse processo.
              </p>
              <p class="chamada col-lg-8 col-md-8 px-0">
                Simule em nossa ferramenta as condições de crédito
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 coluna2">
          <div class="conteudo-coluna2 col-12 px-4 py-2">
            <h2>Consulte as condições</h2>
            <div class="formulario">
              <p class="labelValor">Digite um valor para simular:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money v-bind="money" id="valor" v-model="valor"></money>
              </div>
              <div class="btnsAdicionar">
                <button class="adicionar" @click="valor += 500">
                  + 500,00
                </button>
                <button class="adicionar" @click="valor += 1000">
                  + 1000,00
                </button>
                <button class="adicionar" @click="valor += 10000">
                  + 10.000,00
                </button>
              </div>
              <b-form-group id="input-group" label="Nome:" label-for="input-2">
                <b-form-input id="input" v-model="nome" required></b-form-input>
              </b-form-group>
              <b-form-group id="input-group" label="Email:" label-for="input-2">
                <b-form-input
                  id="input2"
                  v-model="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group"
                label="Telefone:"
                label-for="input-2"
              >
                <b-form-input
                  id="input3"
                  v-model="whatsapp"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                v-model="permiteContato"
                name="checkbox-1"
                size="sm"
              >
                Sim, aceito receber emails, mensagens e ligações da empresa.
              </b-form-checkbox>
              <div class="wrapper-button">
                <b-button :disabled="!permiteContato" @click="sendData"
                  >Simular</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer><p>2021 © Copyright</p></footer>
  </div>
</template>

<script>
import { Money } from 'v-money'
export default {
  components: { Money },

  data() {
    return {
      permiteContato: true,
      novoValor: 0,
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
        masked: false,
      },
    }
  },
  computed: {
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
  },
  methods: {
    sendData() {
      this.$store.dispatch('sendData')
    },
  },
}
</script>

<style>
* {
  font-family: 'Barlow', sans-serif;
  line-height: normal;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .fundo {
    background: url(@/static/images/backgroundTablet.svg) no-repeat fixed !important;
    background-size: 100% !important;
  }
  .cookies-container {
    height: 20vh !important;
  }
  .conteudo-coluna1 {
    margin-top: 5vh !important;
  }
  .conteudo-coluna2 {
    margin-top: 3vh !important;
  }
  footer {
    margin-top: 5vh;
  }
}
@media (max-width: 767.98px) {
  .fundo {
    background: url(@/static/images/backgroundMobile.svg) no-repeat fixed !important;
    background-size: 100% !important;
  }
  .cookies-container {
    height: 180px !important;
  }
  .conteudo-coluna1 {
    margin-top: 5vh !important;
  }
  .conteudo-coluna2 {
    margin-top: 3vh !important;
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
    text-align: center !important;
  }
  footer {
    margin-top: 5vh;
  }
}
.fundo {
  background: url(@/static/images/background.svg) no-repeat fixed;
  background-size: 100%;
}
.cookies-container {
  z-index: 1000;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: rgba(44, 152, 93, 0.76);
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
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
  min-height: 95vh;
}
.coluna1 {
  display: flex;
  flex-direction: column;
}
.conteudo-coluna1 {
  margin-top: 20vh;
  margin-right: 20%;
}
.logo {
  height: 40px;
}
.subtitulo {
  font-size: 24px;
  font-weight: 700;
  color: #001f0d;
}
.legenda {
  font-size: 18px;
  font-weight: 500;
  color: #001f0d;
}
.chamada {
  font-size: 18px;
  font-weight: 700;
  color: #001f0d;
}
.coluna2 {
  background: transparent;
}
.conteudo-coluna2 {
  margin-top: 15vh;
  margin-right: 20%;
  background-color: #f1f0f0;
  border-radius: 12px;
  box-shadow: rgb(191, 194, 190) 0 0 10px;
}
h2 {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: #00823b;
}
.labelValor {
  color: #343a40;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
}
span {
  font-size: 36px;
  font-weight: 500;
  color: #6c757d;
}
.inputValor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
#valor {
  color: #343a40;
  font-weight: 500;
  font-size: 36px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: right;
  min-width: 150px;
  max-width: 225px;
}
#valor:focus-visible {
  outline: none !important;
}
.btnsAdicionar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
}
.adicionar {
  border: none;
  background-color: #fff;
  color: #6c757d;
  font-size: 18px;
  font-weight: 400;
  width: 100px;
  padding: 10px !important;
  border-radius: 4px;
  margin: 0 0 15px 10px;
}
label {
  color: #343a40;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}
.form-control {
  height: 35px;
  padding: 5px 12px;
  font-size: 18px;
}
.form-control:focus {
  border: 1px solid #00823b;
  box-shadow: inherit !important;
}
.form-group {
  margin-bottom: 15px;
}
.custom-control-label {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
}
.custom-control.custom-checkbox.b-custom-control-sm {
  margin-bottom: 15px;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #00823b;
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
  font-size: 20px;
  font-weight: 500;
  background: #00823b;
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
footer {
  width: 100%;
  height: 80px;
  background-color: #00823b;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer p {
  width: 100%;
  margin-bottom: none;
}
</style>
