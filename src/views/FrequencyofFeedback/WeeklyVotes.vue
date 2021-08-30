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
        <br />
        <br />
        <figure class="highcharts-figure">
          <div id="container"></div>
        </figure>
      </div>
    </div>
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script>
export default {
  name: "WeeklyVotes",
  data() {
    return {};
  },
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "نمودار هفتگی",
        style: {
          fontFamily: "IranSans",
          textAlign: "right",
          direction: "rtl",
        },
      },
      subtitle: {
        text: `<p style='margin:0 10px'>نام دستگاه:همه دستگاه</p><p style=' opacity: 0;'>//////////</p><p>از یک هفته پیش</p><p style=' opacity: 0;'>///////////</p><p> تعداد بازخوردها:11 </p>`,
        style: {
          fontFamily: "IranSans",
          textAlign: "right",
          direction: "rtl",
        },
      },

      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: "category",
        labels: {
          style: {
            fontFamily: "IranSans",
          },
        },
      },
      yAxis: {
        title: {
          text: "تعداد آرا",
          style: {
            fontFamily: "IranSans",
          },
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:0;"><b>{point.y:.1f} </b></td><td style="color:{series.color};padding:0; direction: rtl;"> </td>' +
          "</tr>",
        footerFormat: "</table>",
        // shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
        },
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "بسیار خرسند",
              y: 62.74,
              drilldown: "بسیار خرسند",
              color: "#009239",
            },
            {
              name: "خرسند",
              y: 10.57,
              drilldown: "Firefox",
              color: "#A3CA66",
            },
            {
              name: "نا خرسند",
              y: 7.23,
              drilldown: "Internet Explorer",
              color: "#ED767A",
            },
            {
              name: "بسیار نا خرسند",
              y: 5.58,
              drilldown: "Safari",
              color: "#E31117",
            },
          ],
        },
      ],
      drilldown: {
        series: [
          {
            name: "Chrome",
            id: "Chrome",
            data: [
              ["v65.0", 0.1],
              ["v64.0", 1.3],
              ["v63.0", 53.02],
              ["v62.0", 1.4],
              ["v61.0", 0.88],
              ["v60.0", 0.56],
              ["v59.0", 0.45],
              ["v58.0", 0.49],
              ["v57.0", 0.32],
              ["v56.0", 0.29],
              ["v55.0", 0.79],
              ["v54.0", 0.18],
              ["v51.0", 0.13],
              ["v49.0", 2.16],
              ["v48.0", 0.13],
              ["v47.0", 0.11],
              ["v43.0", 0.17],
              ["v29.0", 0.26],
            ],
          },
          {
            name: "Firefox",
            id: "Firefox",
            data: [
              ["v58.0", 1.02],
              ["v57.0", 7.36],
              ["v56.0", 0.35],
              ["v55.0", 0.11],
              ["v54.0", 0.1],
              ["v52.0", 0.95],
              ["v51.0", 0.15],
              ["v50.0", 0.1],
              ["v48.0", 0.31],
              ["v47.0", 0.12],
            ],
          },
          {
            name: "Internet Explorer",
            id: "Internet Explorer",
            data: [
              ["v11.0", 6.2],
              ["v10.0", 0.29],
              ["v9.0", 0.27],
              ["v8.0", 0.47],
            ],
          },
          {
            name: "Safari",
            id: "Safari",
            data: [
              ["v11.0", 3.39],
              ["v10.1", 0.96],
              ["v10.0", 0.36],
              ["v9.1", 0.54],
              ["v9.0", 0.13],
              ["v5.1", 0.2],
            ],
          },
        ],
      },
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
  max-width: 100%;
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