<template>
  <div>
    <div class="option">
      <div class="header-option">بازه زمانی</div>
      <div class="option-time">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <v-select
                class="style-chooser2"
                :options="['Canada', 'United States']"
                placeholder="انتخاب گروه"
              ></v-select>
            </div>
          </div>
          <div class="col-md-8">
            <button class="btn">مشاهده</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <router-link :to="{ name: 'ChartAlarm' }">
          <div class="show-alarm" :class="[{ showalarmbell: !pulse }]">
            <ul>
              <div class="col-md-4 name-device">
                <p>دستگاه شماره یک</p>
              </div>
              <div
                class="col-md-4 number-device"
                :class="{ numberdevice2: !pulse }"
              >
                <p>%54.4</p>
              </div>
              <div class="col-md-4 icon-device">
                <i v-if="pulse" class="fas fa-heart"></i>
                <i v-else class="fas fa-bell"></i>
              </div>
            </ul>
          </div>
        </router-link>
      </div>

      <div class="col-lg-4">
        <div class="show-alarm" :class="[{ showalarmbell: !pulse }]">
          <ul>
            <div class="col-md-4 name-device">
              <p>دستگاه شماره یک</p>
            </div>
            <div
              class="col-md-4 number-device"
              :class="{ numberdevice2: !pulse }"
            >
              <p>%54.4</p>
            </div>
            <div class="col-md-4 icon-device">
              <i v-if="pulse" class="fas fa-heart"></i>
              <i v-else class="fas fa-bell"></i>
            </div>
          </ul>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="show-alarm" :class="[{ showalarmbell: !pulse }]">
          <ul>
            <div class="col-md-4 name-device">
              <p>دستگاه شماره یک</p>
            </div>
            <div
              class="col-md-4 number-device"
              :class="{ numberdevice2: !pulse }"
            >
              <p>%54.4</p>
            </div>
            <div class="col-md-4 icon-device">
              <i v-if="pulse" class="fas fa-heart"></i>
              <i v-else class="fas fa-bell"></i>
            </div>
          </ul>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="show-alarm" :class="[{ showalarmbell: !pulse }]">
          <ul>
            <div class="col-md-4 name-device">
              <p>دستگاه شماره یک</p>
            </div>
            <div
              class="col-md-4 number-device"
              :class="{ numberdevice2: !pulse }"
            >
              <p>%54.4</p>
            </div>
            <div class="col-md-4 icon-device">
              <i v-if="pulse" class="fas fa-heart"></i>
              <i v-else class="fas fa-bell"></i>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowAlarm",
  data() {
    return {
      pulse: true,
    };
  },
};
</script>
<style scoped>
.row {
  direction: rtl;
}
a {
  color: rgb(54, 52, 52);
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
.btn {
  background-color: #7e8891;
  color: #fff;
  font-size: 15px;
  padding: 6px 10px;
  float: right;
}
.btn:hover {
  background-color: #8e99a3;
}

.form-group {
  direction: rtl !important;
}

.title-month {
  text-align: right;
  font-size: 12px;
  position: absolute;
  top: -13px;
  color: gray;
}
.show-alarm {
  background-color: #fff;
  border-radius: 4px;
  border: 3px solid #97cc72;
  height: 120px;
  cursor: pointer;
  margin: 30px 0 0 0;
}
/* bell */
.showalarmbell {
  background-color: #fff;
  border-radius: 4px;
  border: 3px solid rgb(236, 75, 54);
  height: 120px;
  cursor: pointer;
  margin: 30px 0 0 0;
}
/* bell */
.show-alarm:hover {
  box-shadow: 0 0 5px 0 rgb(150, 145, 145);
}
.show-alarm ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 !important;
  height: 100%;
}
.show-alarm ul .name-device {
  text-align: center;
  padding: 0;
}
.show-alarm ul .name-device p {
  font-size: 16px;
  margin: 35px 0 0 0;
  padding: 2px;
}

.show-alarm ul .number-device {
  text-align: center;
  background-color: #97cc72;
  padding: 40px 10px 10px 10px;
}

.show-alarm ul .number-device p {
  font-size: 25px;
  color: #fff;
  margin: 0 !important;
}
/* bell */
.show-alarm ul .numberdevice2 {
  text-align: center;
  background-color: rgb(236, 75, 54);
  padding: 40px 10px 10px 10px;
}

.show-alarm ul .numberdevice2 p {
  font-size: 25px;
  color: #fff;
  margin: 0 !important;
}
/* bell */
.show-alarm ul .icon-device {
  text-align: center;
}
.show-alarm ul .icon-device i {
  font-size: 55px;
  margin: 32px 0 0 0;
}
.fa-heart {
  color: #97cc72;
  animation: pulse 1s ease infinite;
}
.fa-bell {
  color: rgb(236, 75, 54);
  animation-name: shake;
  animation-timing-function: ease-in-out;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(6deg);
  }
  40%,
  80% {
    transform: rotate(-6deg);
  }
}
</style>