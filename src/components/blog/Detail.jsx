import React, { useEffect } from 'react';
import { Typography, Row, Col, Skeleton, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getBlog } from '../../redux/actions/blogActions';
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

let Detail = props => {
    const dispatch = useDispatch();

    const data = props.blog.blog;

    useEffect(() => {
        dispatch(getBlog(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    const createMarkup = html => {
        return { __html: html };
    };

    return (
        <>
            {data ? (
                <>
                    <Title level={2}>{data.name}</Title>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div
                                className="image-cover"
                                style={{
                                    backgroundImage: `url(${data.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                            <Paragraph
                                style={{ paddingTop: 50 }}
                                className="blog-detail"
                            >
                                <div
                                    dangerouslySetInnerHTML={createMarkup(
                                        data.content,
                                    )}
                                />
                            </Paragraph>
                        </Col>
                    </Row>
                </>
            ) : (
                <Skeleton />
            )}
            <hr className="hr-text" data-content="END" />
            <Link to="/blogs">
                <Button className="fixed-button" type="primary">
                    <Icon type="left" />
                    Go back
                </Button>
            </Link>
        </>
    );
};

Detail.propTypes = {
    blog: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    blog: state.blogs,
});

Detail = connect(mapStateToProps, null)(Detail);

export default Detail;
