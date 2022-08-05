import React from 'react';
import { Column } from '@ant-design/plots';

const StackedChart = () => {

    function MebibyteToGigabyte(n) {
        return n / 953.674; // 953.674 is the exact number
    }

    const data = [
        {
            "cloud": "AWS S3",
            "data_value": 1,
            "type": "Archived Data"
        },
        {
            "cloud": "Azure",
            "data_value": MebibyteToGigabyte(Number.parseFloat(512).toFixed(2)),
            "type": "Archived Data"
        },
        {
            "cloud": "Google Cloud",
            "data_value": MebibyteToGigabyte(Number.parseFloat(512).toFixed(2)),
            "type": "Archived Data"
        },
        {
            "cloud": "AWS S3",
            "data_value": 2,
            "type": "Current Data"
        },
        {
            "cloud": "Azure",
            "data_value": 1,
            "type": "Current Data"
        },
        {
            "cloud": "Google Cloud",
            "data_value": 1,
            "type": "Current Data"
        },
    ];
    const config = {
        data,
        isStack: true,
        xField: 'cloud',
        yField: 'data_value',
        seriesField: 'type',
        meta: {
            data_value: {
                min: 0,
                max: 4,
            },
        },
        width: 'auto',
        height: 140,
        colorField: 'type', // or seriesField in some cases
        color: ({ type }) => {
            if (type === 'Current Data') {
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
    };

    return (<Column {...config} />)
}

export default StackedChart
