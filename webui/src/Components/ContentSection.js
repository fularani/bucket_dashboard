import StackedChart from "./StackedChart";
import DataCard from "./DataCard";
import DonutChart from "./DonutChart";
import { Layout, Col, Divider, Row } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
const { Content } = Layout;

const ContentSection = () => {

    function MebibyteToGigabyte(n) {
        return n / 953.674; // 953.674 is the exact number
    }

    const data = [
        {
            "x_value": "AWS S3",
            "y_value": 1,
            "type": "Archived Data"
        },
        {
            "x_value": "Azure",
            "y_value": MebibyteToGigabyte(Number.parseFloat(512).toFixed(2)),
            "type": "Archived Data"
        },
        {
            "x_value": "Google Cloud",
            "y_value": MebibyteToGigabyte(Number.parseFloat(512).toFixed(2)),
            "type": "Archived Data"
        },
        {
            "x_value": "AWS S3",
            "y_value": 2,
            "type": "Current Data"
        },
        {
            "x_value": "Azure",
            "y_value": 1,
            "type": "Current Data"
        },
        {
            "x_value": "Google Cloud",
            "y_value": 1,
            "type": "Current Data"
        },
    ];

    const replicationstatData = [
        {
            type: "Backlog",
            value: 2
        },
        {
            type: "Failed",
            value: 0
        },
        {
            type: "Completed",
            value: 2
        }
    ];

    const capacityData = [
        {
            type: "Used",
            value: 2
        },
        {
            type: "Free",
            value: 8
        }
    ];

    const objectsData = [
        {
            type: "Objects",
            value: 2
        },
        {
            type: "Versions",
            value: 10
        }
    ];

    const memoryData = [
        {
            type: "Used",
            value: 32
        },
        {
            type: "Free",
            value: 19.2
        }
    ];

    return (
        <Content style={{ padding: '24px 16px 0', overflow: 'initial', backgroundColor: '#081F2C' }}>
            <div
                className="site-layout-background"
                style={{ padding: 12, /*textAlign: 'center',*/ color: '#ffffff', backgroundColor: '#081F2C', minHeight: '1000px', }}
            >
                {/**  CONTENT SECTION FOR DASHBOARD......... */}
                <div>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Divider className="text-white">
                                TOTAL DATA MANAGED
                            </Divider>
                            <DataCard datahead="6GB" datatitle="Across all clouds" />
                        </Col>
                        <Col span={16}>
                            <Divider className="text-white">
                                DATA MANAGED
                            </Divider>
                            <StackedChart data={data} yAxisTitle='Data(GB)' maxY={4} height={140} isStack={true} />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Divider className="text-white">
                                REPLICATION STATUS
                            </Divider>
                            <DonutChart data={replicationstatData} />
                        </Col>
                        <Col span={16}>
                            <Divider className="text-white">
                                REPLICATION THROUGHPUT
                            </Divider>
                            <DataCard datahead="133.51 MB/s" datatitle="Replication bandwidth to all configured clouds, averaged over the last 15 minutes" />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Divider className="text-white">
                                CAPACITY
                            </Divider>
                            <DonutChart data={capacityData} />
                        </Col>
                        <Col span={8}>
                            <Divider className="text-white" >
                                OBJECTS
                            </Divider>
                            <DonutChart data={objectsData} />
                        </Col>
                        <Col span={8}>
                            <Divider className="text-white" >
                                MEMORY
                            </Divider>
                            <DonutChart data={memoryData} />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} className="d-flex justify-content-center h-50">
                            <Link to="/stats" className="d-flex align-items-center btn text-white m-5" style={{ background: '#B11A5F', borderColor: '#B11A5F', borderRadius: '3%', cursor: 'pointer' }}>View More Statistics</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </Content>
    )
}

export default ContentSection
