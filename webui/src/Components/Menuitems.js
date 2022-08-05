// import Pageheader from '../Components/Pageheader'
// import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Typography, Menu } from 'antd';

const { Text } = Typography;

const Menuitems = ({ items_head, items }) => {

    // const navigate = useNavigate();

    const onClick = (e) => {
        console.log(e.key);

        // if (e.key === '1') {
        //     navigate("/", { replace: true });
        // } else if (e.key === '2') {
        //     navigate("/user", { replace: true });
        // } else if (e.key === '3') {
        //     navigate("/monitor/locations", { replace: true });
        // } else if (e.key === '4') {
        //     navigate("/stats", { replace: true });
        // } else if (e.key === '5') {
        //     navigate("/accounts", { replace: true });
        // } else if (e.key === '6') {
        //     navigate("/locations", { replace: true });
        // } else if (e.key === '7') {
        //     navigate("/endpoints", { replace: true });
        // } else if (e.key === '8') {
        //     navigate("/replication", { replace: true });
        // } else if (e.key === '9') {
        //     navigate("/lifecycle", { replace: true });
        // } else if (e.key === '10') {
        //     navigate("/settings", { replace: true });
        // } else {
        //     console.log("no url matched.................");
        // }

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
