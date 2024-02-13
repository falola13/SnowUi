const ctx = document.getElementById("barchart").getContext("2d");
const ctx2 = document.getElementById("doughnut").getContext("2d");
const ctx3 = document.getElementById("chartt");
const ul = document.querySelector(".details ul");
const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const data2 = {
  labels: [
    "jan",
    "Mid jan",
    "Feb",
    "mid feb",
    "Mar",
    "mid mar",
    "Apr",
    "mid apr",
    "May",
    "mid may",
    "Jun",
    "mid jun",
    "Jul",
    "mid jul",
  ],

  datasets: [
    {
      data: [
        10000, 5000, 8000, 9000, 11500, 10000, 20000, 22000, 26000, 19200,
        15000, 16500, 18000, 19000,
      ],
      backgroundColor: [],
    },
  ],
};
console.log(data2);

const config2 = {
  type: "line",
  data: data2,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          color: "#aaa",
          callback: function (value, index) {
            if (index === 0) {
              return 0;
            } else if (index === 2) {
              return "10k";
            } else if (index === 4) {
              return "20k";
            } else if (index === 6) {
              return "30k";
            }
          },
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#aaa",
          callback: function (value, index) {
            if (index === 1) {
              return "Jan";
            } else if (index === 3) {
              return "Feb";
            } else if (index === 5) {
              return "Mar";
            } else if (index === 7) {
              return "Apr";
            } else if (index === 9) {
              return "May";
            } else if (index === 11) {
              return "Jun";
            } else if (index === 13) {
              return "July";
            }
          },
        },
      },
    },
  },
};

const linechart = new Chart(ctx3, config2);

//  setup block
const data = {
  labels: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],

  datasets: [
    {
      barThickness: 30,
      maxBarThickness: 45,
      minBarLength: 2,
      // label: "# of Votes",

      data: [13000, 27000, 19000, 30000, 10000, 24000],
      backgroundColor: [
        "#3e6fd2",
        "#7ceba6",
        "#000",
        "#8ec5e4",
        "#41aceb",
        "#29dc98",
      ],
      borderColor: [
        "#3e6fd2",
        "#7ceba6",
        "#000",
        "#8ec5e4",
        "#41aceb",
        "#29dc98",
      ],
      hoverBackgroundColor: ["#353333"],
    },
  ],
};

const config = {
  type: "bar",
  data,
  options: {
    responsive: true,

    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
    },

    layout: {
      padding: {
        bottom: 3,
      },
    },
    borderWidth: 0,
    borderRadius: 10,
    borderSkipped: false,
    hoverBorderWidth: 0,
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },

        beginAtZero: true,
        ticks: {
          color: "#aaa",
          callback: function (value, index) {
            if (index === 0) {
              return 0;
            } else if (index === 2) {
              return "10k";
            } else if (index === 4) {
              return "20k";
            } else if (index === 6) {
              return "30k";
            }
          },
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#aaa",
        },
      },
    },
    plugins: {
      customCanvasBackgroundColor: {
        color: "#eaf5f5",
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [plugin],
};
// //init
const barchart = new Chart(ctx, config);
//
const chartData = {
  labels: ["United-States", "Canada", "Mexico", "Other"],
  data: [52.1, 22.8, 13.9, 11.2],
};
const doughnut = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Traffic by location",
        data: chartData.data,
        backgroundColor: ["#000", "#0e8eb1", "#63d2a0", "#678ab4"],
        borderColor: ["#eaf5f5"],
      },
    ],
  },
  options: {
    responsive: true,
    borderWidth: 4,
    borderRadius: 5,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populationUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};
populationUl();
