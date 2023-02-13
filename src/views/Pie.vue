<template>
  <div
    class="pie"
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
export default {
  setup() {
    const { getValue, createEcharts } = inject("echarts");
    //挂载的dom元素
    let dom;
    //数据
    let list;
    onMounted(async () => {
      list = await getValue("/api/three/data");
      list = list.data.data.chartData;
      dom = document.querySelector(".pie");
      const options = {
        //提示文本
        tooltip: {
          //触发类型
          trigger: "item", //十字线
          //指示器
        },
        //图例
        legend: {
          top: "bottom",
        },
        series: [
          {
            type: "pie",
            data: list,
            //启用南丁格尔图
            roseType: "area",
            //设置半径，内半径，外半径
            radius: [10, 80],
            //图表位置
            center: ["50%", "45%"],
            itemStyle: {
              //单项圆角
              borderRadius: 10,
            },
          },
        ],
      };
      createEcharts(dom, options);
    });
  },
};
</script>