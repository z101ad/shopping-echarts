<template>
  <div
    class="bar"
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
      list = await getValue("/api/four/data");
      titles = list.data.data.chartData.day;
      data = list.data.data.chartData.num;
      dom = document.querySelector(".bar");
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
          data: titles,
          type: "category",
          axisLine: {
            //轴线颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
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
            name: "服饰",
            type: "bar",
            data: data.Chemicals,
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "数码",
            type: "bar",
            data: data.Clothes,
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "家电",
            type: "bar",
            data: data.Electrical,
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "家居",
            type: "bar",
            data: data.digit,
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "日化",
            type: "bar",
            data: data.gear,
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
        ],
      };
      createEcharts(dom, options);
    });
  },
};
</script>
