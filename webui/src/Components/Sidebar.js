import { Layout, Image, Typography } from 'antd';
import React from 'react';
import { FiTool } from 'react-icons/fi';
import { FaChartPie, FaKey, FaGlobe } from 'react-icons/fa';
import { AiFillDashboard, AiFillFolderOpen, AiFillSetting } from 'react-icons/ai';
import { BsFillFileCheckFill } from 'react-icons/bs';
import { RiFileCopyFill } from 'react-icons/ri';
import { BiCircle } from 'react-icons/bi';
import Menuitems from '../Components/Menuitems';

const { Sider } = Layout;
const { Text } = Typography;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const Sidebar = () => {

    const data_head = ['', <Text className="text">MONITOR</Text>, <Text className="text">CONFIGURE</Text>, <Text className="text">WORKFLOW</Text>, <Text className="text">ACCOUNT</Text>];

    const data = [
        [getItem('Register', 'Register', <FiTool />)],
        [getItem('Dashboard', 'Dashboard', <AiFillDashboard />),
        getItem('Location Status', 'Location Status', <BsFillFileCheckFill />),
        getItem('Statistics', 'Statistics', <FaChartPie />)],
        [getItem('Storage Accounts', 'Storage Accounts', <FaKey />),
        getItem('Storage Locations', 'Cloud Locations', <FaGlobe />),
        getItem('Endpoints', 'Storage Endpoints', <AiFillFolderOpen />)],
        [getItem('Replication', 'Replication', <RiFileCopyFill />),
        getItem('Bucket Lifecycle', 'Bucket Lifecycle', <BiCircle />)],
        [getItem('Settings', 'Settings', <AiFillSetting />)],
    ];

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log("onBreakpoint", broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log("onCollapse", collapsed, type);
            }}
            style={{
                // overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                backgroundColor: '#253746',
            }}>
            <div className="d-flex justify-content-center">
                <Image
                    rootClassName="w-25 pt-3 pb-3 h-25" alt="logo" preview={false} style={{
                        filter: "brightness(11.25)"
                    }}
                    src="https://d37uysqk07vju5.cloudfront.net/3388c618c452246a8f63fbdd93bd7a22580b27f6/assets/img/logo-icon.png"
                />
            </div>
            {data.map((d, i) => (
                <div key={i}>
                    <Menuitems items_head={data_head[i]} items={d} />
                </div>
            ))}
        </Sider>
    )
}

export default Sidebar
