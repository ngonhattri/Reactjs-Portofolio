import React from 'react';
import { Typography, List } from 'antd';
import listData from '../data/projects.json';

const { Title } = Typography;
const data = listData.reverse();

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
                dataSource={data}
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
