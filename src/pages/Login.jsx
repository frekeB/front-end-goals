import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {login, reset} from "../features/auth/authSlice"
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {email, password} = formData;

  const onChange = (e) => {
    SetFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

      const userData = {
        email,
        password,
      }
      dispatch(login(userData))

      navigate("/")
    }
  

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p> Login and Start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
        
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
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
