import React from 'react';
import { Row, Col } from 'antd';
import Skills from './Skills';
import Profile from './Profile';
import Project from './Project';
import Experience from './Experience';

const Home = () => {
    return (
        <>
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
                        <Profile />
                    </div>

                    <div>
                        <Skills />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16} xl={20}>
                    <div>
                        <Experience />
                    </div>
                    <div>
                        <Project />
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default Home;
