import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
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
                <Menu
                    mode="inline"
                    style={{
                        borderRadius: 20,
                        width: '90%',
                        margin: 'auto',
                    }}
                >
                    <Menu.Item>
                        <Link to="/">
                            <Icon type="idcard" />
                            Profile
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/blogs">
                            <Icon type="read" />
                            Blogs
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
};
export default Sidebar;
