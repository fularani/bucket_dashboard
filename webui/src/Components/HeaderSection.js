import { HiOutlineChatAlt2 } from 'react-icons/hi';
import Pageheader from "../Components/Pageheader";
import { Layout, Affix, Button, Avatar, Typography } from 'antd';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

// import { Layout } from 'antd';
// import React from 'react';
// const { Header } = Layout;

const HeaderSection = () => {

    const location = useLocation();
    console.log(location.state);
    // console.log(location.state.pagehead, location.state.pagetitle);

    const [top, setTop] = useState(10);

    return (
        <Header className="site-layout-background" style={{
            padding: 0, color: '#ffffff', backgroundColor: '#081F2C', height: '15vh !important',
        }}>
            <div className="d-flex justify-content-between">
                <div>
                    <Pageheader pagehead={location.state ? location.state.pagehead : 'ZENKO ORBIT'} pagetitle={location.state ? location.state.pagetitle : 'Dashboard'} />
                </div>
                <div>
                    <Affix offsetTop={top} className="d-flex align-items-start">
                        <div>
                            <Button size="small" type="text" className="text-white w-auto h-auto" onClick={() => setTop(top + 10)} >
                                <Avatar
                                    size="small" style={{
                                        color: '#081F2C',
                                        backgroundColor: '#ffffff',
                                    }}
                                >U</Avatar>
                                <Text className="p-2 text-white">Registered User Name</Text>
                            </Button>
                            <span className="text-white">|</span>
                            <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                                <HiOutlineChatAlt2 size={20} className="m-1" />
                                <Text className="text-white">Get Help on Zenko Forum</Text>
                            </Button>
                        </div>
                    </Affix>
                </div>
            </div>
        </Header>
    )
}

export default HeaderSection
