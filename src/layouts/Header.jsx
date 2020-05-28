import React from 'react';
import { Layout, Icon } from 'antd';

const Header = ({ onClick, collapsed, width }) => {
    return (
        <>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                {width > 470 ? (
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={onClick}
                    />
                ) : null}
            </Layout.Header>
        </>
    );
};
export default Header;
