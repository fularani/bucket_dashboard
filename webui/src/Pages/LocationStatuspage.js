import { Row, Col, Card, Divider } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import React from 'react';
import { Bar } from '@ant-design/plots';

const LocationStatuspage = () => {
    const data = [
        {
            type: 'Current Data',
            value: 1,
            key: '',
        },
        {
            type: 'Archived Data',
            value: 0.5,
            key: '',
        },
    ];
    const config = {
        data: data,
        isStack: true,
        xField: 'value',
        yField: 'key',
        seriesField: 'type',
        height: 25,
        xAxis: false, // hide xAxis
        yAxis: false,
        colorField: 'type',
        color: ({ type }) => {
            if (type === 'Current Data') {
                return '#586B8E';
            }
            // return '#41B3A8';
            return '#BA1B61';
        },
        legend: false,
        tooltip: {
            showTitle: false,
        },
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
            <Row style={{ padding: '8px 0', }}>
                <Col span={24}>
                    <Card style={{ width: 1100, backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                        <div>
                            <Row justify="space-around">
                                <Col span={8} className="fs-5">local-file</Col>
                                <Col span={8} className="d-flex justify-content-center align-items-center fs-6 text-white-50">Zenko Local Filesystem</Col>
                                <Col span={8} className="d-flex justify-content-end align-items-center text-muted"><span style={{ paddingRight: '2px' }}>Status:OK</span><AiOutlineCheckCircle /></Col>
                            </Row>
                            <Divider style={{ backgroundColor: '#253746' }} />
                            <Row justify="start">
                                <Col span={24}>
                                    <Row className="text-muted">Location Info:</Row>
                                    <Row className="text-muted">Storage Usage:1.5 GB</Row>
                                    <Row><Bar {...config} /></Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row style={{ padding: '8px 0', }}>
                <Col span={24}>
                    <Card style={{ width: 1100, backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                        <div>
                            <Row justify="space-around">
                                <Col span={8} className="fs-5">aws-1</Col>
                                <Col span={8} className="d-flex justify-content-center align-items-center fs-6 text-white-50">Amazon S3</Col>
                                <Col span={8} className="d-flex justify-content-end align-items-center text-muted"><span style={{ paddingRight: '2px' }}>Status:OK</span><AiOutlineCheckCircle /></Col>
                            </Row>
                            <Divider style={{ backgroundColor: '#253746' }} />
                            <Row justify="space-around">
                                <Col span={8}>
                                    <Row className="text-muted">Location Info:</Row>
                                    <Row className="text-muted">Storage Usage:1.5 GB</Row>
                                    <Row><Bar {...config} /></Row>
                                </Col>
                                <Col span={16} style={{ paddingLeft: "11%" }}>
                                    <Row className="text-muted">Replication Statistics:</Row>
                                    <Row className="d-flex justify-content-start align-items-center text-muted"><BsFillPlayFill /><span style={{ paddingLeft: '2px' }}>Status: Paused</span></Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row style={{ padding: '8px 0', }}>
                <Col span={24}>
                    <Card style={{ width: 1100, backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                        <div>
                            <Row justify="space-around">
                                <Col span={8} className="fs-5">azure-1</Col>
                                <Col span={8} className="d-flex justify-content-center align-items-center fs-6 text-white-50">Microsoft Azure Blob Storage</Col>
                                <Col span={8} className="d-flex justify-content-end align-items-center text-muted"><span style={{ paddingRight: '2px' }}>Status:OK</span><AiOutlineCheckCircle /></Col>
                            </Row>
                            <Divider style={{ backgroundColor: '#253746' }} />
                            <Row justify="space-around">
                                <Col span={8}>
                                    <Row className="text-muted">Location Info:</Row>
                                    <Row className="text-muted">Storage Usage:1.5 GB</Row>
                                    <Row><Bar {...config} /></Row>
                                </Col>
                                <Col span={16} style={{ paddingLeft: "11%" }}>
                                    <Row className="text-muted">Replication Statistics:</Row>
                                    <Row className="d-flex justify-content-start align-items-center text-muted"><BsFillPlayFill /><span style={{ paddingLeft: '2px' }}>Status: Paused</span></Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row style={{ padding: '8px 0', }}>
                <Col span={24}>
                    <Card style={{ width: 1100, backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                        <div>
                            <Row justify="space-around">
                                <Col span={8} className="fs-5">us-east-1</Col>
                                <Col span={8} className="d-flex justify-content-center align-items-center fs-6 text-white-50">Amazon S3</Col>
                                <Col span={8} className="d-flex justify-content-end align-items-center text-muted"><span style={{ paddingRight: '2px' }}>Status:OK</span><AiOutlineCheckCircle /></Col>
                            </Row>
                            <Divider style={{ backgroundColor: '#253746' }} />
                            <Row justify="space-around">
                                <Col span={8}>
                                    <Row className="text-muted">Location Info:</Row>
                                    <Row className="text-muted">Storage Usage:1.5 GB</Row>
                                    <Row><Bar {...config} /></Row>
                                </Col>
                                <Col span={16} style={{ paddingLeft: "11%" }}>
                                    <Row className="text-muted">Replication Statistics:</Row>
                                    <Row className="d-flex justify-content-start align-items-center text-muted"><BsPauseFill /><span style={{ paddingLeft: '2px' }}>Status: Paused</span></Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LocationStatuspage
