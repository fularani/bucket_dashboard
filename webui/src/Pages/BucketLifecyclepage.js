import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Space, Button, Dropdown, Menu, Typography, Divider } from 'antd';
import { AiFillPlusSquare } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHourglassEnd } from "react-icons/fa";
import { MdDelete, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import React from 'react';
const { Text } = Typography;

const BucketLifecyclepage = () => {
    const navigate = useNavigate();

    const onClick = (e) => {
        // message.info(`Click on item ${key}`);

        if (e.key === 'Expiration') {
            navigate("/lifecycle/lifecycle-bucket"
                // ,{
                //     state: {
                //         pagehead: "GETTING STARTED",
                //         pagetitle: "Setting Up Zenko Orbit",
                //     }, replace: true
                // }
            );
        } else if (e.key === 'Transition') {
            navigate("/lifecycle/lifecycle-bucket"
                // ,{
                //     state: {
                //         pagehead: "ZENKO ORBIT",
                //         pagetitle: e.key,
                //     }, replace: true
                // }
            );
        } else {
            console.log("no url matched.................");
        }
    };

    const menu = (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: 'Expiration',
                    key: 'Expiration',
                },
                {
                    label: 'Transition',
                    key: 'Transition',
                },
            ]}
        />
    );

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-white w-75">
                <div className="w-100">
                    <Row className="px-5 py-1 w-100">
                        <Col span={12} className="d-flex justify-content-start fs-5">lifecycle-bucket</Col>
                        <Col span={12} className="d-flex justify-content-end"><Space size="middle" className="d-flex justify-content-end" style={{ gap: '12px' }}>
                            <Dropdown overlay={menu} icon={<IoMdArrowDropdown />} trigger={['click']} placement="bottomLeft">
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><AiFillPlusSquare /><span className="ps-2">Add new rule</span><IoMdArrowDropdown style={{ color: '#fff', }} /></Button>
                                    </Space>
                                </a>
                            </Dropdown>
                            <Link to="/lifecycle/lifecycle-bucket" className="d-flex align-items-center btn btn-sm text-white px-3" style={{ background: '#B11A5F', borderColor: '#B11A5F', borderRadius: '4%', cursor: 'pointer' }}><BsInfoCircleFill /><span className="ps-1">Show Details</span></Link>
                        </Space>
                        </Col>
                    </Row>
                    <Row className="px-5 pt-2 w-100">
                        <Col span={12} className="d-flex justify-content-start align-items-center text-white-50"><FaHourglassEnd /><MdDelete className="fs-5" /><span className="ps-2">Expiration</span></Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col className="w-100">
                            <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                    <Row className="py-1">
                                        <Col span={24} className="d-flex justify-content-start text-white fs-6"><Text className="text-white fs-6">Enabled</Text><Text className="text-muted ps-1"><small>for all objects</small></Text></Col>
                                    </Row>
                                    <Row className="py-1">
                                        <Col span={24} className="d-flex flex-column justify-content-start text-white fs-6">
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
                                            <Row className="py-1">
                                                <Col span={24}>
                                                    <Text className="text-muted ps-1">
                                                        <small>delete after 1 day</small>
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="px-5 pt-2 w-100">
                        <Col span={12} className="d-flex justify-content-start align-items-center text-white-50"><FaHourglassEnd /><TbArrowsRightLeft className="fs-5" /><span className="ps-2">Transition</span></Col>
                    </Row>
                    <Row className="my-1 px-5 py-1 w-100">
                        <Col className="w-100">
                            <Card style={{ backgroundColor: '#081F2C', border: "0.5px solid #253746", color: "#ffffff" }}>
                                <Card.Grid hoverable={false} className="w-100 p-3" style={{ borderBottom: '0.5px solid #253746', }}>
                                    <Row className="py-1">
                                        <Col span={24} className="d-flex justify-content-start text-white fs-6"><Text className="text-white fs-6">Enabled</Text><Text className="text-muted ps-1"><small>for all objects</small></Text></Col>
                                    </Row>
                                    <Row className="py-1">
                                        <Col span={24} className="d-flex flex-column justify-content-start text-white fs-6">
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
                                            <Row className="py-1">
                                                <Col span={24}>
                                                    <Text className="text-muted ps-1">
                                                        <small>transition after 1 day</small>
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                            <Divider className="my-5" style={{ backgroundColor: '#253746' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default BucketLifecyclepage
