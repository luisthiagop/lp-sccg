<template>
  <div class="container">
    <div class="row linha1">
      <div class="col-sm-12 col-md-12 col-lg-6 coluna1">
        <div class="conteudo-coluna1 col-12 px-0">
          <div class="logo">
            <img src="@/static/images/SimulaCred.svg" alt="Logo SimulaCred" />
          </div>
          <p class="subtitulo mt-3">Crédito rápido e fácil.</p>
          <p class="legenda mt-3 col-8 px-0">
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
            <p class="tituloForm">Consulte as condições</p>
            <section class="digiteValor">
              <p class="labelValor">Digite um valor para simular:</p>
              <span> R$ </span>
              <input id="valor" placeholder="1000,00" type="number" />
            </section>
            <b-form-group id="input-group" label="Nome:" label-for="input-2">
              <b-form-input id="input" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group" label="Email:" label-for="input-2">
              <b-form-input id="input2" required></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group"
              label="Telefone:"
              label-for="input-2"
            >
              <b-form-input id="input3" required></b-form-input>
            </b-form-group>
            <b-form-checkbox id="checkbox-1" name="checkbox-1">
              Sim, aceito receber emails, mensagens e ligações da empresa.
            </b-form-checkbox>
            <div class="wrapper-button"><b-button>Enviar</b-button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
* {
  font-family: 'Barlow', sans-serif;
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
  background: lightgreen;
}
.conteudo-coluna2 {
  margin-top: 15vh;
  margin-right: 20%;
  background-color: #f1f0f0;
  border-radius: 12px;
}
</style>
