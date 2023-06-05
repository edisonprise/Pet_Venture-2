import React from "react";
import { Input, Grid, Button } from "@nextui-org/react";
import styles from "./formularioCreate.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Formulario = () => {
  /* let initialValues = {
    Product_name: "",
    Brand: "",
    Brand_url: "",
    Price: "",
    Image: "",
    Image_url: "",
    Select_cities: "",
    Options: "",
  }; */

  /* const enviarForm = (data) => {
    console.log(data);
  }; */
  console.log(styles);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      Product_name: "",
      Brand: "",
      Price: "",
      Image: "",
      Category: "",
      subCategory: "",
    },

    validationSchema: Yup.object({
      Product_name: Yup.string().required(
        "Por favor ingresa nombre del producto"
      ),
      Brand: Yup.string().required(
        "Por favor ingresa nombre de la marca producto"
      ),
      Price: Yup.number().required("Por favor ingresa precio del producto"),
      Image: Yup.string().required("Por favor ingresa imagen del producto"),
      Category: Yup.string().required(
        "Por favor ingresa categoria del producto"
      ),
      subCategory: Yup.string().required(
        "Por favor ingresa subcategoria del producto"
      ),
    }),

    onSubmit: async (values) => {
      const response = await axios.post("/api/createProduct", values);
      console.log(response);
    },
  });
  return (
    <div>
      <h2> Crear Producto</h2>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <Grid.Container gap={4}>
          <Grid>
            <Input
              rounded
              bordered
              type="text"
              label="Product_name"
              placeholder="Product_name"
              color="default"
              name="Product_name"
              onChange={handleChange}
              value={values.Product_name}
              error={errors.Product_name}
              helperText={errors.Product_name}
            />
          </Grid>
          <Grid>
            <Input
              rounded
              bordered
              type="text"
              label="Brand"
              placeholder="Brand"
              color="default"
              name="Brand"
              onChange={handleChange}
              value={values.Brand}
              error={errors.Brand}
              helperText={errors.Brand}
            />
          </Grid>
          <Grid>
            <Input
              rounded
              bordered
              type="Number"
              label="Price"
              placeholder="Price"
              color="default"
              name="Price"
              onChange={handleChange}
              value={values.Price}
              error={errors.Price}
              helperText={errors.Price}
            />
          </Grid>
          <Grid>
            <Input
              rounded
              bordered
              type="text"
              label="Image"
              placeholder="Image"
              color="default"
              name="Image"
              onChange={handleChange}
              value={values.Image}
              error={errors.Image}
              helperText={errors.Image}
            />
          </Grid>
          <Grid>
            <Input
              rounded
              bordered
              type="text"
              label="Category"
              placeholder="Category"
              color="default"
              name="Category"
              onChange={handleChange}
              value={values.Category}
              error={errors.Category}
              helperText={errors.Category}
            />
          </Grid>
          <Grid>
            <Input
              rounded
              bordered
              type="text"
              label="subCategory"
              placeholder="subCategory"
              color="default"
              name="subCategory"
              onChange={handleChange}
              value={values.subCategory}
              error={errors.subCategory}
              helperText={errors.subCategory}
            />
          </Grid>
        </Grid.Container>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default Formulario;
