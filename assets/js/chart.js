const ctx = document.querySelector(".card-chart").getContext('2d');
let labes = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
let chartData = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

// Change chart defaults styles
Chart.defaults.font.size = 11
Chart.defaults.font.family = "DM Sans"
Chart.defaults.color = "hsl(28, 10%, 53%)"

const data = {
  labels: labes,
  datasets: [{
    data: chartData,
    backgroundColor: [
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(186, 34%, 60%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)"
    ],
    hoverBackgroundColor: [
      "hsl(10, 100%, 76%)",
      "hsl(10, 100%, 76%)",
      "hsl(187, 49%, 80%)",
      "hsl(10, 100%, 76%)",
      "hsl(10, 100%, 76%)",
      "hsl(10, 100%, 76%)",
      "hsl(10, 100%, 76%)"
    ],
    borderWidth: 1,
    borderRadius: 4,
    // Add border radius on bottom side of bar
    borderSkipped: true,
    // Bars width
    barThickness: 33
  }]
}

const config = {
  type: "bar",
  data,
  options: {
    // Disable aspect ratio
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        cornerRadius: 3,
        // Tooltip arrow size
        caretSize: 0,
        displayColors: false,
        // Tooltip position
        yAlign: "bottom",
        titleAlign: "center",
        caretPadding: 7,
        titleColor: "hsl(30, 100%, 98%)",
        backgroundColor: "hsl(25, 47%, 15%)",
        callbacks: {
          // Hide tooltip title
          title: function () { },

          // Add $ sign before tooltip value
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      },

      // Hide Legend
      legend: {
        display: false
      }
    },

    scales: {
      // Hide x direction lines & border axis
      x: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      // Hide y direction lines & border axis
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        // Hide chart left side ticks
        ticks: {
          display: false
        }
      }
    }
  }
}

// Chart builder
const myChart = new Chart(ctx, config)