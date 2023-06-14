<template>
  <div class="sideNav">
    <div :class="`nav relative ${isShowMenu ? 'show' : ''}`">
      <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt /> -->
      <div :class="`menubg ${isOpen ? 'open' : ''}`" />
      <div :class="`menu ${isOpen ? 'open' : ''}`" @click="toggleSidebar">
        <img v-if="isOpen" src="@/projects/share/close.png" class="close" alt />
        <img src="@/assets/img/menu-btn.png" alt />
      </div>
      <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
      <ul :class="`navlist ${isOpen ? 'open': ''}`">
        <li
          :key="item.name"
          v-scroll-to="{ element: `#${item.section}`, offset: isMobile ? (item.mobileOffset ? item.mobileOffset : offset) : (item.offset ? item.offset : offset) }"
          v-for="item in list"
          class="flex-ac"
          @click="toggleSidebar"
        >
          <span class="link">
            <img v-if="item.imgSrc" :src="item.imgSrc" alt />
            <span>
              <p class="title">{{item.name}}</p>
              <span class="subTitle">{{item.subTitle}}</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'sideNavigation',
  components: {},
  props: ['viewIndex'],
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
      isShowMenu: false,
    }
  },

  computed: {
    offset() {
      return 0
    },
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
  },

  watch: {
    viewIndex(val) {
      if (val >= 2) {
        this.isShowMenu = true
      } else {
        this.isShowMenu = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';

.navigation {
  height: $nav_phone_height;
  z-index: 110;
}

.nav-container {
  display: block;
  height: auto;
}

.logo {
  width: $logo_phone_width;
  left: 15px;
}

.nav {
  position: static;
  height: $nav_phone_height;
  opacity: 0;
  transition: opacity .5s;
  z-index: 110;

  &.show {
    opacity: 1;
  }
}

.menubg {
  display: flex;
  background-image: linear-gradient(to right, #e7380d -27%, #e4006e 236%);
  border-radius: 0 8px 8px 0;
  display: flex;
  position: fixed;
  top: calc(100vh * 60 / 1080);
  left: 0px;
  width: 140px;
  height:70px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 10;
  &.open {
  width: 180px;
  height:480px;
  }
}

.menu {
  display: flex;
  position: fixed;
  top: calc(100vh * 60 / 1080);
  left: 0px;
  width: 140px;
  height:auto;
  cursor: pointer;
  z-index:10;
  transition: all 0.5s;

  &.open {
  width: 180px;
  }
  img {
    width:auto;
    height: 57px;
    margin: 5% auto 5%  auto;
  }

  .close {
    width: 20px;
    height: auto;
    margin-right: 0px;
    position: absolute;
    left: 150px;
    top: 10px;
  }
}

.logo {
  width: $logo_pc_width;
  z-index: 140;
  height: auto;
  position: absolute;
  left: 0;
  display: block;
  top: 0px;
  transform: translateY(0%);
}

.navlist {
  position: fixed;
  z-index:140;
  //background: $nav_bg;
  width: 0%;
  left: 0;
  top: calc(100vh * 150 / 1080);
  height: auto;
  text-align: center;
  transition: all 0.3s ease-in;
  display: block;
  transform: translateX(-40%);

  li {
    height: 60px;
    margin-bottom: 5px;
    width: 100%;
  }

  .link {
    height: 60px;
    width: 100%;
    font-size: 17px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    background-size: cover;
    position: relative;

    // &::after {
    //   display: block;
    //   content: '';
    //   width: 0%;
    //   height: 1px;
    //   background: #ddd75f;
    //   transition: all 0.4s;
    //   left: 50%;
    //   bottom: 0;
    //   position: absolute;
    // }

    // &:hover:after {
    //   width: 80%;
    //   left: 10%;
    // }

    img,
    span {
      display: block;
    }
    span {
      line-height: 16px;
    }

    &:hover {
      color: $nav_link_hover_color;
      background: $nav_link_hover_bg;
      background-position: center;
      background-size: cover;
    }
  }

  &.open {
    width: 180px;
    transform: translateX(0%);
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    .link {
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        white-space: nowrap;
      }

      .title {
        color: $nav_link_color;
      }

      .subTitle {
        color: $nav_link_subtitle_color;
      }
      .divided {
        display: none;
      }

      &:hover {
        .title {
          color: $nav_link_hover_color;
        }
      }
    }
  }
}

.mask {
  width: 0;
  top: $nav_phone_height;
  right: 0;
  background: transparent;
  position: fixed;
  z-index: -1;
  height: calc(100vh - #{$nav_phone_height});
  opacity: 0;
  transition: all 0.3s ease-in;
  &.open {
    display: block;
    width: 100vw;
    opacity: 1;
  z-index: 110;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
    height: $nav_tablet_height;
    justify-content: center;
  }

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
  }

  .navlist {
    width: 0%;
  }

  .navlist .link {
    font-size: 20px;
    width: 230px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: $nav_phone_height;
    z-index: 120;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    width: $logo_phone_width;
    left: 0px;
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: fixed;
    height:auto;

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: fixed;
    width: 0%;
    // right: 0;
    top:130px;
    // height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    // transform: translateX(40%);

    li {
      height: 50px;
      margin-bottom: 5px;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }
    }

    &.open {
      // width: 100%;
      transform: translateX(0%);

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
      }
    }
  }

  .mask {
    width: 100vw;
    top: $nav_phone_height;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
      z-index:110;
    }
  }
}
</style>
