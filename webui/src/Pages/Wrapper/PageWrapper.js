import { Layout } from 'antd';
import React from 'react';
import Sidebar from "../../Components/Sidebar";
import HeaderSection from "../../Components/HeaderSection";
import FooterSection from "../../Components/FooterSection";

const { Content } = Layout;

const PageWrapper = (PassedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <div className="App" >
                    <header className="App-header">
                        <Layout hasSider>
                            <Sidebar />
                            <Layout className="site-layout"
                                style={{ marginLeft: 200, }}>
                                <HeaderSection />
                                <Content style={{ padding: '24px 16px 0', overflow: 'initial', backgroundColor: '#081F2C' }}>
                                    <div
                                        className="site-layout-background"
                                        style={{ padding: 12, /*textAlign: 'center',*/ color: '#ffffff', backgroundColor: '#081F2C' }}
                                    >
                                        <PassedComponent {...this.props} />
                                    </div>
                                </Content>
                                <FooterSection />
                            </Layout>
                        </Layout>
                    </header>
                </div>
            )
        }
    }
}

export default PageWrapper
