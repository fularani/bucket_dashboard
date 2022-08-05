import { PageHeader } from 'antd';
import React from 'react';

const Pageheader = ({ pagehead, pagetitle }) => {
    return (
        <PageHeader
            className="site-page-header"
            subTitle={pagehead}
            title={pagetitle}
        />
    )
}

export default Pageheader
