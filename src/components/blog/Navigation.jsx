import React, { useEffect } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';

let Navigation = props => {
    const dispatch = useDispatch();
    const data = props.categories.categories;

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <>
            <Menu onClick={props.onClick} mode="horizontal">
                {data
                    ? data.map(x => <Menu.Item key={x._id}>{x.name}</Menu.Item>)
                    : null}
            </Menu>
        </>
    );
};

Navigation.propTypes = {
    categories: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    categories: state.categories,
});

Navigation = connect(mapStateToProps, null)(Navigation);

export default Navigation;
