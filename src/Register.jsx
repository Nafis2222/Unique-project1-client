import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Register now!</h1>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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