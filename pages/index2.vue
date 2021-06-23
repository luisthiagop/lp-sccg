<template>
  <div class="fundo">
    <div class="container">
      <div class="row linha1">
        <div class="col-sm-12 col-md-12 col-lg-6 coluna1">
          <div class="conteudo-coluna1 col-12 px-0">
            <div class="logo">
              <img src="@/static/images/SimulaCred.svg" alt="Logo SimulaCred" />
            </div>
            <p class="subtitulo mt-4">Crédito rápido e fácil.</p>
            <p class="legenda mt-4 col-8 px-0">
              Com a nossa empresa, fazer um empréstimo é muito simples. Contamos
              com métodos que facilitam esse processo.
            </p>
            <p class="chamada col-8 px-0">
              Simule em nossa ferramenta as condições de crédito
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 coluna2">
          <div class="conteudo-coluna2 col-12 px-4 py-2">
            <h2>Consulte as condições</h2>
            <div class="formulario">
              <p class="labelValor">Digite um valor para simular:</p>
              <div class="inputValor">
                <span> R$ </span>
                <money
                  v-bind="money"
                  id="valor"
                  v-model="formData.valor"
                ></money>
              </div>
              <div class="btnsAdicionar">
                <button class="adicionar" @click="formData.valor += 100">
                  + 100,00
                </button>
                <button class="adicionar" @click="formData.valor += 500">
                  + 500,00
                </button>
                <button class="adicionar" @click="formData.valor += 1000">
                  + 1000,00
                </button>
              </div>
              <b-form-group id="input-group" label="Nome:" label-for="input-2">
                <b-form-input
                  id="input"
                  v-model="formData.nome"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group" label="Email:" label-for="input-2">
                <b-form-input
                  id="input2"
                  v-model="formData.email"
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
                  v-model="formData.whatsapp"
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
                  >Enviar</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ formData }}
  </div>
</template>

<script>
import { Money } from 'v-money'
import axios from 'axios'
export default {
  components: { Money },

  data() {
    return {
      permiteContato: true,
      formData: {
        valor: 5000,
        nome: '',
        email: '',
        whatsapp: '',
      },
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
        masked: false,
      },
    }
  },
  methods: {
    async sendData() {
      const res = await axios.post(
        'http://localhost:8000/wp-json/api/lead',
        this.formData
      )
      console.log(res)
    },
  },
}
</script>

<style>
* {
  font-family: 'Barlow', sans-serif;
  line-height: normal;
}
.fundo {
  background: url(@/static/images/background.svg) no-repeat fixed;
  background-size: 100%;
}
.linha1 {
  min-height: 100vh;
}
.coluna1 {
  background: transparent;
}
.conteudo-coluna1 {
  margin-top: 15vh;
  margin-right: 20%;
}
.logo {
  width: 272px;
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
}
h2 {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #00823b;
}
span {
  font-size: 18px;
  font-weight: 500;
  color: #6c757d;
}
.inputValor {
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
}
#valor {
  color: #343a40;
  font-weight: 500;
  font-size: 18px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: right;
  width: 100%;
}
#valor:focus-visible {
  outline: none !important;
}
.btnsAdicionar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
}
.adicionar {
  border: none;
  background-color: #fff;
  color: #6c757d;
  font-weight: 400;
  width: 100px;
  border-radius: 4px;
  margin-left: 5px;
}
label,
.labelValor {
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
</style>
