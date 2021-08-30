<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card-dashboard">
          <i class="fas fa-users"></i>
          <p>تعداد کاربران</p>
          <div class="num">1050</div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-dashboard">
          <i class="fas fa-users"></i>
          <p>تعداد کاربران</p>
          <div class="num">1050</div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-dashboard">
          <i class="fas fa-users"></i>
          <p>تعداد کاربران</p>
          <div class="num">1050</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script>
export default {
  name: "Home",
  mounted() {},
};
</script>
<style scoped>
.card-dashboard {
  box-shadow: 0 0 7px 1px gainsboro;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  /* background-color: #00a651; */
  background-color: #fff;
  color: #7e8891;
  height: 100px;
  padding: 17px 0 0 25px;
}
.card-dashboard p {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 18px;
}
.card-dashboard i {
  padding: 10px;
  font-size: 42px;
}
.card-dashboard .num {
  position: absolute;
  right: 39px;
  top: 55px;
  font-size: 18px;
}
</style>