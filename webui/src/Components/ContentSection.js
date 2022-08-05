import { Layout } from 'antd';
import React from 'react';
const { Content } = Layout;

const ContentSection = () => {
    return (
        <Content style={{ padding: '16px 16px 0', overflow: 'initial', backgroundColor: '#081F2C' }}>
            <div
                className="site-layout-background"
                style={{ padding: 12, /*textAlign: 'center',*/ color: '#ffffff', backgroundColor: '#081F2C', minHeight: '1500px', }}
            >
                {/**  CONTENT SECTION FOR DASHBOARD......... */}

            </div>
        </Content>
    )
}

export default ContentSection
