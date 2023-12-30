import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
import { setDriver } from "localforage";
import Navbar from "./Navbar";

const Login = () => {
    const {Login, googleLog} = useContext(AuthContext)
    const [Error,setError] = useState()
    const handleSubmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        Login(email,password)
        .then(res=>{
            setError('')
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your have successfully login",
              showConfirmButton: false,
              timer: 1500
            });
            console.log(res.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const googleClick = () =>{
        googleLog()
        .then(res=>{
            setDriver('')
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your have successfully login with google",
                showConfirmButton: false,
                timer: 1500
              });
            console.log(res.user)
        })
        .catch(error=>{
            setError(error.message)
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        Error ? <><p className="text-center text-red-600"> {Error}</p></> : <></>
      }
      <h1 className="text-center">Don't have account ? <Link to="/register" className="link link-info">Register</Link></h1>
      <button onClick={googleClick} className="btn btn-accent my-3 w-3/4 mx-auto">Continue with google</button>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;