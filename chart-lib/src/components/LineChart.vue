<template>
  <canvas ref="lineChart" id="lineChart" width="400" height="400"> </canvas>
</template>

<script>
export default {
  mounted() {
    // var ctx = document.getElementById("lineChart");
    var ctx = this.$refs.lineChart;
    // eslint-disable-next-line
    var chart = new this.$_Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      // Configuration options go here
      options: {},
      onClick: function () {
        this.$emit("refresh:chart");
      },
    });
  },
};
</script>

<style></style>
