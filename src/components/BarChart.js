import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const BarChart = ({ data }) => {

    const repeatColor = () => {
        let colorArr = [];
        for(var i=0;i<data.data.length;i++) {
            if(i%2) colorArr.push("rgba(0, 96, 255, 0.9)")
            else colorArr.push("rgba(0, 96, 255, 0.5)")
        }
        return colorArr;
    }
    const barData = {
        labels: data.labels,
        datasets: [
            {
                label: data.label,
                data: data.data,
                backgroundColor: repeatColor(),
                borderRadius: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
    };
    // scales: {
    //     x: [{
    //         gridLines: {
    //             display: false
    //         }
    //     }],
    //     y: [{
    //         gridLines: {
    //             display: false
    //         }
    //     }],
    // },

    return (
        <Bar data={barData} options={options} />
    )
}

export default BarChart;