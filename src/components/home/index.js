import { Component } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Sidebar from "../sidebar";
import "./index.css";
import CryptoCards from "../cryptoCards";
import { IoMdHome } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { BsCurrencyExchange } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class Home extends Component {
  state = {
    populationData: {},
    cryptoData: {},
    isLoaded: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const populationUrl =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await fetch(populationUrl);
    const jsonData = await response.json();

    const cryptoUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const cryptoResponse = await fetch(cryptoUrl);
    const cryptoJsonData = await cryptoResponse.json();

    const cryptoCurrenciesData = [
      cryptoJsonData.bpi.EUR.rate_float,
      cryptoJsonData.bpi.GBP.rate_float,
      cryptoJsonData.bpi.USD.rate_float,
    ];
    const cryptoLabels = [
      cryptoJsonData.bpi.EUR.description,
      cryptoJsonData.bpi.GBP.description,
      cryptoJsonData.bpi.USD.description,
    ];

    const cryptoCurrenciesObject = {
      eur: cryptoJsonData.bpi.EUR,
      gbp: cryptoJsonData.bpi.GBP,
      usd: cryptoJsonData.bpi.USD,
    };

    const cryptoUpdatedTime = cryptoJsonData.time.updated;

    const populationData = jsonData.data.map((eachItem) => {
      return eachItem.Population;
    });

    const populationLabels = jsonData.data.map((eachItem) => {
      return eachItem.Year;
    });

    this.setState({
      populationData: {
        populationData,
        populationLabels,
      },
      cryptoData: {
        cryptoCurrenciesObject,
        cryptoUpdatedTime,
        cryptoCurrenciesData,
        cryptoLabels,
      },
      isLoaded: true,
    });
  };

  render() {
    const { populationData, cryptoData, isLoaded } = this.state;
    const { cryptoCurrenciesObject } = cryptoData;

    const barGraphData = {
      labels: cryptoData.cryptoLabels,
      datasets: [
        {
          data: cryptoData.cryptoCurrenciesData,
          backgroundColor: ["#0D9F4A", "#59A7FF", "#EBBB41"],
        },
      ],
    };

    const barGraphOptions = {
      indexAxis: "x",
      plugins: {
        legend: false
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    };

    const lineChartData = {
      labels: populationData.populationLabels,
      datasets: [
        {
          label: "United States",
          data: populationData.populationData,
          borderColor: "rgb(53, 182, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };

    const lineChartOptions = {
      responsive: true,
      scales: {
        x: {
            grid: {
                color: '#750202'
            },
            reverse: true,
        },
        y: {
            grid: {
                color: '#750202',
            },
            position: "right",
        }
    },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: "xy",
          },
        },
      },
    };

    return (
      <>
        <div className="homeContainer">
          <div className="sidebarContainer">
            <a className="SidebarItem active" href="/">
              <IoMdHome className="optionIcon" />
              Home
            </a>
            <a className="SidebarItem" href="/population">
              <ImStatsDots className="optionIcon" />
              Population Stats
            </a>
            <a className="SidebarItem" href="/crypto currency">
              <BsCurrencyExchange className="optionIcon" />
              Crypto Currency
            </a>
          </div>

          <div className="populationChartContainer">
            <h1 className="welcomeHeading">Hello User, Welcome!</h1>
            <div className="graphItem">
              <p>Year Wise Population Data</p>
              <Line options={lineChartOptions} data={lineChartData} />
            </div>
            <div className="graphItem">
              <p>Bitcoin Currencies</p>
              <Bar options={barGraphOptions} data={barGraphData} />
            </div>
            {isLoaded && <CryptoCards cardDetails={cryptoCurrenciesObject} />}
          </div>
        </div>

        <div className="mobile-homeContainer">
          <Sidebar />
          <div className="populationChartContainer">
            <h1 className="welcomeHeading">Hello User, Welcome!</h1>
            <div className="graphItem">
              <p>Year Wise Population Data</p>
              <Line options={lineChartOptions} data={lineChartData} />
            </div>
            <div className="graphItem">
              <p>Bitcoin Currencies</p>
              <Bar options={barGraphOptions} data={barGraphData} />
            </div>
            {isLoaded && <CryptoCards cardDetails={cryptoCurrenciesObject} />}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
