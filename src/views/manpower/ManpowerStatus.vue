<template>
  <div>
    <div class="option">
      <div class="header-option">بازه زمانی</div>
      <div class="option-time">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <date-picker
                class="my-date"
                color="#7e8891"
                placeholder="از تاریخ"
                v-model="dateFirst"
                type="datetime"
              ></date-picker>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <v-select
                class="style-chooser1"
                :options="['Canada', 'United States', 'CSS / Variables']"
                placeholder="انتخاب دستگاه"
              ></v-select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <v-select
                class="style-chooser2"
                :options="['Canada', 'United States']"
                placeholder="انتخاب گروه"
              ></v-select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <date-picker
                class="my-date"
                color="#7e8891"
                placeholder="تا تاریخ"
                v-model="date"
                type="datetime"
              ></date-picker>
            </div>
          </div>
          <div class="col-md-12">
            <button class="btn">مشاهده</button>
          </div>
          <div class="col-md-12">
            <p class="title-month">حداکثر بازه قابل انتخاب: دو ماه</p>
          </div>
        </div>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="container"></div>
    </figure>
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script>
export default {
  name: "ManpowerStatus",
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "bar",
      },
      title: {
        text: "وضعیت نیروی انسانی",
        style: {
          fontFamily: "IranSans",
        },
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: [
          "<img style='width:50px;height:50px; border-radius: 50%;' src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'> نادر حاتمی",
          "<img style='width:50px;height:50px; border-radius: 50%;' src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'> رضا ونایی",
          "<img style='width:50px;height:50px; border-radius: 50%;' src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'> نادر حاتمی",
          "<img style='width:50px;height:50px; border-radius: 50%;' src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'> نادر حاتمی",
          "<img style='width:50px;height:50px; border-radius: 50%;' src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'> نادر حاتمی",
        ],
        labels: {
          style: {
            fontFamily: "IranSans",
          },
          align: "center",
          useHTML: true,
        },
        useHTML: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
      },
      legend: {
        reversed: true,
        itemStyle: {
          fontFamily: "IranSans",
          padding: 5,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:5px;text-align: left;"><b>{point.y:f} </b></td><td style="color:{series.color};padding:5px; direction: rtl;">{series.name}: </td>' +
          "</tr>",
        footerFormat:
          "<tr><td  style='text-align: left;'>{point.total}</td><td>:جمع بازه</td></tr></table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
          textAlign: "right",
        },
      },
      plotOptions: {
        series: {
          stacking: "normal",
        },
      },
      series: [
        {
          name: "بسیارخرسند",
          data: [3, 4, 4, 2, 5],
          color: "#009239",
        },
        {
          name: "خرسند",
          data: [3, 4, 4, 2, 5],
          color: "#A3CA66",
        },
        {
          name: "ناخرسند",
          data: [2, 2, 3, 2, 1],
          color: "#ED767A",
        },
        {
          name: "بسیار ناخرسند",
          data: [5, 3, 4, 7, 2],
          color: "#E31117",
        },
      ],
    });
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
  padding: 7px 10px;
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
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 100%;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>