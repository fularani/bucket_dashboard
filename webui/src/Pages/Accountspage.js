import { Row, Col, Divider, Typography, Table, Space, Button } from 'antd';
import { BsInfoCircleFill } from 'react-icons/bs';
import { TbReplace } from 'react-icons/tb';
import { ImKey } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa";
import React from 'react';
const { Link, Text } = Typography;

const tableFooter = () => {
    return (<Space size="middle" className="d-flex justify-content-end">
        <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#30343E' }} disabled><FaUserPlus /><span className="p-2">Account Name</span></Button>
        <Button type="text" className="d-flex align-items-center text-white" style={{ background: '#B11A5F' }}><ImKey /><span className="p-2">Generate</span></Button>
    </Space>);
};

const Accountspage = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Alice',
            accesskey: 'HOK30BK72Q55ZC1HAWYI',
        },
        {
            key: '2',
            name: 'Bob',
            accesskey: '0234FQ59KSBULC25B0SP',
        },
        {
            key: '3',
            name: 'Tyson',
            accesskey: 'ARCABO2BBS2F6SJ1GWT8',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Access Key',
            dataIndex: 'accesskey',
            key: 'accesskey',
            render: (text) => <Text className="text-muted">{text}</Text>,
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size="middle" className="d-flex justify-content-end">
                    <Button type="text" className="d-flex align-items-center text-white-50" style={{ background: '#1B2F3D' }}><TbReplace /><span className="p-1">Replace</span></Button>
                    <Button type="text" className="text-white-50" style={{ background: '#1B2F3D' }}>Delete</Button>
                </Space>
            ),
        }
    ];

    return (
        <div className="text-white">
            <Row gutter={24}>
                <Col span={24}>
                    <Divider className="text-white">
                        STORAGE ACCOUNTS
                    </Divider>
                </Col>
            </Row>
            <Text className="text-muted">Storage accounts are tenants of your Zenko instance.<Link href="#"><BsInfoCircleFill /></Link></Text>
            <Row style={{ marginTop: '1%' }}>
                <Col span={24} style={{ border: '1px solid #253746', borderRadius: '2px' }}>
                    <Table pagination={false} size="middle" dataSource={dataSource} columns={columns} footer={tableFooter} />
                </Col>
            </Row>
        </div>
    )
}

export default Accountspage
