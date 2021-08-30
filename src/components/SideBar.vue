<template>
  <div>
    <div class="logo-res mt">
      <img width="100%" height="30px" src="../assets/logo32.png" alt="" />
    </div>
    <div class="basic-menu mt2">
      <router-link :to="{ name: 'Home' }"
        >داشبورد
        <i class="fas fa-tachometer-alt icon-basic"></i>
      </router-link>
    </div>
    <!-- ************** -->
    <div class="basic-menu">
      <router-link :to="{ name: 'PositiveFeedback' }">
        بازخورد مثبت
        <i class="fas fa-smile-beam icon-basic"></i>
      </router-link>
    </div>
    <!-- ************** -->
    <div @click="show2 = !show2" class="basic-menu">
      <i class="fas fa-chart-pie icon-basic"></i>
      دریک نگاه<i v-if="!show2" class="fas fa-chevron-up"></i
      ><i v-if="show2" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show2">
        <li>
          <router-link :to="{ name: 'GeneralDistribution' }"
            >توزیع کلی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OverlapOfDays' }"
            >همپوشانی روزها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OverlapHours' }"
            >همپوشانی ساعت ها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeedbackTemplate' }"
            >الگو باز خوردها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Process' }"
            >روند پیشرفت<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DeviceClassification' }"
            >رده بندی دستگاه ها<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GroupClassification' }"
            >رده بندی گروه ها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ImportantNotes' }"
            >نکات کلیدی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div @click="show3 = !show3" class="basic-menu">
      <i class="fas fa-chart-line icon-basic"></i>
      فراوانی باز خورد ها <i v-if="!show3" class="fas fa-chevron-up"></i
      ><i v-if="show3" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show3">
        <li>
          <router-link :to="{ name: 'CircleDiagram' }"
            >نمودار دایره ای<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'HourlyChart' }"
            >نمودار ساعتی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'WeeklyChart' }"
            >نمودار روزانه (هفتگی)<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DailyChart' }"
            >نمودار روزانه<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'WeeklyVotes' }"
            >نمودار هفتگی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MonthlyChart' }"
            >نمودار ماهانه<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div @click="show4 = !show4" class="basic-menu">
      <i class="fas fa-thumbs-up icon-basic"></i>
      شاخص رضایت <i v-if="!show4" class="fas fa-chevron-up"></i
      ><i v-if="show4" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show4">
        <li>
          <router-link :to="{ name: 'HourlySatisfactionIndex' }"
            >شاخص رضایت ساعتی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link
            style="font-size: 11px"
            :to="{ name: 'WeeklyDailySatisfactionIndex' }"
            >شاخص رضایت روزانه(هفتگی)<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DailySatisfactionIndex' }"
            >شاخص رضایت روزانه<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'WeeklySatisfactionIndex' }"
            >شاخص رضایت هفتگی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MonthlySatisfactionIndex' }"
            >شاخص رضایت ماهانه<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div class="basic-menu">
      <router-link to="/awdawd"
        >مقایسه نمودارها
        <i class="fas fa-chart-line icon-basic"></i>
      </router-link>
    </div>
    <!-- ************** -->
    <div @click="show5 = !show5" class="basic-menu">
      <i class="fas fa-chart-area icon-basic"></i>
      امکانات اختصاصی <i v-if="!show5" class="fas fa-chevron-up"></i
      ><i v-if="show5" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show5">
        <li>
          <router-link :to="{ name: 'DamagePoints' }"
            >نقاط آسیب<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Strengths' }"
            >نقاط قوت<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ViewComments' }"
            >مشاهده نظرات<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'RepetitiveWords' }"
            >کلمات پر تکرار<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div @click="show6 = !show6" class="basic-menu">
      <i class="far fa-chart-bar icon-basic"></i>
      نیروی انسانی <i v-if="!show6" class="fas fa-chevron-up"></i
      ><i v-if="show6" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show6">
        <li class="li-human">
          <router-link :to="{ name: 'ManpowerStatus' }"
            >وضعیت نیروی انسانی<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li class="li-human">
          <router-link :to="{ name: 'ManpowerDevices' }"
            >دستگاه های نیروی انسانی<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li class="li-human">
          <router-link :to="{ name: 'About' }">
            شیفت کاری نیروی انسانی<i
              class="far fa-circle icon-child first-icon"
            ></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li class="li-human">
          <router-link :to="{ name: 'About' }"
            >لیست نیروی انسانی<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div class="basic-menu">
      <router-link :to="{name:'ShowAlarm'}"
        >هشدار های آنی
        <i class="fas fa-bell icon-basic"></i>
      </router-link>
    </div>
    <!-- ************** -->
    <div @click="show7 = !show7" class="basic-menu">
      <i class="fas fa-project-diagram icon-basic"></i>
      وضعیت کنسول ها <i v-if="!show7" class="fas fa-chevron-up"></i
      ><i v-if="show7" class="fas fa-chevron-down"></i>
    </div>
    <transition name="sidebar-fade">
      <ul v-if="show7">
        <li>
          <router-link :to="{ name: 'Home' }"
            >نمایش دستگاه ها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }"
            >نمایش گروه ها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }"
            >پایش دستگاه ها<i class="far fa-circle icon-child first-icon"></i
            ><i class="fas fa-circle icon-child active-icon"></i
          ></router-link>
        </li>
      </ul>
    </transition>
    <!-- ************** -->
    <div class="basic-menu">
      <router-link :to="{ name: 'EditProfile' }"
        >ویرایش پروفایل
        <i class="fas fa-address-card icon-basic"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
    };
  },
};
</script>
<style scoped>
.logo-res {
  display: none;
}
.mt {
  margin-top: 40px;
}
.mt2 {
  margin-top: 40px;
}
.basic-menu {
  font-size: 14px;
  cursor: pointer;
  text-align: right;
  padding: 7px;
}
.basic-menu:hover {
  color: rgb(29, 135, 197);
}
ul {
  padding: 0;
  text-align: right;
  margin-right: 30px;
}
ul li {
  list-style: none;
  cursor: pointer;
  font-size: 13px;
  padding: 4px;
}
ul li:hover {
  color: rgb(29, 135, 197);
}
i {
  float: left;
  padding: 2px;
}
a {
  color: black;
}
.icon-basic {
  float: right;
  margin-left: 7px;
  font-size: 17px;
}
.icon-child {
  float: right;
  font-size: 7px;
  padding: 5px;
}
.active-icon {
  display: none;
}
.li-human {
  font-size: 12px;
}

/* ////////// */
.sidebar-fade-enter-active {
  transition: all 0.3s ease;
}
.sidebar-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.sidebar-fade-enter,
.sidebar-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@media (max-width: 1199px) {
  .mt2 {
    margin-top: 0;
  }
  .logo-res {
    display: block;
  }
}
</style>