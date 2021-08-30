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
          <hr />
          <div class="filter">
            <div class="row">
              <div class="form-group col-md-6">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    ><img
                      width="60px"
                      height="60px"
                      src="@/assets/royal1.png"
                      alt=""
                  /></label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    ><img
                      width="60px"
                      height="60px"
                      src="@/assets/royal2.png"
                      alt=""
                  /></label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    ><img
                      width="60px"
                      height="60px"
                      src="@/assets/royal3.png"
                      alt=""
                  /></label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox4"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox4"
                    ><img
                      width="60px"
                      height="60px"
                      src="@/assets/royal4.png"
                      alt=""
                  /></label>
                </div>
              </div>
              <div style="display: flex" class="form-group col-md-6">
                <input
                  type="search"
                  class="form-control search"
                  placeholder="جستجو"
                  aria-describedby="helpId"
                />
              </div>
              <div class="col-md-5">
                <button class="btn">اعمال فیلتر</button>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div dir="rtl" class="comments">
          <div class="row">
            <div style="padding: 0" class="col-md-1">
              <img
                width="50px"
                height="50px"
                src="@/assets/royal1.png"
                alt=""
              />
            </div>
            <div style="padding: 0" class="col-md-11">
              <p class="title-comment">همه چیز خوب بود</p>
              <ul>
                <li><i class="fas fa-laptop"></i></li>
                <li><i class="far fa-smile-beam"></i> نقطه قوت: بدون مورد</li>
                <li><i class="far fa-calendar-alt"></i> 1399/11/25 10:53:45</li>
              </ul>
            </div>
          </div>
        </div>
        <div dir="rtl" class="comments">
          <div class="row">
            <div style="padding: 0" class="col-md-1">
              <img
                width="50px"
                height="50px"
                src="@/assets/royal1.png"
                alt=""
              />
            </div>
            <div style="padding: 0" class="col-md-11">
              <p class="title-comment">همه چیز خوب بود</p>
              <ul>
                <li><i class="fas fa-laptop"></i></li>
                <li><i class="far fa-smile-beam"></i> نقطه قوت: بدون مورد</li>
                <li><i class="far fa-calendar-alt"></i> 1399/11/25 10:53:45</li>
              </ul>
            </div>
          </div>
        </div>
        <div dir="rtl" class="comments">
          <div class="row">
            <div style="padding: 0" class="col-md-1">
              <img
                width="50px"
                height="50px"
                src="@/assets/royal1.png"
                alt=""
              />
            </div>
            <div style="padding: 0" class="col-md-11">
              <p class="title-comment">همه چیز خوب بود</p>
              <ul>
                <li><i class="fas fa-laptop"></i></li>
                <li><i class="far fa-smile-beam"></i> نقطه قوت: بدون مورد</li>
                <li><i class="far fa-calendar-alt"></i> 1399/11/25 10:53:45</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewComments",
  date() {
    return {
     
    };
  },
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
.filter {
  padding: 10px;
}
.search {
  margin-top: 20px;
}
label {
  margin: 10px;
}
.comments {
  width: 100%;
  box-shadow: 0 0 4px 1px gainsboro;
  padding: 12px 12px;
  border-radius: 5px;
  margin: 14px 0;
}
.comments img {
  display: block;
  margin: 30px auto 1px auto;
  padding: 0;
}
.comments .title-comment {
  text-align: right;
  font-size: 18px;
  margin: 10px 0;
}
.comments ul {
  list-style: none;
  text-align: right;
  display: flex;
  flex-direction: row;
}
.comments ul li {
  padding: 0 80px;
  text-align: right;
  margin-top: 20px;
  font-size: 12px;
}
.comments ul li:first-child {
  padding: 0 10px;
  text-align: right;
}
</style>