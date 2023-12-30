import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {userFinal,Logout} = useContext(AuthContext)
  const navlinks = <>
        {
          userFinal ?
          <>
          <li><NavLink to="/dashBoard">Dashboard</NavLink></li>            
        <li><NavLink to="/">Contacts</NavLink></li>            
        <li><NavLink to="/">About</NavLink></li>
          </>
           : 
           <>
           {/* <li><NavLink to="/">Dashboard</NavLink></li>             */}
        <li><NavLink to="/">Contacts</NavLink></li>            
        <li><NavLink to="/">About</NavLink></li>
           </>
        }
                    
        {/* <li><NavLink></NavLink></li>             */}

          </>
          const logout = () =>{
            Logout ()
            .then(res=>{
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your have successfully logged out",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res.user)
            })
            .catch(error=>{
              console.log(error.message)
            })
          }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img className="w-20 h-12 rounded-full" src="https://i.ibb.co/2SvDFYq/download-25.jpg" alt="" />
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1"> 
     
{navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      userFinal ?
       <>
           <Link onClick={logout} className="btn">LogOut</Link>
      </> 
      : 
      <>
          <Link to="/login" className="btn">Login</Link>

      </>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;