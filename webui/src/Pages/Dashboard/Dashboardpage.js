import Sidebar from "../../Components/Sidebar";
import HeaderSection from "../../Components/HeaderSection";
import ContentSection from "../../Components/ContentSection";
import FooterSection from "../../Components/FooterSection";
import { Layout } from 'antd';
import React from 'react';

const Dashboardpage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Layout hasSider>
                    <Sidebar />
                    <Layout className="site-layout"
                        style={{ marginLeft: 200, }}>
                        <HeaderSection />
                        <ContentSection />
                        <FooterSection />
                    </Layout>
                </Layout>
            </header>
        </div>
    )
}

export default Dashboardpage
