import React from 'react';
import { Column } from '@ant-design/plots';

const StackedChart = ({ data, yAxisTitle, maxY, height, isStack }) => {

    const config = {
        data,
        isStack: isStack,
        xField: 'x_value',
        yField: 'y_value',
        seriesField: 'type',
        meta: {
            y_value: {
                min: 0,
                max: maxY,
            },
        },
        width: 'auto',
        height: height,
        colorField: 'type', // or seriesField in some cases
        color: ({ type }) => {
            if (type === 'Current Data' || type === 'Versions' || type === 'Capacity Total') {
                return '#586B8E';
            }
            // return '#41B3A8';
            return '#BA1B61';
        },
        maxColumnWidth: 25,
        columnBackground: {
            style: {
                fill: '#081F2C',
                fillOpacity: 0,
            }
        },
        interactions: [
            {
                type: 'tooltip',
                cfg: {
                    start: [{ trigger: 'element:mouseenter', action: 'tooltip:show' }],
                    end: [{ trigger: 'plot:mouseleave', action: 'tooltip:hide' }],
                },
            },
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        theme: {
            defaultColor: '081F2C',
        },
        legend: { position: 'top', },
        xAxis: {
            line: {
                style: {
                    stroke: 'black',
                    lineWidth: 0.5,
                }
            }
        },
        yAxis: {
            title: {
                text: yAxisTitle,
            },
        },

    };

    return (<Column {...config} />)
}

export default StackedChart
