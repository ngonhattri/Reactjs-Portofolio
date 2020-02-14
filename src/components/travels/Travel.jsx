import React, { useEffect } from 'react';
import Minimap from './Minimap';
import { Typography, Col, Row } from 'antd';
import $ from 'jquery';
const { Title } = Typography;
let Travel = () => {
    useEffect(() => {
        let $description = $('.description');

        $('path').hover(
            function() {
                $description.addClass('active');
                $description.html(
                    $(this).attr('title') +
                        ' ' +
                        "<br/><img src='" +
                        $(this).attr('images') +
                        "' width='100px' />",
                );
            },
            function() {
                $description.removeClass('active');
            },
        );

        $(document).on('mousemove', function(e) {
            $description.css({
                left: e.pageX - 50,
                top: e.pageY - 200,
            });
        });
    }, []);

    return (
        <>
            <Title level={2}>Du lịch</Title>
            <Row>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    style={{ textAlign: 'center' }}
                >
                    <Minimap />
                    <div className="description"></div>
                </Col>
            </Row>
        </>
    );
};
export default Travel;
