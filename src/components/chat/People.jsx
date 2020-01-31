import React from 'react';
import { List, Avatar } from 'antd';

const People = () => {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={
                                <a href="https://ant.design">{item.title}</a>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    );
};
export default People;
