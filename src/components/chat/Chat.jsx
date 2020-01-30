import React from 'react';
import { Row, Col, Typography } from 'antd';
import Message from './Message';
import People from './People';
const { Title } = Typography;

const Chat = () => {
    return (
        <>
            <Title level={2}>Chat App</Title>
            <Row>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={4}
                    style={{ paddingRight: 10 }}
                >
                    <div>
                        <People />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16} xl={20}>
                    <div>
                        <Message />
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default Chat;
