<template>
  <div>
    <div class="option">
      <div class="header-option">
        لیست دستگاه‌های مجاز برای انتصاب نیروی انسانی
      </div>
      <br />
      <div class="option-time">
        <table class="table table-bordered table-hover">
          <thead class="">
            <tr>
              <th scope="col">نام دستگاه</th>
              <th scope="col">تعداد اختصاص داده شده</th>
              <th scope="col">اختصاص نیروی انسانی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>دستگاه شماره یک</td>
              <td>2</td>
              <td>
                <router-link :to="{name:'AllocateManpower'}">
                  <i class="fas fa-user-plus"></i>
                </router-link>
              </td>
            </tr>
             <tr>
              <td>دستگاه شماره یک</td>
              <td>2</td>
              <td>
                <router-link :to="{name:'ManpowerDevices'}">
                  <i class="fas fa-user-plus"></i>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>دستگاه شماره یک</td>
              <td>2</td>
              <td>
                <router-link :to="{name:'ManpowerDevices'}">
                  <i class="fas fa-user-plus"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ManpowerDevices",
};
</script>
<style scoped>
.row {
  direction: rtl;
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
  /* background-color: #919599; */
}
.option-time {
  width: 100%;
  padding: 10px;
}
.table {
  direction: rtl;
  text-align: center;
  font-size: 13px;
}
thead {
  background-color: #b9c2c9;
}
i {
  font-size: 15px;
  padding:3px;
}
</style>