import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const FormPasswordField = (props) => {
	const {
		title,
		name,
		hideShowButton = false,
		onChangeValue,
		...inputProps
	} = props

	const [showPassword, setShowPassword] = useState(false)

	const handleChange = (event) => {
		if (!onChangeValue) return
		onChangeValue(name, event.target.value)
	}

	const handleShowHidePassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className="form-control">
			<div className="form-control__password">
				<label htmlFor={name}>{title}</label>
				<input
					type={showPassword ? 'text' : 'password'}
					name={name}
					onChange={handleChange}
					{...inputProps}
				/>

				{hideShowButton && (
					<button
						type="button"
						className="form-control__password__icon"
						onClick={handleShowHidePassword}>
						{showPassword ? (
							<i className="bx bx-hide" />
						) : (
							<i className="bx bx-show" />
						)}
					</button>
				)}
			</div>
		</div>
	)
}

FormPasswordField.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	hideShowButton: PropTypes.bool,
	onChangeValue: PropTypes.func,
}

export default memo(FormPasswordField)
