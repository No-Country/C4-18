import './formSingIn.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { Formik } from 'formik';
import google from '../../assets/googleBtn-Desktop.svg';
import { useUser } from '../../../../../contexts/userContext';


function FormSingIn() {

	const {signInUser} = useUser();

	const handleSignIn = async (values)=>{
		signInUser(values)
	}

	return (
		<div className="container-formSingIn">
			<div className='containerForm'>
				<h1>Ingresa a tu cuenta</h1>
				<Formik
					initialValues={{ correo: '', password: '' }}
					validate={values => {
						const errors = {};
						if (!values.correo) {
							errors.correo = 'Required';
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
							errors.correo = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							handleSignIn(values)
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
								type="correo"
								name="correo"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.correo}
								placeholder="Correo@ejemplo.com"
							/>
							{errors.correo && touched.correo && errors.correo}
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

							<p>No tienes una cuenta?  <Link to="/login/register"><span>Registrate</span></Link></p>
						</form>
					)}
				</Formik>

			</div>
		</div>
	);
}


export default FormSingIn;
