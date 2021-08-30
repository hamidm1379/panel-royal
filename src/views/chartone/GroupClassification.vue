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
        <table dir="rtl" class="table table-hover">
          <thead>
            <tr class="table-secondary">
              <th scope="col">نام دستگاه/بخش</th>
              <th scope="col">مجموعه آرا</th>
              <th scope="col">
                <img
                  width="30px"
                  height="30px"
                  src="@/assets/royal1.png"
                  alt=""
                />
              </th>
              <th scope="col">
                <img
                  width="30px"
                  height="30px"
                  src="@/assets/royal2.png"
                  alt=""
                />
              </th>
              <th scope="col">
                <img
                  width="30px"
                  height="30px"
                  src="@/assets/royal3.png"
                  alt=""
                />
              </th>
              <th scope="col">
                <img
                  width="30px"
                  height="30px"
                  src="@/assets/royal4.png"
                  alt=""
                />
              </th>
              <th scope="col">شاخص رضایت</th>
              <th scope="col">اختلاف میانگین</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>% 57.6</td>
              <td>% 57.6</td>
              <td>% 57.6</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>% 18.6</td>
              <td>% 57.6</td>
              <td>% 57.6</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>% 15.6</td>
              <td>% 57.6</td>
              <td>% 57.6</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="table-secondary">
              <th scope="col">مجموع</th>
              <th scope="col">11</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeviceClassification",
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
table {
  font-size: 13px;
  text-align: right;
}
</style>