import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

function Update() {

  const {id} = useParams()
  const {users, loading} = useSelector((state) => state.app )
  const [updateData, setUpdateData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log('iddddddddd',id)

  useEffect(()=>{
    if(id){
      const singleUser = users.filter((ele)=> ele.id === id)
      setUpdateData(singleUser[0])
      
    }
  }, [])

  const newData = (e) =>{
    setUpdateData({...updateData, [e.target.name] : e.target.value});
  }
  
  const handleUpdate = (e)=>{
    e.preventDefault()
    dispatch(updateUser(updateData))
    navigate("/read")
  }

  return (
    <>
      <Navbar1 />
      <div>
        <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
          <h2 className="">Fill Data</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              className="form-control"
              value = { updateData && updateData.name}
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value = { updateData && updateData.email}
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="age"
              name="age"
              className="form-control"
              value = { updateData && updateData.age}
              onChange={newData}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked = {updateData && updateData.gender === "Male"}
              onChange={newData}
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
              checked = {updateData && updateData.gender === "Female"}
              onChange={newData}
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

export default Update;
