import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Layout from "../../components/layout/auth";
import Button from "../../components/templates/button";
import Input from "../../components/templates/input";
import Error from "./error";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authLogin } from "../../redux/action/authLogin";
import { Link } from "react-router-dom";


const LoginInitial= Yup.object().shape({
  email:Yup.string().required("email is needed"),
  password:Yup.string().required("must be filled")
})


export default function Login() {
  let initialState = {
    email:"",
    password:""
  }
  let navigate = useNavigate()
  let dispatch = useDispatch()


  async function onSubmit(values) {
    let result = await dispatch(authLogin(values))
    if (result.status === "Success") return navigate("/dashboard");

  }
  return (
    <Layout>
      <div className="w-full px-20">
        <h1 className="text-xl uppercase font-bold mb-10">login page</h1>
        <Formik
          initialValues={initialState}
          validationSchema={LoginInitial}
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
                <Button htmlType="submit" block variant="solid" color="red">
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <p>dont have an account? <Link className="text-red-600" to="/register">Sign up</Link></p>
      </div>
    </Layout>
  );
}
