import { Row, Col, Card, Space, Button, Switch, Divider, Badge } from 'antd';
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import React from 'react';

const Replicationpage = () => {

    const handleAdd = () => {
        //code to add new
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-white w-75">
                <div className="w-100">
                    <Row className="px-5 py-1 w-100">
                        <Col span={12} className="d-flex justify-content-start fs-5">Image Assets from AWS to Azure</Col>
                        <Col span={12} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                            <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                            <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                        </Space>
                        </Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col className="w-100">
                            <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                    <Row>
                                        <Col span={12} className="d-flex justify-content-start text-white-50">Enabled for objects with prefix "assets/"</Col>
                                        <Col span={12} className="d-flex justify-content-end">
                                            <Space size="middle">
                                                <Switch defaultChecked onChange={onChange} />
                                            </Space>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col span={12} className="d-flex flex-column align-items-end w-50">
                            <Row className="ms-4 me-1 px-2 py-1 w-100">
                                <Col span={24} className="d-flex justify-content-start fs-6 w-full">Source Bucket</Col>
                            </Row>
                            <Row className="ms-4 me-1 px-2 w-100">
                                <Col className="w-100">
                                    <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                        <Card.Grid hoverable={false} className="w-100 p-2" style={{ borderBottom: '0.5px solid #253746', }}>
                                            <Row>
                                                <Col span={12} className="d-flex justify-content-start text-white-50">src1</Col>
                                                <Col span={12} className="d-flex justify-content-end text-muted">/</Col>
                                            </Row>
                                        </Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12} className="w-50">
                            <Row className="ms-1 me-4 px-2 py-1 w-100">
                                <Col span={24} className="d-flex justify-content-start fs-6">Destination Location</Col>
                            </Row>
                            <Row className="ms-1 me-4 px-2 w-100">
                                <Col className="w-100">
                                    <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                        <Card.Grid hoverable={false} className="w-100 p-2" style={{ borderBottom: '0.5px solid #253746', }}>
                                            <Row>
                                                <Col span={12} className="d-flex justify-content-start align-items-center text-white-50">azure-1<Badge color={'#B11A5F'} text={'Active'} className="p-1" /></Col>
                                                <Col span={12} className="d-flex justify-content-end text-muted">Microsoft Azure Blob Storage</Col>
                                            </Row>
                                        </Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center my-4 px-5 py-1 w-100">
                        <Col span={23}><Divider style={{ backgroundColor: '#253746' }} /></Col>
                    </Row>
                </div>

                <div className="w-100">
                    <Row className="px-5 py-1 w-100">
                        <Col span={12} className="d-flex justify-content-start fs-5">Logs Archive</Col>
                        <Col span={12} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                            <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                            <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                        </Space></Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col className="w-100">
                            <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                    <Row>
                                        <Col span={12} className="d-flex justify-content-start text-white-50">Enabled for objects with prefix "logs/"</Col>
                                        <Col span={12} className="d-flex justify-content-end">
                                            <Space size="middle">
                                                <Switch defaultChecked onChange={onChange} />
                                            </Space>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col span={12} className="d-flex flex-column align-items-end w-50">
                            <Row className="ms-4 me-1 px-2 py-1 w-100">
                                <Col span={24} className="d-flex justify-content-start fs-6 w-full">Source Bucket</Col>
                            </Row>
                            <Row className="ms-4 me-1 px-2 w-100">
                                <Col className="w-100">
                                    <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                        <Card.Grid hoverable={false} className="w-100 p-2" style={{ borderBottom: '0.5px solid #253746', }}>
                                            <Row>
                                                <Col span={12} className="d-flex justify-content-start text-white-50">logs</Col>
                                                <Col span={12} className="d-flex justify-content-end text-muted">/</Col>
                                            </Row>
                                        </Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12} className="w-50">
                            <Row className="ms-1 me-4 px-2 py-1 w-100">
                                <Col span={24} className="d-flex justify-content-start fs-6">Destination Location</Col>
                            </Row>
                            <Row className="ms-1 me-4 px-2 w-100">
                                <Col className="w-100">
                                    <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                        <Card.Grid hoverable={false} className="w-100 p-2" style={{ borderBottom: '0.5px solid #253746', }}>
                                            <Row>
                                                <Col span={12} className="d-flex justify-content-start align-items-center text-white-50">azure-1<Badge color={'#B11A5F'} text={'Active'} className="p-1" /></Col>
                                                <Col span={12} className="d-flex justify-content-end text-muted">Microsoft Azure Blob Storage</Col>
                                            </Row>
                                        </Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center my-4 px-5 py-1 w-100">
                        <Col span={23}><Divider style={{ backgroundColor: '#253746' }} /></Col>
                    </Row>
                </div>

                <div className="w-100">
                    <Row className="d-flex justify-content-start px-5 py-1 w-100">
                        <Col span={24}>
                            <Button
                                onClick={handleAdd}
                                className="d-flex align-items-center text-white"
                                type="text"
                                style={{
                                    background: '#B11A5F'
                                }}
                            >
                                <AiFillPlusSquare /><span className="p-2">New</span>
                            </Button>
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    )
}

export default Replicationpage
