<template>
  <div id="app">
    <h1>商城数据可视化</h1>
    <div class="main">
      <div class="left">
        <div class="top">
          <div class="title">销售统计图</div>
          <div class="content">
            <CrossBar />
          </div>
        </div>
        <div class="bottom">
          <div class="title">周销图</div>
          <div class="content">
            <Line />
          </div>
        </div>
      </div>
      <div class="middle">
        <Map />
      </div>
      <div class="right">
        <div class="top">
          <div class="title">库存统计</div>
          <div class="content">
            <Pie />
          </div>
        </div>
        <div class="bottom">
          <div class="title">库存统计图</div>
          <div class="content">
            <Bar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrossBar from "./views/CrossBar.vue";
import Line from "./views/Line.vue";
import Pie from "./views/Pie.vue";
import Bar from "./views/Bar.vue";
import Map from "./views/Map.vue";
import getValue from "./api";
import createEcharts from "./views/createEcharts";
import { provide } from "vue";
export default {
  name: "App",
  components: {
    CrossBar,
    Line,
    Pie,
    Bar,
    Map,
  },
  setup() {
    provide("echarts", { getValue, createEcharts });
  },
};
</script>
