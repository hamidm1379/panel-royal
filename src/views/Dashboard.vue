<template>
  <div>
    <div class="row">
      <div
        @click="clickAlert()"
        id="myAlert"
        class="alert alert-danger time-panel"
      >
        <p>باقیمانده اعتبار پنل : 844 روز</p>
        <i id="icon-alert" class="fas fa-angle-double-right"></i>
      </div>
      <div class="col-xl-12 header-app">
        <Header />
      </div>
      <div
        class="col-xl-2 sidebar-app"
        :class="{ active: this.$store.state.showm }"
      >
        <SideBar />
      </div>
      <div class="col-xl-10">
        <router-view class="rv-app" />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
export default {
  name: "Dashboard",
  components: {
    SideBar,
    Header,
  },
  methods: {
    clickAlert() {
      let myAlert = document.getElementById("myAlert");
      let iconAlert = document.getElementById("icon-alert");
      if (myAlert.style.left == -170 + "px") {
        myAlert.style.left = 0;
        iconAlert.style.transform = "rotate(0)";
      } else {
        myAlert.style.left = -170 + "px";
        iconAlert.style.transform = "rotate(-180deg)";
      }
    },
    created() {
      setTimeout(() => {
        this.clickAlert();
      }, 4000);
    },
  },
};
</script>
<style scoped>

</style>