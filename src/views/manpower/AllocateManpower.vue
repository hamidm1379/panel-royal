<template>
  <div>
    <div class="option">
      <div class="header-option">
        لیست نیروی انسانی جهت انتصاب به دستگاه "دستگاه شماره یک"
      </div>
      <br />
      <div class="option-time">
        <table class="table table-bordered table-hover">
          <thead class="">
            <tr>
              <th scope="col">نام و نام خانوادگی</th>
              <th scope="col">شماره ردیف</th>
              <th scope="col">انتصاب/عدم انتصاب</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>رضا ونایی</td>
              <td>2</td>
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  v-model="data"
                  @click="myCheckBox()"
                />
              </td>
            </tr>
            <tr>
              <td>رضا ونایی</td>
              <td>2</td>
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </td>
            </tr>
            <tr>
              <td>رضا ونایی</td>
              <td>2</td>
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <router-link :to="{ name: 'ManpowerDevices' }">
      <button class="btn">
        <i class="fas fa-arrow-left"></i>بازگشت به لیست دستگاه ها
      </button>
    </router-link>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "AllocateManpower",
  data() {
    return {
      data: true,
      name: "'رضا ونایی'",
    };
  },
  methods: {
    myCheckBox() {
      if (this.data) {
        Swal.fire({
          title: "اختصاص کارمند به دستگاه",
          text: `آیا از   عدم انتصاب   آقا/خانم ${this.name} از دستگاه  شماره یک اطمینان دارید؟`,
          icon: "warning",
          confirmButtonText: "تایید",
          showCancelButton: true,
          cancelButtonText: "انصراف",
          confirmButtonColor: "#009239",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("عملیات با موفقیت انجام شد", "", "success");
          } else {
            this.data = true;
          }
        });
      } else {
        Swal.fire({
          title: "اختصاص کارمند به دستگاه",
          text: `آیا از    انتصاب   آقا/خانم ${this.name} از دستگاه  شماره یک اطمینان دارید؟`,
          icon: "warning",
          confirmButtonText: "تایید",
          showCancelButton: true,
          cancelButtonText: "انصراف",
          confirmButtonColor: "#009239",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("عملیات با موفقیت انجام شد", "", "success");
          } else {
            this.data = false;
          }
        });
      }
    },
  },
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
  direction: rtl;
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
  padding: 3px;
}
.btn {
  background-color: #7e8891;
  color: #fff;
  font-size: 13px;
}
.btn i {
  padding: 5px 10px 5px 5px;
}
.form-check-input {
  width: 15px;
  height: 15px;
  cursor: pointer;
}
</style>