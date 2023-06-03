import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./formulario.module.css";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          product_name: "",
          brand: "",
          brand_url: "",
          price: "",
          image: "",
          image_url: "",
          category: "",
          subcategory: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.product_name) {
            errores.product_name = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.product_name)) {
            errores.product_name =
              "El nombre solo puede contener letras y espacios";
          }

          if (!valores.brand) {
            errores.brand = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.brand)) {
            errores.brand = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.brand_url) {
            errores.brand_url = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.brand_url)) {
            errores.brand_url =
              "El nombre solo puede contener letras y espacios";
          }

          if (!valores.price) {
            errores.name = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.price)) {
            errores.price = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.image) {
            errores.image = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.image)) {
            errores.image = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.image_url) {
            errores.image_url = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.image_url)) {
            errores.image_url =
              "El nombre solo puede contener letras y espacios";
          }

          if (!valores.category) {
            errores.category = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.category)) {
            errores.category =
              "El nombre solo puede contener letras y espacios";
          }
          if (!valores.subcategory) {
            errores.subcategory = "Por favor ingresa la marca ";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.subcategory)) {
            errores.subcategory =
              "El nombre solo puede contener letras y espacios";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          //estos son los valores que se pueden enviar a la base de datos o API
          resetForm();
          console.log("formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className={styles.formulario}>
            <div>
              <label htmlFor="product_name">Product Name</label>
              <Field
                type="text"
                id="product_name"
                name="product_name"
                placeholder="Product Name"
              />
              <ErrorMessage
                name="product_name"
                component={() => (
                  <div className="error">{errors.product_name}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field
                type="text"
                id="brand"
                name="brand"
                placeholder="Ingrese brand"
              />
              <ErrorMessage
                name="brand"
                component={() => <div className="error">{errors.brand}</div>}
              />
            </div>

            <div>
              <Field name="category" as="select">
                <option value="aseo">Aseo</option>
                <option value="accesories">Accesories</option>
                <option value="services">Services</option>
              </Field>
            </div>

            <div>
              <label>
                <Field type="radio" name="animal" value="perro" /> Perritos
              </label>
              <label>
                <Field type="radio" name="animal" value="gato" /> Gaticos
              </label>
              <label>
                <Field type="radio" name="animal" value="ave" /> Aves
              </label>
              <label>
                <Field type="radio" name="animal" value="pez" /> Pecesitos
              </label>
              <label>
                <Field type="radio" name="animal" value="otros" /> Otros
              </label>
            </div>

            <div>
              <label htmlFor="brand_url">Brand_url</label>
              <Field
                type="text"
                id="brand_url"
                name="brand_url"
                placeholder="brand_url"
              />
              <ErrorMessage
                name="brand_url"
                component={() => (
                  <div className="error">{errors.brand_url}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field
                type="text"
                id="price"
                name="price"
                placeholder="Ingrese price"
              />
              <ErrorMessage
                name="price"
                component={() => <div className="error">{errors.price}</div>}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="Ingrese image"
              />
              <ErrorMessage
                name="image"
                component={() => <div className="error">{errors.image}</div>}
              />
            </div>

            <div>
              <Field name="upload_image" as="textarea" placeholder="image" />
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
