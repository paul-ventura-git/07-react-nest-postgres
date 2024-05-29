import React from 'react'
import { useEffect, useState } from "react"

import { FaEdit, FaTrash, FaEye, FaPlusSquare } from "react-icons/fa";

import FormModalNewUser from '../components/FormModalNewUser';

function CrudUser() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)

    let my_key = process.env.REACT_APP_ACCESS_TOKEN;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+my_key);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:3000/user", requestOptions)
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="CrudUser">   
      <FormModalNewUser></FormModalNewUser>   
      {loading ? (
        <div>Loading...</div>
      ) : (
      
      <div className='container'>
        <div className="row container">
          <div className="col">
            <h2>Users <b>Details</b></h2>
          </div>
          <div className="col text-end pt-1">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idModalNewUser">
              <FaPlusSquare className='mb-1 mx-1'></FaPlusSquare> Add New
            </button>
          </div>
          <FormModalNewUser className="modal"></FormModalNewUser>
        </div>
        <table className="table">
          <thead className='text-center'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Is Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody className="table-group-divider text-center">

            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "No active"}</td>
                <td>
                  <a className="view mx-2" title="View" data-toggle="tooltip"
                    ><FaEye></FaEye></a>
                  <a className="edit mx-2" title="Edit" data-toggle="tooltip"
                    ><FaEdit></FaEdit></a>
                  <a className="delete mx-2" title="Delete" data-toggle="tooltip"
                    ><FaTrash></FaTrash></a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      )}
    </div>
  )
}

export default CrudUser