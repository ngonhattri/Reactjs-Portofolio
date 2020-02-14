import React, { useState } from 'react';
import { Drawer, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button
                type="primary"
                onClick={showDrawer}
                style={{
                    background: '#001529',
                    border: 'none',
                    position: 'absolute',
                    right: 0,
                    width: 50,
                }}
            >
                <Icon type="menu" />
            </Button>
            <Drawer
                title="Menu"
                placement="top"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>
                    <Link to="/">Profile</Link>
                </p>
                <p>
                    <Link to="/blogs">Blogs</Link>
                </p>
                <p>
                    <Link to="/travels">Travels</Link>
                </p>
            </Drawer>
        </>
    );
};
export default Menu;
