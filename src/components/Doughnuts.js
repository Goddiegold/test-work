import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colors from "./colors.js";
ChartJS.register(...registerables);

const DoughnutChart = ({ data }) => {

    const doughnutData = {
        labels: data.labels,
        datasets: [
            {
                label: data.label,
                data: data.data,
                backgroundColor: colors.slice(0, data.data.length)
            }
        ]
    };
    const options = {
        plugins : {
            title: {
                display: true,
                text: data.label,
                align: "center",
                padding: {
                    top: 10,
                    bottom: 10,
                }
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <Doughnut data={doughnutData} options={options} />
    )
}

export default DoughnutChart;