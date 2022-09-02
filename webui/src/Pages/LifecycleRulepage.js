import { Row, Col, Button, Space, Card, Switch, Typography, Divider } from 'antd';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react';
const { Text } = Typography;

const LifecycleRulepage = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-white w-75">
                <div className="w-100">
                    <Row className="px-5 w-100">
                        <Col span={24} className="d-flex justify-content-start">
                            <Link to={-1} className="d-flex align-items-center btn text-white" style={{ background: '#B11A5F', borderColor: '#B11A5F', borderRadius: '3%' }}><RiArrowLeftCircleFill /><span className="ps-1">Back to All Buckets</span></Link>
                        </Col>
                    </Row>
                    {/** Expiration section */}
                    <Row className="px-5 py-2 w-100">
                        <Col span={12} className="d-flex justify-content-start fs-4">Expiration</Col>
                        <Col span={12} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                            <Button
                                // onClick={}
                                className="d-flex align-items-center text-white"
                                type="text"
                                style={{
                                    background: '#B11A5F'
                                }}
                                disabled
                            >
                                <AiFillPlusSquare /><span className="p-2">Add New Expiration Rule</span>
                            </Button>
                        </Space>
                        </Col>
                    </Row>
                    <div className="px-5 py-2 w-100">
                        <Row className="px-5 py-2 w-100">
                            <Col span={24} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                            </Space>
                            </Col>
                        </Row>
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                    <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                        <Row>
                                            <Col span={12} className="d-flex justify-content-start text-white fs-6"><Text className="text-white fs-6">Enabled</Text><Text className="text-muted ps-1"><small>for all objects</small></Text></Col>
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
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                    <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                        <Row className="py-1">
                                            <Col span={24}>
                                                <Text className="text-white fs-6">Delete</Text>
                                            </Col>
                                        </Row>
                                        <Row className="py-1">
                                            <Col span={24} className="d-flex flex-column">
                                                <Row className="d-flex align-items-center">
                                                    <Col span={8} className="ps-3"><MdOutlineKeyboardArrowRight className="text-muted" />
                                                        <Text className="text-white fs-6 px-2">current</Text><Text className="text-muted ps-1"><small>version</small></Text>
                                                    </Col>
                                                    <Col span={16}>
                                                        <Text className="text-muted ps-1"><small>after</small></Text>
                                                        <Text className="text-white fs-6 px-2">1 day</Text>
                                                    </Col>
                                                </Row>
                                                <Row className="d-flex align-items-center">
                                                    <Col span={8} className="ps-3"><MdOutlineKeyboardArrowRight className="text-muted" />
                                                        <Text className="text-white fs-6 px-2">archived</Text><Text className="text-muted ps-1"><small>versions</small></Text>
                                                    </Col>
                                                    <Col span={16}>
                                                        <Text className="text-muted ps-1"><small>after</small></Text>
                                                        <Text className="text-white fs-6 px-2">1 day</Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Grid>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Text className="d-flex justify-content-center text-muted">
                                    <small>delete after 1 day</small>
                                </Text>
                            </Col>
                        </Row>
                        <Divider className="my-3" style={{ backgroundColor: '#253746' }} />
                    </div>

                    {/** Transition Section */}
                    <Row className="px-5 py-2 w-100">
                        <Col span={12} className="d-flex justify-content-start fs-4">Transition</Col>
                        <Col span={12} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                            <Button
                                // onClick={}
                                className="d-flex align-items-center text-white"
                                type="text"
                                style={{
                                    background: '#B11A5F'
                                }}
                                disabled
                            >
                                <AiFillPlusSquare /><span className="p-2">Add New Transition Rule</span>
                            </Button>
                        </Space>
                        </Col>
                    </Row>
                    <div className="px-5 py-2 w-100">
                        <Row className="px-5 py-2 w-100">
                            <Col span={24} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                                <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><FaEdit /><span className="p-2">Edit</span></Button>
                                <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusSquare /><span className="p-1">Delete</span></Button>
                            </Space>
                            </Col>
                        </Row>
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                    <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                        <Row>
                                            <Col span={12} className="d-flex justify-content-start text-white fs-6"><Text className="text-white fs-6">Enabled</Text><Text className="text-muted ps-1"><small>for all objects</small></Text></Col>
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
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                    <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                        <Row className="py-1">
                                            <Col span={24}>
                                                <Text className="text-white fs-6">Move</Text>
                                            </Col>
                                        </Row>
                                        <Row className="py-1">
                                            <Col span={24} className="d-flex flex-column">
                                                <Row className="d-flex align-items-center">
                                                    <Col span={8} className="ps-3"><MdOutlineKeyboardArrowRight className="text-muted" />
                                                        <Text className="text-white fs-6 px-2">current</Text><Text className="text-muted ps-1"><small>version</small></Text>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Text className="text-muted ps-1"><small>after</small></Text>
                                                        <Text className="text-white fs-6 px-2">1 day</Text>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Text className="text-muted ps-1"><small>to</small></Text>
                                                        <Text className="text-white fs-6 px-2">azure-1 / Microsoft Azure Blob Storage</Text>
                                                    </Col>
                                                </Row>
                                                <Row className="d-flex align-items-center">
                                                    <Col span={8} className="ps-3"><MdOutlineKeyboardArrowRight className="text-muted" />
                                                        <Text className="text-white fs-6 px-2">archived</Text><Text className="text-muted ps-1"><small>versions</small></Text>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Text className="text-muted ps-1"><small>after</small></Text>
                                                        <Text className="text-white fs-6 px-2">1 day</Text>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Text className="text-muted ps-1"><small>to</small></Text>
                                                        <Text className="text-white fs-6 px-2">azure-1 / Microsoft Azure Blob Storage</Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Grid>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-1 px-5 py-2 w-100">
                            <Col className="w-100">
                                <Text className="d-flex justify-content-center text-muted">
                                    <small>transition after 1 day</small>
                                </Text>
                            </Col>
                        </Row>
                        <Divider className="my-3" style={{ backgroundColor: '#253746' }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LifecycleRulepage
