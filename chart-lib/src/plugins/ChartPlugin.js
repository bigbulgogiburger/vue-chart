import Chart from "chart.js";
export default {
  install: (app) => {
    app.config.globalProperties.$_Chart = Chart;

    // App.vue
    // this.$_Chart <= 이렇게 쓸 수 있게 됨.

    // LineChart
  },
};
