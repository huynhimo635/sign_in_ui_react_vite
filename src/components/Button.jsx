import PropTypes from 'prop-types'

const Button = (props) => {
	const { children, ...buttonProps } = props

	return (
		<button className="button" {...buttonProps}>
			{children}
		</button>
	)
}

Button.propTypes = {
	onChangeValue: PropTypes.func,
	children: PropTypes.node,
}

export default Button
