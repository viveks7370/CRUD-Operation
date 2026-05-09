import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


function Create() {
  const navigate = useNavigate();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [contact,setContact] = useState();
  const [age,setAge] = useState();

  const studentData = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:4001/create',{name,email,contact,age})
    .then(result => {
      console.log(result);
      navigate('/');

    }
  )
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
    <div className='w-75 rounded bg-white p-4'>
    <Link className='btn btn-primary' to='/'>Home</Link>
  <form onSubmit={studentData}>
  <div class="mb-3 mt-3">
    <label className="form-label">Name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div class="mb-3">
    <label className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div class="mb-3">
    <label className="form-label">Contact:</label>
    <input type="text" className="form-control" id="contact" placeholder="Enter Contact" name="contact" onChange={(e)=>setContact(e.target.value)} />
  </div>

  <div class="mb-3">
    <label className="form-label">Age:</label>
    <input type="number" className="form-control" id="age" placeholder="Enter Age" name="age" onChange={(e)=>setAge(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
</div>
  )
}

export default Create