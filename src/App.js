import './App.css';
import { useState, useEffect } from "react";


function App() {
 
  let initialValues = { username: "", email: "", password: "" };
  let [formValues, setFormValues] = useState(initialValues);
  let [formErrors, setFormErrors] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);
  let [focused, setFocused] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  let validate = (values) => {
    let errors = {};
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (values.username.length < 3) {
      errors.username = "Username must be more than 3 characters";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } 
    return errors;
  };

  let focusHandler=(e)=>{
setFocused(true);
  }
  


    return ( < >
       

        <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 ">Login Form</h1>
        <div className="ui divider">
        <div className="ui form">
          <div className="field ">
            <label for="name" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              id="name"
              className="form-control"
              onBlur={focusHandler} focused={focused.toString()}
              
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label for="email" className="form-label">Email</label><br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              id="email"
              className="form-control"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label for="passward" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              id="passward"
              className="form-control"
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid  btn btn-primary">Login</button>
        </div>
        </div>
      </form>
    </div>
     

        </>

    );
}

export default App;