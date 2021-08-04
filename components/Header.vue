<template>
  <div class="header">
    <div class="direita">
      <a href="http://www.sicredi.com.br" class="logoImg"
        ><img src="@/static/images/marca.png" alt="Sicredi logo" class="logo"
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
  -webkit-box-shadow: 0 2px 4px -2px rgb(82 89 90 / 45%);
  -moz-box-shadow: 0 2px 4px -2px rgba(82, 89, 90, 0.45);
  box-shadow: 0 2px 4px -2px rgb(82 89 90 / 45%);
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
