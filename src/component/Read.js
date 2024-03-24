import React, { useEffect } from "react";
import Navbar1 from "./Navbar1";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";

function Read() {
    const dispatch = useDispatch()
    const {users, loading} =  useSelector((state)=> state.app)

    useEffect(() => {
      dispatch(showUser())
    }, []); 

    if(loading){
      return(<h2>Loading</h2>)
    }

    return (
    <>
    <Navbar1/>
    <div className="w-50 mx-auto my-5">
      <h2 className=" my-2">All Data</h2>
      <div className="my-2">
        {users && users.map((ele)=>(<div className="card my-2 ">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {ele.email}
            </h6>
            <p className="card-text">
              {ele.gender}
            </p>
            {/* <p className="card-text">
              {ele.gender}
            </p> */}
            <a href="#" className="card-link">
              View
            </a>
            <a href="#" className="card-link">
              Edit
            </a>
            <a href="#" className="card-link">
              Delete
            </a>
          </div>
        </div>))}
      </div>
    </div>
    </>
  );
}

export default Read;
