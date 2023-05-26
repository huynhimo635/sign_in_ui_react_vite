import PropTypes from 'prop-types'

const Helmet = (props) => {
	document.title = props.title

	return <>{props.children}</>
}

Helmet.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default Helmet
