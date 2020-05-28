import React from 'react';
import AOS from 'aos';
import { Layout } from 'antd';
const { Content } = Layout;
AOS.init({
    duration: 1000,
});

const GeneralLayout = props => {
    return (
        <>
            <Content className="content" data-aos="fade-left">
                {props.children}
            </Content>
        </>
    );
};

export default GeneralLayout;
