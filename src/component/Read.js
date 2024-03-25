import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      {showPopUp && <CustomModal id = {id} showPopUp = {showPopUp} setShowPopUp = {setShowPopUp} />}
      <Navbar1 />
      <div className="w-50 mx-auto my-5">
        <h2 className=" my-2">All Data</h2>
        <div className="my-2">
          {users &&
            users.map((ele) => (
              <div key={ele.id} className="card my-2 ">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.gender}</p>
                  <button className="card-link" onClick={()=> [setId(ele.id), setShowPopUp(true)]}>
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">                     
                    Edit
                  </Link>
                  <Link onClick={()=> dispatch(deleteUser(ele.id))} className="card-link">
                    Delete
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Read;
