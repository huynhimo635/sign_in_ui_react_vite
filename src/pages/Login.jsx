import { Helmet, Grid } from '../components'

const LoginPage = () => {
	return (
		<>
			<Helmet title="Sign in" />

			<div className="container login">
				<Grid col={4} sm={0}>
					<div className="login__image"></div>
				</Grid>
				<Grid col={6} sm={12}>
					<div className="login__content"></div>
				</Grid>
			</div>
		</>
	)
}

export default LoginPage
