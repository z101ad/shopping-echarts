<template>
  <div
    class="map"
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
    onMounted(async () => {
      list = await getValue("/api/china/data");
      list = list.data.data.data;
      dom = document.querySelector(".map");
      echarts.registerMap("china", list);
      const options = {
        grid: {
          top: "3%",
          left: "1%",
          right: "6%",
          bottom: "3%",
          //开启刻度标签
          containLabel: true,
        },
        title: {
          text: "城市销量",
          left: "43%",
          textStyle: {
            color: "white",
            fontSize: 20,
          },
        },
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
        },
        //视觉映射组件
        visualMap: {
          type: "continuous", //连续型：continuous  piecewise：分段型
          min: 100,
          max: 5000,
          //显示拖拽用的手柄
          calculable: true,
          //定义 在选中范围中 的视觉元素
          inRange: {
            //范围颜色
            color: ["#50a3ba", "#eac736", "#d94e5d"],
          },
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          type: "map",
          map: "china",
          itemStyle: {
            //地图颜色
            areaColor: "#0099ff",
            borderColor: "#00ffff",
            shadowColor: "rgba(230,130,70,0.5)",
            shadowBlur: 30,
          },
          emphasis: {
            //只聚焦不淡出
            focus: "self",
          },
        },
        series: [
          {
            type: "scatter",
            itemStyle: {
              color: "red",
            },
            //坐标切换为经纬度显示
            coordinateSystem: "geo",
            //value：[经度，纬度，数据]
            data: [
              { name: "北京", value: [116.46, 39.92, 4367] },
              { name: "上海", value: [121.48, 31.22, 8675] },
              { name: "深圳", value: [114.07, 22.62, 2461] },
              { name: "广州", value: [113.23, 23.16, 187] },
              { name: "西安", value: [108.45, 34, 3421] },
            ],
          },
        ],
      };
      createEcharts(dom, options);
    });
  },
};
</script>