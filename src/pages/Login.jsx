import { Helmet, FormTextField, FormPasswordField, Button } from '../components'

import GoogleLogo from '../assets/images/google-logo.svg'

const LoginPage = () => {
	return (
		<>
			<Helmet title="Sign in" />

			<div className="container login">
				{/* Left side */}
				<img
					src="src/assets/images/login_img.jpg"
					alt="Login Image"
					className="login__image"
				/>

				{/* Right side */}
				<div className="login__content">
					{/* Title description */}
					<div className="login__content__title">
						<h3 className="">
							Welcome to Panorama,
							<br />
							Sign In to Continue.
						</h3>
						<p className="">
							Don&lsquo;t have an account?{' '}
							<a href="#" className="link-text">
								Create an account
							</a>
							<br />
							It takes less than a minute.
						</p>
					</div>

					{/* Form fields */}
					<form className="login__content__form">
						<FormTextField title="Email" name="email" />
						<FormPasswordField
							title="Password"
							name="password"
							hideShowButton
						/>
						<a href="#" className="link-text">
							Forgot Password?
						</a>
					</form>

					{/* Buttons */}
					<div className="login__content__buttons">
						<div className="login__content__buttons__sign-in">
							<Button>Sign In</Button>
						</div>
						<div className="login__content__buttons__gg-sign-in">
							<Button>
								<img src={GoogleLogo} alt="" />
								<span>Sign in via Google</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage
