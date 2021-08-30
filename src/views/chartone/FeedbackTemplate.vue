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
<script src="https://code.highcharts.com/modules/heatmap.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script>
export default {
  name: "FeedbackTemplate",
  mounted() {
    function getPointCategoryName(point, dimension) {
      var series = point.series,
        isY = dimension === "y",
        axis = series[isY ? "yAxis" : "xAxis"];
      return axis.categories[point[isY ? "y" : "x"]];
    }

    Highcharts.chart("container", {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
      },

      title: {
        text: "الگو بازخورد ها",
        style: {
          fontFamily: "IranSans",
        },
      },

      xAxis: {
        categories: [
          "Alexander",
          "Marie",
          "Maximilian",
          "Sophia",
          "Lukas",
          "Maria",
          "Leon",
          "Anna",
          "Tim",
          "Laura",
        ],
      },

      yAxis: {
        categories: [
          "شنبه",
          "یکشنبه",
          "دوشنبه",
          "سه شنبه",
          "چهارشنبه",
          "پنجشنبه",
          "جمعه",
        ],
        title: null,
        reversed: true,
        labels: {
          style: {
            fontFamily: "IranSans",
          },
        },
      },

      accessibility: {
        point: {
          descriptionFormatter: function (point) {
            var ix = point.index + 1,
              xName = getPointCategoryName(point, "x"),
              yName = getPointCategoryName(point, "y"),
              val = point.value;
            return ix + ". " + xName + " sales " + yName + ", " + val + ".";
          },
        },
      },

      colorAxis: {
        min: 0,
        minColor: "#ED767A",
        maxColor: (Highcharts.getOptions().color = "#A3CA66"),
      },

      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280,
      },

      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            getPointCategoryName(this.point, "x") +
            "</b> sold <br><b>" +
            this.point.value +
            "</b> items on <br><b>" +
            getPointCategoryName(this.point, "y") +
            "</b>"
          );
        },
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:0;"><b>{point.y:f} </b></td><td style="color:{series.color};padding:0; direction: rtl;">{series.name}: </td>' +
          "</tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
        },
      },

      series: [
        {
          name: "Sales per employee",
          borderWidth: 1,
          data: [
            [0, 0, 10],
            [0, 1, 19],
            [0, 2, 8],
            [0, 3, 24],
            [0, 4, 67],
            [1, 0, 92],
            [1, 1, 58],
            [1, 2, 78],
            [1, 3, 117],
            [1, 4, 48],
            [2, 0, 35],
            [2, 1, 15],
            [2, 2, 123],
            [2, 3, 64],
            [2, 4, 52],
            [3, 0, 72],
            [3, 1, 132],
            [3, 2, 114],
            [3, 3, 19],
            [3, 4, 16],
            [4, 0, 38],
            [4, 1, 5],
            [4, 2, 8],
            [4, 3, 117],
            [4, 4, 115],
            [5, 0, 88],
            [5, 1, 32],
            [5, 2, 12],
            [5, 3, 6],
            [5, 4, 120],
            [6, 0, 13],
            [6, 1, 44],
            [6, 2, 88],
            [6, 3, 98],
            [6, 4, 96],
            [7, 0, 31],
            [7, 1, 1],
            [7, 2, 82],
            [7, 3, 32],
            [7, 4, 30],
            [8, 0, 85],
            [8, 1, 97],
            [8, 2, 123],
            [8, 3, 64],
            [8, 4, 84],
            [9, 0, 47],
            [9, 1, 114],
            [9, 2, 31],
            [9, 3, 48],
            [9, 4, 91],
          ],
          dataLabels: {
            enabled: true,
            color: "#000000",
          },
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              yAxis: {
                labels: {
                  formatter: function () {
                    return this.value.charAt(0);
                  },
                },
              },
            },
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
  min-width: 360px;
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
  /* max-width: 500px; */
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