import React from 'react';
import { Row, Col } from 'antd';
import Skills from '../components/Skills';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Experience from '../components/Experience';

const Home = () => {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} style={{ paddingRight: 10 }}>
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
