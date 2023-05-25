import { Helmet } from '../components'

const LoginPage = () => {
	return (
		<>
			<Helmet title="Sign in" />

			<div className="container login">
				<img
					src="src/assets/images/login_img.jpg"
					alt="Login Image"
					className="login__image"
				/>

				<div className="login__content">
					<h1>test</h1>
				</div>
			</div>
		</>
	)
}

export default LoginPage
