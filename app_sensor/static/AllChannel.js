const AllChannel = JSON.parse(
  document.getElementById("data")?.textContent
)?.AllChannel;
const url = (id) =>
  `https://api.thingspeak.com/channels/${id}/feed.json?results=5`;

const setup = async () => {
  const lists = await Promise.all(
    ["1851537", "1852403", "1916183", "1916185", "1916187"].map(
      async (x) => await fetch(url(x)).then((x) => x.json())
    )
  );
  console.log(lists);
  const Labels = ["Housing 1", "Housing 2", "Housing 3", "Housing 4", "Housing 5"];
  const TimeLable = lists[0].feeds.map((x) => {
    const time = new Date(x.created_at);
    return `${time.getHours()}:${time.getMinutes()}`;
  });
  const temp = lists.map((x) => x.feeds.map((x) => x.field1));
  const humid = lists.map((x) => x.feeds.map((x) => x.field2));
  const ec = lists.map((x) => x.feeds.map((x) => x.field3));
  const ph = lists.map((x) => x.feeds.map((x) => x.field4));
  const nitro = lists.map((x) => x.feeds.map((x) => x.field5));
  const phospho = lists.map((x) => x.feeds.map((x) => x.field6));
  const potass = lists.map((x) => x.feeds.map((x) => x.field7));

  const colors = [
    "rgb(243, 126, 98)",
    "rgb(247, 187, 90)",
    "rgb(255, 225, 119)",
    "rgb(76, 197, 177)",
    "rgb(92, 171, 189)",
  ];

  new Chart(
    document.getElementById("myChartTemperature"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...temp[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartHumidity"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...humid[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartEC"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...ec[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartPH"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...ph[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartNitrogen"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...nitro[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartPhosphorus"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...phospho[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

  new Chart(
    document.getElementById("myChartPotassium"),
    {
      type: "line",
      data: {
        labels: TimeLable,
        datasets: Labels.map((x, i) => ({
          label: x,
          data: [...potass[i]],
          backgroundColor: [colors[i]],
          borderColor: [colors[i]],
          borderWidth: 2,
          tension: 0.1,
          cubicInterpolationMode: 'monotone'
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          },
        },
      },
    }
  );

};

if (AllChannel) setup();
