<template>
  <div
    class="crossbar"
    style="
       {
        width: 100%;
        height: 100%;
      }
    "
  ></div>
</template>

<script>
import { inject, onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    const { getValue, createEcharts } = inject("echarts");
    //挂载的dom元素
    let dom;
    //数据
    let list;
    //坐标名称
    let titles;
    //坐标数据
    let data;
    onMounted(async () => {
      list = await getValue("/api/one/data");
      titles = list.data.data.chartData.map((item) => item.title);
      data = list.data.data.chartData.map((item) => item.num);
      dom = document.querySelector(".crossbar");
      const options = {
        //图片位置
        grid: {
          top: "3%",
          left: "1%",
          right: "6%",
          bottom: "3%",
          //开启刻度
          containLabel: true,
        },
        //提示文本
        tooltip: {
          //触发类型
          trigger: "axis", //十字线
          //指示器
          axisPointer: {
            //类型
            type: "shadow",
          },
        },
        //选择横轴或竖轴
        xAxis: {
          type: "value",
          axisLine: {
            //轴线颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          data: titles,
          type: "category",
          //轴线
          axisLine: {
            //轴线颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            type: "bar",
            data,
            //柱形样式
            itemStyle: {
              //圆角
              borderRadius: [0, 20, 20, 0],
              //颜色
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#005eaa",
                },
                {
                  offset: 0.5,
                  color: "#339ca8",
                },
                {
                  offset: 1,
                  color: "#cda819",
                },
              ]),
            },
          },
        ],
      };
      createEcharts(dom, options);
    });
  },
};
</script>
