import React from 'react';
import { Typography, List } from 'antd';

const { Title } = Typography;

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

const Project = () => {
    return (
        <>
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
                        extra={<img width={125} alt="logo" src={item.image} />}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </>
    );
};
export default Project;
