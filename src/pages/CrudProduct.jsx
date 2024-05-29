import React from 'react'
import { useEffect, useState } from "react"

import { FaEdit, FaTrash, FaEye, FaPlusSquare } from "react-icons/fa";

import FormModalNewProduct from '../components/FormModalNewProduct';

function CrudProduct() {
  const [products, setProducts] = useState([])
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

    fetch("http://localhost:3000/product", requestOptions)
      .then(response => response.json())
      .then(json => setProducts(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="CrudProduct">
      {loading ? (
        <div>Loading...</div>
      ) : (
      
      <div className='container'>

        <div className="row container">
          <div className="col">
            <h2>Products <b>Details</b></h2>
          </div>
          <div className="col text-end pt-1">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idModalNewProduct">
              <FaPlusSquare className='mb-1 mx-1'></FaPlusSquare> Add New
            </button>
          </div>
          <FormModalNewProduct></FormModalNewProduct>
        </div>
        <table className="table">
          <thead className='text-center'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Brand</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody className="table-group-divider text-center">

            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.isActive ? "Yes" : "No"}</td>
                <td style={{minWidth: "150px"}}>
                  <a className="view mx-2" title="View" data-toggle="tooltip"><FaEye></FaEye></a>
                  <a className="edit mx-2" title="Edit" data-toggle="tooltip"><FaEdit></FaEdit></a>
                  <a className="delete mx-2" title="Delete" data-toggle="tooltip"><FaTrash></FaTrash></a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="/">Previous</a></li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>
            <li className="page-item"><a className="page-link" href="/">2</a></li>
            <li className="page-item"><a className="page-link" href="/">3</a></li>
            <li className="page-item"><a className="page-link" href="/">Next</a></li>
          </ul>
        </nav>
      </div>

      )}
    </div>
  )
}

export default CrudProduct