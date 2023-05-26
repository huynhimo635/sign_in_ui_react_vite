import { Helmet, FormTextField, FormPasswordField } from '../components'

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

					<div className="login__content__buttons">
						<button>Sign in</button>
						<button>Sign in via Google</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage
