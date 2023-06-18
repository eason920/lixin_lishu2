<template>
  <div class="menu">
    <div></div>
    <div class="nav">
      <a class="nav-item" @click="showCallDialog">
        <font-awesome-icon icon="phone" />
        <div class="label">撥打電話</div>
      </a>
      <a class="nav-item" @click="showMessengerDialog">
        <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
        <div class="label">FB諮詢</div>
      </a>
      <a class="nav-item" v-scroll-to="{ element: `#contact`, offset: 0 }">
        <font-awesome-icon icon="pen" />
        <div class="label">預約賞屋</div>
      </a>
      <a class="nav-item" @click="showMapDialog">
        <font-awesome-icon icon="map-marker-alt" />
        <div class="label">地圖導航</div>
      </a>

      <el-dialog title :visible.sync="isShowCallDialog" width="500px" :modal-append-to-body="false">
        <CallDialog :phone="info.phone" />
      </el-dialog>
      <el-dialog title :visible.sync="isShowMessengerDialog" width="500px" :modal-append-to-body="false">
        <MessengerDialog :messenger="info.fbMessage" />
      </el-dialog>
      <el-dialog title :visible.sync="isShowMapDialog" width="500px" :modal-append-to-body="false">
        <MapDialog :link="info.googleLink" :address="info.address" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import CallDialog from '@/components/Dialog/Call'
import MessengerDialog from '@/components/Dialog/Messenger'
import MapDialog from '@/components/Dialog/Map'
import info from '@/info'


export default {
  name: 'navigation',
  components: {
    CallDialog,
    MessengerDialog,
    MapDialog,
  },
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      info,
      isBottom: false,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false,
    }
  },

  computed: {
    offset() {
      if (this.isMobile) {
        return -39
      }

      if (this.isTablet) {
        return -45
      }

      return -56
    }
  },

  methods: {
    showCallDialog() {
      this.isShowCallDialog = true
    },
    showMessengerDialog() {
      this.isShowMessengerDialog = true
    },

    showMapDialog() {
      this.isShowMapDialog = true
    },
  },

  mounted() {

  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/myvar"
@import ../projects/lishu2/sass/share
// nav
%text
  text-decoration: none
  letter-spacing: .5vw
  color: $b
  font:
    size: 1vw
    family: "Noto Sans TC" !important

.menu
  background-color: rgba(0, 53, 85, .8)
  padding-left: 4.5vw
  position: fixed
  top: 0
  left: 0
  display: flex
  z-index: 10
  width: 100%
  align-items: center
  justify-content: space-between
  height: 68px
  transition: background .3s

.nav
  display: flex
  height: 100%
.nav-item
  color: #fff
  cursor: pointer
  padding: 0 2.5vw
  border-left: solid 1px rgba(255,255,255,.5)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  transition: .3s
  background-color: rgba(0,0,0,0)
  &:hover
    background-color: rgba(0,0,0,.1)
.label
  font-size: 13px
  font-weight: lighter
  margin-top: .6vw


</style>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';

.mobile-nav {
  width: 100%;
  height: 63px;
  background: #000;

  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, .4);
  display: none;
  transition: all .5s;

  .nav-item {
    flex: 1;
    color: $mobile_nav_color;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #fff;

    &:nth-child(4) {
      border-right: none;
    }
  }

  svg {
    width: 20px !important;
    height: 25px;
    color: $mobile_nav_icon;
  }

  .label {
    text-align: center;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .mobile-nav {
    display: flex;
  }
}
</style>
