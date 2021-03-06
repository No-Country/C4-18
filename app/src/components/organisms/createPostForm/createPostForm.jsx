import React, { useEffect, useState } from "react";
import "./createPostForm.scss";
import { Formik } from "formik";
import { useUser } from "../../../contexts/userContext";
import { useProperty } from "../../../contexts/propertyContext";
import { Toast, Swal } from "../../atoms/atomsIndex";

export const CreatePostForm = () => {
  const { userSession } = useUser();
  const { addProperty, updateProperty } = useProperty();
  const [data, setData] = useState();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (imageData) console.log("DATA: ", imageData);
  }, [imageData]);

  const handleCreatePost = async (values) => {
    const dataPost = {
      idUsuario: userSession._id,
      titulo: values.titulo,
      descripcion: values.descripcion,
      condiciones: values.condiciones,
      precio: values.precio,
      servicios: {
        capacidad: values.capacidad,
        ducha: values.ducha,
        internet: values.internet,
        estacionamiento: values.estacionamiento,
        metraje: values.metraje,
      },
      ubicacion: {
        pais: values.pais,
        ciudad: values.ciudad,
        direccion: values.direccion,
      },
    };
    if (imageData.length === 0)
      return Toast.fire({
        icon: "error",
        title: "Por favor, ingrese imagenes",
      });

    const response = await addProperty(dataPost);

    console.log("RESPUESTA EN CREAR", response);

    if (!response) return alert("No se puede");

    for (let i in imageData) {
      const formData = new FormData();
      formData.append("imagenes", imageData[i], imageData[i].name);
      await updateProperty(formData, true, response.post._id);
    }
    console.log(dataPost)
    
    Swal.fire({
      icon: "success",
      title: "Publicacion creada correctamente",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        document.location.href = `/producto/${response.post._id}`;
      }
    });
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImageData([...imageData, ...e.target.files]);
  };

  const handleDeleteImage = (e) => {
    setImageData(imageData.filter((image) => image.name !== e.target.name));
  };

  return (
    <div className="container-formpost">
      <div className="containerForm">
        <h1>Crear publicacion</h1>
        <div className="formWrap">
          <Formik
            initialValues={{
              titulo: "",
              descripcion: "",
              condiciones: "",
              precio: "",
              capacidad: "",
              ducha: "",
              internet: "",
              estacionamiento: "",
              metraje: "",
              pais: "",
              ciudad: "",
              direccion: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.titulo) {
                errors.titulo = "Ingrese un titulo";
              }
              if (!values.descripcion) {
                errors.descripcion = "Descripcion requerida";
              }
              if (!values.condiciones) {
                errors.condiciones = "Condiciones requeridas";
              }
              if (!values.precio) {
                errors.precio = "Ingrese un valor mayor que 0";
              }
              if (!values.capacidad || !values.ducha || !values.estacionamiento || !values.internet || !values.metraje) {
                errors.servicios = "Complete todos los servicios";
              }
              if (!values.pais) {
                errors.pais = "Pais requerido";
              }
              if (!values.ciudad) {
                errors.ciudad = "Ciudad requerido";
              }
              if (!values.direccion) {
                errors.direccion = "Direccion requerido";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleCreatePost(values);
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
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="formuFeatures">
                <label>Titulo</label>
                <input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.titulo}
                  placeholder="Titulo"
                />
                {errors.titulo && touched.titulo && (
                  <span className="error">{errors.titulo}</span>
                )}
                <label>Descripcion</label>
                <textarea
                  rows="4"
                  cols="40"
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descripcion}
                  placeholder="Descripcion"
                />
                {errors.descripcion && touched.descripcion && (
                  <span className="error">{errors.descripcion}</span>
                )}
                <label>Condiciones</label>
                <input
                  type="text"
                  name="condiciones"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.condiciones}
                  placeholder="Condiciones"
                />
                {errors.condiciones && touched.condiciones && (
                  <span className="error">{errors.condiciones}</span>
                )}
                <label>Precio</label>
                <input
                  type="number"
                  name="precio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precio}
                  placeholder="Precio"
                />
                {errors.precio && touched.precio && (
                  <span className="error">{errors.precio}</span>
                )}
                <label>Servicios</label>
                <label>Capacidad</label>
                <input
                  type="number"
                  name="capacidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.capacidad}
                  placeholder="capacidad"
                />
                <div className="checkbox">
                  <label htmlFor="internet">Internet</label>
                <input
                  type="checkbox"
                  name="internet"
                  id="internet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.internet}
                  placeholder="internet"
                  className="check"
                />
                  </div>
                  <div className="checkbox">
                <label htmlFor="estacionamiento">Estacionamiento</label>
                <input
                  type="checkbox"
                  name="estacionamiento"
                  id="estacionamiento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.estacionamiento}
                  placeholder="estacionamiento"
                  className="check"
                /></div>
                <label>Ba??os</label>
                <input
                  type="number"
                  name="ducha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ducha}
                  placeholder="ducha"
                />
                <label>Metros cuadrados de la propiedad</label>
                <input
                  type="number"
                  name="metraje"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.metraje}
                  placeholder="metraje"
                />

                {errors.servicios  && (
                  <span className="error">{errors.servicios}</span>
                )}
                <label>Ubicacion</label>
                <label>Pais</label>
                <input
                  type="text"
                  name="pais"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pais}
                  placeholder="Pais"
                />
                {errors.pais && touched.pais && (
                  <span className="error">{errors.pais}</span>
                )}
                <label>ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ciudad}
                  placeholder="Ciudad"
                />
                {errors.ciudad && touched.ciudad && (
                  <span className="error">{errors.ciudad}</span>
                )}
                <label>direccion</label>
                <input
                  type="text"
                  name="direccion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.direccion}
                  placeholder="Direccion"
                />
                {errors.direccion && touched.direccion && (
                  <span className="error">{errors.direccion}</span>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Crear publicaci??n
                </button>
              </form>
            )}
          </Formik>
          <div className="formImage">
            <input
              type="file"
              name="fileInput"
              multiple={true}
              onChange={(e) => {
                handleImage(e);
              }}
              required
            />
            {imageData.map((image, index) => (
              <div key={index}>
                <label>{image.name}</label>
                <button
                  name={image.name}
                  onClick={(e) => {
                    handleDeleteImage(e);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
