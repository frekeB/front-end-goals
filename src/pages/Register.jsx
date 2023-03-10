import { useState } from "react";
import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify' 
import { FaUser } from "react-icons/fa";
import{register} from '../features/auth/authSlice'


function Register() {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()



  const onChange = (e) => {
    SetFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

//check for password match

    if(password !== password2){
      toast.error('Password Do not match')
    }else{
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
    toast.success('You have successfully registered')

      setTimeout(()=>{
        navigate("/login")
      }, 2000)
   
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p> Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form control"
              id="name"
              name="name"
              value={name}
              placeholder="John Doe"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form control"
              id="email"
              name="email"
              value={email}
              placeholder="Example@email."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
