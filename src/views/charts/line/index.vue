<template>
  <div>
    <h3 class="mb12">折线图示例</h3>
    <div class="charts-wrapper">
      <div ref="line1" class="line mb12"></div>
      <div ref="line2" class="line mb12"></div>

    </div>
    <div ref="line5" class="block"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.lineChart1();
    this.lineChart2();
 
    this.lineChart5();
  },
  methods: {
    lineChart1() {
      let line1 = this.$echarts.init(this.$refs.line1);
      let base = +new Date(1968, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      var data = [Math.random() * 300];

      for (var i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }

      let option = {
        tooltip: {
          trigger: "axis",
          position: function(pt) {
            return [pt[0], "10%"];
          }
        },
        title: {
          left: "center",
          text: "大数据量面积图"
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"]
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: "模拟数据",
            type: "line",
            smooth: true,
            symbol: "none",
            sampling: "average",
            itemStyle: {
              color: "rgb(255, 70, 131)"
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)"
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)"
                }
              ])
            },
            data: data
          }
        ]
      };
      line1.setOption(option);
    },
    lineChart2() {
      let line2 = this.$echarts.init(this.$refs.line2);
      let option = {
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      line2.setOption(option);
    },

    lineChart5() {
      let line5 = this.$echarts.init(this.$refs.line5);
      let echarts = this.$echarts;
      var easingFuncs = {
        linear: function(k) {
          return k;
        },
        quadraticIn: function(k) {
          return k * k;
        },
        quadraticOut: function(k) {
          return k * (2 - k);
        },
        quadraticInOut: function(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k;
          }
          return -0.5 * (--k * (k - 2) - 1);
        },
        cubicIn: function(k) {
          return k * k * k;
        },
        cubicOut: function(k) {
          return --k * k * k + 1;
        },
        cubicInOut: function(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
          }
          return 0.5 * ((k -= 2) * k * k + 2);
        },
        quarticIn: function(k) {
          return k * k * k * k;
        },
        quarticOut: function(k) {
          return 1 - --k * k * k * k;
        },
        quarticInOut: function(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
          }
          return -0.5 * ((k -= 2) * k * k * k - 2);
        },
        quinticIn: function(k) {
          return k * k * k * k * k;
        },
        quinticOut: function(k) {
          return --k * k * k * k * k + 1;
        },
        quinticInOut: function(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
          }
          return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
        sinusoidalIn: function(k) {
          return 1 - Math.cos((k * Math.PI) / 2);
        },
        sinusoidalOut: function(k) {
          return Math.sin((k * Math.PI) / 2);
        },
        sinusoidalInOut: function(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        },
        exponentialIn: function(k) {
          return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        exponentialOut: function(k) {
          return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        exponentialInOut: function(k) {
          if (k === 0) {
            return 0;
          }
          if (k === 1) {
            return 1;
          }
          if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
          }
          return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },
        circularIn: function(k) {
          return 1 - Math.sqrt(1 - k * k);
        },
        circularOut: function(k) {
          return Math.sqrt(1 - --k * k);
        },
        circularInOut: function(k) {
          if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
          }
          return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
        elasticIn: function(k) {
          var s;
          var a = 0.1;
          var p = 0.4;
          if (k === 0) {
            return 0;
          }
          if (k === 1) {
            return 1;
          }
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
          }
          return -(
            a *
            Math.pow(2, 10 * (k -= 1)) *
            Math.sin(((k - s) * (2 * Math.PI)) / p)
          );
        },
        elasticOut: function(k) {
          var s;
          var a = 0.1;
          var p = 0.4;
          if (k === 0) {
            return 0;
          }
          if (k === 1) {
            return 1;
          }
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
          }
          return (
            a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) +
            1
          );
        },
        elasticInOut: function(k) {
          var s;
          var a = 0.1;
          var p = 0.4;
          if (k === 0) {
            return 0;
          }
          if (k === 1) {
            return 1;
          }
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
          }
          if ((k *= 2) < 1) {
            return (
              -0.5 *
              (a *
                Math.pow(2, 10 * (k -= 1)) *
                Math.sin(((k - s) * (2 * Math.PI)) / p))
            );
          }
          return (
            a *
              Math.pow(2, -10 * (k -= 1)) *
              Math.sin(((k - s) * (2 * Math.PI)) / p) *
              0.5 +
            1
          );
        },

        // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
        backIn: function(k) {
          var s = 1.70158;
          return k * k * ((s + 1) * k - s);
        },
        backOut: function(k) {
          var s = 1.70158;
          return --k * k * ((s + 1) * k + s) + 1;
        },
        backInOut: function(k) {
          var s = 1.70158 * 1.525;
          if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
          }
          return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },

        // 创建弹跳效果
        bounceIn: function(k) {
          return 1 - easingFuncs.bounceOut(1 - k);
        },
        bounceOut: function(k) {
          if (k < 1 / 2.75) {
            return 7.5625 * k * k;
          } else if (k < 2 / 2.75) {
            return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
          } else if (k < 2.5 / 2.75) {
            return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
          } else {
            return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
          }
        },
        bounceInOut: function(k) {
          if (k < 0.5) {
            return easingFuncs.bounceIn(k * 2) * 0.5;
          }
          return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        }
      };

      var N_POINT = 30;

      var grids = [];
      var xAxes = [];
      var yAxes = [];
      var series = [];
      var titles = [];
      var count = 0;
      echarts.util.each(easingFuncs, function(easingFunc, name) {
        var data = [];
        for (var i = 0; i <= N_POINT; i++) {
          var x = i / N_POINT;
          var y = easingFunc(x);
          data.push([x, y]);
        }
        grids.push({
          show: true,
          borderWidth: 0,
          backgroundColor: "#fff",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 2
        });
        xAxes.push({
          type: "value",
          show: false,
          min: 0,
          max: 1,
          gridIndex: count
        });
        yAxes.push({
          type: "value",
          show: false,
          min: -0.4,
          max: 1.4,
          gridIndex: count
        });
        series.push({
          name: name,
          type: "line",
          xAxisIndex: count,
          yAxisIndex: count,
          data: data,
          showSymbol: false,
          animationEasing: name,
          animationDuration: 1000
        });
        titles.push({
          textAlign: "center",
          text: name,
          textStyle: {
            fontSize: 12,
            fontWeight: "normal"
          }
        });
        count++;
      });

      var rowNumber = Math.ceil(Math.sqrt(count));
      echarts.util.each(grids, function(grid, idx) {
        grid.left = ((idx % rowNumber) / rowNumber) * 100 + 0.5 + "%";
        grid.top = (Math.floor(idx / rowNumber) / rowNumber) * 100 + 0.5 + "%";
        grid.width = (1 / rowNumber) * 100 - 1 + "%";
        grid.height = (1 / rowNumber) * 100 - 1 + "%";

        titles[idx].left =
          parseFloat(grid.left) + parseFloat(grid.width) / 2 + "%";
        titles[idx].top = parseFloat(grid.top) + "%";
      });

      let option = {
        title: titles.concat([
          {
            text: "Different Easing Functions",
            top: "bottom",
            left: "center"
          }
        ]),
        grid: grids,
        xAxis: xAxes,
        yAxis: yAxes,
        series: series
      };

      line5.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.charts-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.line {
  width: 50%;
  height: 300px;
}
.block {
  width: 100%;
  height: 600px;
}
</style>