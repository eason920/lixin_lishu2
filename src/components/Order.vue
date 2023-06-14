<template>
  <div class="order-bg">
    <div class="order-top">
      <div class="title-block">
        <h3 class="title" v-if="order.title" >{{ order.title }}</h3>
        <div class="subtitle" v-if="order.subTitle">{{ order.subTitle }}</div>
      </div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名</label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機</label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
             <div class="row">
              <label>信箱</label>
              <el-input v-model="form.email" placeholder></el-input>
            </div> 
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option
                  v-for="area in areaList"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value"
                  no-data-text="請先選擇居住城市"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="group">
            <div class="row">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto;z-index:2;" v-if="!isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div class="robbitCheck" style="margin: 0 auto;z-index:2;" v-if="isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit"
          type="primary"
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >即刻預約<br/>APPOINTMENT</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>

    <ContactInfo />
    <GoogleMap />
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
import { isMobile } from '@/utils'
import Loading from '@/components/Loading.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'order',
  components: {
    GoogleMap,
    ContactInfo,
    PolicyDialog,
    Loading,
    VueRecaptcha
  },

  data() {
    return {
      cityList,
      info,
      order: info.order,
      isMobile,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
        time_start: '',
        time_end: ''
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false
    }
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city)
    }
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true
    },

    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h('i', { style: 'color: #82191d' }, '「姓名、手機」是必填欄位')
      })
    },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
      if (!this.checked) return
      this.isSubmit = true
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
        // !this.form.city ||
        // !this.form.area
      ) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('msg', this.form.msg)
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`

      fetch('contact-form.php', {
        method: 'POST',
        body: formData
      }).then(response => {
        this.isSubmit = false
        if (response.status === 200) {
          window.location.href = 'formThanks'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  // mix-blend-mode: screen;
  //background: ("~@/projects/fs/order/bg_m.jpg");
  &.no-mix {
    mix-blend-mode: normal;
    height: 100%;
  }
}
.order-bg {
  background-color: $order_bg_color;
  background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 0% 50%;
  font-family: $family3;
  input,
  textarea,
  button {
    font-family: $family3;
  }
  .order-top {
    position: relative;
    overflow: hidden;
    z-index: 3;
    .title-block{
     margin: 0 0 calc(100vw * 31 / 1920) 0;
    }
    .title {
      color: #fff;
      font-size: calc(100vw * 72 / 1920);
      font-family:'Times New Roman' !important;
      font-weight: 500;
      margin: 0 auto;
      position: relative;
      width: 920px;
      margin-bottom: 4vw
    }
    .title:before, .title:after {
      content: "";
      position: absolute;
      top: 50%;
      height: 1px;
      background-color: #fff;
      width: 18vw;
      max-width: 210px;
    }
    .title:before{
      left: 0
    }
    .title:after{
      right: 0
    }
    .subtitle {}
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    justify-content: space-between;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      flex: 1;
      align-items: flex-start;
    }
  }

  .group {
    height: 360px;
    margin-bottom: 40px;

    &:nth-child(1) {
      // border-right: 1px solid rgba(0, 0, 0, 0.2);
      .row {
        justify-content: flex-start;
      }
    }

    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        align-items: flex-start;
        height: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border: solid 1px #fff;
    padding: 5px 5px 5px 15px;
    border-radius: 0;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 76px;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.8;
      color: #fff;
      text-align: left;
      white-space: nowrap;
    }
  }

  .control {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}

@media only screen and (min-device-width: 768px) {
  .group {
    &:nth-child(1) {
      &:nth-child(1) {
        padding-right: 50px;
      }
      &:nth-child(2) {
        padding-left: 50px;
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .order-bg {
  //  background-image: $order_bg_image_m;
    padding-top: 40px;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-top {
      .title-block{
      margin: 0 0 calc(100vw * 20 / 375) 0;
      }
      .title {
        font-size: calc(100vw * 29 / 375);
        width: calc( 100% - 60px );
      }
      .title:before, .title:after {
        width: calc( (100% - 60px - 175px)/2 )
      }
  }
    .order {
      width: calc(100% - 60px) !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
    }

    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 30% !important;
      }
    }

    .robbitCheck {
      margin-top: 15px!important;
      width: 100%!important;
      display: flex;
      justify-content: center;
    }
    // .robbitCheck > div > div {
    //   width: 100%!important;
    // }
    .control {
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: left
    }

    .form-submit {
      margin-top: 25px!important;
      margin-bottom: 5px!important
    }
    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }
  }
}
</style>
