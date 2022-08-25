// import Pageheader from '../Components/Pageheader'
// import HeaderSection from "./HeaderSection";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Typography, Menu } from 'antd';

const { Text } = Typography;

const Menuitems = ({ items_head, items }) => {
    const navigate = useNavigate();

    const onClick = (e) => {
        // console.log(e.key);
        // e.preventDefault();

        if (e.key === 'Register') {
            navigate("/", {
                state: {
                    pagehead: "GETTING STARTED",
                    pagetitle: "Setting Up Zenko Orbit",
                }, replace: true
            });
        } else if (e.key === 'Dashboard') {
            navigate("/user", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Location Status') {
            navigate("/monitor/locations", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Statistics') {
            navigate("/stats", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Storage Accounts') {
            navigate("/accounts", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Cloud Locations') {
            navigate("/locations", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Storage Endpoints') {
            navigate("/endpoints", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Replication') {
            navigate("/replication", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Bucket Lifecycle') {
            navigate("/lifecycle", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else if (e.key === 'Settings') {
            navigate("/settings", {
                state: {
                    pagehead: "ZENKO ORBIT",
                    pagetitle: e.key,
                }, replace: true
            });
        } else {
            console.log("no url matched.................");
        }

        // console.log('click ', e);
        // <Pageheader pagehead="ZENKO ORBIT" pagetitle="Dashboard" />
    };

    return (
        <div>
            <Text className="heading">{items_head}</Text>
            <Menu
                theme='dark'
                mode="inline"
                onClick={onClick}
                defaultSelectedKeys={['2']}
                // defaultOpenKeys={rootSubmenuKeys}                
                // style={{ color: '#FFFFFF', backgroundColor: '#253746', border: '0%', margin: '0%' }}
                items={items}
                style={{ backgroundColor: '#253746' }}
            />
        </div>
    )
}

export default Menuitems
