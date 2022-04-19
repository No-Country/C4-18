import './formSingUp.scss';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import google from '../../assets/googleBtn-Desktop.svg';
import { useUser } from '../../../../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function FormSingUp() {

	const {signUpUser, userSession}= useUser()
	const history = useNavigate()

	const handleSignUp = (values)=> {
		signUpUser({
			nombre: values.name,
			correo: values.correo,
			telefono: parseInt(values.number),
			password: values.password
		})
		history("/")
	}



	return (
		<div className="container-formSingUp">
			<div className='containerForm'>
				<h1>Crear una Cuenta</h1>
				<Formik
					initialValues={{ correo: '', password: '' }}
					validate={values => {
						const errors = {};
						if (!values.correo || !values.name || !values.number) {
							errors.correo = 'Ingrese un correo válido';
							errors.name = 'Nombre requerido';
							errors.number = 'Teléfono requerido';
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
							errors.correo = 'Correo Inválido';
						} /* else if (!/^[A-Z]+\.[A-Z]{2,}$/i.test(values.name)) {
							errors.name = 'Solo debe contener letras';
						} else if (!/^[0-9]+\.[A-Z]{2,}$/i.test(values.number)) {
							errors.number = 'Solo debe contener números';
						} */
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						handleSignUp(values);
						setSubmitting(false)
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
							<label>Nombre y Apellido</label>
							<input
								type="text"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								placeholder="Nombre y Apellido"
							/>
							{errors.name && touched.name && errors.name}
							<label>Correo</label>
							<input
								type="correo"
								name="correo"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.correo}
								placeholder="Correo@ejemplo.com"
							/>
							{errors.correo && touched.correo && errors.correo}
							<label>Número telefónico</label>
							<input
								type="text"
								name="number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.number}
								placeholder="Número telefónico"
							/>
							{errors.number && touched.number && errors.number}
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

							{/* <h6>Olvido la contraseña?</h6> */}

							<button type="submit" disabled={isSubmitting}>
								Registrar Usuario
							</button>

							<h5>O puedes registrarte mediante una red social</h5>

							<div className='googleSection'>
								<img src={google} alt="googltBtn" />
							</div>

							<p>Tienes una cuenta? <Link to="/login"><span>Iniciar Sesión</span></Link></p>
						</form>
					)}
				</Formik>

			</div>
		</div>
	);
}


export default FormSingUp;
