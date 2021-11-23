import React from "react";
import Layout from "../../components/layout/auth";
import Button from "../../components/templates/button";
import * as Yup from "yup";
import { Formik } from "formik";
import Label from "../../components/templates/label";
import Input from "../../components/templates/input";
import Error from "./error";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/action/authRegister";
import { Link, useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("name is needed"),
  email: Yup.string().email().required("must be filled"),
  password: Yup.string().min(8, "min 8 characters").required("must be filled"),
  passwordConfirmation: Yup.string()
    .min(8, "min 8 characters")
    .oneOf([Yup.ref("password")], "password must be same")
    .required("must be filled"),
});
export default function Register() {
  let dispatch = useDispatch();
  let initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",  
  };
  let navigate = useNavigate();
  async function onSubmit(values) {
    let result = await dispatch(authRegister(values));

    if (result.status === "Success") return navigate("/dashboard");
  }

  return (
    <Layout>
      <div className="w-full px-20">
        <h1 className="text-xl uppercase font-bold mb-10">register page</h1>
        <Formik
          initialValues={initialState}
          validationSchema={RegisterSchema}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <form
              autoComplete="off"
              className="grid grid-cols-1 gap-y-3"
              onSubmit={handleSubmit}
              action=""
            >
              <div>
                <Label htmlFor="name"></Label>
                <Input
                  id="name"
                  name="name"
                  placeHolder="name"
                  error={errors.name && touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  disabled={isSubmitting}
                ></Input>
                {errors.name && touched.name && (
                  <Error className="text-red-600">{errors.name}</Error>
                )}
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  placeHolder="email"
                  error={errors.email && touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  disabled={isSubmitting}
                ></Input>
                {errors.email && touched.email && (
                  <Error className="text-red-600">{errors.email}</Error>
                )}
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  placeHolder="password"
                  error={errors.password && touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  disabled={isSubmitting}
                ></Input>
                {errors.password && touched.password && (
                  <Error className="text-red-600">{errors.password}</Error>
                )}
              </div>
              <div>
                <Input
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeHolder="passwordConfirmation"
                  error={
                    errors.passwordConfirmation &&
                    touched.passwordConfirmation
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                  disabled={isSubmitting}
                ></Input>
                {errors.passwordConfirmation &&
                  touched.passwordConfirmation && (
                    <Error className="text-red-600">
                      {errors.passwordConfirmation}
                    </Error>
                  )}
              </div>
              <div>
                <Button htmlType="submit" block variant="solid" color="red">
                  Register
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <p>already have an account? <Link className="text-red-600" to="/login">Sign in</Link></p>
      </div>
    </Layout>
  );
}
