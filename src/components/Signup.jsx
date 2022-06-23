import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from "yup"
import swal from 'sweetalert';
export default function Signup() {
	const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			firstName:"",
			lastName:"",
		    email: "",
		    password: "",
			cpassword:""
		},
		validationSchema: yup.object({
			firstName:yup.string().required("Please Enter firstName"),
			lastName:yup.string().required("Please Enter lastName"),
		  email: yup.string().required("enter your email").email("plse eneter valid email"),
		  password: yup.string().required("plz eneter your password"),
		  cpassword: yup
                .string()
                .required("Please Enter Your Confirm Passowrd")
                .oneOf([yup.ref("password"), null], "Password Do Not Match")
      
		}),
		onSubmit: (values, {resetForm}) => {
			localStorage.setItem("userData",JSON.stringify(values))
			swal("User Signup Successfully!!!!")
			navigate("/login")
			resetForm()
		},
	  });

  return (
		<div class="container mt-4">
			  <div class="row">
				<div class="col-sm-6 offset-sm-3">
				  <div class="card">
					<div class="card-header">Signup</div>
					<div class="card-body">
					<form onSubmit={formik.handleSubmit} >
					<div>
                      <label htmlFor="">First Name</label>
                      <input type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.firstName && formik.touched.firstName
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="firstName"
                        placeholder="Enter your firs tName"
                      />
                      <div className="valid-feedback"></div>
                      {formik.touched.firstName && formik.errors.firstName ? (
              <div className="invalid-feedback">{formik.errors.firstName}</div>
            ) : null}
                  </div>
						<br />
						<div>
                      <label htmlFor="">Last Name</label>
                      <input type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.lastName && formik.touched.lastName
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="lastName"
                        placeholder="Enter your last Name"
                      />
                      <div className="valid-feedback"></div>
                      {formik.touched.lastName && formik.errors.lastName ? (
              <div className="invalid-feedback">{formik.errors.lastName}</div>
            ) : null}
                  </div>
<br />
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
						<br />
                    <div>
                      <label htmlFor="">Password</label>
                      <input type="password"
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
				<div>
                      <label htmlFor="">Confirm Password</label>
                      <input type="password"
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.cpassword && formik.touched.cpassword
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="cpassword"
                        placeholder="Enter your cpassword"
                      />
                      <div className="valid-feedback"></div>
                      {formik.touched.cpassword && formik.errors.cpassword ? (
              <div className="invalid-feedback">{formik.errors.cpassword}</div>
            ) : null}
                  </div>
						<br />
                <button type='submit' className='btn bg-success w-100'>submit</button>
              </form>
			   <p class="text-center mt-3">
						Already Have Account? <Link to="/login">Login</Link>
					  </p>
					</div>
				  </div>
				</div>
			  </div>
			</div>
  )
}
