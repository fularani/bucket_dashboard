import { Card, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const DataCard = ({ datahead, datatitle }) => {
    return (
        <Card className="d-flex flex-row justify-content-center align-items-center w-full" bordered={false} style={{ backgroundColor: '#081F2C', height: '200px' }}>
            <Text className="d-flex flex-column align-items-center h1 text-white">{datahead}</Text>
            <Text className="d-flex flex-column align-items-center text-white-50" style={{ fontfamily: 'Roboto', fontSize: '12px', color: '#081f2c' }}>{datatitle}</Text>
        </Card>
    )
}

export default DataCard
