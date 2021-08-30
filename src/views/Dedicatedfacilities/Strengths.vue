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
        <figure class="highcharts-figure">
          <div id="container"></div>
        </figure>
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
  name: "Strengths",
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "bar",
      },
      title: {
        text: "نقاط قوت",
        style: {
          fontFamily: "IranSans",
        },
      },
      xAxis: {
        categories: ["شنبه", "یکشنبه", "Pears", "Grapes", "Bananas"],
        labels: {
          style: {
            fontFamily: "IranSans",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:5px;"><b>{point.y:.1f} % </b></td><td style="color:{series.color};padding:5px; direction: rtl;">{series.name} </td>' +
          "</tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
          textAlign: "right",
        },
      },
      legend: {
        reversed: true,
        itemStyle: {
          fontFamily: "IranSans",
        },
      },
      plotOptions: {
        series: {
          stacking: "normal",
        },
      },
      series: [
        {
          name: "خرسند",
          data: [5, 3, 4, 7, 2],
          color: "#A3CA66",
        },
        {
          name: "بسیار خرسند",
          data: [2, 2, 3, 2, 1],
          color: "#009239",
        },
      ],
    });
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

.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 100% !important;
  width: 100%;
  margin: 1em auto;
}

#container {
  height: 400px;
  width: 100%;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
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