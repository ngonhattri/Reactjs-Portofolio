import React from 'react';
import {
    Row,
    Col,
    Layout,
    Card,
    Progress,
    Typography,
    Tabs,
    Timeline,
    List,
} from 'antd';

const { Content } = Layout;
const { Meta } = Card;
const { TabPane } = Tabs;
const { Title, Text } = Typography;
const listData = [
    {
        title: 'Plansmart',
        description: 'Back-end Developer',
        content:
            'Scrum methodology, clear and optimize code, Flow analytics, GIT Flow, Beginning AWS Lambda, Build core 40%',
        image:
            'https://res.cloudinary.com/kori/image/upload/v1580148600/projects/plantsmart.png',
    },
    {
        title: 'Thế Giới Thợ',
        description: 'Back-end Developer',
        content: 'Maintain and do new feature, Firebase push notification',
        image:
            'https://res.cloudinary.com/kori/image/upload/v1580148601/projects/thegioitho.png',
    },
];
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
                            <Card
                                cover={
                                    <img
                                        alt="Quân Nguyễn"
                                        src="https://res.cloudinary.com/kori/image/upload/v1547055160/me.jpg"
                                    />
                                }
                            >
                                <Meta title="Nguyễn Minh Quân" />
                                <Meta description="Node.js Developer" />
                            </Card>
                        </div>

                        <div>
                            <Title level={2} style={{ marginTop: 10 }}>
                                Skills
                            </Title>
                            <div>
                                <Title level={4}>Programming Language</Title>
                                <Text>JavaScript</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={75}
                                    status="active"
                                />
                                <Text>TypeScript</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={55}
                                    status="active"
                                />
                                <Text>PHP</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={50}
                                    status="active"
                                />
                                <Text>HTML/CSS</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={30}
                                    status="active"
                                />
                            </div>
                            <div>
                                <Title level={4}>Framework & Library</Title>
                                <Text>Nest.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={40}
                                    status="active"
                                />
                                <Text>Laravel</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={76}
                                    status="active"
                                />
                                <Text>Express.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={50}
                                    status="active"
                                />
                                <Text>React.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={43}
                                    status="active"
                                />
                                <Text>Jest.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={20}
                                    status="active"
                                />
                                <Text>Mocha.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={30}
                                    status="active"
                                />
                                <Text>Chai.js</Text>
                                <Progress
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={5}
                                    status="active"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} sm={8} md={12} lg={16} xl={20}>
                        <div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Education" key="1">
                                    <Timeline>
                                        <Timeline.Item>
                                            <b>
                                                Ho Chi Minh University of
                                                Technology
                                            </b>
                                            <p>
                                                Faculty of Information
                                                Technology
                                            </p>
                                            <p>2016 – 2020</p>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <b>KhoaPham Training Center</b>
                                            <p>
                                                Course: MEAN Stack & PHP/Laravel
                                            </p>
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
                        </div>
                        <div>
                            <Title level={2} style={{ marginTop: 10 }}>
                                Projects
                            </Title>
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    pageSize: 3,
                                }}
                                dataSource={listData}
                                renderItem={item => (
                                    <List.Item
                                        key={item.title}
                                        extra={
                                            <img
                                                width={125}
                                                alt="logo"
                                                src={item.image}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            title={item.title}
                                            description={item.description}
                                        />
                                        {item.content}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    );
};
export default Home;
