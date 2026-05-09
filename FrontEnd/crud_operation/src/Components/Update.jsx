import React, {useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';


function Update() {
  const {id} = useParams();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [contact,setContact] = useState('');
  const [age,setAge] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:4001/fetchData/'+id)
    .then(result => {
      console.log(result.data)
      setName(result.data.name)
      setEmail(result.data.email)
      setContact(result.data.contact)
      setAge(result.data.age)
    }
  )
  .catch(err => console.log(err))
},[])




  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
    <div className='w-75 rounded bg-white p-4'>
    <Link className='btn btn-primary' to='/'>Home</Link>
  <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label className="form-label">Name:</label>
    <input type="text" className="form-control" value={name} id="name" name="name" />
  </div>
  <div className="mb-3">
    <label className="form-label">Email:</label>
    <input type="email" className="form-control" value={email} id="email"  name="email" />
  </div>

  <div className="mb-3">
    <label className="form-label">Contact:</label>
    <input type="text" className="form-control" value={contact} id="contact" name="contact" />
  </div>

  <div className="mb-3">
    <label className="form-label">Age:</label>
    <input type="number" className="form-control" value={age} id="age" name="age" />
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div>
</div>
  )
}

export default Update