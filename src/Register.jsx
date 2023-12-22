import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleClick = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        createUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .then(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Register now!</h1>

      <form onClick={handleClick} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
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
          <Link  className="btn btn-primary">Register</Link>
        </div>
      </form>
      <h1 className="text-center mb-3">Already have an account ? <Link to="/login" className="link link-info">Login</Link></h1>

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;