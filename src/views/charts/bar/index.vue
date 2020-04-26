<template>
  <div>
    <h3 class="mb12">柱形图示例</h3>
    <div class="charts-wrapper">
      <div ref="bar1" class="bar mb12"></div>
      <div ref="bar2" class="bar mb12"></div>
      <div ref="bar3" class="bar mb12"></div>
      <div ref="bar4" class="bar mb12"></div>
    </div>
    <div ref="bar5" class="block"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.barChart1();
    this.barChart2();
    this.barChart3();
    this.barChart4();
    this.barChart5();
  },
  methods: {
    barChart1() {
      let bar1 = this.$echarts.init(this.$refs.bar1);
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
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
            name: "直接访问",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
          {
            name: "百度",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "谷歌",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "必应",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "其他",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };
      bar1.setOption(option);
    },
    barChart2() {
      let bar2 = this.$echarts.init(this.$refs.bar2);
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 100; i++) {
        xAxisData.push("类目" + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }

      const option = {
        title: {
          text: "柱状图动画延迟"
        },
        legend: {
          data: ["bar", "bar2"]
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ["stack", "tiled"]
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [
          {
            name: "bar",
            type: "bar",
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            }
          },
          {
            name: "bar2",
            type: "bar",
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
      };
      bar2.setOption(option);
    },
    barChart3() {
      let bar3 = this.$echarts.init(this.$refs.bar3);
      const option = {
        title: {
          text: "某地区蒸发量和降水量",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["蒸发量", "降水量"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };

      bar3.setOption(option);
    },
    barChart4() {
      let bar4 = this.$echarts.init(this.$refs.bar4);
      const option = {
        title: {
          text: "阶梯瀑布图",
          subtext: "From ExcelHome",
          sublink: "http://e.weibo.com/1341556070/Aj1J2x5a5"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var tar;
            if (params[1].value !== "-") {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          }
        },
        legend: {
          data: ["支出", "收入"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: (function() {
            var list = [];
            for (var i = 1; i <= 11; i++) {
              list.push("11月" + i + "日");
            }
            return list;
          })()
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "辅助",
            type: "bar",
            stack: "总量",
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)"
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top"
            },
            data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"]
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "bottom"
            },
            data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203]
          }
        ]
      };

      bar4.setOption(option);
    },
    barChart5() {
      let bar5 = this.$echarts.init(this.$refs.bar5);
      let echarts = this.$echarts;
      var dataCount = 5e5;
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4]
          ]
        },
        xAxis: [
          { type: "category", gridIndex: 0 },
          { type: "category", gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: "55%" }, { top: "55%" }],
        series: [
          // These series are in the first grid.
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          // These series are in the second grid.
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 }
        ]
      };

      bar5.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.charts-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.bar {
  width: 50%;
  height: 300px;
}
.block {
  width: 100%;
  height: 600px;
}
</style>