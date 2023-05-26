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
					<div className="login__content__form">
						<div>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="password" name="password" />
						</div>
						<a href="#" className="link-text">
							Forgot Password?
						</a>
					</div>
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
