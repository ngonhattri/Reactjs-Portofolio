import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
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
                            <Link to="/">
                                <Icon type="idcard" />
                                Profile
                            </Link>
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
                            <Link to="/blogs">
                                <Icon type="read" />
                                Blogs
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/chat">
                                <Icon type="message" />
                                Chat App
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    );
};
export default Sidebar;
