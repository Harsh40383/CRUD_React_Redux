import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

function Create() {

  const[user, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    
    setUsers({...user, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user)
    dispatch(createUser(user))
    navigate("/read")
  }

  return (
    <>
    <Navbar1/>
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
      <h2 className="">Fill Data</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="name" name="name" className="form-control" onChange={getUserData} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" onChange={getUserData}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input type="age" name="age" className="form-control" onChange={getUserData}/>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Create;
