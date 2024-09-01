import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Access() {

  const {register,handleSubmit, formState:{ errors}} = useForm()
  const mysubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(mysubmit)}>

    <div className='container mt-5 signupbg  '>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 border shadow p-3 '>
                <img src='img/logoc.png' alt='logo'></img>
            
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  {...register("email",{ required: true})}/>
    {errors.email && <div className="form-text text-danger">We'll never share your email & password with anyone else.</div>}
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" {...register("pass",{ required: true})} />
    {errors.pass &&  <div className="form-text text-danger">We'll never share your email & password with anyone else.</div>} 
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {/* <Link className="btn btn-outline-success " to="/" >Login</Link> */}
  <button type='submit' className='btn btn-primary'>Login</button>

  <hr/>
  <Link className="btn btn-warning " to="/signup" >Create your  account</Link>


            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
    </form>
  )
}

export default Access