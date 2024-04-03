import PropTypes from 'prop-types';

export default function Product (props) {
    return(
        <img src={props.url} alt="" />
    )
}

Product.propTypes = {
    url: PropTypes.string,
}