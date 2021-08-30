<template>
  <div class="border-tabs">
    <br />
    <div class="row justify-content-md-center">
      <div class="col-md-5">
        <div class="form-group">
          <label>کلمه عبور فعلی </label>
          <input type="password" class="form-control" />
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-5">
        <div class="form-group">
          <label>کلمه عبور جدید </label>
          <input type="password" class="form-control" />
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-5">
        <div class="form-group">
          <label>تکرار کلمه عبور جدید</label>
          <input type="password" class="form-control" />
        </div>
      </div>
    </div>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-4">
        <button class="btn btn-save">ذخیره</button>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "changepassword",
};
</script>
<style scoped>
.form-group {
  text-align: right;
  direction: rtl;
  margin: 0 10px;
}
.border-tabs {
  box-shadow: 0 0 5px 1px gainsboro;
}
.btn-save {
  background-color: #94a2ad;
  color: #fff;
  width: 100%;
}
.btn-save:hover {
  background-color: #7f8e99;
}
label {
  font-size: 13px;
}
</style>