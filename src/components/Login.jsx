import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
export default function Login() {
	const [email, setemail] = useState()
	const [password, setpassword] = useState()
	const Navigate = useNavigate()
	const handleLogin = (e)=>{
		e.preventDefault()
		const userInfo = JSON.parse(localStorage.getItem("userData"))
		if(userInfo.email == email && userInfo.password==password){
			Navigate("/home")
		}else{
			console.log("Please Enter Correct Password");
		}
	}
  return (
	<div class="container">
		  <div class="row">
			<div class="col-sm-6 offset-sm-3">
			  <div class="card mt-4">
				<div class="card-header">Login</div>
				<div class="card-body">
				  <form onSubmit={handleLogin}>
				  <div>
					<label for="email" class="form-label">First Email</label>
					<input
					onChange={e=> setemail(e.target.value)}
					  type="text"
					  class="form-control"
					  id="email"
					  placeholder="Enter Your Email"
					/>
					  </div>
				  <div class="mt-2">
					<label for="password" class="form-label">Password</label>
					<input
					onChange={e=> setpassword(e.target.value)}
					  type="password"
					  class="form-control"
					  id="password"
					  placeholder="Enter Your Password"
					/>
				  </div>
				  <button class="btn btn-primary w-100 mt-3">
					Login
				  </button>
				  <p class="text-center mt-3">
					Dont Have Account? <Link to="/">Create Account</Link>
				  </p>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		</div>
  )
}
