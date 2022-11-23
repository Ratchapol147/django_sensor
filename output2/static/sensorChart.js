const channel = JSON.parse(
  document.getElementById("data")?.textContent
)?.channel;
const SensorFetch = async () => {
  console.log("Update");
  const title = document?.getElementById("TitleDate");
  const currDate = new Date();
  const data = await fetch(
    `https://api.thingspeak.com/channels/${channel}/feed.json?results=10`
  ).then((x) => x.json());
  const feed = {
    temp: data.feeds.map((x) => x.field1),
    humid: data.feeds.map((x) => x.field2),
    ec: data.feeds.map((x) => x.field3),
    ph: data.feeds.map((x) => x.field4),
    nitro: data.feeds.map((x) => x.field5),
    phospho: data.feeds.map((x) => x.field6),
    potass: data.feeds.map((x) => x.field7),
    time: data.feeds.map((x) => {
      const time = new Date(x.created_at);
      return `${time.getHours()}:${time.getMinutes()}`;
    }),
  };
  title.innerText = `ข้อมูลล่าสุดเมื่อ ${new Date(
    data.feeds.at(-1).created_at
  ).toLocaleString("th-TH")}`;

  myChartTemperature.data.labels = [...feed.time];
  myChartTemperature.data.datasets[0].data = [...feed.temp];
  myChartTemperature.update();
  myChartHumidity.data.labels = [...feed.time];
  myChartHumidity.data.datasets[0].data = [...feed.humid];
  myChartHumidity.update();
  myChartEC.data.labels = [...feed.time];
  myChartEC.data.datasets[0].data = [...feed.ec];
  myChartEC.update();
  myChartPH.data.labels = [...feed.time];
  myChartPH.data.datasets[0].data = [...feed.ph];
  myChartPH.update();
  myChartNitrogen.data.labels = [...feed.time];
  myChartNitrogen.data.datasets[0].data = [...feed.nitro];
  myChartNitrogen.update();
  myChartPhosphorus.data.labels = [...feed.time];
  myChartPhosphorus.data.datasets[0].data = [...feed.phospho];
  myChartPhosphorus.update();
  myChartPotassium.data.labels = [...feed.time];
  myChartPotassium.data.datasets[0].data = [...feed.potass];
  myChartPotassium.update();
};

let myChartTemperature;
let myChartHumidity;
let myChartEC;
let myChartPH;
let myChartNitrogen;
let myChartPhosphorus;
let myChartPotassium;

if (channel) {
  myChartTemperature = new Chart(
    document.getElementById("myChartTemperature"),
    {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Celsius",
            data: [],
            backgroundColor: ["rgb(72, 117, 198)"],
            borderColor: ["rgb(72, 117, 198)"],
            borderWidth: 2,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
        },
        scales: {
          y: {
            beginAtZero: true,
            
          },
        },
      },
    }
  );

  myChartHumidity = new Chart(document.getElementById("myChartHumidity"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitHumidity",
          data: [],
          backgroundColor: ["rgb(92, 171, 189)"],
          borderColor: ["rgb(92, 171, 189)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  myChartEC = new Chart(document.getElementById("myChartEC"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitEC",
          data: [],
          backgroundColor: ["rgb(76, 197, 177)"],
          borderColor: ["rgb(76, 197, 177)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  myChartPH = new Chart(document.getElementById("myChartPH"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitEC",
          data: [],
          backgroundColor: ["rgb(247, 187, 90)"],
          borderColor: ["rgb(247, 187, 90)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  myChartNitrogen = new Chart(document.getElementById("myChartNitrogen"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitNitrogen",
          data: [],
          backgroundColor: ["rgb(243, 126, 98)"],
          borderColor: ["rgb(243, 126, 98)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  myChartPhosphorus = new Chart(document.getElementById("myChartPhosphorus"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitPhosphorus",
          data: [],
          backgroundColor: ["rgb(115, 138, 200)"],
          borderColor: ["rgb(115, 138, 200)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  myChartPotassium = new Chart(document.getElementById("myChartPotassium"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "UnitPotassium",
          data: [],
          backgroundColor: ["rgb(127, 209, 59)"],
          borderColor: ["rgb(127, 209, 59)"],
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  SensorFetch();
  setInterval(SensorFetch, 30 * 1000);
}
