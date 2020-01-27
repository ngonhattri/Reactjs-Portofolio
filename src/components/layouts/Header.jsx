import React from 'react';
import { Layout, Icon } from 'antd';

const Header = ({ onClick, collapsed }) => {
    return (
        <>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={onClick}
                />
            </Layout.Header>
        </>
    );
};
export default Header;
