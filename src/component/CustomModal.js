import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux'

function CustomModal({id, showPopUp, setShowPopUp}) {

    const allUsers = useSelector((state) => state.app.users )
    const singleUser = allUsers.filter((ele)=> ele.id === id)

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <button onClick={() => setShowPopUp(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h6>{singleUser[0].email}</h6>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
        </div>
    </div>
  )
}

export default CustomModal