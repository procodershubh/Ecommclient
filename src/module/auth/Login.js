import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {

    const usenav = useNavigate();


    const [userlogin, usersetlogin] = useState({
        email: "",
        pass: "",
        check: false,

    });

    const updateinput = (e) => {
        const { name, value, type, checked } = e.target;
        usersetlogin((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const mylogin = async () => {

        const { email, pass, check } = userlogin;
        if (email === "" || pass === "") {
            toast.warning("email or password is blank");

        }
        else if (!check) {
            toast.warning("You must agree to the terms and conditions");
            return;
        }

        try {       

            const mydata = await fetch(`${backendurl}/mylogin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, pass
                })
            });
            const res = await mydata.json();
            console.log(res); // Debugging line



            if (res.status === 422) {

                const fullname = res.fullname || 'User';
                localStorage.setItem('fullname', fullname);

                toast.success(`Welcome, ${res.fullname || 'User'}`);
                setTimeout(() => {
                    usenav('/Home');

                }, 2000);

            }
            else if (res.status === 408) {
                toast.error(res.message || "Invalid email or password");
            }
            else if (res.status === 401) {
                toast.warning("Incorrect Password");

            }
            else if (res.status === 500) {
                alert("Internal server error");
                toast.error(res.message || "Internal server error");

            }
        }
        catch (error) {
            toast.error("Failed to connect to the server");
            console.error("Error:", error);
        }

    }




    return (
        <form >

            <div className='container-fluid  ' style={{ backgroundImage: 'url(img/home.jpg)', backgroundSize: '100% 100%', height: '100vh' }}>
                <div className='row  '>
                    <div className='col-md-6'></div>
                    <div className='col-md-4 border shadow p-3 ' style={{ marginTop: '100px' }}>
                        <img src='img/logoc.png' alt='logo'></img>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' onChange={updateinput} />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='pass' onChange={updateinput} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" name="check" onChange={updateinput} checked={userlogin.check} />


                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <input type='button' value="submit" className='btn btn-success' onClick={mylogin} />

                        <hr />
                        <Link className="btn btn-warning " to="/signup" >Create your  account</Link>


                    </div>
                    <div className='col-md-2'>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login