<template>
  <div>
    <h3 class="mb12">饼图示例</h3>
    <div class="charts-wrapper">
      <div ref="cheart1" class="pie mb12"></div>
      <div ref="cheart2" class="pie mb12"></div>
    </div>
    <div ref="cheart3" class="block"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.pieChart1();
    this.pieChart2();

    this.pieChart3();
  },
  methods: {
    pieChart1() {
      let cheart = this.$echarts.init(this.$refs.cheart1);
      let option = {
        backgroundColor: "#2c343c",

        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
      cheart.setOption(option);
    },
    pieChart2() {
      let cheart = this.$echarts.init(this.$refs.cheart2);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              position: "inner"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直达", selected: true },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" }
            ]
          }
        ]
      };
      cheart.setOption(option);
    },

    pieChart3() {
      let cheart = this.$echarts.init(this.$refs.cheart3);
      var data = [
        {
          name: "Apples",
          value: 70
        },
        {
          name: "Strawberries",
          value: 68
        },
        {
          name: "Bananas",
          value: 48
        },
        {
          name: "Oranges",
          value: 40
        },
        {
          name: "Pears",
          value: 32
        },
        {
          name: "Pineapples",
          value: 27
        },
        {
          name: "Grapes",
          value: 18
        }
      ];

     let option = {
        title: [
          {
            text: "Pie label alignTo"
          },
          {
            subtext: 'alignTo: "none" (default)',
            left: "16.67%",
            top: "75%",
            textAlign: "center"
          },
          {
            subtext: 'alignTo: "labelLine"',
            left: "50%",
            top: "75%",
            textAlign: "center"
          },
          {
            subtext: 'alignTo: "edge"',
            left: "83.33%",
            top: "75%",
            textAlign: "center"
          }
        ],
        series: [
          {
            type: "pie",
            radius: "25%",
            center: ["50%", "50%"],
            data: data,
            animation: false,
            label: {
              position: "outer",
              alignTo: "none",
              bleedMargin: 5
            },
            left: 0,
            right: "66.6667%",
            top: 0,
            bottom: 0
          },
          {
            type: "pie",
            radius: "25%",
            center: ["50%", "50%"],
            data: data,
            animation: false,
            label: {
              position: "outer",
              alignTo: "labelLine",
              bleedMargin: 5
            },
            left: "33.3333%",
            right: "33.3333%",
            top: 0,
            bottom: 0
          },
          {
            type: "pie",
            radius: "25%",
            center: ["50%", "50%"],
            data: data,
            animation: false,
            label: {
              position: "outer",
              alignTo: "edge",
              margin: 20
            },
            left: "66.6667%",
            right: 0,
            top: 0,
            bottom: 0
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
.pie {
  width: 50%;
  height: 300px;
}
.block {
  width: 100%;
  height: 600px;
}
</style>