<template>
  <div class="header">
    <div class="direita">
      <a href="http://www.sicredi.com.br" class="logoImg"
        ><img src="@/static/images/marca.svg" alt="Sicredi logo" class="logo"
      /></a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header {
  background-color: #fff;
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 1001;
  display: flex;
  justify-content: flex-end;
  -webkit-box-shadow: 0 2px 5px -2px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 5px -2px rgb(0 0 0 / 20%);
}
.direita {
  height: 100%;
  margin-right: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logoImg img {
  height: 35px;
}
</style>
