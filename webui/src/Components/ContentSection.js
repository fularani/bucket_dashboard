import { Layout } from 'antd';
import React from 'react';
const { Content } = Layout;

const ContentSection = () => {
    return (
        <Content style={{ padding: '24px 16px 0', overflow: 'initial', backgroundColor: '#081F2C' }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: 'center', color: '#ffffff', backgroundColor: '#081F2C' }}
            >
                Content
              </div>
        </Content>
    )
}

export default ContentSection
