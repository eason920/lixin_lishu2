<template>
  <div class="footer">
     <a href="https://www.lixin.com.tw/" target="_blank"><img src="../assets/img/footerLogo.gif" alt="立炘數位" /></a>
     <a href="https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  background: #302626;
  display: flex;
  justify-content: center;
  font-size: 12px;
  position: relative;
  display: none;

  img {
    height:14px;
  }
  a {
    margin:0 .8em;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    margin-bottom: 63px;
  }
}
</style>

<script>
export default {
  name: 'adminFooter',
  components: {},

  methods: {},
}
</script>
