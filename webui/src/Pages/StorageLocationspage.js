import { Row, Col, Card, Typography, Space, Button, Select, Badge } from 'antd';
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import React from 'react';

const { Text } = Typography;
const { Option } = Select;

const StorageLocationspage = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center text-white">
                <Row>
                    <Col span={24} className="d-flex justify-content-center">
                        <Card style={{ width: 1100, backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                            <Card.Grid hoverable={false} style={{ width: '100%', borderBottom: '0.5px solid #253746', }}>
                                <div>
                                    <Row>
                                        <Col span={12} className="fs-5">local-file</Col>
                                        <Col span={12}>
                                            <Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row style={{ padding: '2px 0', }}>
                                        <Col span={24} className="text-muted">Location Type:<Text className="text-white-50 p-2 fs-6">Zenko Local Filesystem</Text></Col>
                                    </Row>
                                </div>
                            </Card.Grid>
                            <Card.Grid hoverable={false} style={{ width: '100%', borderBottom: '0.5px solid #253746', }}>
                                <div>
                                    <Row>
                                        <Col span={12} className="fs-5">aws-1<Badge color={'green'} text={'Active'} className="p-1" /></Col>
                                        <Col span={12}>
                                            <Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                                <Select
                                                    defaultValue="Replication"
                                                    suffixIcon={<IoMdArrowDropdown style={{ color: '#fff', }} />}
                                                    // showArrow={false}
                                                    style={{
                                                        width: 120,
                                                    }}
                                                    className="select"
                                                    disabled
                                                >
                                                    <Option value="Replication">Replication</Option>
                                                </Select>
                                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row style={{ padding: '2px 0', }}>
                                        <Col span={24} className="text-muted">Location Type:<Text className="text-white-50 p-2 fs-6">Amazon S3</Text></Col>
                                    </Row>
                                </div>
                            </Card.Grid>
                            <Card.Grid hoverable={false} style={{ width: '100%', borderBottom: '0.5px solid #253746', }}>
                                <div>
                                    <Row>
                                        <Col span={12} className="fs-5">azure-1<Badge color={'green'} text={'Active'} className="p-1" /></Col>
                                        <Col span={12}>
                                            <Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                                <Select
                                                    defaultValue="Replication"
                                                    suffixIcon={<IoMdArrowDropdown style={{ color: '#fff', }} />}
                                                    // showArrow={false}
                                                    style={{
                                                        width: 120,
                                                    }}
                                                    className="select"
                                                    disabled
                                                >
                                                    <Option value="Replication">Replication</Option>
                                                </Select>
                                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row style={{ padding: '2px 0', }}>
                                        <Col span={24} className="text-muted">Location Type:<Text className="text-white-50 p-2 fs-6">Microsoft Azure Blob Storage</Text></Col>
                                    </Row>
                                </div>
                            </Card.Grid>
                            <Card.Grid hoverable={false} style={{ width: '100%' }}>
                                <div>
                                    <Row>
                                        <Col span={12} className="fs-5">us-east-1<Badge color={'yellow'} text={'Paused'} className="p-1" /></Col>
                                        <Col span={12}>
                                            <Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                                <Select
                                                    defaultValue="Replication"
                                                    suffixIcon={<IoMdArrowDropdown style={{ color: '#fff', }} />}
                                                    // showArrow={false}
                                                    style={{
                                                        width: 120,
                                                    }}
                                                    className="select"
                                                    disabled
                                                >
                                                    <Option value="Replication">Replication</Option>
                                                </Select>
                                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row style={{ padding: '2px 0', }}>
                                        <Col span={24} className="text-muted">Location Type:<Text className="text-white-50 p-2 fs-6">Amazon S3</Text></Col>
                                        <Col span={24} className="text-muted fs-9">Replication to this location is paused. All changes queued for replication to this location will be processed on resume.</Col>
                                    </Row>
                                </div>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Row span={24} style={{ padding: '1% 0 1% 17%' }}>
                <Col className="d-flex justify-content-start w-full">
                    <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><AiFillPlusSquare /><span className="p-2">Add New</span></Button>
                </Col>
            </Row>
        </div>
    )
}

export default StorageLocationspage
