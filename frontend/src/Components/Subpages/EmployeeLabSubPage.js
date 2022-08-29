import React, { useState } from 'react'
import Select from 'react-select'
// import { colourOptions } from '../data';

const options = [
  {value:'cbp', label:'cbp'},
  {value:'cue', label:'cue'},
  {value:'electrolyte', label:'electrolite'},
]

export default function EmployeeLabSubPage() {

  const [UMID, setUMID]  = useState()
  const [open, setOpen] = useState(false)
  const [labAmount, setLabAmount] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    (open === false)?setOpen(true):setOpen(false)
  }

  const handleSubmitLab = (e) => {
    
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
          <form class="row g-3 needs-validation" onSubmit={handleSubmitLab} novalidate>
          <div class="col-md-4">
                <label for="validationCustom08" class="form-label">Lab amount</label>
                <input type="number" class="form-control" id="validationCustom08" value={labAmount} readOnly />
                <div class="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
        <Select
          placeholder='search test...'
          isMulti
          options={options}
        />
        </form>
        </div>
      </div>}
    </div>
  )
}
