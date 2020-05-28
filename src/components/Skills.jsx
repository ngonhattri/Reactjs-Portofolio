import React from 'react';
import { Tabs, Table } from 'antd';
import skills from '../data/skills.json';

const { TabPane } = Tabs;
const columnsBackend = [
    {
        title: 'Skill',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <b>{text}</b>,
        width: 150,
    },
    {
        title: 'Project used',
        dataIndex: 'project',
        key: 'project',
        width: 150,
    },
];

const Skills = () => {
    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Programming Language" key="1">
                    <Table
                        rowKey="id"
                        pagination={{
                            pageSize: 4,
                        }}
                        columns={columnsBackend}
                        dataSource={skills.programming.sort((a, b) => (a.project < b.project) ? 1 : -1)}
                    />
                </TabPane>
                <TabPane tab="Back-end" key="2">
                    <Table
                        rowKey="id"
                        pagination={{
                            pageSize: 4,
                        }}
                        columns={columnsBackend}
                        dataSource={skills.backend.sort((a, b) => (a.project < b.project) ? 1 : -1)}
                    />
                </TabPane>
                <TabPane tab="Front-end" key="3">
                    <Table
                        rowKey="id"
                        pagination={{
                            pageSize: 4,
                        }}
                        columns={columnsBackend}
                        dataSource={skills.frontend.sort((a, b) => (a.project < b.project) ? 1 : -1)}
                    />
                </TabPane>
                <TabPane tab="Devops" key="4">
                    <Table
                        rowKey="id"
                        pagination={{
                            pageSize: 4,
                        }}
                        columns={columnsBackend}
                        dataSource={skills.devops.sort((a, b) => (a.project < b.project) ? 1 : -1)}
                    />
                </TabPane>
                <TabPane tab="Database" key="5">
                    <Table
                        rowKey="id"
                        pagination={{
                            pageSize: 4,
                        }}
                        columns={columnsBackend}
                        dataSource={skills.database}
                    />
                </TabPane>
            </Tabs>
        </>
    );
};
export default Skills;
