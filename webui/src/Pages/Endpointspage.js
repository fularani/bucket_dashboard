import { Row, Col, Divider, Typography, Table, Space, Button, Select } from 'antd';
import { BsInfoCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { IoMdGlobe, IoMdArrowDropdown } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import React from 'react';
const { Link, Text } = Typography;
const { Option } = Select;

const tableFooter = () => {
    return (<Space size="middle" className="d-flex justify-content-end">
        <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#30343E' }} disabled><IoMdGlobe /><span className="p-2">s3.example.com</span></Button>
        <Select
            defaultValue="us-east-1"
            suffixIcon={<IoMdArrowDropdown style={{ color: '#fff', }} />}
            style={{
                width: 120,
            }}
            disabled
        >
            <Option value="us-east-1">us-east-1</Option>
        </Select>
        <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><BsPlusCircleFill /><span className="p-2">Add</span></Button>
    </Space>);
};

const Endpointspage = () => {

    const dataSource = [
        {
            key: '1',
            hostname: 'storage.zenko-na.acmecorp.com us-east-1',
        },
        {
            key: '2',
            hostname: 'storage.zenko-eu.acmecorp.com local-file',
        },
    ]

    const columns = [
        {
            title: 'Hostname',
            dataIndex: 'hostname',
            key: 'hostname',
            render: (text) => <div>
                <div>
                    <Text className="text-white-50">{text.split(" ")[0]}</Text>
                </div>
                <div>
                    <Text className="text-muted">{text.split(" ")[1]}</Text>
                </div>
            </div>
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size="middle" className="d-flex justify-content-end">
                    <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><AiFillMinusCircle /><span className="p-1">Delete</span>
                    </Button>
                </Space>
            ),
        },
    ]

    return (
        <div className="text-white">
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        ENDPOINTS
                    </Divider>
                </Col>
            </Row>
            <Text className="text-muted">Endpoints are hostnames that your Zenko instance will recognize<Link href="#"><BsInfoCircleFill /></Link></Text>
            <Row style={{ marginTop: '1%' }}>
                <Col span={24} style={{ border: '1px solid #253746', borderRadius: '2px' }}>
                    <Table pagination={false} size="middle" dataSource={dataSource} columns={columns} footer={tableFooter} />
                </Col>
            </Row>
        </div>
    )
}

export default Endpointspage
