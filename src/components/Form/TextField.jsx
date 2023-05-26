import { memo } from 'react'
import PropTypes from 'prop-types'

const FormTextField = (props) => {
	const { title, name, onChangeValue, ...inputProps } = props

	const handleChange = (event) => {
		if (!onChangeValue) return
		onChangeValue(name, event.target.value)
	}

	return (
		<div className="form-control">
			<label htmlFor={name}>{title}</label>
			<input type="text" name={name} onChange={handleChange} {...inputProps} />
		</div>
	)
}

FormTextField.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func,
}

export default memo(FormTextField)
