import React from 'react';
import { Progress, Typography } from 'antd';
import skills from '../data/skills.json';

const { Title, Text } = Typography;

const Skills = () => {
    return (
        <>
            <Title level={2} style={{ marginTop: 10 }}>
                Skills
            </Title>
            <div>
                <Title level={4}>Programming Language</Title>
                {skills.language.map(skill => (
                    <div key={skill.id}>
                        <Text>{skill.name}</Text>
                        <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={skill.percent}
                            status="active"
                        />
                    </div>
                ))}
            </div>
            <div>
                <Title level={4}>Framework & Library</Title>
                {skills.framework.map(skill => (
                    <div key={skill.id}>
                        <Text>{skill.name}</Text>
                        <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={skill.percent}
                            status="active"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
export default Skills;
