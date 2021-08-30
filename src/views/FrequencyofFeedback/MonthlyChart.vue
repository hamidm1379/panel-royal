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
  name: "MonthlyChart",
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "area",
      },
      title: {
        text: "نمودار ماهانه",
        style: {
          fontFamily: "IranSans",
        },
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
        tickmarkPlacement: "on",
        title: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "Billions",
        },
        labels: {
          formatter: function () {
            return this.value / 1000;
          },
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:10px 15px 10px 5px;"><b>{point.y:.1f} </b></td><td style="color:{series.color};padding:10px 5px 10px 15px; direction: rtl;">{series.name} </td>' +
          "</tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
          textAlign: "right",
        },
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineColor: "#666666",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#666666",
          },
        },
      },
      legend: {
        itemStyle: {
          fontFamily: "IranSans",
          padding: 5,
        },
      },
      series: [
        {
          name: "بسیار خرسند",
          data: [502, 635, 809, 947, 1402, 3634, 5268],
          color: "#009239",
        },
        {
          name: "خرسند",
          data: [106, 107, 111, 133, 221, 767, 1766],
          color: "#A3CA66",
        },
        {
          name: "نا خرسند",
          data: [163, 203, 276, 408, 547, 729, 628],
          color: "#ED767A",
        },
        {
          name: "بسیار ناخرسند",
          data: [18, 31, 54, 156, 339, 818, 1201],
          color: "#E31117",
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

#container {
  height: 400px;
}

.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 100%;
  margin: 1em auto;
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