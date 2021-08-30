<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="option">
          <div class="header-option">ویرایش اطلاعات</div>
          <div class="option-time">
            <div class="header-option2">
              <div class="row">
                <div class="col-md-4">
                  <router-link class="btn" :to="{ name: 'UpdateLogo' }"
                    >تغییر لوگو</router-link
                  >
                </div>
                <div class="col-md-4">
                  <router-link class="btn" :to="{ name: 'changepassword' }"
                    >تغییر کلمه عبور</router-link
                  >
                </div>
                <div class="col-md-4">
                  <router-link class="btn" :to="{ name: 'EditProfile' }"
                    >ویرایش پروفایل</router-link
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style scoped>
a.router-link-exact-active {
  color: rgb(71, 71, 199);
}
.option {
  box-shadow: 0 0 5px 1px gainsboro;
  border-radius: 5px 5px 5px 5px;
}
.header-option {
  text-align: center;
  color: #fff;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  background-color: #7e8891;
}
.header-option2 {
  text-align: center;
  color: #fff;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  background-color: #b6c4cf;
}
.header-option2 .btn {
  width: 100%;
}
.option-time {
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 5px 1px gainsboro;
}
.btn {
  background-color: #94a2ad;
  color: #fff;
}
.btn:hover {
  background-color: #a3afb8;
}
</style>