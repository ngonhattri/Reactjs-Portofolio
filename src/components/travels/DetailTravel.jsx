import React, { useEffect } from 'react';
import { Row, Col, Typography, Skeleton, Carousel } from 'antd';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getTravel } from '../../redux/actions/travelActions';
const { Title } = Typography;

let DetailTravel = props => {
    const dispatch = useDispatch();

    const data = props.travel.travel;
    useEffect(() => {
        dispatch(getTravel(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    {data ? (
                        <>
                            <Title level={2} style={{ marginTop: 10 }}>
                                {data.title}
                            </Title>
                            <Carousel autoplay dots={true}>
                                {data.images.map(image => (
                                    <div key={image.url}>
                                        <img
                                            src={image.url}
                                            alt={image.description}
                                            className="image-travel"
                                        />
                                        <Title
                                            level={4}
                                            style={{ textAlign: 'center' }}
                                        >
                                            {image.description}
                                        </Title>
                                    </div>
                                ))}
                            </Carousel>
                        </>
                    ) : (
                        <Skeleton />
                    )}
                </Col>
            </Row>
        </>
    );
};

DetailTravel.propTypes = {
    travel: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    travel: state.travels,
});

DetailTravel = connect(mapStateToProps, null)(DetailTravel);

export default DetailTravel;
