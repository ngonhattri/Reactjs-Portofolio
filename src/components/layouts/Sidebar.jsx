import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

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
                <Menu
                    mode="inline"
                    style={{
                        borderRadius: 20,
                        width: '90%',
                        margin: 'auto',
                    }}
                >
                    <SubMenu
                        title={
                            <span>
                                <Icon type="home" />
                                <span>Home</span>
                            </span>
                        }
                    >
                        <Menu.Item>
                            <Icon type="idcard" />
                            Profile
                        </Menu.Item>
                        <Menu.Item>
                            <Icon type="read" />
                            Blog
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Project</span>
                            </span>
                        }
                    >
                        <Menu.Item>
                            <Icon type="message" />
                            Chat App
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    );
};
export default Sidebar;
