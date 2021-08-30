<template>
  <div class="container-fluid" id="app">
    <router-view />
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>

<script>
export default {
  data() {
    return {};
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
  },
  mounted() {
    Highcharts.setOptions({
      lang: {
        viewFullscreen: "به صورت تمام صفحه",
        downloadCSV: "csv دانلود با فرمت ",
        printChart: "پرینت نمودار",
        downloadPNG: "png دانلود با فرمت",
        downloadSVG: "svg دانلود با فرمت",
        downloadXLS: "xls دانلود با فرمت",
        downloadJPEG: "jpeg دانلود با فرمت",
        downloadPDF: "pdf دانلود با فرمت",
        viewData: "دیدن اطلاعات نمودار",
        exitFullscreen: "خارج شدن از تمام صفحه",
        hideData: "پنهان کردن اطلاعات نمودار",
      },
    });
  },
  created() {
    setTimeout(() => {
      this.clickAlert();
    }, 4000);
  },
};
</script>

<style>
@font-face {
  font-family: "IranSans";
  src: local("IranSans"),
    url("./assets/iran_sans_serif/IRANSansWeb(FaNum).woff") format("woff");
}
#app {
  font-family: IranSans, Helvetica, Arial, sans-serif;
}

a {
  color: black;
  text-decoration: none !important;
}
a.router-link-exact-active {
  color: rgb(29, 135, 197) !important;
}
a.router-link-exact-active .icon-basic {
  color: rgb(29, 135, 197) !important;
}
a.router-link-exact-active .first-icon {
  display: none;
  color: rgb(29, 135, 197);
}
a.router-link-exact-active .active-icon {
  display: block;
  color: rgb(29, 135, 197);
}

.header-app {
  background-color: #fff;
  position: fixed !important;
  top: 0;
  z-index: 9999;
  box-shadow: 0 0 8px -2px grey;
  padding: 0 !important;
}
.sidebar-app {
  background-color: #fff;
  position: fixed !important;
  right: 0;
  top: 0;
  height: 100%;
  border-bottom: 1px solid rgb(206, 190, 190);
  overflow: auto;
  direction: rtl;
  margin-top: 25px;
  box-shadow: 0 0 8px -2px grey;
}
.rv-app {
  background-color: #fff;
  margin: 60px 10px 10px 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 8px -2px rgb(212, 203, 203);
}
::-webkit-scrollbar {
  width: 2px;
  float: left;
}

::-webkit-scrollbar-track {
  background-color: #eee;
  border-radius: 300px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 300px;
}

::-webkit-scrollbar-thumb:hover {
  background: #777;
}

::-webkit-scrollbar-thumb:active {
  background: #666;
}
.row #myAlert {
  position: fixed;
  bottom: 5px;
  left: 0;
  width: 220px;
  z-index: 999;
  margin: 0;
  font-size: 13px;
  transition: 0.5s;
  display: flex;
  padding: 5px 5px;
  cursor: pointer;
}
.row #myAlert p {
  margin: 12px 0 0 2px;
  width: 200px;
  text-align: center;
}

.row #myAlert i {
  margin: 10px;
  font-size: 20px;
  transition: 0.5s;
}

/* ******** */

@media (max-width: 1199px) {
  .sidebar-app {
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    width: 30% !important;
  }
  .sidebar-app.active {
    opacity: 1;
    visibility: visible;
    /* transform: translateX(-10px); */
  }
  .menu-fade-enter-active {
    transition: all 0.3s ease;
  }
  .menu-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .menu-fade-enter,
  .menu-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>