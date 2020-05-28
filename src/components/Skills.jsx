import React from 'react';
import { Typography, Row, Col } from 'antd';
import skills from '../data/skills.json';
import './index.scss';

const { Title, Text } = Typography;

const Skills = () => {
    return (
        <>
            <Title level={2} style={{ marginTop: 10 }}>
                Skills
            </Title>
            <Row>
                <Col className="mt-10" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Title level={4}>Programming Language</Title>
                    {skills.programming.map((skill) => (
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div key={skill.id}>
                                <Text>{skill.name}</Text>
                            </div>
                        </Col>
                    ))}
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="mt-10" xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title level={4}>Front-end</Title>
                    {skills.frontend.map((skill) => (
                        <div key={skill.id}>
                            <Text>{skill.name}</Text>
                        </div>
                    ))}
                </Col>
                <Col className="mt-10" xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title level={4}>Back-end</Title>
                    {skills.backend.map((skill) => (
                        <div key={skill.id}>
                            <Text>{skill.name}</Text>
                        </div>
                    ))}
                </Col>
                <Col className="mt-10" xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title level={4}>Database</Title>
                    {skills.database.map((skill) => (
                        <div key={skill.id}>
                            <Text>{skill.name}</Text>
                        </div>
                    ))}
                </Col>
                <Col className="mt-10" xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title level={4}>Devops</Title>
                    {skills.devops.map((skill) => (
                        <div key={skill.id}>
                            <Text>{skill.name}</Text>
                        </div>
                    ))}
                </Col>
            </Row>
        </>
    );
};
export default Skills;
