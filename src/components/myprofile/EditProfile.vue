<template>
  <div class="border-tabs">
    <br />
    <p class="email-user">پست الکترونیکی: it@royalfeedback.ir</p>
    <hr />
    <div dir="rtl" class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label>نام نماینده</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>نام خانوادگی نماینده</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label> کد ملی نماینده</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>شماره تلفن نماینده</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>شماره تلفن سازمان</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>نام شرکت/سازمان</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>کد اقتصادی سازمان</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>شناسه ثبت</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>شناسه ملی سازمان</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label> کد پستی</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>آدرس شرکت/سازمان </label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>شماره پیامک هشدار </label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>عنوان مخاطب</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>عنوان واحد </label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>
    <div @click="myAlert()" class="btn-save btn">ذخیره</div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "EditProfile",
  methods: {
    myAlert() {
      Swal.fire({
        icon: "success",
        title: "با موفقیت ذخیره شد",
      });
    },
  },
};
</script>
<style scoped>
.border-tabs {
  box-shadow: 0 0 5px 1px gainsboro;
}
.form-group {
  margin: 5px;
  text-align: right;
  direction: rtl;
}
label {
  margin: 0;
  font-size: 13px;
}
.email-user {
  text-align: center;
  direction: rtl;
}
.btn-save {
  margin: 20px 20px 40px 20px;
  background-color: #94a2ad;
  color: #fff;
}
.btn-save:hover {
  background-color: #7f8e99;
}
</style>