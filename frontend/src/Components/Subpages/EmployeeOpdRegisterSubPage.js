import React, { useState } from 'react'

export default function EmployeeOpdRegisterSubPage() {

  const [patientName, setPatientName] = useState('')
  const [age, setAge] = useState()
  const [sex, setSex] = useState('')
  const [UMID, setUMID] = useState()
  const [city, setCity] = useState('')
  const [contact, setContact] = useState()
  const [doctor, setDoctor] = useState('')
  const [opAmount, setOpAmount] = useState()


  const handlePatientName = (e) => {
    setPatientName(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleSex = (e) => {
    setSex(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleContact = (e) => {
    setContact(e.target.value)
  }

  const handleDoctor = (e) => {
    const doctor = e.target.value
    setDoctor(doctor)
    if(doctor === 'Amba Prasad') {
      setOpAmount(200)
    }
    else if(doctor === 'Anusha') {
      setOpAmount(300)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = []
    temp.push(patientName, age, sex, UMID, city, contact, doctor, opAmount)
    console.log(temp)
  }


  return (
    <div className='container'>
      <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Patient name</label>
          <input type="text" class="form-control" id="validationCustom01" value={patientName} onChange={handlePatientName}  required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-2">
          <label for="validationCustom02" class="form-label">Age</label>
          <input type="number" class="form-control" id="validationCustom02" value={age} onChange={handleAge} required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-2">
          <label for="validationCustom07" class="form-label">Sex</label>
          <select class="form-select" id="validationCustom07" value={sex} onChange={handleSex} required>
            <option selected disabled value=''>Choose...</option>
            <option value='Male' >Male</option>
            <option value='Female' >Female</option>
            <option value='Others' >Others</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom04" class="form-label">UMID No</label>
          <div class="input-group has-validation">
            <input type="number" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend" value={UMID} readOnly />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">City</label>
          <input type="text" class="form-control" id="validationCustom05" value={city} onChange={handleCity} required />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom06" class="form-label">Contact no.</label>
          <input type="number" class="form-control" id="validationCustom06" value={contact} onChange={handleContact} required />
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom07" class="form-label">Doctor</label>
          <select class="form-select" id="validationCustom07" value={doctor} onChange={handleDoctor} required>
            <option selected disabled value="">Choose...</option>
            <option value='Amba Prasad'>Dr. Amba Prasad</option>
            <option value='Anusha'>Dr. Anusha</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom08" class="form-label">OP amount</label>
          <input type="number" class="form-control" id="validationCustom08" value={opAmount} readOnly />
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-primary" id='submit-button' type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}
