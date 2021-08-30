<template>
  <div>
    <figure class="highcharts-figure">
      <div id="container"></div>
    </figure>
    <br />
    <p class="title">دلیل رضایت / نارضایتی</p>
    <div class="mytable">
      <table dir="rtl" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">دلیل</th>
            <th scope="col">تعداد</th>
            <th scope="col">نوع</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <router-link :to="{ name: 'ShowAlarm' }">
      <button class="btn">
        <i class="fas fa-arrow-left"></i>بازگشت به صفحه هشدار های آنی
      </button>
    </router-link>
    <br /><br /><br />
  </div>
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script>
export default {
  name: "ChartAlarm",
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "spline",
        inverted: true,
      },
      title: {
        text: "نمودار روند پیشرفت بر خط",
        style: {
          fontFamily: "IranSans",
        },
      },
      subtitle: {
        text: "دستگاه شماره یک",
        style: {
          fontFamily: "IranSans",
        },
      },
      xAxis: {
        reversed: false,
        // title: {
        //   enabled: true,
        //   text: "Altitude",
        // },
        // labels: {
        //   format: "{value} km",
        // },
        accessibility: {
          rangeDescription: "Range: 0 to 80 km.",
        },
        maxPadding: 0.05,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: "زمان روز های ماه",
          style: {
            fontFamily: "IranSans",
          },
        },
        labels: {
          format: "{value}°",
        },
        accessibility: {
          rangeDescription: "Range: -90°C to 20°C.",
        },
        lineWidth: 2,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="padding:0;"><b>{point.y:f} </b></td><td style="color:{series.color};padding:0 0 0 30px;text-align: right, "> {series.name} </td>' +
          "</tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        style: {
          fontFamily: "IranSans",
        },
      },
      plotOptions: {
        spline: {
          marker: {
            enable: false,
          },
        },
      },
      series: [
        {
          name: "شاخص رضایت",
          data: [
            [0, 15],
            [10, -50],
            [20, -56.5],
            [30, -46.5],
            [40, -22.1],
            [50, -2.5],
            [60, -27.7],
            [70, -55.7],
            [80, -76.5],
          ],
        },
      ],
    });
  },
};
</script>
<style scoped>
.mytable {
  box-shadow: 0 0 5px 0 rgb(207, 199, 199);
  border: 5px;
}
.title {
  text-align: right;
}
.table {
  text-align: center;
}
.btn {
  background-color: #7e8891;
  color: #fff;
  font-size: 13px;
}
.btn i {
  padding: 5px 10px 5px 5px;
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