<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="option">
          <div class="header-option">بازه زمانی</div>
          <div class="option-time">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <date-picker
                    color="#7e8891"
                    placeholder=" "
                    v-model="date"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <date-picker
                    color="#7e8891"
                    placeholder=" "
                    v-model="date"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <date-picker
                    color="#7e8891"
                    placeholder=" "
                    v-model="date"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <date-picker
                    color="#7e8891"
                    placeholder=" "
                    v-model="date"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-5">
                <button class="btn">مشاهده</button>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="row">
          <div class="col-lg-7 text-left">
            <h5>بسیار عالی! عملکرد شما نسبت به بازه قبل بهتر شده است!</h5>
            <ul>
              <li>
                <i class="fas fa-circle"></i>
                <p>بهترین روز، به طور میانگین، روز 1399/11/25 می باشد.</p>
              </li>
              <li>
                <i class="fas fa-circle"></i>
                <p>بهترین روز، به طور میانگین، روز 1399/11/25 می باشد.</p>
              </li>
              <li>
                <i class="fas fa-circle"></i>
                <p>بهترین روز، به طور میانگین، روز 1399/11/25 می باشد.</p>
              </li>
              <li>
                <i class="fas fa-circle text-red"></i>
                <p>بهترین زمان روز، به طور میانگین، ساعت 10 می باشد.</p>
              </li>
              <li>
                <i class="fas fa-circle text-red"></i>
                <p>بهترین روز، به طور میانگین، روز 1399/11/25 می باشد.</p>
              </li>
              <li>
                <i class="fas fa-circle text-red"></i>
                <p>بهترین روز، به طور میانگین، روز 1399/11/25 می باشد.</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-5">A</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImportantNotes",
};
</script>
<style scoped>
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
.option-time {
  width: 100%;
  padding: 10px;
}
.btn {
  background-color: #7e8891;
  color: #fff;
}
.col-md-6 {
  direction: rtl !important;
  text-align: right;
}
.text-left {
  direction: rtl;
  color: rgb(100, 99, 99);
  text-align: right !important;
}
.text-left ul {
  list-style: none;
  direction: rtl;
  padding: 0;
  margin: 0;
}
.text-left ul li {
  padding: 5px;
  display: flex;
  flex-direction: row;
}
.text-left ul li p {
  margin: 3px 8px 0 0;
}
.text-left ul li i {
  font-size: 12px;
  margin: 9px 5px 5px 5px;
  color: green;
}
.text-left ul li .text-red {
  font-size: 12px;
  margin: 9px 5px 5px 5px;
  color: red;
}
</style>