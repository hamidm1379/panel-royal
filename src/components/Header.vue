<template>
  <div class="row">
    <div @mouseleave="showAvatar = false" class="col-xl-4 avatar">
      <p class="name-avatar">فرودگاه مهراباد خوش آمدید</p>
      <img
        @mouseover="showAvatar = true"
        width="30px"
        height="30px"
        src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        alt=""
      />
      <div
        @mouseleave="showAvatar = false"
        v-if="showAvatar"
        class="menu-profile"
      >
        <ul>
          <router-link :to="{ name: 'EditProfile' }">
            <li><i class="far fa-user-circle"></i>پروفایل</li>
          </router-link>
          <li><i class="fas fa-sign-out-alt"></i>خروج</li>
        </ul>
        <div class="square-small"></div>
      </div>
    </div>
    <div class="col-lg-6">
      <p class="msg">
        تعداد بازخوردها از آغاز ( 19 بهمن 1399 ) تا کنون ( معادل 9 روز گذشته ) :
        12
      </p>
    </div>
    <div class="col-xl-2 logo" :class="{ active: this.$store.state.showm }">
      <i @click="myMenu()" class="fas fa-bars icon-hamber"></i>
      <img
        class="logo-img"
        width="50%"
        height="40px"
        src="../assets/logo32.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      showAvatar: false,
      showMenu: false,
    };
  },
  methods: {
    myMenu() {
      let vm = this;
      vm.$store.commit("menu");
    },
  },
};
</script>
<style scoped>
.logo {
  border-left: 1px solid rgb(211, 195, 195);
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
}
.logo .logo-img {
  margin: 0 auto;
  display: block;
}
.avatar {
  padding: 3px;
  margin: 0;
}
.avatar .name-avatar {
  position: absolute;
  top: 14px;
  left: 76px;
  font-size: 11px;
}
.avatar img {
  cursor: pointer;
  margin: 0 0 0 30px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.avatar .menu-profile {
  width: 100px;
  background-color: #fff;
  position: fixed;
  left: 30px;
  top: 50px;
  border-radius: 6px;
  box-shadow: 0 0 3px 2px rgb(177, 168, 168);
}
.avatar .menu-profile .square-small {
  width: 15px;
  height: 15px;
  background-color: #fff;
  transform: rotate(45deg);
  border-left: 1px solid gray;
  border-top: 1px solid gray;
  position: absolute;
  left: 12px;
  top: -8px;
}
ul {
  padding: 5px;
  text-align: right;
  margin: 5px 0 0 0;
}
ul li {
  list-style: none;
  padding: 5px;
  cursor: pointer;
  font-size: 13px;
  color: black;
}
ul li:hover {
  background-color: rgb(231, 219, 219);
  border-radius: 5px;
}
ul li i {
  padding: 3px;
  float: left;
  font-size: 17px;
  margin-top: -1px;
}
.icon-hamber {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 25px;
  display: none;
}
.msg {
  margin-top: 12px;
  font-weight: bold;
  font-size: 13px;
}
@media (max-width: 1199px) {
  .logo {
    width: 60px;
    transition: 0.5s;
  }
  .logo .logo-img {
    display: none;
  }
  .logo.active {
    width: 30% !important;
  }
  .icon-hamber {
    display: block;
  }
}
</style>