import React from 'react'

function FormModalNewProduct() {
  return (
    <div className="modal fade" id="idModalNewProduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content px-4 py-4">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add new product</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Title:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Description:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Category:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Brand:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Stock:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Price:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Image:</label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModalNewProduct