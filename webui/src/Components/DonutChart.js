import React from 'react';
import { Pie } from "@ant-design/plots";

const DonutChart = ({ data }) => {
    const config = {
        width: 300,
        height: 300,
        autoFit: true,
        appendPadding: 1,
        data,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        innerRadius: 0.5,
        label: {
            content: ""
        },
        color: ({ type }) => {
            if (type === "Completed" || type === "Used" || type === "Objects") {
                return "#54678A";
            } else if (type === "Backlog" || type === "Free" || type === "Versions") {
                return "#BA1B61";
            } else {
                return "red";
            }
        },
        interactions: [
            {
                type: "element-selected"
            },
            {
                type: "element-active"
            }
        ],
        legend: { position: 'bottom', },
        statistic: {
            title: false,
            content: false,
        }
    };

    return (
        <div>
            <Pie {...config} />
        </div>
    )
}

export default DonutChart
