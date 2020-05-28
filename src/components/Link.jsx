import React from 'react';
import { Card, Button } from 'antd';
import './index.scss';
import networks from '../data/networks.json';

const Link = () => {
    return (
        <>
            <Card title="Social Networks">
                {networks.map((network) => (
                    <p key={network.id}>
                        <b>{network.name}</b>
                        <Button
                            style={{
                                float: 'right',
                                background: network.color,
                                border: 'none',
                            }}
                            type="primary"
                            icon={network.icon}
                            href={network.link}
                            target="_blank"
                        >
                            Link
                        </Button>
                    </p>
                ))}
            </Card>
        </>
    );
};
export default Link;
