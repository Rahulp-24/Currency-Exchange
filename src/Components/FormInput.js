import { Button } from "primereact";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import { Card } from "reactstrap";
export default function FormInput() {
    const [check,setCheck]=useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
 console.log(data);

 setCheck("hidden")
}
    

  return (   
    <>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Register to view Dashboard</h1>
        </div>
        <div>
          <label>Name</label>
          <input className="w-12 m-3"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>
        </div>
        <div>
          <label>Email</label>
          <input className="w-12 m-3"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        
        <div>
            <Button type="submit" className="w-12 m-3 p-2" label="Submit" ></Button>
          {/* <input className="button" type="submit" /> */}
        </div>
      </form>
      
    </div>
        
        </>
  );
}