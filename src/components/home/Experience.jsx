import React from 'react';
import { Tabs, Timeline } from 'antd';

const { TabPane } = Tabs;
const Experience = () => {
    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Education" key="1">
                    <Timeline>
                        <Timeline.Item>
                            <b>Ho Chi Minh University of Technology</b>
                            <p>Faculty of Information Technology</p>
                            <p>2016 – 2020</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <b>KhoaPham Training Center</b>
                            <p>Course: MEAN Stack & PHP/Laravel</p>
                            <p>2017 - 2018</p>
                        </Timeline.Item>
                    </Timeline>
                </TabPane>
                <TabPane tab="Experience" key="2">
                    <Timeline>
                        <Timeline.Item>
                            <b>Vitop Media</b>
                            <p>Junior NodeJS Developer</p>
                            <p>9/2019 – 2/2020</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <b>GMV Tech</b>
                            <p>Fresher Laravel Developer</p>
                            <p>7/2018 – 10/2018</p>
                        </Timeline.Item>
                    </Timeline>
                </TabPane>
            </Tabs>
        </>
    );
};
export default Experience;
