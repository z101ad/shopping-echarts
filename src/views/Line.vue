<template>
  <div
    class="line"
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
      list = await getValue("/api/two/data");
      titles = list.data.data.chartData.day;
      data = list.data.data.chartData.num;
      dom = document.querySelector(".line");
      const options = {
        //图片位置
        grid: {
          left: "1%",
          right: "4%",
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
            type: "line",
          },
        },
        //图例
        legend: {
          type: "plain",
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
            type: "line",
            lineStyle: {
              width: 0,
            },
            data: data.Chemicals,
            //折线圆滑
            smooth: true,
            //数据叠加
            stack: "total",
            // 移入样式
            emphasis: {
              //移入隐藏其他
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
          },
          {
            name: "数码",
            type: "line",
            data: data.Clothes,
            lineStyle: {
              width: 0,
            },
            //折线圆滑
            smooth: true,
            //数据叠加
            stack: "num",
            //移入样式
            emphasis: {
              //移入隐藏其他
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
          },
          {
            name: "家电",
            type: "line",
            data: data.Electrical,
            lineStyle: {
              width: 0,
            },
            //折线圆滑
            smooth: true,
            //数据叠加
            stack: "num",
            //移入样式
            emphasis: {
              //移入隐藏其他
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
          },
          {
            name: "家居",
            type: "line",
            data: data.digit,
            lineStyle: {
              width: 0,
            },
            //折线圆滑
            smooth: true,
            //数据叠加
            stack: "num",
            //移入样式
            emphasis: {
              //移入隐藏其他
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
          },
          {
            name: "日化",
            type: "line",
            data: data.gear,
            lineStyle: {
              width: 0,
            },
            //折线圆滑
            smooth: true,
            //数据叠加
            stack: "num",
            //移入样式
            emphasis: {
              //移入隐藏其他
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
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