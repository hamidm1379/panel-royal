<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="container my-container">
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
                  <p class="title-month">حداکثر بازه قابل انتخاب: شش ماه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart">
          <figure class="highcharts-figure">
            <div id="container"></div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script>
export default {
  name: "GeneralDistribution",
  data() {
    return {
      date: "",
      dateFirst: "",
      nowDate:""
    }
  },
  mounted() {
    Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "توزیع کلی",
        style: {
          fontFamily: "IranSans",
        },
      },
      subtitle: {
        text: "11 :تعداد باز خوردها",
        style: {
          fontFamily: "IranSans",
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:0;"><b>{point.y:.1f} % </b></td><td style="color:{series.color};padding:0; direction: rtl;"></td>' +
          "</tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
        },
      },
      legend: {
        itemStyle: {
          fontFamily: "IranSans",
          padding: 5,
        },
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "بسیارخرسند",
              y: 61.41,
              sliced: true,
              selected: true,
              color: "#009239",
            },
            {
              name: "خرسند",
              y: 11.84,
              color: "#A3CA66",
            },
            {
              name: "ناخرسند",
              y: 10.85,
              color: "#ED767A",
            },
            {
              name: "بسیار ناخرسند",
              y: 4.67,
              color: "#E31117",
            },
          ],
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
#container {
  min-width: 310px;
  width: 100%;
  height: 450px;
  margin: 0 auto;
}

.my-container {
  padding: 0;
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
  padding:7px 10px;
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
.chart .highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 660px;
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
.chart .highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: gray !important;
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