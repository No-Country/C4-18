import './formSingIn.scss';
import React from 'react';
import { Formik } from 'formik';
import google from '../../assets/googleBtn-Desktop.svg';

function FormSingIn() {
	return (
		<div className="container-formSingIn">
			<div className='containerForm'>
				<h1>Ingresa a tu cuenta</h1>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting

					}) => (
						<form onSubmit={handleSubmit} className="formuFeatures">
							<label>Usuario o Correo</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder="Correo@ejemplo.com"
							/>
							{errors.email && touched.email && errors.email}
							<label>Contraseña</label>
							<input
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								placeholder="*********"
							/>
							{errors.password && touched.password && errors.password}

							<h6>Olvido la contraseña?</h6>

							<button type="submit" disabled={isSubmitting}>
								Iniciar Sesión
							</button>

							<h5>O puedes registrarte mediante una red social</h5>

							<div className='googleSection'>
								<img src={google} alt="googltBtn"/>
							</div>

							<p>No tienes una cuenta? <span>Registrate</span></p>
						</form>
					)}
				</Formik>

			</div>
		</div>
	);
}


export default FormSingIn;
