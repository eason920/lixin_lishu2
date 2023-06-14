<template>
  <div>
    <div class="contact-info" id="contact-info">
      <water class="water" />
      <!-- <div class="absolute decor decor-5">
        <img
          class="decor-img"
          src="@/projects/lishu2/S9/logo.png"
          alt=""
          srcset=""
        />
        <img
          class="decor-bg"
          src="@/projects/lishu2/decor/decor-e-bg.png"
          alt=""
          srcset=""
        />
      </div> -->
      <!-- <img
        v-if="!isMobile"
        class="logo"
        src="@/projects/lishu2/S9/logo.png"
        :alt="info.caseName"
      />
      <img
        v-if="isMobile"
        class="logo"
        src="@/projects/lishu2/S9/logo.png"
        :alt="info.caseName"
      /> -->
      <div class="info">
        <div class="btn flex-c" @click="showCallDialog">
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            {{ info.phone }}
          </span>
        </div>
        <div class="btn flex-c" @click="showMessengerDialog">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span
              >FB 諮詢</span
            >
          </span>
        </div>
        <a class="btn flex-c" :href="info.fbLink" target="_blank">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /><span
              >前往粉絲專頁</span
            >
          </span>
        </a>
        <div class="address flex-c">{{ info.address }}</div>
        <div class="google-btn flex-c" @click="showMapDialog">
          <span class="flex-c">
            <font-awesome-icon icon="map-marker-alt" /><span
              >導航 Google 地圖</span
            >
          </span>
        </div>
      </div>
    </div>
    <el-dialog
      title
      :visible.sync="isShowCallDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMessengerDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMapDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MapDialog :link="info.googleLink" :address="info.address" />
    </el-dialog>
  </div>
</template>

<script>
import info from '@/info'
import { isMobile, isTablet } from '@/utils'
import water from '@/projects/lishu2/water.vue'
import CallDialog from '@/components/Dialog/Call'
import MessengerDialog from '@/components/Dialog/Messenger'
import MapDialog from '@/components/Dialog/Map'
export default {
  name: 'contactInfo',
  components: {
    water,
    CallDialog,
    MessengerDialog,
    MapDialog
  },
  data() {
    return {
      info,
      isMobile,
      isTablet,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false
    }
  },
  methods: {
    showCallDialog() {
      // if (!this.isMobile) return
      this.isShowCallDialog = true
    },
    showMessengerDialog() {
      // if (!this.isMobile) return
      this.isShowMessengerDialog = true
    },

    showMapDialog() {
      // if (!this.isMobile) return
      this.isShowMapDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
@import "@/assets/style/variableDefault.scss";
@import "@/projects/lishu2/sass/share.sass";

.contact-info {
  background: $contact_bg;
  // background-image: url('../projects/lishu2/S9/bg.png');
  background-size: 100% auto;
  background-position: center bottom;
  //box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  // z-index: 3;
  width: 100%;
  // height: 480px;
  /* background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 0% 50%; */
  transform: translateY(0);
  margin: 2vw auto 0;
  padding: 70px 0 60px;
  // overflow: hidden;

  .decor-5 {
    width: 22vw;
    top: -12vh;
    left: -2vw;
    z-index: 5;

    img {
      width: 100%;
    }
  }
  .water{
    position: absolute;
  // background:#003555;
    left: 0vw;
    bottom:-2vw;
    z-index: -1;
    opacity: .6;
    width: 100%;
  }
}

.logo {
  width: auto;
  height: 210px;
  margin: 0 auto;
  margin-bottom: 60px;
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: #d1b373;
  // box-shadow: $contact_btn_border;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  font-family: $family4;

  &.half {
    width: 49%;
  }
  svg {
    color: #fff;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    // background: $contact_btn_hover_bg;
    // color: $contact_btn_hover_color;

    svg {
      color: #fff;
    }
  }
  &::before {
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }
  &:hover:before {
    opacity: 1;
    width: 90%;
    left: 140%;
  }
  @include classicHover;
}
.address {
  width: 600px;
  height: 60px;
  letter-spacing: 0;
  background-color: rgba(0,0,0,.85);
  // box-shadow: $contact_btn_border;
  border-radius: 0;
  border: 1px solid #fff;
  font-family: $family4;
  color: #fff;
  + .google-btn,
  + .btn {
    border-radius: 0;
    font-family: $family4;
  }
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  // background: #d1b373;
  background-position: center !important;
  background-color: #003555;
  // background-image: linear-gradient(180deg, #BDE5FF 0%, #83B9D5 47.92%, #002B43 100%);
  // box-shadow: #d1b373;
  transition: all 0.5s;

  svg {
    color: #fff;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  // &:hover {
  //   background: $contact_google_hover_btn_bg;
  //   color: $contact_google_hover_btn_color;

  //   svg {
  //     color: $contact_google_hover_btn_icon;
  //   }
  // }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .contact-info {
    display: flex;
    width: 90% !important;
    height: 460px;
    padding: 60px 0 80px;

    .logo {
      width: $contact_logo_tablet_width;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .contact-info {
    background-image: none;
    display: flex;
    width: 100%;
    height: auto;
    padding: 20px 30px 30px;
    transform: none;
    margin: 0 auto 40px auto;

    .logo {
      width: $contact_logo_mobile_width;
      height: auto;
    }
  .water{
    background:none;
    left:-20vw;
    top:-110vw;
    z-index: -1;
    transform: rotate(-30deg);
    width: 200%;
  }
  }

  .btn {
    width: 100%;
    &.half {
      width: 280px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: calc(50% - 7em);
      margin-right: 0;
      + span {
        margin-left: 1.5em;
      }
    }
  }

  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
    //margin-bottom: 40px;

    > * {
      margin-bottom: 26px;
      &.address {
        margin-bottom: 0;
      }
    }
  }

  .logo {
    margin-bottom: 20px;
    margin: 0 auto 30px;
    left: auto;
    position: relative;
  }

  .address {
    width: 100%;
    text-align: justify;
    border-radius: 0;
    height: auto;
    line-height: 1.7;
    padding: 1em 1em;
    + .google-btn,
    + .btn {
      border-radius: 0;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 321px) {
  .address {
    font-size: 14px;
  }
}
</style>
