import React from 'react';
import { Row, Col } from 'antd';
import Skills from '../components/Skills';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Experience from '../components/Experience';
import Link from '../components/Link';

const Home = () => {
    return (
        <>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} style={{ paddingRight: 10 }}>
                    <div>
                        <Profile />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Link />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16} xl={20}>
                    <Row gutter={16}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Experience />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Skills />
                        </Col>
                    </Row>
                    <div>
                        <Project />
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default Home;
