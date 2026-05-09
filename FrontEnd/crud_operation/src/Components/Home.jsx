import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
function Home() {
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4001/')
        .then(result => setStudents(result.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
        <div className='w-75 rounded bg-white p-4'>
            
            <Link className='btn btn-primary' to='/create'>Add User</Link>
            <table className='table bordered table-hover'>
                <thead> 
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => 
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.contact}</td>
                        <td>{student.age}</td>
                        <td>
                        <Link className='btn btn-primary' to={`/update/${student._id}`}>Edit</Link>
                        <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home