<template>
  <div class="border-tabs">
    <div class="row">
      <div class="col-md-12">
        <div class="img-pro">
          <img
            width="200px"
            height="200px"
            src="C:/Users/MAzizi/Downloads/front-view-business-man-looking-charts.jpg"
            alt=""
          />
        </div>
        <p class="title">حداکثر سایز تصویر 250x100 می باشد.</p>
        <br />
        <div class="btn-upload form-group">
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            @change="processFile($event)"
          />
        </div>
        <br />
        <button class="btn btn-primary">ذخیره</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateLogo",
  date() {
    return {
      someData: "",
    };
  },
  methods: {
    processFile(event) {
      this.someData = event.target.files[0];
      console.log(this.someData.url);
    },
  },
  created() {},
};
</script>
<style scoped>
.border-tabs {
  box-shadow: 0 0 5px 1px gainsboro;
}
.img-pro {
  text-align: right;
}
.img-pro img {
  margin: 10px;
  border: 1px solid rgb(184, 165, 165);
}
.title {
  text-align: right;
  direction: rtl;
  font-size: 13px;
  margin: 0 13px 10px 0;
  color: rgb(133, 131, 131);
}
.btn-upload {
  text-align: right;
  direction: rtl;
  margin: 10px;
}
.form-control-file {
  width: 70%;
}
.btn {
  display: block;
  margin: 10px 0 10px 820px;
}
</style>