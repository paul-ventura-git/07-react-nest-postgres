import React from 'react'
import { useEffect, useState } from "react"

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

        <h1>Products</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Brand</th>
              <th scope="col">Is Active</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">

            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.isActive ? "Active" : "No active"}</td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      )}
    </div>
  )
}

export default CrudProduct