import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
export default function Signup() {
	const [userData, setuserData] = useState({
		firstName:"",
		lastName:"",
		email:"",
		password:"",
		cpassword:""
	})
	const navigate = useNavigate()
	const handleSubmit = (e)=>{
		e.preventDefault()
		localStorage.setItem("userData",JSON.stringify(userData))
		navigate("/login")
	}
  return (
		<div class="container mt-4">
			  <div class="row">
				<div class="col-sm-6 offset-sm-3">
				  <div class="card">
					<div class="card-header">Signup</div>
					<div class="card-body">
					  <form onSubmit={handleSubmit}>
					  <div>
						<label for="name" class="form-label">First name</label>
						<input
							onChange={e=> setuserData({...userData,firstName:e.target.value})}
						  type="text"
						  class="form-control"
						  id="name"
						  placeholder="Enter your first name"
						/>
						<label for="name" class="form-label">Last name</label>
						<input
						onChange={e=> setuserData({...userData,lastName:e.target.value})}
						  type="text"
						  class="form-control"
						  id="name"
						  placeholder="Enter your last Name"
						/>
					</div>
					  <div class="mt-2">
						<label for="email" class="form-label">First Email</label>
						<input
					onChange={e=> setuserData({...userData,email:e.target.value})}
						  type="text"
						  class="form-control"
						  id="email"
						  placeholder="Enter Your Email"
						/>
					 </div>
					  <div class="mt-2">
						<label for="password" class="form-label">Password</label>
						<input
						onChange={e=> setuserData({...userData,password:e.target.value})}
						  type="text"
						  class="form-control"
						  id="password"
						  placeholder="Enter Your Password"
						/>
						 </div>
					  <div class="mt-2">
						<label for="cpassword" class="form-label"
						  >Confirm Password</label
						>
						<input
					onChange={e=> setuserData({...userData,cpassword:e.target.value})}
						  type="text"
						  class="form-control"
						  id="cpassword"
						  placeholder="Confirm Your Password"
						/>
					  </div>
					  <button class="btn btn-primary w-100 mt-3">
						Signup
					  </button>
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
