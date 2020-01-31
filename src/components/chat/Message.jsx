import React from 'react';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

const Message = () => {
    const data = [
        {
            author: 'Han Solo',
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
                    <span>
                        {moment()
                            .subtract(1, 'days')
                            .fromNow()}
                    </span>
                </Tooltip>
            ),
        },
        {
            author: 'Han Solo',
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(2, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
                    <span>
                        {moment()
                            .subtract(2, 'days')
                            .fromNow()}
                    </span>
                </Tooltip>
            ),
        },
    ];
    return (
        <>
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
        </>
    );
};
export default Message;
