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
  name: "HourlyChart",
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "نمودار ساعتی",
        style: {
          fontFamily: "IranSans",
        },
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Rainfall (mm)",
        },
      },
      legend: {
        itemStyle: {
          fontFamily: "IranSans",
          padding: 5,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:5px;text-align:left;"><b>{point.y:.1f} % </b></td><td style="color:{series.color};padding:5px; direction: rtl;">{series.name}: </td>' +
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
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "بسیارخرسند",
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
          ],
          color: "#009239",
        },
        {
          name: "خرسند",
          data: [
            83.6,
            78.8,
            98.5,
            93.4,
            106.0,
            84.5,
            105.0,
            104.3,
            91.2,
            83.5,
            106.6,
            92.3,
          ],
          color: "#A3CA66",
        },
        {
          name: "ناخرسند",
          data: [
            48.9,
            38.8,
            39.3,
            41.4,
            47.0,
            48.3,
            59.0,
            59.6,
            52.4,
            65.2,
            59.3,
            51.2,
          ],
          color: "#ED767A",
        },
        {
          name: "بسیار ناخرسند",
          data: [
            42.4,
            33.2,
            34.5,
            39.7,
            52.6,
            75.5,
            57.4,
            60.4,
            47.6,
            39.1,
            46.8,
            51.1,
          ],
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
</style>