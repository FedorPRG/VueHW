<template>
    <header class="header center">
        <div class="logo">
            <a href="index.html"><img src="../assets/logo.png" alt="Logo"></a>
            <a href="index.html">Interno</a>
        </div>
        <nav class="header__right">
            <a href="./index.html">Home</a>
            <a href="#">Project</a>
            <a href="./blog.html">Blog</a>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'headerCom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/vars";

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
.logo {
  font-family: "DM Serif Display", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 50px */
  & img {
    width: 34px;
  }
}
.header {
  padding-top: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__right {
    display: flex;
    justify-content: space-between;
    width: 243px;
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
  }
}
</style>
