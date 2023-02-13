import * as echarts from "echarts";
export default function (dom, options) {
  const myChart = echarts.init(dom);
  myChart.setOption(options);
}
