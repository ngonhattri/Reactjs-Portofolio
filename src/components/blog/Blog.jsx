import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getBlogs } from '../../redux/actions/blogActions';
const { Title } = Typography;
const { Meta } = Card;

let Blog = props => {
    const [page] = useState(1);
    const dispatch = useDispatch();

    const data = props.blogs.blogs;

    const skeleton = [];

    for (let index = 0; index < 8; index++) {
        skeleton.push(
            <Col
                xs={24}
                sm={24}
                md={6}
                lg={6}
                xl={6}
                style={{ paddingRight: 10, paddingBottom: 10 }}
                key={index}
            >
                <Card style={{ height: 345 }}>
                    <Skeleton avatar active>
                        <Meta title="Card title" />
                    </Skeleton>
                </Card>
            </Col>,
        );
    }

    useEffect(() => {
        dispatch(getBlogs(page));
    }, [page, dispatch]);

    return (
        <>
            <Title level={2}>Quan Nguyen Blog</Title>
            <Row>
                {data.products
                    ? data.products.map(data => (
                          <Col
                              xs={24}
                              sm={24}
                              md={6}
                              lg={6}
                              xl={6}
                              style={{ paddingRight: 10, paddingBottom: 10 }}
                              key={data._id}
                          >
                              <Link to="/">
                                  <Card
                                      className="blog-card"
                                      cover={
                                          <img
                                              alt={data.name}
                                              src={data.image}
                                          />
                                      }
                                      style={{ height: 345 }}
                                  >
                                      <Meta title={data.name} />
                                  </Card>
                              </Link>
                          </Col>
                      ))
                    : skeleton}
            </Row>
        </>
    );
};

Blog.propTypes = {
    blogs: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    blogs: state.blogs,
});

Blog = connect(mapStateToProps, null)(Blog);

export default Blog;
