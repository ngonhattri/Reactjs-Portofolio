import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
    const [value, setValue] = useState(true);

    useEffect(() => {
        setValue(collapsed);
    }, [collapsed]);

    return (
        <>
            <Sider trigger={null} collapsible collapsed={value}>
                <div className="logo">
                    {value ? (
                        <p className="logo__text">K0r1</p>
                    ) : (
                        <p className="logo__text">Quân Nguyễn</p>
                    )}
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>Portfolio</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
};
export default Sidebar;
