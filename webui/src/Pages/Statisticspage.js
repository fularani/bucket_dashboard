import { Row, Col, Divider } from 'antd';
import StackedChart from "../Components/StackedChart";
import React from 'react';

const Statisticspage = () => {

    const bucketdata = [
        {
            // "x_value": "",
            "y_value": 0,
            "type": "Buckets"
        },
    ];

    const objectdata = [
        {
            // "x_value": "",
            "y_value": 1,
            "type": "Objects"
        },
        {
            // "x_value": "",
            "y_value": 2,
            "type": "Versions"
        },
    ];

    const capacitydata = [
        {
            // "x_value": "",
            "y_value": 1,
            "type": "Capacity Available"
        },
        {
            // "x_value": "",
            "y_value": 2,
            "type": "Capacity Total"
        },
    ];

    return (
        <div className="text-white">
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        BUCKETS
                    </Divider>
                    <StackedChart data={bucketdata} yAxisTitle='Buckets' maxY={3} height={200} isStack={false} />
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        OBJECTS
                    </Divider>
                    <StackedChart data={objectdata} yAxisTitle='Objects' maxY={25000} height={200} isStack={true} />
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        CAPACITY USAGE
                    </Divider>
                    <StackedChart data={capacitydata} yAxisTitle='Capacity(GB)' maxY={800} height={200} isStack={true} />
                </Col>
            </Row>
        </div>
    )
}

export default Statisticspage
