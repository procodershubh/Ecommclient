import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const sredirect = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mysubmit = (data, event) => {
    event.preventDefault();
    console.log(data);

    sredirect("/login");
  };

  return (
    <form onSubmit={handleSubmit(mysubmit)}>
      <div className='container-fluid signupbg'  style={{ backgroundImage: 'url(img/home.jpg)', backgroundSize: '100% 100%', height: '100vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 border p-3 shadow'>
              <img src='img/logoc.png' alt='logo' />
              <hr />
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" {...register("fullname", { required: true })} />
                {errors.fullname && <div className="form-text text-danger">Please enter your full name.</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email", { required: true })} />
                {errors.email && <div className="form-text text-danger">Please enter a valid email address.</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label">Mobile no.</label>
                <input type="text" className="form-control" {...register("mobileno", { required: true })} />
                {errors.mobileno && <div className="form-text text-danger">Please enter your mobile number.</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="passw" className="form-label">Password</label>
                <input type="password" className="form-control" {...register("passw", { required: true })} />
                {errors.passw && <div className="form-text text-danger">Please enter a password.</div>}
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register("checkboxx",{required: true})} />
                {errors.checkboxx &&  <div className="form-text text-danger">Please verify you are not a robot.</div>} 

                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type='submit' className='btn btn-primary'>Signup</button>
              <Link className="btn btn-danger ms-3" to="/login">Back to Login</Link>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
