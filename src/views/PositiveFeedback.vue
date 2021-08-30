<template>
  <div>
    <div class="row">
      <div class="col-md-10">
        <div class="container">
          <div class="feedback d-flex justify-content-between">
            <div class="right">
              <p>بازخورد مثبت :</p>
              <p class="number-feed">54.5%</p>
              <p class="time-feed">در 48 ساعته گذشته</p>
            </div>
            <div class="left">
              <p>نتیجه رضایتمندی مشتریان</p>
              <div class="img-happy">
                <img
                  width="80px"
                  height="80px"
                  src="../assets/royal2.png"
                  alt=""
                />
                <span>+</span>
                <img
                  width="80px"
                  height="80px"
                  src="../assets/royal1.png"
                  alt=""
                />
              </div>
              <p>از مجموعه شما</p>
              <!-- <div class="diamond"></div> -->
              <svg
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 123.958 123.959"
                style="enable-background: new 0 0 123.958 123.959"
                class="diamond"
                fill="#fff"
              >
                <path
                  d="M38.217,1.779c-3.8-3.8-10.2-1.1-10.2,4.2v112c0,5.3,6.4,8,10.2,4.2l56-56c2.3-2.301,2.3-6.101,0-8.401L38.217,1.779z"
                />
              </svg>
            </div>
          </div>
          <div class="icon-feedback">
            <div>
              <img
                width="100px"
                height="100px"
                src="../assets/royal4.png"
                alt=""
              />
              <p>18.2%</p>
            </div>
            <div>
              <img
                width="100px"
                height="100px"
                src="../assets/royal3.png"
                alt=""
              />
              <p>18.2%</p>
            </div>
            <div>
              <img
                width="100px"
                height="100px"
                src="../assets/royal2.png"
                alt=""
              />
              <p>18.2%</p>
            </div>
            <div>
              <img
                width="100px"
                height="100px"
                src="../assets/royal1.png"
                alt=""
              />
              <p>18.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PositiveFeedback",
  components: {},
};
</script>
    
<style scoped>
.col-md-10 {
  margin: 0 auto !important;
}
.feedback {
  border-radius: 7px;
  margin: 0 auto;
  direction: rtl;
  box-shadow: 0 0 5px 0 rgb(231, 212, 212);
  width: 85%;
  height: 310px;
}
.feedback .right {
  width: 100%;
  background-color: #3fc455;
  padding: 10px;
}
.feedback .right p {
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding: 5px;
  margin: 5px 5px 5px 124px;
}
.feedback .right .number-feed {
  font-size: 30px;
  margin: 61px 25px 25px 150px;
  font-size: 40px;
}
.feedback .right .time-feed {
  font-size: 12px;
  margin-top: 52px;
}
.feedback .left {
  background-color: white;
  width: 75%;
  padding: 10px;
  position: relative;
}
.feedback .left p {
  text-align: center;
  padding: 5px;
  margin: 49px 5px 21px 5px;
}
.feedback .left .img-happy {
  text-align: center;
}
.feedback .left .img-happy span {
  font-size: 30px;
  margin: 5px;
}
/* .feedback .left .diamond {
  width: 200px;
  height: 200px;
  background-color: #fff;
  position: absolute;
  top: 37px;
  right: -106px;
  transform: rotate(44deg);
  border-radius: 11px 0 6px 200px;
  z-index: 9;
} */
.feedback .left .diamond {
  position: absolute;
  top: -1px;
  right: -231px;
  z-index: 9;
  color: #fff;
  width: 316px;
  height: 316px;
}
.icon-feedback {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.icon-feedback p {
  text-align: center;
  margin-top: 10px;
}
</style>