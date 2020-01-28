import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const Profile = () => {
    return (
        <>
            <Card
                cover={
                    <img
                        alt="Quân Nguyễn"
                        src="https://res.cloudinary.com/kori/image/upload/v1547055160/me.jpg"
                    />
                }
            >
                <Meta title="Nguyễn Minh Quân" />
                <Meta description="Node.js Developer" />
            </Card>
        </>
    );
};
export default Profile;
