import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";



const DashBoard = () => {
    const {userFinal,Logout} = useContext(AuthContext)
    const handleClick = () =>{
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
            <div className="flex">
                <div className="h-auto pt-12 w-3/12 bg-slate-500">
                 <NavLink to="/" className="text-white mx-3 text-lg flex gap-2  font-medium">< FaHome className="mt-1"/>Home</NavLink> <br />
                 <NavLink to="addTask" className="text-white mx-3 text-lg flex gap-2  font-medium">< IoMdAddCircle className="mt-1"/>Add Task</NavLink><br />
                 <NavLink to="preTask" className="text-white mx-3 text-lg flex gap-2  font-medium">< FaTasks className="mt-1"/>Previous Task</NavLink><br />
                 <NavLink to="/" className="text-white mx-3 text-lg flex gap-2  font-medium">< ImProfile className="mt-1"/>Profile</NavLink><br /><hr className="mb-3"></hr>
                 <NavLink onClick={handleClick} to="/" className="text-white mx-3 text-lg flex gap-2  font-medium">< RiLogoutBoxLine className="mt-1"/>Logout</NavLink>

                </div>
                {/* <div>
                    <h1 className="text-3xl font-bold">Create an Engaging Task </h1>
                    <form action="">
                     <div className="md:flex gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text font-semibold">Tourist image</span>
                            </label>
                            <label className="input-group">
                              <input type="url" placeholder="Enter your img url" name="image" className="input input-bordered w-full" />
                            
                            </label>
                            </div>
                          
                        </div>
                    </form>

                </div> */}
                 <div className="flex-1">
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default DashBoard;