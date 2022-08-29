import { Row, Col, Divider, Table, Typography, Space, Switch, Button, notification } from 'antd';
import React from 'react';
import { BsInfoLg } from 'react-icons/bs';
const { Text } = Typography;

const openNotification = (placement) => {
    const key = `${Date.now()}`;
    const btn = (
        <Button type="text" size="middle" style={{ background: '#F0F0F0' }} onClick={() => notification.close(key)}>
            Close
        </Button>
    );
    notification.info({
        // message: `Notification ${placement}`,
        description: (
            <div>
                You can send us an email at: <a href="mailto:someone@example.com" className="fw-bold" style={{ color: '#B11A5F' }}>team.web@scality.com</a> to retrieve your Zenko Orbit data or delete your account. Please mention the email address associated with your account as well as the associated Zenko instance ID in your request.
            </div>
        ),
        placement,
        duration: 0,
        btn,
        key,
        className: 'notification-custom-class',
        closeIcon: (<div></div>),
        icon: (<div></div>),
    });
};


const tableFooter = () => {
    return (
        <div className="d-flex justify-content-between">
            <Text className="text-white-50">I would like to retrieve my Zenko Orbit data or delete my account</Text>
            <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#30343E' }} onClick={() => openNotification('top')}><BsInfoLg style={{ fontSize: '18px' }} /><span className="p-1">Zenko Orbit Data</span></Button>
        </div>
    )
}

const Settingpage = () => {

    const columns = [
        {
            title: 'Information',
            dataIndex: 'information',
            key: 'information',
            render: (text) => <Text className="text-white-50">{text}</Text>,
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (text) => <Text className="d-flex justify-content-end text-muted">{text}</Text>,
        },
    ];

    const dataSource = [
        {
            key: '1',
            information: 'Instance Name',
            value: 'My demo instance',
        },
        {
            key: '2',
            information: 'Instance ID',
            value: '3d49e1f9-fa2f-40aa-b2d4-c7a8b04c6cde',
        },
        {
            key: '3',
            information: 'Zenko Version',
            value: 'Demo',
        },
        {
            key: '3',
            information: 'Configuration version',
            value: '22',
        },
        {
            key: '3',
            information: 'Configuration Last Modified',
            value: 'Fri Sep 29 2017 01:09:22 GMT+0530 (India Standard Time)',
        },
    ];

    const columns1 = [
        {
            title: 'Personal Data',
            dataIndex: 'data',
            key: 'data',
            render: (text) => <Text className="text-white-50">{text}</Text>,
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size="middle" className="d-flex justify-content-end">
                    <Switch defaultChecked onChange={onChange} />
                </Space>
            ),
        },
    ];

    const dataSource1 = [
        {
            key: '1',
            data: 'Send me periodic emails about Zenko feature updates and Scality news',
        }
    ];

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    return (
        <div className="text-white">
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        INFORMATION
                    </Divider>
                </Col>
            </Row>
            <Row style={{ marginTop: '1%' }}>
                <Col span={24} style={{ border: '1px solid #253746', borderRadius: '2px' }}>
                    <Table pagination={false} size="middle" dataSource={dataSource} columns={columns} />
                </Col>
            </Row>
            <Row style={{ marginTop: '1%' }}>
                <Col span={24} style={{ border: '1px solid #253746', borderRadius: '2px' }}>
                    <Table pagination={false} size="middle" dataSource={dataSource1} columns={columns1} footer={tableFooter} />
                </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: '1%' }}>
                <Col span={24}>
                    <Divider className="text-white">
                        INSTANCE
                    </Divider>
                </Col>
            </Row>
        </div>
    )
}

export default Settingpage
