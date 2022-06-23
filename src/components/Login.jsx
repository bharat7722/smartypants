import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import swal from 'sweetalert'
import { useFormik } from 'formik';
import * as yup from 'yup';
export default function Login() {
	const formik = useFormik({
		initialValues: {
		  email: "",
		  password: ""
		},
		validationSchema: yup.object({
		  email: yup.string().required("enter your email").email("plse eneter valid email"),
		  password: yup.string().required("plz eneter your password"),
		}),
		onSubmit: (values, {resetForm}) => {
		console.log(values);
		const userInfo = JSON.parse(localStorage.getItem("userData"))
		userInfo.email === formik.values.email && userInfo.password == formik.values.password ? Navigate("/home"):swal("Please Enter Valid login Details")
		resetForm()
		},
	  });
	const Navigate = useNavigate()
  return (
	<div class="container">
		  <div class="row">
			<div class="col-sm-6 offset-sm-3">
			  <div class="card mt-4">
				<div class="card-header">Login</div>
				<div class="card-body">
				<form onSubmit={formik.handleSubmit} >
                    <div>
                      <label htmlFor="">Email</label>
                      <input type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.email && formik.touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="email"
                        placeholder="Enter your email"
                      />
                      <div className="valid-feedback"></div>
                      {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
                  </div>

                    <div>
                      <label htmlFor="">Phone</label>
                      <input type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.password && formik.touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="password"
                        placeholder="Enter your password"
                      />
                      <div className="valid-feedback"></div>
                      {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
                    </div>
                <br />
                <button type='submit' className='btn bg-success w-100'>submit</button>
              </form><br />
              <p class="text-center">
						I Don't Have Account? <Link to="/">Register</Link>
					  </p>
			  </div>
			  </div>
			</div>
		  </div>
		</div>
  )
}
