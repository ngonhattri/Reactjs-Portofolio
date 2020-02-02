import React from 'react';
import { Progress, Typography } from 'antd';

const { Title, Text } = Typography;

const Skills = () => {
    return (
        <>
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
            </div>
        </>
    );
};
export default Skills;
