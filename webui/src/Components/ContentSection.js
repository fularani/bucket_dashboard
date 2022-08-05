import StackedChart from "./StackedChart";
import DataCard from "./DataCard";
import DonutChart from "./DonutChart";
import { Layout, Col, Divider, Row, Button } from 'antd';
import React from 'react';
const { Content } = Layout;

const ContentSection = () => {

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
                            <StackedChart />
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
                            <Button size="large" style={{ backgroundColor: '#B11A5F' }}>View More Statistics</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Content>
    )
}

export default ContentSection
