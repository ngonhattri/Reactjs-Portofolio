import React from 'react';
import { Tabs, Row, Col, Timeline } from 'antd';
import experiences from '../data/experience.json';
import educations from '../data/education.json';

const dataExperiences = experiences.reverse();
const dataEducations = educations.reverse();
const { TabPane } = Tabs;
const Experience = () => {
    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Experience" key="1">
                    <Timeline>
                        {dataExperiences.map(data => (
                            <Timeline.Item key={data.id}>
                                <Row>
                                    <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                        <b>{data.name}</b>
                                        <p>{data.position}</p>
                                        <p>{data.year}</p>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={20}
                                        lg={20}
                                        xl={20}
                                    >
                                        <img
                                            style={{ width: '75px' }}
                                            src={data.image}
                                            alt={data.name}
                                        />
                                    </Col>
                                </Row>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </TabPane>
                <TabPane tab="Education" key="2">
                    <Timeline>
                        {dataEducations.map(data => (
                            <Timeline.Item key={data.id}>
                                <b>{data.name}</b>
                                <p>{data.position}</p>
                                <p>{data.year}</p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </TabPane>
            </Tabs>
        </>
    );
};
export default Experience;
