import React, { useState } from 'react'

export default function EmployeeDressingSubPage() {

  const [UMID, setUMID]  = useState()
  const [dressingType, setDressingType] = useState('')
  const [dressingAmount, setDressingAmount] = useState()
  const [open, setOpen] = useState(false)

  const handleDressing = (e) => {
    const dressing = e.target.value
    setDressingType(dressing)
    if(dressing === 'Major'){setDressingAmount(500)}
    else if(dressing === 'Minor'){setDressingAmount(100)}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (open === false)?setOpen(true):setOpen(false)
  }
  
  const handleSubmitDressing = (e) => {
    e.preventDefault();
    let temp = [{A:1}]
    temp.push({dressingType : dressingAmount})
    console.log(temp)
  }

  return (
      <div id='dressing'>
        <div className='container'>
          <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label">UMID No</label>
              <div class="input-group has-validation">
                <input type="number" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" value={UMID} required />
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5 text-center">
              <button class="btn btn-primary" id='submit-button' type="submit">Submit form</button>
            </div>
          </form>
        </div>

        {open && <div>
          <div className='page-container mt-5 for-dressing'>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label">Patient name</label>
              <div class="input-group has-validation">
                <input type="number" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" value={UMID} readOnly />
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label">Doctor name</label>
              <div class="input-group has-validation">
                <input type="number" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" value={UMID} readOnly />
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className='page-container mt-5 for-dressing'>
            <form class="row g-3 needs-validation" onSubmit={handleSubmitDressing} novalidate>
              <div class="col-md-5">
                <label for="custom-select" class="form-label">Dressing</label>
                <select class="form-select" id="custom-select" value={dressingType} onChange={handleDressing} required>
                  <option selected disabled value=''>Choose...</option>
                  <option value='Major' >Major Dressing</option>
                  <option value='Minor' >Minor Dressing</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom08" class="form-label">Dressing amount</label>
                <input type="number" class="form-control" id="validationCustom08" value={dressingAmount} readOnly />
                <div class="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div class="col-md-3 mt-5 text-center">
                <button class="btn btn-primary" id='submit-button' type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>}
      </div>
  )
}
