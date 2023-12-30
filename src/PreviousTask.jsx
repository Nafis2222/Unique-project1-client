import { useEffect, useState } from "react";
import UseHooks from "./Hooks/UseHooks";
import { MdModeEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";



const PreviousTask = () => {
    const [work,setwork] = useState()
    const axiosPublic = UseHooks()
    useEffect(()=>{
        axiosPublic.get('/post')
        .then(res=>{
            setwork(res.data)
        })
    },[])

    const handleEdit = id =>{
        axiosPublic.put(`/${id}`)
        console.log(id)
    }
    return (
        <div>
            <div className="grid gap-1 ml-2 md:ml-6 md:grid-cols-3 border-2 border-stone-500 h-screen">
                <div className="border-2 border-gray-500 h-min">
                   <div>
                    <h1 className="bg-accent w-full p-2 text-center font-bold text-white">To-do Task</h1>

                    <div className=" box-border">
  <table className="table w-fit">

        {
            work?.map(just=>
                <tbody>

                <tr className="bg-base-200">
                <td>{just?.title}   </td>
                <td>{just?.date}     </td>
                <td>{just?.priority} <div className=" flex justify-around"><MdModeEdit onClick={()=>handleEdit(just?._id)} /> <MdCancel/></div></td>
              </tr>
              </tbody>

                )
        }
     
 
    
  </table>
</div>
                    </div>
                </div>                
                <div className="border-2 border-gray-500 h-min">
                <div><p className="bg-blue-800 w-full p-2 text-center font-bold text-white">Ongoing Task</p></div>
                </div>
                <div className="border-2 border-gray-500 h-min">
                <div><p className="bg-green-600 w-full p-2 text-center font-bold text-white">Completed Task</p></div>
                </div>
            </div>
        </div>
    );
};

export default PreviousTask;