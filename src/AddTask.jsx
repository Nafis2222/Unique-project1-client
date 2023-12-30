import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import UseHooks from "./Hooks/UseHooks";
import Swal from "sweetalert2";
const AddTask = () => {
  const axiosPublic = UseHooks()
  const [important , setImportant] = useState()
    const [startDate, setStartDate] = useState(new Date());
    const handleFill = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const title = form.get('title')
        const description = form.get('description')
        const date = form.get('date')
        const priority = form.get('priority')
        console.log(title, description, date, priority)
        const Data = {title , description, date, priority }
        axiosPublic.post('/post' , Data)
        .then(res=>{
          if(res?.data?.insertedId){
            Swal.fire({
              position: "top-start",
              icon: "success",
              title: "Your have successfully created a task",
              showConfirmButton: false,
              timer: 1500
            })
          }
          console.log(res.data)
        })
        
    }
    return (
        <div className="ml-5 md:ml-10 my-12 justify-evenly">
            
            <div className="">
                    <h1 className="text-3xl font-bold">Create an Engaging Task </h1>
                    <form action="" onSubmit={handleFill}>
                     <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text font-semibold">Title</span>
                            </label>
                            <label className="input-group">
                              <input type="text" required placeholder="Enter your title" name="title" className="input input-bordered w-full" />
                            
                            </label>
                            </div>
                          
                        </div>
                        <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text font-semibold">Description</span>
                            </label>
                            <label className="input-group">
                              <input type="text" required placeholder="Enter your description" name="description" className="input input-bordered py-5 w-full" />
                            
                            </label>
                            </div>
                          
                        </div>
                        <div className="md:flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text font-semibold">Date</span>
                            </label>
                            <label className="input-group">
                              <input type="date" required placeholder="Enter your description" name="date" className="input input-bordered w-full" />
                              {/* <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} /> */}

                            </label>
                            </div>
                            <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text font-semibold">Priority</span>
                            </label>
                            <label className="input-group">
                            <select required name="priority" className="select select-warning w-full max-w-xs">
                              <option disabled selected>Priority</option>
                              <option>Low</option>
                              <option>Moderate</option>
                              <option>High</option>
                            </select>
                            </label>
                        </div>

                           
                          
                        </div>
                       
                      
                        <div className="flex gap-3">
                        <div className=" w-full">
                            
                            <button className="w-full btn btn-accent mt-8">Create Task</button>
                            </div>
                         
                        </div>
                    </form>

                </div>
            
        </div>
    );
};

export default AddTask;