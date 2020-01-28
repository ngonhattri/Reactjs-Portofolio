import React from 'react';
import { Row, Col, Layout } from 'antd';

import Skills from './Skills';
import Profile from './Profile';
import Project from './Project';
import Experience from './Experience';
const { Content } = Layout;

const Home = () => {
    return (
        <>
            <Content className="home">
                <Row>
                    <Col
                        xs={20}
                        sm={16}
                        md={12}
                        lg={8}
                        xl={4}
                        style={{ paddingRight: 10 }}
                    >
                        <div>
                            <Profile />
                        </div>

                        <div>
                            <Skills />
                        </div>
                    </Col>
                    <Col xs={4} sm={8} md={12} lg={16} xl={20}>
                        <div>
                            <Experience />
                        </div>
                        <div>
                            <Project />
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    );
};
export default Home;
