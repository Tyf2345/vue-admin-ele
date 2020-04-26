<template>
  <div>
    <h3 class="mb12">雷达图示例</h3>
    <div class="charts-wrapper">
      <div ref="cheart1" class="rarad mb12"></div>
      <div ref="cheart2" class="rarad mb12"></div>
    </div>
    <div ref="cheart3" class="block"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.raradChart1();
    this.raradChart2();

    this.raradChart3();
  },
  methods: {
    raradChart1() {
      let cheart = this.$echarts.init(this.$refs.cheart1);
      let echarts = this.$echarts;
      let option = {
        title: {
          text: "基础雷达图"
        },
        tooltip: {},
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售（sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配（Allocated Budget）"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销（Actual Spending）"
              }
            ]
          }
        ]
      };
      cheart.setOption(option);
    },
    raradChart2() {
      let cheart = this.$echarts.init(this.$refs.cheart2);
      let option = {
        title: {
          text: "浏览器占比变化",
          subtext: "纯属虚构",
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,250,0.2)"
        },
        legend: {
          type: "scroll",
          bottom: 10,
          data: (function() {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + "");
            }
            return list;
          })()
        },
        visualMap: {
          top: "middle",
          right: 10,
          color: ["red", "yellow"],
          calculable: true
        },
        radar: {
          indicator: [
            { text: "IE8-", max: 400 },
            { text: "IE9+", max: 400 },
            { text: "Safari", max: 400 },
            { text: "Firefox", max: 400 },
            { text: "Chrome", max: 400 }
          ]
        },
        series: (function() {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              name: "浏览器（数据纯属虚构）",
              type: "radar",
              symbol: "none",
              lineStyle: {
                width: 1
              },
              emphasis: {
                areaStyle: {
                  color: "rgba(0,250,0,0.3)"
                }
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2
                  ],
                  name: i + 2000 + ""
                }
              ]
            });
          }
          return series;
        })()
      };

      cheart.setOption(option);
    },

    raradChart3() {
      let cheart = this.$echarts.init(this.$refs.cheart3);

      let option = {
        title: {
          text: "多雷达图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          left: "center",
          data: ["某软件", "某主食手机", "某水果手机", "降水量", "蒸发量"]
        },
        radar: [
          {
            indicator: [
              { text: "品牌", max: 100 },
              { text: "内容", max: 100 },
              { text: "可用性", max: 100 },
              { text: "功能", max: 100 }
            ],
            center: ["25%", "40%"],
            radius: 80
          },
          {
            indicator: [
              { text: "外观", max: 100 },
              { text: "拍照", max: 100 },
              { text: "系统", max: 100 },
              { text: "性能", max: 100 },
              { text: "屏幕", max: 100 }
            ],
            radius: 80,
            center: ["50%", "60%"]
          },
          {
            indicator: (function() {
              var res = [];
              for (var i = 1; i <= 12; i++) {
                res.push({ text: i + "月", max: 100 });
              }
              return res;
            })(),
            center: ["75%", "40%"],
            radius: 80
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40],
                name: "某软件"
              }
            ]
          },
          {
            type: "radar",
            radarIndex: 1,
            areaStyle: {},
            data: [
              {
                value: [85, 90, 90, 95, 95],
                name: "某主食手机"
              },
              {
                value: [95, 80, 95, 90, 93],
                name: "某水果手机"
              }
            ]
          },
          {
            type: "radar",
            radarIndex: 2,
            areaStyle: {},
            data: [
              {
                name: "降水量",
                value: [
                  2.6,
                  5.9,
                  9.0,
                  26.4,
                  28.7,
                  70.7,
                  75.6,
                  82.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3
                ]
              },
              {
                name: "蒸发量",
                value: [
                  2.0,
                  4.9,
                  7.0,
                  23.2,
                  25.6,
                  76.7,
                  35.6,
                  62.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3
                ]
              }
            ]
          }
        ]
      };

      cheart.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.charts-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.rarad {
  width: 50%;
  height: 300px;
}
.block {
  width: 100%;
  height: 600px;
}
</style>