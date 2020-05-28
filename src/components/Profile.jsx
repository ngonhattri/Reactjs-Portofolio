import React from 'react';
import { Card, Icon } from 'antd';

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
                actions={[
                    <Icon
                        type="download"
                        key="download"
                        onClick={() =>
                            window.open(
                                'https://drive.google.com/open?id=1gji1wPYP3h9WFeWp042qUnFnZSmLJDAy',
                                '_blank',
                            )
                        }
                    />,
                ]}
            >
                <Meta title="Nguyễn Minh Quân" />
                <Meta style={{ fontWeight: 'bold' }} description="Back-end Developer" />
            </Card>
        </>
    );
};
export default Profile;
