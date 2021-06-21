<template>
  <div>
    <div class="box-cookies hide">
      <p class="msg-cookies">
        Este site usa cookies para garantir que você obtenha a melhor
        experiência.
      </p>
      <button class="btn-cookies">Aceitar cookies</button>
    </div>
    <div class="quadrado">
      <div class="container">
        <div class="row">
          <div class="col-sx-12 col-sm-12 col-md-6 col-lg-6 col-xg-6">
            <div class="ladoEsquerdo">
              <div class="logo">
                <img
                  src="@/static/images/SimulaCred.svg"
                  alt="Logo SimulaCred"
                />
              </div>
              <p class="titulo">Crédito rápido e fácil.</p>
              <p class="legenda">
                Com a nossa empresa, fazer um empréstimo é muito simples.
                Contamos com métodos que facilitam esse processo.
              </p>
              <section class="lista">
                <div class="item">
                  Serviços online
                  <b-icon icon="display-fill"></b-icon>
                </div>
                <div class="item">
                  Dinamismo
                  <b-icon icon="gear-fill"></b-icon>
                </div>
                <div class="item">
                  Equipe qualificada
                  <b-icon icon="people-fill"></b-icon>
                </div>
              </section>
            </div>
          </div>
          <div
            class="
              col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xg-6
              mb-lg-5 mb-md-5 mb-sm-5 mb-sx-5
            "
          >
            <div class="row">
              <form class="formulario col-sm-10">
                <div class="form_bg">
                  <p class="tituloForm">Consulte as condições</p>
                  <section class="digiteValor">
                    <p class="labelValor">Digite um valor para simular:</p>
                    <span> R$ </span>
                    <input id="valor" placeholder="1000,00" type="number" />
                  </section>
                  <b-form-group
                    id="input-group"
                    label="Nome:"
                    label-for="input-2"
                  >
                    <b-form-input id="input" required></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group"
                    label="Email:"
                    label-for="input-2"
                  >
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer"></footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.box-cookies {
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  position: fixed;
  background-color: rgba(65, 133, 96, 0.7);
  width: 100%;
  height: 60px;
  padding: 25px;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-cookies {
  border: 0;
  border-radius: 4px;
  background-color: #fff;
  color: #343a40;
}
.msg-cookies {
  height: 100%;
}
.quadrado {
  background: url(@/static/images/background.svg) no-repeat fixed center top;
  background-size: 100%;
}
.container {
  min-height: calc(100vh - 90px);
}
.ladoEsquerdo {
  margin: 20vh 0 0 0;
  font-family: 'Barlow', sans-serif;
  color: #001f0d;
}
.logo {
  width: 172px;
  height: 40px;
  margin-bottom: 18px;
}
.titulo {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 35px;
}
.campos {
  display: flex;
  flex-direction: column;
}
.legenda {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  width: 360px;
  height: 60px;
  margin-bottom: 35px;
}
.lista {
  display: flex;
  flex-direction: row;
  margin-right: 40px;
}
.item {
  width: 88px;
  height: 68px;
  margin-right: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
svg {
  width: 30px;
  height: 30px;
}
.formulario {
  width: 505px;
  height: 494px;
  margin: 10vh 0 0 0;
  padding: 15px 30px;
  background-color: #f1f0f0;
  border-radius: 12px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  line-height: normal;
  color: #343a40;
  -webkit-box-shadow: -4px 4px 15px -6px #707070;
  box-shadow: -4px 4px 15px -6px #707070;
}
.tituloForm {
  color: #00823b;
  height: 30px;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  line-height: normal;
}
form div p {
  font-size: 24px;
  color: #001f0d;
  margin-bottom: 15px;
  height: 27px;
}
.input-group {
  font-size: 18px;
}
#valor {
  font-size: 24px;
  background: none;
  border: none;
  margin-bottom: 15px;
  width: 200px;
  color: #343a40;
}
span {
  font-size: 24px;
  color: #00823b;
}
.labelValor {
  margin-bottom: 5px;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  color: #343a40;
}
.form-control {
  height: 30px;
}
.form-group {
  height: 54px;
  margin-bottom: 15px;
}
.d-block {
  margin-bottom: 5px;
}
.custom-control.custom-checkbox {
  margin-top: 30px;
}
.custom-control-input {
  width: 13px;
  height: 13px;
}
.custom-control-label {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  color: #6c757d;
}
.wrapper-button {
  width: 100%;
  text-align: center;
}
.btn {
  background-color: #00823b;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  width: 150px;
  height: 45px;
  margin: 15px 0;
}
.btn-secondary {
  border: 0;
}
.footer {
  width: 100%;
  height: 90px;
  background-color: #418560;
}
</style>
