import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getBlogs } from '../../redux/actions/blogActions';
import Navigation from './Navigation';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;

let Blog = props => {
    const [page] = useState(1);
    const [category, setCategory] = useState(null);
    console.log(category);
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

    const handleClickMenu = key => {
        setCategory(key.key);
    };

    useEffect(() => {
        dispatch(getBlogs(page, category));
    }, [page, category, dispatch]);

    return (
        <>
            <Title level={2}>Quan Nguyen Blog</Title>
            <Navigation onClick={handleClickMenu} />
            <Row style={{ marginTop: 20 }}>
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
                              <Link to={{ pathname: `/blogs/${data._id}` }}>
                                  <Card
                                      className="blog-card"
                                      cover={
                                          <img
                                              alt={data.name}
                                              src={data.image}
                                          />
                                      }
                                      style={{ height: 345, borderRadius: 20 }}
                                  >
                                      <Meta
                                          title={data.name}
                                          description={
                                              'Danh mục ' +
                                              data.categoryId.name +
                                              ' / Ngày tạo ' +
                                              moment(data.createdAt).format(
                                                  'DD-MM-YYYY',
                                              )
                                          }
                                      />
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
