import { Helmet } from '../components'

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
					<div className="login__content__items">
						<h3 className="">Welcome to Panorama, Sign In to Continue.</h3>
						<p className="">
							Don&apost have an account? <span>Create an account</span> It takes
							less than a minute.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage
