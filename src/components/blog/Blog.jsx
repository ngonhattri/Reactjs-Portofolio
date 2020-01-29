import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const { Meta } = Card;

const Blog = () => {
    return (
        <>
            <Title level={2}>Quan Nguyen Blog</Title>
            <Row>
                <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{ paddingRight: 10, paddingBottom: 10 }}
                >
                    <Link to="/">
                        <Card
                            className="blog-card"
                            cover={
                                <img
                                    alt="example"
                                    src="https://res.cloudinary.com/kori/image/upload/v1564762054/blogs/code.jpg"
                                />
                            }
                            style={{ height: 345 }}
                        >
                            <Meta title="Test" />
                        </Card>
                    </Link>
                </Col>
            </Row>
        </>
    );
};
export default Blog;
